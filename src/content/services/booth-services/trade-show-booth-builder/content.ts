import { SHARED_BLOG_POSTS } from "@/content/blogs/data";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";





export { GLOBAL_PROOF_STATS as BOOTH_BUILDER_PROOF_BAR } from "../../shared";



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



export const BOOTH_BUILDER_RELATED_SERVICES = [
  {
    href: "/services/booth-services/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/booth-services/event-booth-rental",
    title: "Event Booth Rental",
  },
  {
    href: "/services/booth-services/modular-booth-solutions",
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



export {default as BOOTH_BUILDER_FAQ} from "./faq.json";
export {default as BOOTH_BUILDER_HERO} from "./hero.json";
export {default as BOOTH_BUILDER_PAGE} from "./page.json";
export {default as BOOTH_BUILDER_PROCESS} from "./process.json";