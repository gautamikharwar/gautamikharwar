import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailHero from "@/components/work/WorkDetailHero";
import WorkImage from "@/components/work/WorkImage";
import WorkDescription from "@/components/work/WorkDescription";
import WorkStory from "@/components/work/WorkStory";
import WorkGallery from "@/components/work/WorkGallery";
import WorkPrevNext from "@/components/work/WorkPrevNext";
import ClosingCta from "@/components/home/ClosingCta";
import { projects } from "@/data/projects";
import { getProjectImages } from "@/lib/project-images";
import { profile } from "@/data/resume";
import { SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function WorkDetailPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const images = getProjectImages(project.gallery);
  const [image1, image2, ...remaining] = images;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}/work/${project.slug}`,
    creator: { "@type": "Person", name: profile.name, url: SITE_URL },
    about: project.company,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <WorkDetailHero project={project} />
      <WorkImage src={image1} alt={project.title} />
      <WorkDescription description={project.description} />
      <WorkImage src={image2} alt={project.title} />
      <WorkStory project={project} />
      <WorkGallery images={remaining} alt={project.title} />
      {projects.length > 1 && <WorkPrevNext prev={prev} next={next} />}
      <ClosingCta />
    </>
  );
}
