import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { experience, profile, projects, skills } from "./profile";

const schema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(30),
});

export const askPortfolio = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const { generateResponse, GatewayError } = await import("@lovable.dev/ai-gateway");
    const context = JSON.stringify({ profile, skills, projects, experience });
    try {
      const res = await generateResponse({
        model: "openai/gpt-6-astra",
        instructions: `You are the portfolio assistant for ${profile.name}. Answer visitors' questions (often recruiters) about ${profile.name} in a friendly, concise way (max ~120 words), in third person, as plain text with no markdown symbols. Only use facts from this data; if something isn't covered, say so and suggest emailing ${profile.email}. Data: ${context}`,
        input: data.messages.map((m) => ({ role: m.role, content: m.content })),
      });
      const parts: string[] = [];
      for (const item of res.output ?? []) {
        if (item.type !== "message") continue;
        for (const c of item.content as Array<{ type: string; text?: string }>) {
          if (c.type === "output_text" && c.text) parts.push(c.text);
        }
      }
      const text = parts.join("").trim();
      return { reply: text || "Sorry, I couldn't come up with an answer." };
    } catch (e) {
      if (e instanceof GatewayError) {
        console.error("AI error", e.code, e.httpStatus);
        return { reply: "The assistant is unavailable right now — please try again shortly." };
      }
      throw e;
    }
  });
