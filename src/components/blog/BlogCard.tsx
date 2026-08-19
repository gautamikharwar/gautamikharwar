import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-base border border-border bg-background transition-colors hover:border-foreground"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-border">
            <span className="text-sm text-muted">{post.category}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="rounded-pill border border-border px-2.5 py-1 font-medium text-foreground">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="text-sm text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}
