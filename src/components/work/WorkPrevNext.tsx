import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import type { Project } from "@/data/projects";

export default function WorkPrevNext({ prev, next }: { prev: Project; next: Project }) {
  return (
    <section>
      <Container className="py-10 md:py-14">
        <Reveal className="grid gap-4 md:grid-cols-2">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex items-center gap-4 rounded-none border border-border p-6 transition-colors hover:border-foreground md:p-8"
          >
            <ArrowLeft size={20} className="shrink-0 transition-transform group-hover:-translate-x-1" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Previous project</p>
              <p className="mt-2 text-xl font-semibold">{prev.title}</p>
            </div>
          </Link>

          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-4 rounded-none border border-border p-6 text-right transition-colors hover:border-foreground md:p-8"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Next project</p>
              <p className="mt-2 text-xl font-semibold">{next.title}</p>
            </div>
            <ArrowRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
