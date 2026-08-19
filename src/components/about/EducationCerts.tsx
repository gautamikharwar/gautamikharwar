import { GraduationCap, BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { education, certifications } from "@/data/resume";

export default function EducationCerts() {
  return (
    <section>
      <Container className="grid gap-14 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Education</h2>
          <div className="mt-6 flex flex-col gap-6">
            {education.map((item) => (
              <div key={item.degree} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-surface">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 text-xs text-muted">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Certifications</h2>
          <div className="mt-6 flex flex-col gap-6">
            {certifications.map((item) => (
              <div key={item.name} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-surface">
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                  <p className="mt-1 text-xs text-muted">Credential ID: {item.credentialId}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
