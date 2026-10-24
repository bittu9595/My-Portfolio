import { createFileRoute } from "@tanstack/react-router";
import { experience, profile, skills } from "@/lib/profile";
import { PageTitle, Window } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About & skills — ${profile.name}` },
      { name: "description", content: profile.bio },
      { property: "og:title", content: `About & skills — ${profile.name}` },
      { property: "og:description", content: profile.bio },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <PageTitle cmd="cat about.md" title="About" />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
        <div className="space-y-8">
          <p className="text-2xl leading-relaxed rise">{profile.bio}</p>
          <Window title="experience.log" className="rise">
            <ul className="font-mono text-sm space-y-4">
              {experience.map((e) => (
                <li key={e.when} className="grid grid-cols-[8.5rem_1fr] gap-3">
                  <span className="text-muted-foreground">{e.when}</span>
                  <span>
                    {e.what} <span className="text-primary">@ {e.where}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Window>
        </div>
        <Window title="htop --skills" className="rise [animation-delay:150ms]">
          <div className="space-y-6 font-mono text-sm">
            {skills.map((g) => (
              <div key={g.group}>
                <p className="text-signal mb-2">[{g.group}]</p>
                <ul className="space-y-2">
                  {g.items.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-2 rounded bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${s.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Window>
      </div>
    </div>
  );
}
