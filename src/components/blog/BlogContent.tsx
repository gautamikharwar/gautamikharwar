import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import type { BlogPost } from "@/data/blog";

export default function BlogContent({ post }: { post: BlogPost }) {
  return (
    <section>
      <Container className="py-16 md:py-20">
        <Reveal>
          {post.coverImage ? (
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-none bg-surface">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
            </div>
          ) : (
            <div className="mb-10 flex aspect-[16/9] w-full items-center justify-center rounded-none border border-dashed border-border bg-surface text-sm text-muted">
              Cover image coming soon — add under /public/images/blog/{post.slug}/
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <article className="mx-auto flex max-w-2xl flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
