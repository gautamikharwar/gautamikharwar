import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import WorkCarouselCard from "@/components/home/WorkCarouselCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { projects } from "@/data/projects";

export default function WorkHighlights() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-surface">
      <Container className="py-20 md:py-28">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
        </Reveal>

        {featured.length > 0 ? (
          <StaggerGroup className="mt-12 flex flex-col gap-6">
            {featured.map((project) => (
              <StaggerItem key={project.slug}>
                <WorkCarouselCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : (
          <div className="mt-12 rounded-none border border-dashed border-border p-12 text-center text-sm text-muted">
            Case studies coming soon.
          </div>
        )}

        <Reveal delay={0.1} className="mt-10">
          <Button href="/work" variant="secondary" icon={<ArrowRight size={16} />}>
            See all work
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
