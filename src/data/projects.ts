export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  myRole: string;
  problem: string;
  solution: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  coverImage: string;
  gallery: string[];
};

// Placeholder case studies based on real work history — replace `summary`,
// `description`, `myRole`, `problem`, `solution`, `metrics`, `coverImage`,
// and `gallery` with real details and screenshots. Images should live under
// /public/images/projects/<slug>/. Leaving `gallery` empty renders
// placeholder tiles instead of breaking — the detail page expects up to 8
// entries: gallery[0] and gallery[1] run as full-width feature images,
// gallery[2..7] (up to 6) fill the closing grid.
export const projects: Project[] = [
  {
    slug: "apycue",
    title: "AI-agent platform for hotel direct bookings",
    company: "Apycue",
    year: "2025–Present",
    summary:
      "Sole designer for an AI-agent platform helping hotels grow direct bookings and reduce OTA dependency — owned the product end-to-end, from visual language to every shipped screen.",
    description:
      "As the only designer on the team, I was involved from day one — sitting in on product and engineering discussions, defining the product's visual language, and translating fast-moving feature decisions into interface designs the team could ship quickly.",
    role: "Product Design Engineer",
    myRole:
      "I owned design end-to-end: product strategy conversations, wireframes, high-fidelity UI, and the handoff to engineering. With no other designers on the team, I also set the visual system — color, typography, and component patterns — from scratch.",
    problem:
      "Hotels are used to OTA-style booking flows, but this product introduces an AI agent into that experience. The challenge was making an unfamiliar, AI-driven interaction feel trustworthy and easy to act on, without slowing down the booking flow hotel staff already know.",
    solution:
      "I kept the core booking flow familiar and layered the AI agent in as a lightweight, transparent assistant — surfacing its suggestions clearly and always leaving the final action to the user. I also introduced an AI-assisted design-to-code workflow, prompting Claude Code to generate production UI directly from my designs, which shortened the loop between design decisions and shipped screens.",
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
    year: "2023–2025",
    summary:
      "Delivered 35+ responsive web and app designs across sectors, building scalable design systems in Figma to keep products consistent as the team grew.",
    description:
      "Across two years at Ayu Developers, I worked with multiple teams to deliver 35+ responsive web and app designs. Much of the work centered on building a design system that could flex across very different product briefs without losing visual consistency.",
    role: "Senior UI/UX Designer",
    myRole:
      "I designed end-to-end for each engagement — wireframes, interactive prototypes, and final UI — while also maintaining the shared component library other designers on the team drew from.",
    problem:
      "With many concurrent projects, small inconsistencies in spacing, color usage, and component behavior were creeping into different products, making the studio's output feel less cohesive.",
    solution:
      "I built a scalable design system in Figma with documented components and usage guidelines, and mentored junior designers on applying it consistently — cutting down rework and keeping every project on-brand.",
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
    year: "2020–2023",
    summary:
      "Designed UI for B2C e-commerce platforms and built reusable component systems, working closely with front-end developers on handoff and QA.",
    description:
      "At Aureate Labs, I designed UI for B2C e-commerce platforms, working closely with developers, product owners, and stakeholders across the full product lifecycle.",
    role: "Senior UI/UX Designer",
    myRole:
      "I owned UI design for e-commerce features end-to-end and built reusable components in Figma, while supporting front-end developers with detailed specs and QA review during implementation.",
    problem:
      "Handoff between design and engineering was inconsistent, which led to UI details getting lost or reinterpreted during build, and design QA was often an afterthought.",
    solution:
      "I introduced a more rigorous handoff process — detailed specs, a shared component library, and a QA pass against the original designs before release — plus regular user testing to validate decisions before they shipped.",
    tags: ["E-commerce", "Component Systems", "User Testing"],
    metrics: [
      { label: "Duration", value: "3 years" },
      { label: "Focus", value: "Design systems" },
    ],
    coverImage: "",
    gallery: [],
  },
];
