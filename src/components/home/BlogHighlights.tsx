import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/blog/BlogCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { posts } from "@/data/blog";

export default function BlogHighlights() {
  const featured = posts.slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section>
      <Container className="py-20 md:py-28">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">From the blog</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Notes on UX, UI, branding, and AI.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Writing on the craft and process behind product design — what I&apos;m learning while shipping
            real screens.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-10">
          <Button href="/blog" variant="secondary" icon={<ArrowRight size={16} />}>
            Read the blog
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
