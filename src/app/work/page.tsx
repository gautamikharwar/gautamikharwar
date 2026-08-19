import type { Metadata } from "next";
import WorkIntro from "@/components/work/WorkIntro";
import WorkGrid from "@/components/work/WorkGrid";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of product design and UI/UX work by Gautami Kharwar, spanning AI product design, e-commerce platforms, and design systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <WorkIntro />
      <WorkGrid />
      <ClosingCta />
    </>
  );
}
