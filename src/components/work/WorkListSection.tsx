"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import GridDensityToggle, { type Density } from "@/components/work/GridDensityToggle";
import type { Project } from "@/data/projects";

const PLACEHOLDER_COUNT = 8;

const GRID_CLASS: Record<Density, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
};

export default function WorkListSection({ project }: { project: Project }) {
  const [density, setDensity] = useState<Density>(4);

  const images =
    project.gallery.length > 0
      ? project.gallery
      : project.coverImage
        ? [project.coverImage]
        : [];
  const placeholderCount = images.length > 0 ? 0 : PLACEHOLDER_COUNT;

  return (
    <div className="border-t border-border py-10 first:border-t-0 md:py-14">
      <Reveal className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-baseline gap-1.5 text-sm md:text-base">
          <h2 className="inline font-medium">{project.company}</h2>
          <span className="text-muted">, {project.role}, {project.year}</span>
        </div>

        <div className="flex items-center gap-4">
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
          <GridDensityToggle value={density} onChange={setDensity} />
        </div>
      </Reveal>

      <StaggerGroup className={`mt-6 grid gap-1 ${GRID_CLASS[density]}`}>
        {images.length > 0
          ? images.map((src, i) => (
              <StaggerItem key={src + i} className="relative aspect-[4/5] w-full overflow-hidden rounded-base bg-surface">
                <Image src={src} alt={project.title} fill className="object-cover" />
              </StaggerItem>
            ))
          : Array.from({ length: placeholderCount }).map((_, i) => (
              <StaggerItem
                key={i}
                className="flex aspect-[4/5] w-full items-center justify-center rounded-base bg-surface text-xs text-muted"
              >
                {project.company}
              </StaggerItem>
            ))}
      </StaggerGroup>
    </div>
  );
}
