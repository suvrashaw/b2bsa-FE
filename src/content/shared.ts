import type { CaseStudyItem as HomeCaseStudyItem } from "./home";

type SharedCaseStudyItem = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

export const GLOBAL_PROOF_STATS = [
  "250+ events",
  "$1.2B+ pipeline influenced",
  "15,000+ enterprise leads",
  "98% client retention",
  "500+ booth designs",
  "40+ countries",
];

export const GLOBAL_CASE_STUDIES: SharedCaseStudyItem[] = [
  {
    challenge:
      "Securing qualified aviation executive meetings in an ultra-compressed 10-day campaign window.",
    client: "Global Leader in Digital Services",
    href: "/case-studies/waf-2025",
    icon: "Plane",
    id: "waf-2025",
    image: "/images/case-studies/cs-new-2.avif",
    metric: "60",
    metricLabel: "Qualified Meetings",
    solution:
      "AI-supported prospecting, account-tier segmentation, VIP audience acquisition, and on-ground meeting coordination converted a tight event window into confirmed executive conversations.",
    title: "World Aviation Festival 2025",
  },
  {
    challenge:
      "Driving dual-client success at a complex banking event with compressed outreach timelines and high-value meeting targets.",
    client:
      "Client A: Global Revenue Management & Pricing Leader | Client B: Europe's #1 Core Banking Platform",
    href: "/case-studies/sibos-2025",
    icon: "Landmark",
    id: "sibos-2025",
    image: "/images/case-studies/cs-new-1.avif",
    metric: "200+",
    metricLabel: "Badge Scans",
    solution:
      "Multi-touch TAL outreach, global-region personalization, live meeting tracking, and on-ground support kept both programs moving across booth engagement and executive meeting coordination.",
    title: "SIBOS 2025",
  },
  {
    challenge:
      "Qualified enterprise leads and a memorable brand presence despite opt-in attendee restrictions and a near-impossible 3-day asset delivery window.",
    client: "Multi-Billion-Dollar Global IT and Consulting Leader",
    href: "/case-studies/sap-sapphire-2023",
    icon: "Sparkles",
    id: "sap-sapphire-2023",
    image: "/images/case-studies/cs-10.avif",
    metric: "31",
    metricLabel: "SQLs Delivered",
    solution:
      "Active prospecting, international QR-code sourcing, brand wearables, and premium experience touches delivered 31 SQLs, exceeding target with 80% hot and warm leads.",
    title: "SAP Sapphire 2023",
  },
  {
    challenge: "Building a qualified energy-sector pipeline despite delayed attendee data.",
    client: "Global IT and Consulting Leader",
    href: "/case-studies/distributech-2023",
    icon: "Zap",
    id: "distributech-2023",
    image: "/images/case-studies/cs-9.avif",
    metric: "42",
    metricLabel: "SQLs Delivered",
    solution:
      "A 500+ prospect database, multi-channel outreach, booth execution, and rigorous on-floor qualification generated 42 SQLs against a 30-lead target.",
    title: "DistribuTECH 2023",
  },
  {
    challenge:
      "Secure C-level fintech meetings from a 1,000-account universe in one week, without delegate contact data and within a tight booth budget.",
    client: "World's #1 Pricing & Billing Organization ($450M+)",
    href: "/case-studies/money-2020-2023",
    icon: "Coins",
    id: "money-2020-2023",
    image: "/images/case-studies/cs-4.avif",
    metric: "37",
    metricLabel: "SQLs Delivered",
    solution:
      "Combined pre-event outreach, LED-led booth design, attendee engagement activations, and multilingual active prospecting delivered 37 results against a 30-result target.",
    title: "Money 20/20 2023",
  },
  {
    challenge:
      "Delivering C-level fintech meetings during a compressed Amsterdam event window with limited delegate data.",
    client: "World's No. 1 Pricing and Billing Organization",
    href: "/case-studies/money-2020-2022",
    icon: "Coins",
    id: "money-2020-2022",
    image: "/images/case-studies/cs-3.avif",
    metric: "37",
    metricLabel: "SQLs Delivered",
    solution:
      "Targeted outreach, database development, meeting coordination, and a striking booth experience helped capture Fortune 500 pipeline and 1,000+ future prospects.",
    title: "Money 20/20 2022",
  },
  {
    challenge:
      "Building a retail-focused senior pipeline with minimal preparation time and no attendee contact access.",
    client: "Global IT & Consulting Leader ($16B+ Revenue)",
    href: "/case-studies/nrf-2023",
    icon: "ShoppingBag",
    id: "nrf-2023",
    image: "/images/case-studies/cs-7.avif",
    metric: "60",
    metricLabel: "SQLs Delivered",
    solution:
      "Focused on-ground active prospecting, multilingual sales support, meeting qualification, and detailed lead intelligence doubled the client target.",
    title: "NRF 2023",
  },
  {
    challenge:
      "Delivering a multi-division executive conference while handling tight timelines, vendor issues, and a last-minute cruise permit failure.",
    client: "Global IT & Consulting Leader (Infosys)",
    href: "/case-studies/annual-sales-connect",
    icon: "Users",
    id: "annual-sales-connect",
    image: "/images/case-studies/cs-5.avif",
    metric: "150+",
    metricLabel: "Attendees Hosted",
    solution:
      "End-to-end event production, AV, F&B, giveaways, vendor negotiation, and guest experience recovery turned a complex program into a seamless executive event.",
    title: "Annual Sales Connect",
  },
];

export const GLOBAL_INDUSTRY_SERVICES = [
  {
    color: "bg-brand-blue",
    description:
      "SaaS platforms, enterprise software, cloud infrastructure, and technology product companies.",
    icon: "Cpu",
    id: "technology-saas",
    image: "/images/events/event_other_1.avif",
    title: "Technology & SaaS",
  },
  {
    color: "bg-brand-cyan",
    description: "Financial technology, payments, banking innovation, and investment platforms.",
    icon: "Coins",
    id: "fintech",
    image: "/images/events/event_other_2.avif",
    title: "FinTech",
  },
  {
    color: "bg-brand-primary",
    description:
      "Pharmaceutical companies, medical device manufacturers, and healthcare technology providers.",
    icon: "Activity",
    id: "healthcare-pharma",
    image: "/images/events/event_other_3.avif",
    title: "Healthcare & Pharma",
  },
  {
    color: "bg-brand-blue",
    description:
      "Industrial manufacturers, OEMs, and engineering companies at global trade exhibitions.",
    icon: "Settings",
    id: "manufacturing",
    image: "/images/events/event_other_4.avif",
    title: "Manufacturing",
  },
  {
    color: "bg-brand-cyan",
    description:
      "Airlines, airports, MRO providers, and aviation technology companies at major industry shows.",
    icon: "Plane",
    id: "aviation",
    image: "/images/case-studies/waf.avif",
    title: "Aviation",
  },
  {
    color: "bg-brand-primary",
    description:
      "TV broadcasters, streaming platforms, content producers, and media technology companies.",
    icon: "Radio",
    id: "media-broadcasting",
    image: "/images/services/media-production-2.avif",
    title: "Media & Broadcasting",
  },
  {
    color: "bg-brand-blue",
    description: "Mobile operators, network equipment vendors, and telecom technology innovators.",
    icon: "Wifi",
    id: "telecommunications",
    image: "/images/events/inma_2026.avif",
    title: "Telecommunications",
  },
  {
    color: "bg-brand-cyan",
    description:
      "Automotive OEMs, Tier 1 suppliers, and mobility technology companies at global auto shows.",
    icon: "Wrench",
    id: "automotive",
    image: "/images/case-studies/cs-3.avif",
    title: "Automotive",
  },
  {
    color: "bg-brand-primary",
    description:
      "Global retailers, e-commerce platforms, and consumer goods brands at major trade events.",
    icon: "ShoppingBag",
    id: "retail-ecommerce",
    image: "/images/case-studies/cs-4.avif",
    title: "Retail & E-commerce",
  },
  {
    color: "bg-brand-blue",
    description:
      "Energy producers, utility companies, and cleantech innovators at ADIPEC and similar shows.",
    icon: "Zap",
    id: "energy-utilities",
    image: "/images/case-studies/cs-5.avif",
    title: "Energy & Utilities",
  },
];
