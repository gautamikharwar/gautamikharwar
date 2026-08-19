import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import type { BlogPost } from "@/data/blog";

export default function NextPost({ post }: { post: BlogPost }) {
  return (
    <section>
      <Container className="py-16 md:py-20">
        <Reveal>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between gap-4 rounded-base border border-border p-6 transition-colors hover:border-foreground md:p-8"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Next post</p>
              <p className="mt-2 text-xl font-semibold">{post.title}</p>
            </div>
            <ArrowRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
