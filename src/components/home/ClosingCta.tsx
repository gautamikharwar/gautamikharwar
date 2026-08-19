import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { profile } from "@/data/resume";

export default function ClosingCta() {
  return (
    <section>
      <Container className="flex flex-col items-center gap-6 py-24 text-center md:py-32">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-base font-semibold text-background">
          GK
        </span>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Have a product that needs thoughtful design?
        </h2>
        <p className="max-w-md text-sm text-muted">
          Currently open to select freelance and full-time opportunities. Let&apos;s talk about what
          you&apos;re building.
        </p>
        <Button href={`mailto:${profile.email}`} icon={<Mail size={16} />}>
          Get in touch
        </Button>
      </Container>
    </section>
  );
}
