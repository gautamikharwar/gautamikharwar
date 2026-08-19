import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import SkillsGrid from "@/components/about/SkillsGrid";
import EducationCerts from "@/components/about/EducationCerts";
import FAQ from "@/components/about/FAQ";
import ClosingCta from "@/components/home/ClosingCta";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gautami Kharwar is a Senior UI/UX Designer and Product Design Engineer with 8+ years of experience — background, skills, and AI-assisted design-to-code and vibe coding workflows.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutIntro />
      <ExperienceTimeline />
      <SkillsGrid />
      <EducationCerts />
      <FAQ />
      <ClosingCta />
    </>
  );
}
