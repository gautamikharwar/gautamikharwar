import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogContent from "@/components/blog/BlogContent";
import NextPost from "@/components/blog/NextPost";
import ClosingCta from "@/components/home/ClosingCta";
import { posts } from "@/data/blog";
import { profile } from "@/data/resume";
import { SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const post = posts[index];
  const next = posts[(index + 1) % posts.length];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    author: { "@type": "Person", name: profile.name, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogDetailHero post={post} />
      <BlogContent post={post} />
      {posts.length > 1 && <NextPost post={next} />}
      <ClosingCta />
    </>
  );
}
