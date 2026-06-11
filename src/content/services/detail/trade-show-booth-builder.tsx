import { SHARED_BLOG_POSTS } from "@/content/blogs";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const BOOTH_BUILDER_HERO = {
  description:
    "As your enterprise trade show booth builder and exhibition stand builder, we manage every dimension of the build, from fabrication brief to on-site installation, with full accountability for the outcome.",
  title: "Trade Show Booth Builders Who Engineer for Conversion, Not Just Aesthetics",
};

export { GLOBAL_PROOF_STATS as BOOTH_BUILDER_PROOF_BAR } from "../../shared";


export const BOOTH_BUILDER_PROCESS = {
  phases: [
    {
      description: "Event goals, booth size, brand requirements, demo needs, and timeline.",
      title: "Design Brief",
    },
    {
      description: "Full visualisation reviewed with your team before production begins.",
      title: "3D Render",
    },
    {
      description: "Structural, safety, and venue compliance review.",
      title: "Engineering Approval",
    },
    {
      description: "Quality, durability, and logistics-appropriate selections.",
      title: "Material Sourcing",
    },
    {
      description: "Production with quality control checkpoints throughout.",
      title: "Fabrication",
    },
    {
      description: "Quality and fit review before shipping.",
      title: "QC and Pre-Build",
    },
    {
      description: "Packaging, shipping, customs, and venue coordination.",
      title: "Event Delivery",
    },
    {
      description: "On-site assembly and final quality check before the show opens.",
      title: "Installation",
    },
    {
      description: "Post-event dismantling, packing, and reuse planning.",
      title: "Breakdown and Storage",
    },
  ],
  title: "Our Trade Show Booth Build Process",
};

export const BOOTH_BUILDER_FUTURE_READY = {
  heading: "Future-Ready Stands for Exhibitions & Trade Shows",
  items: [
    {
      bullets: [
        "Flexible timelines for short-term builds, flagship exhibitions, and multi-market programs.",
        "In-house fabrication planning with quality-checked components ready for on-site installation.",
        "Global delivery support for international venues, shipping windows, and event deadlines.",
      ],
      image: {
        alt: "Custom modular exhibition stand",
        src: "/images/booth/20x40.jpg",
      },
      title: "Custom Exhibition Stand Solutions - Modular & Bespoke",
    },
    {
      bullets: [
        "End-to-end project management from concept alignment through production and final handover.",
        "Virtual and on-site consultation to align booth architecture with brand and sales objectives.",
        "Dedicated guidance across design approvals, materials, technical details, and venue coordination.",
      ],
      image: {
        alt: "3D exhibition stand design and project planning",
        src: "/images/booth/30x40.avif",
      },
      title: "3D Design & Project Management Services",
    },
    {
      bullets: [
        "Design and customization shaped around visitor flow, demo requirements, and meeting spaces.",
        "Fabrication, construction, logistics, and installation managed as one connected delivery path.",
        "On-site supervision and final quality checks before the show floor opens.",
      ],
      image: {
        alt: "Finished trade show stand ready for attendees",
        src: "/images/booth/40x40.jpg",
      },
      title: "Our Process To Get Your Stand Ready",
    },
  ],
};

export const BOOTH_BUILDER_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_BUILDER_FAQ = {
  faqs: [
    {
      answer:
        "A turnkey exhibition booth is an all-inclusive service, design, fabrication, logistics, installation, and breakdown, managed by one partner. Nothing is left for your team to coordinate. One brief, one invoice, one point of accountability.",
      id: "turnkey",
      question: "What is a turnkey trade show booth?",
    },
    {
      answer:
        "Yes, exhibition stand design and build is our full-service model. We design the structure, manage fabrication, handle international logistics, and install on-site.",
      id: "design-build",
      question: "Do you also do exhibition stand design and building?",
    },
    {
      answer:
        "Standard custom builds: 12–16 weeks from design brief to installation. Double-deck or technology-heavy structures: 16–20 weeks. For tight timelines, modular or rental options may be more appropriate.",
      id: "lead-time",
      question: "What is the typical build lead time?",
    },
    {
      answer:
        "Yes, included in our turnkey booth service. We have managed deliveries across 40+ countries.",
      id: "shipping-customs",
      question: "Do you handle international shipping and customs?",
    },
    {
      answer:
        "Yes, reuse planning is built into the structure from the start. Many enterprise clients run the same booth for 3–5 years with graphic updates, reducing cost per event by 30–50%.",
      id: "reuse",
      question: "Can the booth be reused?",
    },
    {
      answer:
        "Yes, our team manages assembly, alignment, quality review, and on-site support throughout the event.",
      id: "installation",
      question: "Do you manage on-site installation?",
    },
  ],
  heading: "Trade Show Booth Builder FAQs",
  layoutMode: "fit" as const,
};

export const BOOTH_BUILDER_RELATED_SERVICES = [
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/global-event-solutions/event-booth-rental",
    title: "Event Booth Rental",
  },
  {
    href: "/services/global-event-solutions/modular-booth-solutions",
    title: "Modular and Portable Booths",
  },
];


export const BOOTH_BUILDER_BLOGS_SECTION = {
  heading: "Blogs",
};

const BOOTH_BUILDER_BLOG_IDS = [
  "hiring-trade-show-booth-design-company",
  "5-trade-show-booth-design-setup",
  "b2b-exhibit-booth-design-features",
  "booth-design-metrics",
  "mid-event-trade-show-engagement-ideas",
  "eco-booth-design-5-unexpected-materials-that-make-a-big-impact",
];

export const BOOTH_BUILDER_BLOG_POSTS = BOOTH_BUILDER_BLOG_IDS.flatMap((id) => {
  const post = SHARED_BLOG_POSTS.find((blogPost) => blogPost.id === id);
  return post ? [post] : [];
});

export const BOOTH_BUILDER_CONTACT_CTA = {
  backgroundImage: {
    alt: "Exhibition stand build consultation backdrop",
    src: "/images/booth/40x40.jpg",
  },
  badge: "Ready to Build?",
  description:
    "From first brief to final installation, your exhibition stand should move with the same discipline as your sales strategy. Share the event, footprint, timeline, and goals, and we will map the right build path.",
  headingLines: ["Let's Build Your Next", "Exhibition Stand"] as [string, string],
  primaryCta: {
    href: "/contact",
    label: "Request a Build Quote",
  },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: [
    {
      alt: "Airtel",
      src: "/images/client-logos/circle-airtel.svg",
    },
    {
      alt: "SingleStore",
      src: "/images/client-logos/circle-singlestore.svg",
    },
    {
      alt: "CSC",
      src: "/images/client-logos/circle-csc.svg",
    },
    {
      alt: "United Payments",
      src: "/images/client-logos/circle-united-payments.svg",
    },
  ],
  secondaryCta: {
    href: "mailto:info@b2bsalesarrow.com",
    label: "Contact Us",
  },
};

export const BOOTH_BUILDER_PAGE = {
  pageId: "service.trade-show-booth-builder",
  pageName: "Trade Show Booth Builder",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/global-event-solutions/trade-show-booth-builder",
    description:
      "Enterprise trade show booth builder delivering concept-to-installation fabrication across 40+ countries. Custom builds, modular systems, double-deck structures, and turnkey solutions.",
    focusKeyphrase: "trade show booth builder",
    secondaryKeywords: [
      "exhibition stand builder",
      "booth builders",
      "custom exhibit booths",
      "turnkey exhibition booth",
    ],
    title: "Trade Show Booth Builder and Exhibition Stand Design and Build | B2B Sales Arrow",
  },
} as const;
