export const profile = {
  name: "Gautami Kharwar",
  title: "Senior UI/UX Designer · Product Design Engineer",
  location: "Surat, Gujarat, India",
  email: "gautamikharwar2813@gmail.com",
  phone: "+91 74879-67832",
  summary:
    "UI/UX Designer with 8+ years of experience across B2C e-commerce platforms and AI-driven hospitality technology. Currently the sole Product Design Engineer at an early-stage AI startup, owning end-to-end design from product strategy through to shipped screens, including AI-assisted design-to-code and vibe coding workflows. Skilled at working closely with engineering teams to translate design intent into accurate, high-quality implementation.",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Product Design Engineer",
    company: "Apycue",
    period: "Aug 2025 – Present",
    bullets: [
      "Sole designer for an AI-agent platform that helps hotels grow direct bookings and reduce OTA dependency, owning the product end-to-end as a team of one.",
      "Led design from the ground up: participated in product/feature discussions, defined the visual language (color theme, typography), and built every product screen from scratch.",
      "Introduced an AI-assisted design-to-code workflow, prompting Claude Code to generate production UI directly, speeding up the path from concept to working screens.",
      "Partner closely with developers throughout implementation, providing UI specs, reviewing built screens against design intent, and flagging UI and product-flow issues before release.",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    company: "Ayu Developers",
    period: "Aug 2023 – Aug 2025",
    bullets: [
      "Delivered 35+ responsive web and app designs across multiple sectors, including B2C e-commerce websites.",
      "Built wireframes, interactive prototypes, and scalable design systems in Figma and Adobe XD to maintain consistency across products.",
      "Mentored junior designers and helped shape internal design standards and best practices.",
      "Owned full-cycle UI/UX design from brief to delivery, ensuring responsive and accessible experiences across devices.",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    company: "Aureate Labs",
    period: "Aug 2020 – Aug 2023",
    bullets: [
      "Designed UI for B2C e-commerce platforms, working cross-functionally with developers, product owners, and stakeholders.",
      "Built design systems and reusable components in Figma; supported front-end developers with asset handoff, specs, and QA review.",
      "Conducted user testing and iterated designs based on feedback.",
    ],
  },
  {
    role: "Junior UI/UX Designer",
    company: "3WP Infosystem",
    period: "Aug 2018 – Aug 2020",
    bullets: [
      "Supported senior designers with research and UI development; designed components and icons for internal web tools.",
      "Built wireframes and mockups in Figma, iterating designs based on user testing feedback.",
    ],
  },
  {
    role: "Junior UI/UX Designer",
    company: "Aspirebit Technolab",
    period: "Jan 2018 – Aug 2018",
    bullets: [
      "Gained hands-on experience with Adobe XD and Photoshop, creating wireframes, mood boards, and early-stage prototypes for client projects.",
      "Assisted in designing web and mobile interfaces under senior designer guidance.",
    ],
  },
];

export const skills = {
  "Design Tools": ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
  "AI-Assisted Design & Vibe Coding": [
    "Claude Code (prompt-to-UI)",
    "Vibe coding workflows",
    "AI-integrated design-to-code tools",
  ],
  "Design Practice": [
    "UX/UI Design",
    "Interaction Design",
    "Prototyping",
    "Wireframing",
    "Design Systems",
    "Visual Design",
  ],
  Collaboration: [
    "Developer Handoff",
    "UI/Flow QA Review",
    "Cross-Functional Collaboration",
    "User Testing",
  ],
  "Soft Skills": [
    "Communication",
    "Mentorship",
    "Rapid Iteration",
    "Human-Centric Problem Solving",
  ],
};

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.), Computer Engineering",
    school: "Gujarat Technological University, Gujarat, India",
    period: "2014 – 2018",
  },
];

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "35+", label: "Responsive designs delivered" },
  { value: "5", label: "Companies designed for" },
  { value: "1", label: "AI startup led solo" },
];

export const certifications = [
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google (Coursera)",
    credentialId: "UHAVFTHVJ9K4",
  },
];
