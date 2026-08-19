import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function BlogIntro() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Blog</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Notes on UX, UI, branding, and AI.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            Writing on the craft and process behind product design — what I&apos;m learning while shipping
            real screens.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
