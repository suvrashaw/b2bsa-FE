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
    challenge: "Building enterprise visibility and qualified conversations in a high-speed aviation event window",
    client: "Global aviation technology and transformation brand",
    href: "/case-studies",
    icon: "Plane",
    id: "world-aviation-festival-2023",
    image: "/images/case-studies/waf.jpg",
    metric: "70% Hot Leads",
    metricLabel: "Warm and hot lead share",
    solution:
      "Delivered booth engagement, prospecting support, and meeting coordination that turned heavy event traffic into qualified executive conversations.",
    title: "World Aviation Festival 2023",
  },
  {
    challenge: "Exceeding aggressive on-ground lead targets in a crowded financial services environment",
    client: "Enterprise banking and payments technology brands",
    href: "/case-studies",
    icon: "Building2",
    id: "sibos-2023",
    image: "/images/case-studies/sibos.jpg",
    metric: "40% Above Target",
    metricLabel: "Lead goal exceeded",
    solution:
      "Combined active prospecting, meeting coordination, and booth engagement to outperform the target and deliver director-level conversations at scale.",
    title: "SIBOS 2023",
  },
  {
    challenge: "Standing out at a competitive infrastructure event while keeping lead quality high",
    client: "Global utilities and infrastructure technology brand",
    href: "/case-studies",
    icon: "Sparkles",
    id: "distributech-international-2023",
    image: "/images/case-studies/DistribuTECH.jpg",
    metric: "80% Warm Leads",
    metricLabel: "Hot and warm lead mix",
    solution:
      "Delivered a high-visibility event presence with focused lead generation support that pushed results well past the original target.",
    title: "DistribuTECH International 2023",
  },
  {
    challenge:
      "Qualified enterprise leads and a memorable brand presence despite opt-in attendee restrictions and a near-impossible 3-day asset delivery window.",
    client: "Enterprise payments and technology brand",
    href: "/case-studies",
    icon: "Sparkles",
    id: "sap-sapphire-2023",
    image: "/images/case-studies/sap.jpg",
    metric: "31 SQLs",
    metricLabel: "Against 30-lead target",
    solution:
      "Active prospecting, international QR-code sourcing, brand wearables, and premium experience touches delivered 31 SQLs — exceeding target with 80% hot and warm leads.",
    title: "SAP Sapphire 2023",
  },
  {
    challenge:
      "Secure C-level fintech meetings from a 1,000-account universe in one week, without delegate contact data and within a tight booth budget.",
    client: "Enterprise fintech pricing and billing brand",
    href: "/case-studies",
    icon: "Coins",
    id: "money-20-20-2023",
    image: "/images/case-studies/money.jpg",
    metric: "35+ SQLs",
    metricLabel: "Meetings delivered",
    solution:
      "Combined pre-event outreach, LED-led booth design, attendee engagement activations, and multilingual active prospecting delivered 37 results against a 30-result target.",
    title: "Money 20/20 2023",
  },
];
