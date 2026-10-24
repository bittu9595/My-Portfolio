import { ArrowUpRight, Github, ScanLine, Grid2X2, ShoppingBag, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/profile";

const icons = [ScanLine, Grid2X2, ShoppingBag, CreditCard];

export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const Icon = icons[index] ?? Grid2X2;
  return (
    <Reveal>
      <article className={`project-card project-tone-${index % 4} group flex h-full flex-col overflow-hidden rounded-lg border bg-card`}>
        <div className="project-art relative flex h-36 items-center justify-between overflow-hidden border-b px-7" aria-hidden="true">
          <span className="project-number font-mono text-7xl font-bold">{String(index + 1).padStart(2, "0")}</span>
          <Icon className="project-symbol size-16 stroke-1" />
          <span className="absolute bottom-4 left-7 font-mono text-xs text-muted-foreground">{project.slug}</span>
          <span className="absolute right-7 top-4 font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="font-mono text-xs text-muted-foreground">{project.kind}</p>
          <h2 className="mt-3 text-2xl font-bold transition-colors group-hover:text-primary">{project.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => <span key={item} className="rounded-sm bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground">{item}</span>)}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            {project.liveUrl && <Button asChild variant="outline" size="sm"><a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>Live demo<ArrowUpRight /></a></Button>}
            <Button asChild variant="ghost" size="sm"><a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github />Source</a></Button>
            {!project.liveUrl && <span className="font-mono text-[11px] text-muted-foreground">No public deployment listed</span>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}