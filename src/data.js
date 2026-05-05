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
  }
]
