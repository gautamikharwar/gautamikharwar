import Container from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import type { Project } from "@/data/projects";

export default function WorkStory({ project }: { project: Project }) {
  const sections = [
    { label: "My Role", content: project.myRole },
    { label: "The Problem", content: project.problem },
    { label: "The Solution", content: project.solution },
  ];

  return (
    <section>
      <Container className="py-10 md:py-14">
        <StaggerGroup className="grid gap-10 border-t border-border pt-10 md:grid-cols-3">
          {sections.map((item) => (
            <StaggerItem key={item.label}>
              <h2 className="text-xs font-medium uppercase tracking-wide text-muted">{item.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{item.content}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
