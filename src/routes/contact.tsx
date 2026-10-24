import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/profile";
import { PageTitle } from "@/components/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      { name: "description", content: `Get in touch with ${profile.name}.` },
      { property: "og:title", content: `Contact — ${profile.name}` },
      { property: "og:description", content: `Get in touch with ${profile.name}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { k: "email", v: profile.email, href: `mailto:${profile.email}` },
    { k: "mobile", v: profile.phone, href: `tel:${profile.phone}` },
    { k: "github", v: profile.links.github, href: profile.links.github },
    { k: "linkedin", v: profile.links.linkedin, href: profile.links.linkedin },
  ];
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <PageTitle cmd="ping me" title="Let's talk." />
      <a href={`mailto:${profile.email}`} className="block text-3xl md:text-6xl font-bold text-primary hover:text-accent transition-colors break-all rise">
        {profile.email}
      </a>
      <ul className="mt-14 border-t font-mono">
        {rows.map((r) => (
          <li key={r.k} className="border-b">
            <a href={r.href} target="_blank" rel="noreferrer" className="grid grid-cols-[7rem_1fr] py-5 px-2 hover:bg-secondary/40 transition-colors">
              <span className="text-muted-foreground">{r.k}</span>
              <span className="truncate hover:text-primary">{r.v}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
