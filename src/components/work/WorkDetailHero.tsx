import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import type { Project } from "@/data/projects";

export default function WorkDetailHero({ project }: { project: Project }) {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <Reveal delay={0.05} className="mt-8 flex flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            {project.company} · {project.role}
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-base text-muted md:text-lg">{project.summary}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-none border border-border bg-surface px-3 py-1.5 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 flex flex-wrap gap-8 border-t border-border pt-8">
          {project.metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
              <p className="mt-1 text-sm text-muted">{metric.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
