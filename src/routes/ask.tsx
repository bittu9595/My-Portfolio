import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";
import { askPortfolio } from "@/lib/ask.functions";
import { profile } from "@/lib/profile";
import { PageTitle, Window } from "@/components/SiteShell";

export const Route = createFileRoute("/ask")({
  head: () => ({
    meta: [
      { title: `Ask AI about ${profile.name}` },
      { name: "description", content: `Chat with an AI that knows ${profile.name}'s work, skills and experience.` },
      { property: "og:title", content: `Ask AI about ${profile.name}` },
      { property: "og:description", content: `Chat with an AI that knows ${profile.name}'s work and skills.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ask,
});

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = ["What are their strongest skills?", "Which project best shows their design work?", "Are they open to new roles?"];

function Ask() {
  const ask = useServerFn(askPortfolio);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (!busy) inputRef.current?.focus();
  }, [messages, busy]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const { reply } = await ask({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <PageTitle cmd="./ask.ai --about me" title="Ask me anything" />
      <Window title={`${profile.handle}-assistant — interactive`} className="font-mono text-sm">
        <div className="min-h-[320px] max-h-[55vh] overflow-y-auto space-y-5">
          {messages.length === 0 && (
            <div>
              <p className="text-muted-foreground">I know {profile.name.split(" ")[0]}'s projects, skills and experience. Try:</p>
              <div className="mt-4 flex flex-col gap-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="text-left rounded-md border px-3 py-2 hover:border-primary hover:text-primary transition-colors">
                    → {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex justify-end">
                <p className="max-w-[85%] rounded-md bg-primary text-primary-foreground px-3 py-2">{m.content}</p>
              </div>
            ) : (
              <p key={i} className="whitespace-pre-wrap leading-relaxed">
                <span className="text-primary">❯ </span>{m.content}
              </p>
            ),
          )}
          {busy && <p className="text-muted-foreground cursor-blink">thinking</p>}
          <div ref={endRef} />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="mt-5 flex items-center gap-2 border-t pt-4">
          <span className="text-primary">$</span>
          <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} maxLength={2000}
            placeholder="type a question…" aria-label="Your question"
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground" />
          <button type="submit" disabled={busy || !input.trim()}
            className="rounded-md bg-primary text-primary-foreground px-4 py-1.5 font-semibold disabled:opacity-40">
            send
          </button>
        </form>
      </Window>
    </div>
  );
}
