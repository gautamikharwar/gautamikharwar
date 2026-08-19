import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Getting into product discussions early — the users, the constraints, and what success actually looks like before a single screen gets drawn.",
    progress: 35,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes to high-fidelity screens, backed by a scalable design system — built in Figma, informed by real user testing.",
    progress: 75,
  },
  {
    number: "03",
    title: "Ship",
    description:
      "Working closely with engineering through implementation — UI specs, QA against design intent, and AI-assisted design-to-code where it speeds things up.",
    progress: 100,
  },
];

export default function Process() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">The approach</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          A simple process, built for shipped work.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="text-sm font-medium text-muted">{step.number}</span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-foreground"
                  style={{ width: `${step.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
