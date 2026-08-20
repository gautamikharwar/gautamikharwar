export type ProcessStep = {
  title: string;
  // Each entry is a paragraph — mirrors the blog's `content: string[]` shape.
  // Supports **bold** for inline emphasis (see src/lib/markdown-bold.tsx).
  body: string[];
  list?: string[];
  // Caption shown on a placeholder box in place of a screenshot that
  // doesn't exist yet. Add the image under /public/images/projects/<slug>/
  // and this step can render it directly instead.
  imagePlaceholder?: string;
};

export type CaseStudy = {
  heroPlaceholder: string;
  // Set when the case study is for a specific live product, not the
  // author's own site — renders as a link near the top of the case study.
  liveUrl?: string;
  liveUrlLabel?: string;
  problem: string[];
  myRole: string;
  process: ProcessStep[];
  // Optional — some case studies fold dev collaboration into a numbered
  // process step instead of calling it out as its own section.
  workingWithDevelopers?: {
    body: string[];
    videoPlaceholder: string;
  };
  // A single entry renders as one paragraph; more than one renders as a
  // bulleted list — matches whichever the source copy actually is.
  result: string[];
  closingLine?: string;
};

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
  // Full narrative case study (problem, step-by-step process, dev
  // collaboration, results). When present, the work detail page renders
  // this instead of the short problem/myRole/solution summary above.
  caseStudy?: CaseStudy;
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
      "I am the only designer at Apycue. I take part in every product discussion, help decide what we should build, design every screen from start to finish, and work closely with developers until it is built and working correctly.",
    problem:
      "Hotels pay a large fee to booking websites (like Booking.com) every time someone books a room through them. Apycue wanted to fix this by helping hotels get more bookings directly on their own website, so they don't have to pay that fee. When I joined, that was the only idea the team had — no feature list, no screens, nothing built yet.",
    solution:
      "I designed a set of website templates that adapt automatically to each hotel's own colors, an editor hotel owners can use without technical skill, and an AI reply system for guest messages — then introduced an AI-assisted design-to-code workflow, prompting Claude Code to turn my designs directly into working screens.",
    tags: ["Product Design", "AI/UX", "Design Systems"],
    metrics: [
      { label: "Hotel sites live", value: "10–15" },
      { label: "Core website designs", value: "5–6" },
    ],
    coverImage: "",
    gallery: [],
    caseStudy: {
      heroPlaceholder: "A mix of a website template, the message inbox, and the dashboard",
      problem: [
        "Hotels pay a large fee to booking websites (like Booking.com) every time someone books a room through them. Apycue wanted to fix this by helping hotels get more bookings directly on their own website, so they don't have to pay that fee.",
        "When I joined, that was the only idea the team had. There was no list of features, no screens, nothing built yet. My job was to help figure out what to build, and then design all of it.",
      ],
      myRole:
        "I am the only designer at Apycue. I take part in every product discussion, help decide what we should build, design every screen from start to finish, and work closely with developers until it is built and working correctly.",
      process: [
        {
          title: "Deciding what to build first",
          body: [
            "I joined early meetings where we talked about how to actually help hotels get more direct bookings. We wrote down different ideas and picked the most useful ones to start with.",
            "We found that many hotels lose bookings simply because their website is old or hard to use. So we decided the first thing to build was **AI-made hotel websites** — so hotels can get a good, working website without hiring a developer or agency.",
          ],
        },
        {
          title: "Designing the website templates",
          body: [
            "I designed **6 different website designs**, each one made for a different type of hotel (small boutique hotels, big resorts, business hotels, budget hotels, etc.). I made sure each one worked well on mobile phones too, since most people check hotel websites on their phone.",
            "Instead of designing a new website for every single hotel, I made these designs so they adjust automatically to match each hotel's own look. If a hotel already has a website, our product picks up their colors automatically. If they don't have one, it picks up the colors from their logo instead. This way, every hotel gets a website that already feels like theirs, without me having to design each one by hand.",
          ],
          imagePlaceholder: "2–3 website design screenshots here, both desktop and mobile",
        },
        {
          title: "Building the website editor",
          body: [
            "Once the designs were ready, hotel owners needed a way to change and customize their website themselves. I looked at other website builder tools to see what they offered, and then decided what our product should let hotel owners do — like changing sections, colors, fonts, and text, without needing any technical skill.",
          ],
        },
        {
          title: "Choosing the colors and fonts",
          body: [
            "I decided the colors and fonts for the whole product, which took about a month. I looked at other hotel and travel brands to understand what feels trustworthy and high quality, while still keeping things simple and clean. I gave a few options to my manager, and we picked the final one together.",
          ],
          imagePlaceholder: "The color and font choices here",
        },
        {
          title: "Designing the AI reply system",
          body: [
            "We noticed hotels were also losing bookings because no one was available at night or on weekends to answer guest questions. So I designed a system where an AI can reply to guest messages automatically, or a hotel staff member can reply themselves. I designed the inbox where all these messages come in, and also how the chat looks on the hotel's own website.",
          ],
          imagePlaceholder: "Inbox and chat screenshots here",
        },
        {
          title: "Other things I designed",
          body: ["I also worked on many other parts of the product, including:"],
          list: [
            "Setup screens for hotels when they join",
            "The main dashboard hotels use to see how their site is doing",
            "A tool to help hotels write blog posts using AI",
            "Marketing setting screens",
            'A new feature called "Ideal Guest Profile" — I researched what this feature should do, wrote it all down, agreed on it with my manager, and then designed it',
          ],
        },
      ],
      workingWithDevelopers: {
        body: [
          "For every feature, I follow the same steps: research it, sketch it out, get feedback, and then design the final screens. Lately, I've also started using **Claude Code** to turn my designs directly into real working screens, instead of only making pictures in Figma.",
          "I hand these files over to the developers, explain how everything should work, and stay involved after that too — checking the finished product myself, testing it, and telling the developers if something needs to be fixed.",
        ],
        videoPlaceholder:
          "A short video here showing a Claude Code prompt turning into a real screen — this is a great thing to show",
      },
      result: [
        "**10–15 hotel websites are live right now**, using the designs I built — including Dinuda Resort and Blu The Hotel Resort",
        "I made **5–6 core website designs** that work for every new hotel, so I don't need to design a new site for each one",
        "I took the product from just an idea with no clear features to a real, working platform — including websites, an AI reply system, dashboards, and more — while being the only designer on the team",
      ],
      closingLine:
        "This project taught me to think about research, design, and working with developers all at once — and to use AI tools myself to move faster from idea to finished screen.",
    },
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
    caseStudy: {
      heroPlaceholder: "Homepage, product page, and checkout side by side",
      liveUrl: "https://lancerskincare.com",
      liveUrlLabel: "lancerskincare.com",
      problem: [
        "Lancer Skincare sells premium skincare products, including bestsellers, bundles, and subscriptions. The site had a few problems that made shopping harder than it should be: bestsellers were not easy to find, product pages did not clearly show the information shoppers needed, and the cart/checkout experience needed a full redesign to make buying easier.",
      ],
      myRole:
        "I worked as part of a small design team (2–3 designers) and personally led the design for the **homepage**, **product pages**, and **cart/checkout flow**.",
      process: [
        {
          title: "Redesigning the homepage",
          body: [
            "Bestsellers were hard to find on the original site, so I redesigned the entire homepage to make top products easier to discover as soon as someone lands on the site, instead of making shoppers dig through menus or scroll to find what's popular.",
            "Some of the key changes I made compared to the old homepage:",
          ],
          list: [
            "Added a sale countdown timer at the top, to create urgency and encourage people to buy before the sale ends",
            "Changed the hero section layout, moving from text written over a photo to photo and text placed side by side, so both are easier to see clearly",
            'Added customer review cards with photos and a "Buy Now" button, to build trust through real customers and let people buy straight from the review',
            'Added a new "Winter Skincare Essentials" section, to show season relevant products and keep the homepage feeling fresh',
            "Added a trust and benefits row near the footer, showing free gifts, free shipping, rewards, and easy returns, to reassure shoppers before they leave the page",
          ],
          imagePlaceholder: "Homepage screenshot here",
        },
        {
          title: "Redesigning the product pages",
          body: [
            "The product pages had a few issues at once: important information like price, size, and ingredients was hard to find, there was no clear way to see bundles or related products, and the page overall felt cluttered. I redesigned the product pages to fix all three problems, making key info easier to scan, adding a clearer way to show bundles, and cleaning up the layout so it felt less overwhelming.",
          ],
          imagePlaceholder: "Product page screenshot here",
        },
        {
          title: "Redesigning cart and checkout",
          body: [
            "I redesigned the entire cart and checkout flow, working to make the path from cart to order confirmation clearer and easier to complete.",
          ],
          imagePlaceholder: "Cart/checkout screenshots here",
        },
        {
          title: "Working with developers",
          body: [
            "I worked with developers to get these designs built, and stayed involved through the process to make sure the final site matched the design.",
          ],
        },
      ],
      result: [
        "I helped deliver a redesigned homepage, product pages, and checkout flow for a live, premium skincare brand, working as part of a small design team. The site is live today at lancerskincare.com, with a homepage built around helping shoppers find bestsellers faster, clearer product pages, and a simpler path to checkout.",
      ],
    },
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
