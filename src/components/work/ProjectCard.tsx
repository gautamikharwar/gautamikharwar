import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border transition-colors hover:border-foreground"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-border">
            <span className="text-sm text-muted">{project.company}</span>
          </div>
        )}
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">{project.company}</span>
          <span className="text-xs text-muted">{project.role}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="text-sm text-muted">{project.summary}</p>

        <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-sm font-semibold">{metric.value}</p>
              <p className="text-xs text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
