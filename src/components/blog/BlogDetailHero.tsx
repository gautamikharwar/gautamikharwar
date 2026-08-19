import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import type { BlogPost } from "@/data/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogDetailHero({ post }: { post: BlogPost }) {
  return (
    <section>
      <Container className="py-16 md:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <Reveal delay={0.05} className="mt-8 flex flex-col gap-4">
          <span className="rounded-none border border-border px-2.5 py-1 text-xs font-medium w-fit">
            {post.category}
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
