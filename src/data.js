export const projects = [
  {
    id: 1,
    slug: "north",
    title: "North - E commerce assistant",
    image: "/images/chatbot.png",
    alt: "North chatbot mascot illustration",
    tags: ["React", "AI", "E-commerce"],
    meta: "2026 — IN PROGRESS · PRODUCT",
    description:
      "An AI-powered shopping assistant for e-commerce. Write-up, screenshots, and a live demo are coming once the build is ship-worthy.",
    buttonText: "View",
    detail: {
      tagline: "An AI shopping companion that actually helps people buy.",
      year: "2026",
      role: "Frontend & product design",
      status: "In progress",
      overview:
        "North is an AI assistant built for e-commerce stores. It guides shoppers through catalogues the way a great in-store associate would, asking the right questions, surfacing the right products, and removing the friction between curiosity and checkout.",
      problem:
        "Most online stores treat search as a text box. Shoppers know what they want, but not what it's called, and bounce when the catalogue doesn't speak their language. North closes that gap with a conversation instead of a query.",
      approach:
        "I'm building the storefront-facing chat experience, the product cards it returns, and the design system that ties it to any host store. The focus is speed, clarity, and a tone that feels human enough to trust with a buying decision.",
      stack: ["React", "Vite", "TypeScript", "Node", "OpenAI API", "Tailwind"],
      gallery: [
        { src: "/images/project-placeholder.svg", alt: "North conversation flow placeholder" },
        { src: "/images/project-placeholder.svg", alt: "North product card placeholder" }
      ],
      links: []
    },
    link: ""
  },
  {
    id: 2,
    slug: "ordna",
    title: "Ordna - Smarter communication for associations",
    image: "/images/ordna.png",
    alt: "Ordna app illustration",
    tags: ["React", "Mobile", "Community"],
    meta: "2026 — IN PROGRESS · PRODUCT",
    description:
      "An app that helps Swedish föreningar (associations and clubs) run cleaner, calmer communication with their members.",
    buttonText: "View",
    detail: {
      tagline: "Communication tools built for the way associations actually work.",
      year: "2026",
      role: "Frontend & product design",
      status: "In progress",
      overview:
        "Ordna is a communication app for föreningar — the Swedish associations, clubs, and societies that run on volunteer time. It replaces the messy mix of group chats, email threads, and paper notes with one calm space for announcements, events, and member updates.",
      problem:
        "Most associations rely on tools that weren't built for them. Information gets lost in long chat threads, members miss what matters, and the people running things spend more time chasing replies than organising. Ordna treats clarity as the feature.",
      approach:
        "I'm shaping the member-facing app and the lightweight admin surface board members use to post and plan. The tone is quiet and grown-up, the interactions are obvious, and the defaults respect that nobody opens a community app for fun.",
      stack: ["React", "React Native", "TypeScript", "Node", "Supabase"],
      gallery: [
        { src: "/images/project-placeholder.svg", alt: "Ordna feed placeholder" },
        { src: "/images/project-placeholder.svg", alt: "Ordna event view placeholder" }
      ],
      links: []
    },
    link: ""
  },
  {
    id: 3,
    slug: "ai-lead-agent",
    title: "AI Lead Agent - Webbyra outreach automation",
    image: "/images/ai-lead-generator.png",
    blendMode: "screen",
    visualSize: "large",
    alt: "AI lead generator dashboard illustration",
    tags: ["Node.js", "AI", "Automation"],
    meta: "2026 — IN PROGRESS · SALES OPS",
    description:
      "An AI lead agent that finds, scores, and qualifies Swedish companies, drafts personalized outreach emails, and tracks the full workflow into Supabase and HubSpot.",
    buttonText: "View",
    detail: {
      tagline: "Automated lead discovery and outreach for Swedish web agencies.",
      year: "2026",
      role: "AI automation, backend architecture, product",
      status: "In progress",
      overview:
        "This project is a Node.js-based lead automation agent for web agencies. It runs daily, finds companies with weak web and SEO fundamentals, scores each lead with rule-based checks plus Claude evaluation, and prepares personalized outreach for manual approval.",
      problem:
        "Lead generation usually means manual prospecting, scattered notes, and low consistency between who gets contacted and why. The process is slow, hard to scale, and difficult to track from first touch to CRM pipeline movement.",
      approach:
        "I designed a phased system: lead discovery via search and scraping, technical qualification with SEO + PageSpeed checks, AI-assisted prioritization and email drafting, Gmail sending with safe pacing, and full lifecycle tracking in Supabase and HubSpot, including follow-up, bounce, and opt-out handling.",
      stack: [
        "Node.js",
        "Express",
        "Supabase Postgres",
        "Claude API",
        "SerpAPI",
        "Google PageSpeed API",
        "Google Places API",
        "Gmail API",
        "HubSpot API"
      ],
      gallery: [
        { src: "/images/ai-lead-generator.png", alt: "AI Lead Agent concept visual" },
        { src: "/images/project-placeholder.svg", alt: "Lead workflow architecture placeholder" }
      ],
      links: []
    },
    link: ""
  }
]
