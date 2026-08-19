import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import Reveal from "@/components/motion/Reveal";
import { profile } from "@/data/resume";

export default function AboutIntro() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">About</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Hi, I&apos;m Gautami.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">{profile.summary}</p>

          <p className="mt-10 text-xs font-medium uppercase tracking-wide text-muted">Find me on</p>
          <SocialLinks className="mt-3" />
        </Reveal>
      </Container>
    </section>
  );
}
