"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectImages } from "@/lib/project-images";

export default function WorkCarouselCard({ project }: { project: Project }) {
  const images = getProjectImages(project.gallery);
  const loopImages = [...images, ...images];

  return (
    <div className="flex flex-col overflow-hidden rounded-base border border-border bg-background">
      <div className="relative h-96 w-full overflow-hidden bg-surface">
        <motion.div
          className="flex h-full w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="relative h-full w-64 shrink-0 border-r border-border bg-surface last:border-r-0"
            >
              {src ? (
                <Image src={src} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-muted">
                  {project.company}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4 border-t border-border p-5">
        <div className="flex max-w-[720px] flex-col gap-3">
          <div className="flex flex-wrap items-baseline gap-1.5 text-lg">
            <h3 className="inline font-semibold leading-snug">{project.company}</h3>
            <span className="text-muted">, {project.role}, {project.year}</span>
          </div>
          <p className="text-sm text-muted">{project.summary}</p>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted"
        >
          View details
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
