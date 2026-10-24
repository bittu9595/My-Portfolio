import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/lib/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { to: "/", label: "~/home" },
  { to: "/projects", label: "projects" },
  { to: "/about", label: "about" },
  { to: "/ask", label: "ask.ai" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-2 flex flex-wrap items-center justify-between gap-2 font-mono text-sm">
          <Link to="/" className="text-primary font-bold flex items-center gap-2">
            <img src={profile.photo} alt="" className="size-8 rounded-full object-cover border" />
            <span>
            {profile.handle}
            <span className="text-muted-foreground">@portfolio</span>
            </span>
          </Link>
          <ThemeToggle />
          <nav aria-label="Main navigation" className="flex gap-1 overflow-x-auto w-full md:w-auto md:order-none order-last">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors shrink-0"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t font-mono text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-5 h-10 flex items-center justify-between">
          <span>
            <span className="text-primary">●</span> {profile.available ? "open to work" : "busy"} ·{" "}
            {profile.location}
          </span>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </footer>
    </div>
  );
}

export function Window({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`window ${className}`}>
      <div className="flex items-center gap-2 px-4 h-9 border-b bg-muted font-mono text-xs text-muted-foreground">
        <span className="size-2.5 rounded-full bg-destructive" />
        <span className="size-2.5 rounded-full bg-signal" />
        <span className="size-2.5 rounded-full bg-primary" />
        <span className="ml-2 truncate">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function PageTitle({ cmd, title }: { cmd: string; title: string }) {
  return (
    <div className="rise mb-10">
      <p className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">$</span> {cmd}
      </p>
      <h1 className="mt-2 text-5xl md:text-7xl font-bold tracking-tight glow-text">{title}</h1>
    </div>
  );
}
