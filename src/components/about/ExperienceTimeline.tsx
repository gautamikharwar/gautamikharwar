import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { experience } from "@/data/resume";

export default function ExperienceTimeline() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Experience</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Where I&apos;ve worked.</h2>
        </Reveal>

        <StaggerGroup className="mt-14 flex flex-col">
          {experience.map((role) => (
            <StaggerItem
              key={`${role.company}-${role.period}`}
              className="grid gap-4 border-t border-border py-10 first:border-t-0 md:grid-cols-[1fr_2fr]"
            >
              <div>
                <h3 className="text-lg font-semibold">{role.role}</h3>
                <p className="mt-1 text-sm text-muted">{role.company}</p>
                <p className="mt-1 text-xs text-muted">{role.period}</p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
