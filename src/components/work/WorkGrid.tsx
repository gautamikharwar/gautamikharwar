import Container from "@/components/ui/Container";
import WorkListSection from "@/components/work/WorkListSection";
import { projects } from "@/data/projects";

export default function WorkGrid() {
  return (
    <section>
      <Container className="pb-20 md:pb-28">
        {projects.length > 0 ? (
          <div className="flex flex-col">
            {projects.map((project) => (
              <WorkListSection key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-base border border-dashed border-border p-12 text-center text-sm text-muted">
            Case studies coming soon.
          </div>
        )}
      </Container>
    </section>
  );
}
