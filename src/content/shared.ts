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

export const GLOBAL_INDUSTRY_SERVICES = [
  {
    color: "bg-brand-blue",
    description: "SaaS platforms, enterprise software, cloud infrastructure, and technology product companies.",
    icon: "Cpu",
    id: "technology-saas",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    title: "Technology & SaaS",
  },
  {
    color: "bg-brand-cyan",
    description: "Financial technology, payments, banking innovation, and investment platforms.",
    icon: "Coins",
    id: "fintech",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    title: "FinTech",
  },
  {
    color: "bg-brand-primary",
    description: "Pharmaceutical companies, medical device manufacturers, and healthcare technology providers.",
    icon: "Activity",
    id: "healthcare-pharma",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    title: "Healthcare & Pharma",
  },
  {
    color: "bg-brand-blue",
    description: "Industrial manufacturers, OEMs, and engineering companies at global trade exhibitions.",
    icon: "Settings",
    id: "manufacturing",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1200",
    title: "Manufacturing",
  },
  {
    color: "bg-brand-cyan",
    description: "Airlines, airports, MRO providers, and aviation technology companies at major industry shows.",
    icon: "Plane",
    id: "aviation",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    title: "Aviation",
  },
  {
    color: "bg-brand-primary",
    description: "TV broadcasters, streaming platforms, content producers, and media technology companies.",
    icon: "Radio",
    id: "media-broadcasting",
    image: "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1200",
    title: "Media & Broadcasting",
  },
  {
    color: "bg-brand-blue",
    description: "Mobile operators, network equipment vendors, and telecom technology innovators.",
    icon: "Wifi",
    id: "telecommunications",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
    title: "Telecommunications",
  },
  {
    color: "bg-brand-cyan",
    description: "Automotive OEMs, Tier 1 suppliers, and mobility technology companies at global auto shows.",
    icon: "Wrench",
    id: "automotive",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    title: "Automotive",
  },
  {
    color: "bg-brand-primary",
    description: "Global retailers, e-commerce platforms, and consumer goods brands at major trade events.",
    icon: "ShoppingBag",
    id: "retail-ecommerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    title: "Retail & E-commerce",
  },
  {
    color: "bg-brand-blue",
    description: "Energy producers, utility companies, and cleantech innovators at ADIPEC and similar shows.",
    icon: "Zap",
    id: "energy-utilities",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
    title: "Energy & Utilities",
  },
];
