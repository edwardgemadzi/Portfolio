"use client";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

const miniApps = [
  {
    title: "Weather App",
    description: "Live weather search with 5-day forecast, humidity, and wind data from OpenWeatherMap.",
    href: "/projects/weather",
    emoji: "🌤️",
    tech: ["Next.js", "OpenWeatherMap API", "TypeScript"],
  },
  {
    title: "Netflix Clone",
    description: "Pixel-perfect Netflix landing page replica with hero, feature sections, FAQ, and responsive design.",
    href: "/projects/netflix",
    emoji: "🎬",
    tech: ["Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "Bakery Website",
    description: "Full bakery website with product menu, category filters, about section, and contact form.",
    href: "/projects/bakery",
    emoji: "🧁",
    tech: ["Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "Jobs Board",
    description: "Job listing platform with filters, job detail modal, apply form, and post a job functionality.",
    href: "/projects/jobs",
    emoji: "💼",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">// projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Things I&apos;ve built</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From AI-powered document platforms to finance tools — here&apos;s a selection of my work.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
                {project.featured && (
                  <span className="text-xs text-primary font-medium">★ Featured</span>
                )}
              </div>

              <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-1.5 h-8 text-xs"
                    )}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "gap-1.5 h-8 text-xs"
                    )}
                  >
                    <GithubIcon className="w-3 h-3" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Apps section */}
        <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Interactive Mini Apps</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Live demos built into this portfolio — try them out!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {miniApps.map((app) => (
              <Link
                key={app.href}
                href={app.href}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 flex flex-col gap-3"
              >
                <div className="text-3xl">{app.emoji}</div>
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {app.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {app.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {app.tech.slice(0, 2).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
