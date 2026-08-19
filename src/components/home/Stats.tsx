import Container from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { stats } from "@/data/resume";

export default function Stats() {
  return (
    <section>
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
