import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkHighlights() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Products shaped screen by screen.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            A look at the platforms and design systems I&apos;ve owned end-to-end, from early product strategy
            through shipped UI.
          </p>
        </div>

        {featured.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted">
            Case studies coming soon.
          </div>
        )}

        <div className="mt-10">
          <Button href="/work" variant="secondary" icon={<ArrowRight size={16} />}>
            See all work
          </Button>
        </div>
      </Container>
    </section>
  );
}
