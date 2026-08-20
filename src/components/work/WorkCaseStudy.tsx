import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { renderBold } from "@/lib/markdown-bold";
import type { CaseStudy } from "@/data/projects";

function MediaPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-base border border-dashed border-border bg-surface p-6 text-center text-sm text-muted">
      {caption}
    </div>
  );
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{children}</h2>;
}

export default function WorkCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  const { problem, myRole, process, workingWithDevelopers, result, closingLine, liveUrl, liveUrlLabel } =
    caseStudy;

  return (
    <section>
      <Container className="flex flex-col gap-16 py-10 md:gap-20 md:py-14">
        {liveUrl && (
          <Reveal>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted"
            >
              Live site: {liveUrlLabel ?? liveUrl}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        )}

        <StaggerGroup className="grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <StaggerItem className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-muted">The Problem</h2>
            <div className="flex flex-col gap-3">
              {problem.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/90">
                  {renderBold(paragraph)}
                </p>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-muted">My Role</h2>
            <p className="text-sm leading-relaxed text-foreground/90">{renderBold(myRole)}</p>
          </StaggerItem>
        </StaggerGroup>

        <div className="flex flex-col gap-12 border-t border-border pt-10 md:gap-16">
          <Reveal>
            <SectionHeading>How I worked</SectionHeading>
          </Reveal>

          {process.map((step, i) => (
            <Reveal key={step.title} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold tracking-tight">
                <span className="text-muted">{String(i + 1).padStart(2, "0")}.</span> {step.title}
              </h3>

              <div className="flex max-w-2xl flex-col gap-4">
                {step.body.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-relaxed text-foreground/90">
                    {renderBold(paragraph)}
                  </p>
                ))}

                {step.list && (
                  <ul className="flex flex-col gap-2">
                    {step.list.map((item, k) => (
                      <li key={k} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                        <span className="text-muted">–</span>
                        <span>{renderBold(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {step.imagePlaceholder && <MediaPlaceholder caption={step.imagePlaceholder} />}
            </Reveal>
          ))}
        </div>

        {workingWithDevelopers && (
          <div className="flex flex-col gap-6 border-t border-border pt-10">
            <Reveal>
              <SectionHeading>How I work with developers</SectionHeading>
            </Reveal>
            <Reveal delay={0.05} className="flex max-w-2xl flex-col gap-4">
              {workingWithDevelopers.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/90">
                  {renderBold(paragraph)}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <MediaPlaceholder caption={workingWithDevelopers.videoPlaceholder} />
            </Reveal>
          </div>
        )}

        <div className="flex flex-col gap-6 border-t border-border pt-10">
          <Reveal>
            <SectionHeading>The result</SectionHeading>
          </Reveal>
          {result.length > 1 ? (
            <StaggerGroup className="flex max-w-2xl flex-col gap-3">
              {result.map((item, i) => (
                <StaggerItem key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{renderBold(item)}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <Reveal>
              <p className="max-w-2xl text-sm leading-relaxed text-foreground/90">{renderBold(result[0])}</p>
            </Reveal>
          )}
        </div>

        {closingLine && (
          <Reveal className="border-t border-border pt-10">
            <p className="max-w-2xl text-base italic leading-relaxed text-muted">{closingLine}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
