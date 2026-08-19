import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { faq } from "@/data/faq";

export default function FAQ() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Common questions.</h2>
        </Reveal>

        <StaggerGroup className="mt-14 flex flex-col">
          {faq.map((item) => (
            <StaggerItem key={item.question} className="border-t border-border py-8 first:border-t-0">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
