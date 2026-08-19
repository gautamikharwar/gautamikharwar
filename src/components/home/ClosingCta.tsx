import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { profile } from "@/data/resume";

export default function ClosingCta() {
  return (
    <section className="bg-foreground text-background">
      <Container className="flex flex-col items-center py-24 text-center md:py-32">
        <Reveal className="flex flex-col items-center gap-6">
          <span className="flex h-16 w-16 items-center justify-center rounded-none bg-background text-lg font-semibold text-foreground">
            GK
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Have a product that needs thoughtful design?
          </h2>
          <p className="max-w-md text-sm text-background/70">
            Currently open to select freelance and full-time opportunities. Let&apos;s talk about what
            you&apos;re building.
          </p>
          <Button href={`mailto:${profile.email}`} variant="inverse" icon={<Mail size={16} />}>
            Get in touch
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
