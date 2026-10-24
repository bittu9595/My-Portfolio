import { createFileRoute } from "@tanstack/react-router";
import { profile, projects } from "@/lib/profile";
import { PageTitle } from "@/components/SiteShell";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${profile.name}` },
      { name: "description", content: `Selected work by ${profile.name}.` },
      { property: "og:title", content: `Projects — ${profile.name}` },
      { property: "og:description", content: `Selected work by ${profile.name}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <PageTitle cmd="ls -la ./projects" title="Projects" />
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </div>
  );
}
