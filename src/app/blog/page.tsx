import type { Metadata } from "next";
import BlogIntro from "@/components/blog/BlogIntro";
import BlogGrid from "@/components/blog/BlogGrid";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing by Gautami Kharwar on UX, UI, branding, and AI-assisted design-to-code and vibe coding workflows.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BlogIntro />
      <BlogGrid />
      <ClosingCta />
    </>
  );
}
