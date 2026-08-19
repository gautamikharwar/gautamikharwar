export type BlogCategory = "UX" | "UI" | "Branding" | "AI";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
};

// Placeholder posts — replace with real writing. Images go under
// /public/images/blog/<slug>/. `content` is an array of paragraphs.
export const posts: BlogPost[] = [
  {
    slug: "designing-ai-assisted-workflows",
    title: "What changes when you design for AI-assisted workflows",
    excerpt:
      "Notes from building an AI-agent product end-to-end — how prompting Claude Code for UI changed the way I think about handoff.",
    category: "UX",
    date: "2026-06-12",
    readTime: "6 min read",
    coverImage: "",
    content: [
      "Placeholder content — replace with the real article body.",
      "Add as many paragraphs as needed; each string in the `content` array renders as its own paragraph.",
    ],
  },
  {
    slug: "design-systems-that-scale",
    title: "Building design systems that survive a growing team",
    excerpt:
      "Lessons from taking a component library from a handful of screens to 35+ shipped designs without losing consistency.",
    category: "UI",
    date: "2026-04-03",
    readTime: "5 min read",
    coverImage: "",
    content: [
      "Placeholder content — replace with the real article body.",
      "Add as many paragraphs as needed; each string in the `content` array renders as its own paragraph.",
    ],
  },
  {
    slug: "visual-identity-for-early-stage-startups",
    title: "Defining a visual identity before the product exists",
    excerpt:
      "How to set a color theme and typography system for a product that's still being figured out — from the ground up at an early-stage startup.",
    category: "Branding",
    date: "2026-01-20",
    readTime: "4 min read",
    coverImage: "",
    content: [
      "Placeholder content — replace with the real article body.",
      "Add as many paragraphs as needed; each string in the `content` array renders as its own paragraph.",
    ],
  },
  {
    slug: "ai-assisted-design-to-code",
    title: "How I use Claude Code to go from Figma to shipped UI",
    excerpt:
      "A practical look at the AI-assisted design-to-code workflow I run solo at Apycue — prompting, reviewing, and keeping design intent intact.",
    category: "AI",
    date: "2026-07-08",
    readTime: "7 min read",
    coverImage: "",
    content: [
      "Placeholder content — replace with the real article body.",
      "Add as many paragraphs as needed; each string in the `content` array renders as its own paragraph.",
    ],
  },
];
