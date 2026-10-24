import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react";
import { profile, projects } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role}` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — ${profile.role}` },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: profile.photo },
      { name: "twitter:image", content: profile.photo },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="relative py-9 md:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b pb-4 font-mono text-xs text-muted-foreground">
          <span><span className="text-primary">$</span> whoami</span>
          <span className="inline-flex items-center gap-2"><span className="status-dot size-2 rounded-full bg-primary" />{profile.available ? "Open to opportunities" : "Currently busy"}</span>
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)_96px] items-start gap-x-5 md:grid-cols-[minmax(0,1fr)_300px] md:items-center md:gap-x-12">
          <div className="rise min-w-0">
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl">{profile.name.split(" ")[0]}<br /><span className="text-primary">{profile.name.split(" ").slice(1).join(" ")}</span><span className="text-signal">.</span></h1>
          </div>
          <figure className="portrait-stage row-span-2 mt-2 md:row-span-3 md:mt-0">
            <img src={profile.photo} alt={`${profile.name} portrait`} className="portrait-image aspect-[4/5] w-full rounded-lg object-cover" fetchPriority="high" />
            <figcaption className="mt-6 hidden items-center justify-between font-mono text-xs text-muted-foreground md:flex"><span className="inline-flex items-center gap-1.5"><MapPin className="size-3" />{profile.location}</span><span className="text-primary">hello, world.</span></figcaption>
          </figure>
          <p className="rise col-start-1 mt-5 text-base font-medium leading-relaxed md:text-xl">{profile.role}</p>
          <div className="rise col-span-2 mt-4 md:col-span-1">
            <p className="max-w-lg text-base leading-7 text-muted-foreground md:text-lg">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-mono"><Link to="/projects">Explore my work<ArrowUpRight /></Link></Button>
              <Button asChild variant="outline" size="lg" className="font-mono"><Link to="/ask">Ask my AI<ArrowUpRight /></Link></Button>
            </div>
            <div className="mt-6 flex gap-2">
              <SocialLink href={profile.links.github} label="GitHub"><Github /></SocialLink>
              <SocialLink href={profile.links.linkedin} label="LinkedIn"><Linkedin /></SocialLink>
              <SocialLink href={`mailto:${profile.email}`} label="Email"><Mail /></SocialLink>
            </div>
          </div>
        </div>
        <div className="hero-rule mt-10 flex items-center justify-between gap-4 border-t pt-5 font-mono text-xs text-muted-foreground md:mt-12">
          <span>{String(projects.length).padStart(2, "0")} projects <span className="mx-2 text-primary">/</span> design + engineering</span>
          <a href="#selected-work" className="inline-flex items-center gap-2 hover:text-primary">Selected work<ArrowDown className="size-4" /></a>
        </div>
      </section>
      <section id="selected-work" className="scroll-mt-24 pb-16 pt-6">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div><p className="font-mono text-xs text-primary">$ ls ./featured</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Selected work</h2></div>
          <Button asChild variant="link" className="px-0 font-mono"><Link to="/projects">All projects<ArrowUpRight /></Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">{projects.slice(0, 2).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <Button asChild variant="ghost" size="icon"><a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>{children}</a></Button>;
}
