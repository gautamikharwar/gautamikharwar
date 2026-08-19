import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function WorkIntro() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Work</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Products shaped screen by screen.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            A look at the platforms and design systems I&apos;ve owned end-to-end, from early product strategy
            through shipped UI.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
