import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/resume";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const title = "Gautami Kharwar — Senior UI/UX Designer & Product Design Engineer";
const description =
  "Gautami Kharwar is a Senior UI/UX Designer and Product Design Engineer with 8+ years of experience across B2C e-commerce and AI-driven product design, including AI-assisted design-to-code and vibe coding workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — Gautami Kharwar",
  },
  description,
  keywords: [
    "Gautami Kharwar",
    "UI/UX Designer",
    "Product Design Engineer",
    "AI product design",
    "vibe coding",
    "design-to-code",
    "e-commerce UI design",
    "design systems",
    "Figma designer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: profile.name,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
  };

  return (
    <html lang="en" className={`${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
