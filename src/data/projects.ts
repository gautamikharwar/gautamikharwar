export type Project = {
  slug: string;
  title: string;
  company: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  coverImage: string;
  gallery: string[];
};

// Placeholder case studies based on real work history — replace `summary`,
// `metrics`, `coverImage`, and `gallery` with real details and screenshots.
// Images should live under /public/images/projects/<slug>/. Leaving
// coverImage empty renders a gradient placeholder tile instead of breaking.
export const projects: Project[] = [
  {
    slug: "apycue",
    title: "AI-agent platform for hotel direct bookings",
    company: "Apycue",
    summary:
      "Sole designer for an AI-agent platform helping hotels grow direct bookings and reduce OTA dependency — owned the product end-to-end, from visual language to every shipped screen.",
    role: "Product Design Engineer",
    tags: ["Product Design", "AI/UX", "Design Systems"],
    metrics: [
      { label: "Role", value: "Team of one" },
      { label: "Workflow", value: "AI design-to-code" },
    ],
    coverImage: "",
    gallery: [],
  },
  {
    slug: "ayu-developers",
    title: "E-commerce design systems at scale",
    company: "Ayu Developers",
    summary:
      "Delivered 35+ responsive web and app designs across sectors, building scalable design systems in Figma to keep products consistent as the team grew.",
    role: "Senior UI/UX Designer",
    tags: ["E-commerce", "Design Systems", "Mentorship"],
    metrics: [
      { label: "Designs delivered", value: "35+" },
      { label: "Duration", value: "2 years" },
    ],
    coverImage: "",
    gallery: [],
  },
  {
    slug: "aureate-labs",
    title: "B2C e-commerce platform UI",
    company: "Aureate Labs",
    summary:
      "Designed UI for B2C e-commerce platforms and built reusable component systems, working closely with front-end developers on handoff and QA.",
    role: "Senior UI/UX Designer",
    tags: ["E-commerce", "Component Systems", "User Testing"],
    metrics: [
      { label: "Duration", value: "3 years" },
      { label: "Focus", value: "Design systems" },
    ],
    coverImage: "",
    gallery: [],
  },
];
