import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const MODULAR_BOOTHS_HERO = {
  description:
    "The same modular booth system, New York, Dubai, Singapore, London, one quarter. Our systems give enterprise teams consistent brand presence across every event without rebuilding from scratch each time.",
  title: "Modular and Portable Trade Show Booths, Engineered for Enterprise Efficiency",
};

export { GLOBAL_PROOF_STATS as MODULAR_BOOTHS_PROOF_BAR } from "../../shared";

export const MODULAR_BOOTHS_WHY = {
  description:
    "A reusable modular booth amortised across five or more events per year typically delivers 30–50% lower cost per deployment than commissioning a new custom build each time. Beyond cost: faster deployment timelines, simplified international logistics, and consistent brand presentation across markets.\n\nModular is especially valuable for multi-city event tours, emerging market activations, roadshow programs, and satellite presences alongside a flagship custom booth.",
  imageUrl: "/images/services/booth/booth-7.avif",
  titleLine1: "The Commercial Case",
  titleLine2: "for Modular Systems",
};

export const MODULAR_BOOTHS_DELIVERABLES = {
  heading: "Our Modular and Portable Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We architect modular environments, designing a master 'kit of parts' that can be deployed in multiple configurations throughout your show cycle.",
      icon: "Layers",
      id: "design",
      image: "/images/services/booth/booth-5.avif",
      title: "Modular System Design",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Access to the world's most reliable modular systems known for structural integrity and tool-free assembly.",
      icon: "Wrench",
      id: "hardware",
      image: "/images/services/booth/booth-6.avif",
      title: "Premium Hardware Sourcing",
    },
    {
      color: "bg-brand-primary",
      description:
        "High-definition tension fabric and magnetic graphic panels that can be swapped in minutes, allowing you to update messaging for different audiences without new hardware.",
      icon: "Palette",
      id: "graphics",
      image: "/images/services/booth/booth-8.avif",
      title: "Interchangeable Graphic Systems",
    },
    {
      color: "bg-brand-blue",
      description:
        "For teams that want to manage their own small-scale setups, we provide custom training and video guides for zero-error installation.",
      icon: "Video",
      id: "training",
      image: "/images/services/booth/booth-9.avif",
      title: "Staff Training and Assembly Guides",
    },
  ],
};

export const MODULAR_BOOTHS_RANGE_SECTION = {
  eyebrow: "Formats",
  heading: "Our Modular Booth Range",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Compact, tool-free assembly for regional shows and satellite presences. Trade show booth 10x10 format ready in under 4 hours.",
      icon: "Layers",
      id: "modular-10x10",
      image: "/images/services/booth/booth-5.avif",
      title: "10x10 Modular Kits",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Mid-format portable trade show booth displays with room for demos, meetings, and brand storytelling.",
      icon: "Monitor",
      id: "modular-inline",
      image: "/images/services/booth/booth-6.avif",
      title: "10x20 and 20x20 Inline Configurations",
    },
    {
      color: "bg-brand-primary",
      description:
        "Multi-sided open systems for higher-traffic exhibition floors with stronger visibility and multiple engagement zones.",
      icon: "Target",
      id: "modular-island",
      image: "/images/services/booth/booth-7.avif",
      title: "Island Modular Systems",
    },
    {
      color: "bg-brand-blue",
      description:
        "Reusable modular structure with custom branded finishes, feature walls, and premium lighting for custom-booth impact.",
      icon: "Palette",
      id: "modular-hybrid",
      image: "/images/services/booth/booth-8.avif",
      title: "Hybrid Modular + Custom Accent Builds",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Lightweight, high-impact backlit fabric displays with maximum visual presence and minimum shipping weight.",
      icon: "Sparkles",
      id: "modular-fabric",
      image: "/images/services/booth/booth-9.avif",
      title: "Branded Tensile Fabric Displays",
    },
    {
      color: "bg-brand-primary",
      description: "Fast-deploy setups for roadshows, sales activations, and internal events.",
      icon: "Wrench",
      id: "modular-portable",
      image: "/images/services/booth/booth-10.avif",
      title: "Portable Pop-Up and Tabletop",
    },
  ],
};

export const MODULAR_BOOTHS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MODULAR_BOOTHS_FAQ = {
  faqs: [
    {
      answer:
        "A modular trade show booth is a reusable exhibition structure built from interchangeable components that reconfigure for different booth sizes, formats, and events. Graphics update between shows while the structure is reused, reducing cost and logistics complexity across multi-event programs.",
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
        "Yes, engineered for international shipping in hard-shell cases. Deployed across 40+ countries.",
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
  pageName: "Modular Booth Solutions",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/global-event-solutions/modular-booth-solutions",
    description:
      "Reusable modular booth systems and portable trade show displays, consistent brand presence across multiple markets. 30–50% lower cost per event than custom rebuilds.",
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
