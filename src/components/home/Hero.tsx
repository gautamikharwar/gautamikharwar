import { ArrowRight, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { profile, skills } from "@/data/resume";

const RESUME_PATH = "/resume/Gautami Resume 2026.docx";
const featuredTools = skills["Design Tools"].slice(0, 4);

export default function Hero() {
  return (
    <section>
      <Container className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-none border border-border px-4 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-none bg-accent" />
            Product Design Engineer · Open to new opportunities
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Design that turns product vision into shipped screens.
          </h1>

          <p className="max-w-xl text-base text-muted md:text-lg">{profile.summary}</p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button href="/work" icon={<ArrowRight size={16} />}>
              View my work
            </Button>
            <Button href={RESUME_PATH} variant="secondary" icon={<Download size={16} />} download>
              Download resume
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col justify-between gap-6 rounded-none border border-border bg-surface p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Currently</p>
            <p className="mt-2 text-sm">
              Sole Product Design Engineer at an early-stage AI startup — owning design end-to-end, from
              product strategy to AI-assisted design-to-code delivery.
            </p>
          </div>

          <div className="h-px w-full bg-border" />

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Toolkit</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredTools.map((tool) => (
                <span key={tool} className="rounded-none border border-border bg-background px-3 py-1 text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Based in</p>
            <p className="mt-2 text-sm">{profile.location}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
