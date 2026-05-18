import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const MODULAR_BOOTHS_HERO = {
  description:
    "The same modular booth system — New York, Dubai, Singapore, London — one quarter. Our systems give enterprise teams consistent brand presence across every event without rebuilding from scratch each time.",
  title: "Modular and Portable Trade Show Booths — Engineered for Enterprise Efficiency",
};

export { GLOBAL_PROOF_STATS as MODULAR_BOOTHS_PROOF_BAR } from "../../shared";

export const MODULAR_BOOTHS_WHY = {
  description:
    "A reusable modular booth amortised across five or more events per year typically delivers 30–50% lower cost per deployment than commissioning a new custom build each time. Beyond cost: faster deployment timelines, simplified international logistics, and consistent brand presentation across markets.\n\nModular is especially valuable for multi-city event tours, emerging market activations, roadshow programs, and satellite presences alongside a flagship custom booth.",
  imageUrl:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
  titleLine1: "The Commercial Case",
  titleLine2: "for Modular Systems",
};

export const MODULAR_BOOTHS_DELIVERABLES = {
  heading: "Our Modular and Portable Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We architect modular environments — designing a master 'kit of parts' that can be deployed in multiple configurations throughout your show cycle.",
      icon: "Layers",
      id: "design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Modular System Design",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Access to the world's most reliable modular systems known for structural integrity and tool-free assembly.",
      icon: "Wrench",
      id: "hardware",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      title: "Premium Hardware Sourcing",
    },
    {
      color: "bg-brand-primary",
      description:
        "High-definition tension fabric and magnetic graphic panels that can be swapped in minutes, allowing you to update messaging for different audiences without new hardware.",
      icon: "Palette",
      id: "graphics",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      title: "Interchangeable Graphic Systems",
    },
    {
      color: "bg-brand-blue",
      description:
        "For teams that want to manage their own small-scale setups, we provide custom training and video guides for zero-error installation.",
      icon: "Video",
      id: "training",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Staff Training and Assembly Guides",
    },
  ],
};

export const MODULAR_BOOTHS_FORMATS = {
  headers: ["System Type", "Best For"],
  rows: [
    {
      "best for":
        "Compact, tool-free assembly for regional shows and satellite presences. Trade show booth 10x10 format — ready in under 4 hours.",
      "system type": "10x10 Modular Kits",
    },
    {
      "best for":
        "Mid-format portable trade show booth displays with room for demos, meetings, and brand storytelling.",
      "system type": "10x20 and 20x20 Inline Configurations",
    },
    {
      "best for":
        "Multi-sided open systems for higher-traffic exhibition floors with stronger visibility and multiple engagement zones.",
      "system type": "Island Modular Systems",
    },
    {
      "best for":
        "Reusable modular structure with custom branded finishes, feature walls, and premium lighting — modular system efficiency with custom booth premium.",
      "system type": "Hybrid Modular + Custom Accent Builds",
    },
    {
      "best for":
        "Lightweight, high-impact backlit fabric displays — maximum visual impact, minimum shipping weight.",
      "system type": "Branded Tensile Fabric Displays",
    },
    {
      "best for": "Fast-deploy for roadshows, sales activations, and internal events.",
      "system type": "Portable Pop-Up and Tabletop",
    },
  ],
  title: "Our Modular Booth Range",
};


export const MODULAR_BOOTHS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MODULAR_BOOTHS_FAQ = {
  faqs: [
    {
      answer:
        "A modular trade show booth is a reusable exhibition structure built from interchangeable components that reconfigure for different booth sizes, formats, and events. Graphics update between shows while the structure is reused — reducing cost and logistics complexity across multi-event programs.",
      id: "what-is",
      question: "What is a modular trade show booth?",
    },
    {
      answer:
        "Over a multi-event program, modular systems typically deliver 30–50% lower cost per event vs. commissioning a new custom build each time.",
      id: "cost",
      question: "How much cheaper is modular vs. custom?",
    },
    {
      answer:
        "Yes — engineered for international shipping in hard-shell cases. Deployed across 40+ countries.",
      id: "international",
      question: "Can modular booths ship internationally?",
    },
    {
      answer: "Most standard formats: tool-free assembly in 2–4 hours by a small team.",
      id: "assembly",
      question: "How quickly can a modular booth be assembled on-site?",
    },
  ],
  heading: "Modular Booth FAQs",
};

export const MODULAR_BOOTHS_PAGE = {
  pageId: "service.modular-portable-booths",
  pageName: "Modular & Portable Booths",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/global-event-solutions/modular-portable-booths",
    description:
      "Reusable modular booth systems and portable trade show displays — consistent brand presence across multiple markets. 30–50% lower cost per event than custom rebuilds.",
    focusKeyphrase: "modular booth",
    secondaryKeywords: [
      "portable trade show booth displays",
      "display booths for trade shows",
      "trade show booths 10x10",
      "ecofriendly booth",
    ],
    title: "Modular and Portable Trade Show Booth Systems | B2B Sales Arrow",
  },
} as const;
