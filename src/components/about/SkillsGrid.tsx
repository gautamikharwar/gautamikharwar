import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { skills } from "@/data/resume";

export default function SkillsGrid() {
  const categories = Object.entries(skills);

  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Skills</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">What I bring to a team.</h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items]) => (
            <StaggerItem key={category}>
              <h3 className="text-sm font-semibold">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-none border border-border bg-surface px-3 py-1.5 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
