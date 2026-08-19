import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function WorkDescription({ description }: { description: string }) {
  return (
    <section>
      <Container className="py-10 md:py-14">
        <Reveal>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/90">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
