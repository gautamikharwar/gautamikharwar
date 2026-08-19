"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/blog/BlogCard";
import { posts, type BlogCategory } from "@/data/blog";

const categories: Array<BlogCategory | "All"> = ["All", "UX", "UI", "Branding", "AI"];

export default function BlogGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <section>
      <Container className="py-20 md:py-28">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-pill border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === category
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="mt-10 rounded-base border border-dashed border-border p-12 text-center text-sm text-muted">
            No posts in this category yet.
          </div>
        )}
      </Container>
    </section>
  );
}
