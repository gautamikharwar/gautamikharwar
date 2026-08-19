import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WorkHighlights from "@/components/home/WorkHighlights";
import Process from "@/components/home/Process";
import BlogHighlights from "@/components/home/BlogHighlights";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WorkHighlights />
      <Process />
      <BlogHighlights />
      <ClosingCta />
    </>
  );
}
