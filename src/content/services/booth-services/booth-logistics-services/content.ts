import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";





export { GLOBAL_PROOF_STATS as EVENT_LOGISTICS_PROOF_BAR } from "../../shared";

export const EVENT_LOGISTICS_INTRO = {
  ctaHref: "/contact",
  ctaLabel: "Let's Connect",
  description:
    "Successful events require precise coordination, smooth operations, and reliable execution. Professional event logistics services help businesses manage venue coordination, transportation, installation, vendor communication, material handling, and onsite event operations efficiently.\n\nAt B2B Sales Arrow, we provide end-to-end corporate event logistics services for conferences, trade shows, exhibitions, networking events, product launches, and executive gatherings. Our team ensures seamless coordination across every stage of the event to help brands deliver organized and stress-free event experiences.",
  imageUrl: "/images/services/booth/booth-7.avif",
  label: "Booth Logistics Services",
  titleLine1: "Professional Booth Logistics Services",
  titleLine2: "Services for Corporate Events",
};

export const EVENT_LOGISTICS_DELIVERABLES = {
  heading: "What's Included in Our Booth Logistics Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Manage venue communication, floor planning, setup schedules, and operational coordination for smooth event execution.",
      icon: "MapPin",
      id: "venue-coordination",
      image: "/images/events/event_other_1.avif",
      title: "Venue Coordination",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Coordinate booth installation, branding materials, equipment delivery, and onsite setup support for exhibitions and trade shows.",
      icon: "Layers",
      id: "booth-setup",
      image: "/images/services/booth/booth-5.avif",
      title: "Booth Setup & Material Handling",
    },
    {
      color: "bg-brand-primary",
      description:
        "Handle transportation logistics, shipment coordination, and event material movement efficiently across locations.",
      icon: "Globe2",
      id: "transportation",
      image: "/images/home/why-choose-us/global_reach.avif",
      title: "Transportation & Shipment Management",
    },
    {
      color: "bg-brand-blue",
      description:
        "Work closely with production teams, suppliers, venue partners, and event vendors to ensure seamless event operations.",
      icon: "Users",
      id: "vendor-coordination",
      image: "/images/events/event_other_2.avif",
      title: "Vendor Coordination",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Provide onsite logistics management for attendee flow, equipment handling, setup supervision, and operational assistance.",
      icon: "Target",
      id: "onsite-support",
      image: "/images/services/booth/booth-6.avif",
      title: "Onsite Event Support",
    },
    {
      color: "bg-brand-primary",
      description:
        "Oversee event timelines, coordination activities, and operational workflows to ensure successful event delivery.",
      icon: "Zap",
      id: "operations-management",
      image: "/images/home/why-choose-us/technology_led_delivery.avif",
      title: "Event Operations Management",
    },
  ],
};

export const EVENT_LOGISTICS_CAPABILITIES = {
  phases: [
    {
      description: "End-to-end logistics for exhibition stand delivery and removal.",
      title: "Trade show logistics management",
    },
    {
      description: "Operational planning and execution for conference environments.",
      title: "Conference operational support",
    },
    {
      description: "Assembly, installation, and dismantling coordination for trade shows.",
      title: "Booth setup coordination",
    },
    {
      description: "Day-of oversight for all event operational activities.",
      title: "Onsite event supervision",
    },
    {
      description: "AV, furniture, display, and technical equipment management.",
      title: "Equipment coordination",
    },
    {
      description: "Timeline planning and schedule management across all event phases.",
      title: "Event scheduling management",
    },
    {
      description: "Cross-border freight, customs clearance, and ATA carnet management.",
      title: "International event logistics support",
    },
    {
      description: "Full event lifecycle operational planning and delivery.",
      title: "Corporate event operations planning",
    },
  ],
  title: "Booth Logistics Services Capabilities & Operational Expertise",
};

export const EVENT_LOGISTICS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_LOGISTICS_INDUSTRIES_SECTION = {
  heading: "Industries We Support with Booth Logistics Services",
  services: GLOBAL_INDUSTRY_SERVICES,
};



export const EVENT_LOGISTICS_BLOGS_SECTION = {
  heading: "Latest Insights on Booth Logistics Services & Event Operations",
};



export const EVENT_LOGISTICS_RELATED_SERVICES = [
  {
    href: "/services/booth-services/booth-hostess-services",
    title: "Event Hostess Services",
  },
  {
    href: "/services/global-event-solutions/corporate-event-solutions",
    title: "Corporate Event Solutions",
  },
  { href: "/services/global-event-solutions/event-branding-services", title: "Event Branding" },
];

export const EVENT_LOGISTICS_CONTACT_CTA = {
  backgroundImage: {
    alt: "Booth Logistics Services",
    src: "/images/home/hero/home_hero_bg.avif",
  },
  badge: "Booth Logistics Services",
  description:
    "Partner with B2B Sales Arrow for professional event logistics services that help your brand deliver smooth, organized, and successful corporate event experiences.",
  headingLines: ["Looking for Reliable", "Booth Logistics Services?"] as [string, string],
  primaryCta: { href: "/contact", label: "Schedule a Consultation" },
  proofLabel: "Trusted by 500+ companies",
  proofLogos: [],
  secondaryCta: { href: "/case-studies", label: "View Case Studies" },
};



export {default as EVENT_LOGISTICS_FAQ} from "./faq.json";
export {default as EVENT_LOGISTICS_IMAGE_HERO} from "./hero.json";
export {default as EVENT_LOGISTICS_PAGE} from "./page.json";
export {default as EVENT_LOGISTICS_WHY_CHOOSE_US} from "./why-choose-us.json";