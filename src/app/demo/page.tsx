"use client";

import { Pencil, Sparkles, Star } from "lucide-react";
import Link from "next/link";

import type { HomeServiceItem } from "@/content/home/content";

import { BasicCards } from "@/components/items/BasicCards";
import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CaseStudyCard } from "@/components/items/CaseStudyCard";
import { CaseStudyGridCard } from "@/components/items/CaseStudyGridCard";
import { EventsCard } from "@/components/items/EventsCard";
import { IndustryShaderCard } from "@/components/items/IndustryShaderCard";
import { LinkedInCard } from "@/components/items/LinkedInCard";
import { PricingCard, type PricingTier } from "@/components/items/PricingCard";
import { RelatedServicesCard } from "@/components/items/RelatedServicesCard";
import { ServicesCard } from "@/components/items/ServicesCard";
import { ServicesImageCard } from "@/components/items/ServicesImageCard";
import { TradeShowCard, TradeShowListItem } from "@/components/items/TradeShowCard";
import { Blogs } from "@/components/sections/Blogs";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Culture } from "@/components/sections/Culture";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Hero } from "@/components/sections/Hero";
import { HomeStats } from "@/components/sections/HomeStats";
import { LeadPipelineSection } from "@/components/sections/LeadPipelineSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionContactCta } from "@/components/sections/SectionContactCta";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBlogsByTags } from "@/content/blogs";
import { LINKEDIN_POSTS } from "@/content/blogs";
import { HOME_EVENTS_CONTENT } from "@/content/home/content";
import EVENT_LEAD_PIPELINE from "@/content/services/sales-qualified-lead-generation/event-lead-generation/pipeline.json";
import { getDefaultEvents, TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";

// ─── Images ─────────────────────────────────────────────────────────────────

const IMG_WAF = "/media/home/hero/home_hero_bg.avif";
const IMG_SIBOS = "/media/home/hero/home_hero_bg.avif";
const IMG_SAP = "/media/home/hero/home_hero_bg.avif";
const IMG_DISTRIBUTECH = "/media/home/hero/home_hero_bg.avif";
const IMG_MONEY = "/media/home/hero/home_hero_bg.avif";
const IMG_EV1 = "/media/home/hero/home_hero_bg.avif";
const IMG_EV2 = "/media/home/hero/home_hero_bg.avif";
const IMG_EV3 = "/media/home/hero/home_hero_bg.avif";
const IMG_EV4 = "/media/home/hero/home_hero_bg.avif";

// ─── Pricing ─────────────────────────────────────────────────────────────────

const DEMO_PRICING_TIERS: PricingTier[] = [
  {
    color: "blue",
    description: "Ideal for event highlight reels and single product updates",
    features: [
      "1 Fully Edited Video (up to 5 min)",
      "Premium Color Grading & Correction",
      "Professional Sound Design & Mix",
      "2 Rounds of Revisions",
      "3-5 Business Days Delivery",
    ],
    icon: <Pencil className="size-5" />,
    name: "Starter Edit",
    price: 499,
  },
  {
    color: "primary",
    description: "Perfect for high-engagement, active marketing campaigns",
    features: [
      "3 Edited Brand or Demo Videos",
      "5 Social Media Cut-downs (9:16 / 1:1)",
      "Motion Graphics & Lower Thirds",
      "Subtitle & Caption Creation",
      "48-Hour Priority Turnaround",
    ],
    icon: <Sparkles className="size-5" />,
    name: "Growth Suite",
    popular: true,
    price: 1299,
  },
  {
    color: "cyan",
    description: "Scale your entire corporate media engine seamlessly",
    features: [
      "Dedicated Lead Post-Production Editor",
      "Unlimited Monthly Editing Volume",
      "Custom 3D Animations & Graphics",
      "Direct Slack & Project Management Access",
      "Priority Same-Day Delivery Support",
    ],
    icon: <Star className="size-5" />,
    name: "Enterprise Engine",
    price: 2999,
  },
];

// ─── ServicesScroll ──────────────────────────────────────────────────────────────

const DEMO_SERVICES_SCROLL_ITEMS = [
  {
    ctaText: "Get a Free 3D Booth Design",
    description:
      "We design custom exhibition stands for World Aviation Festival 2026 that maximize visitor flow, support executive conversations, and create memorable brand experiences.",
    features: [
      "Custom 3D Booth Design",
      "Turnkey Build & Installation",
      "Meeting & Hospitality Zones",
      "AV & Interactive Displays",
    ],
    id: "booth-design",
    image: "/media/home/hero/home_hero_bg.avif",
    label: "SERVICE 01",
    number: "01",
    title: "Booth Design & Build",
  },
  {
    ctaText: "Design My Engagement Strategy",
    description:
      "Create memorable interactions that attract aviation executives and decision-makers. We design immersive experiences, live demonstrations, and engagement strategies.",
    features: [
      "Interactive Visitor Experiences",
      "Executive Roundtables",
      "Product Demonstrations",
      "Audience Engagement Strategy",
    ],
    id: "experience-creation",
    image: "/media/home/hero/home_hero_bg.avif",
    label: "SERVICE 02",
    number: "02",
    title: "Experience Creation",
  },
  {
    ctaText: "See How Our Lead Gen Works",
    description:
      "Generate qualified meetings and sales opportunities before, during, and after the event. Our aviation-focused lead generation teams identify, engage, and qualify prospects in real time.",
    features: [
      "Pre-Event Outreach Campaigns",
      "Meeting Scheduling",
      "Real-Time Lead Qualification",
      "Sales Qualified Lead Delivery",
    ],
    id: "lead-gen",
    image: "/media/home/hero/home_hero_bg.avif",
    label: "SERVICE 03",
    number: "03",
    title: "On-Ground Lead Generation",
  },
];

// ─── Hero ────────────────────────────────────────────────────────────────────

const IMAGE_HERO_IMAGES = [IMG_WAF, IMG_SIBOS, IMG_SAP];
const IMAGE_HERO_CTA = { href: "/demo", label: "View Case Study" };

// ─── ServiceHero ────────────────────────────────────────────────────────────

const SERVICE_HERO_PRIMARY = { href: "/demo", label: "Get a Proposal" };

// ─── Stats ───────────────────────────────────────────────────────────────

const PROOF_STATS = [
  "250+ Events Delivered",
  "$1.2B+ Pipeline Influenced",
  "98% Client Retention",
  "40+ Countries",
];

// ─── CorporateVideoPortfolioSection ─────────────────────────────────────────

const CORP_VIDEO_PORTFOLIO_ITEMS = [
  {
    client: "Global FinTech Brand",
    href: "/case-studies",
    image: IMG_MONEY,
    title: "Money 20/20 2023",
  },
  {
    client: "Aviation Leader",
    href: "/case-studies",
    image: IMG_WAF,
    title: "World Aviation Festival",
  },
  {
    client: "Energy & Utilities",
    href: "/case-studies",
    image: IMG_DISTRIBUTECH,
    title: "DistribuTECH 2023",
  },
  {
    client: "Enterprise SaaS",
    href: "/case-studies",
    image: IMG_SAP,
    title: "SAP Sapphire 2023",
  },
];

// ─── BoothWhyChooseUs ────────────────────────────────────────────────────────

const BOOTH_WHY_ITEMS = [
  {
    description:
      "Every booth is engineered to flat-pack, ship, and re-assemble across multiple events without damage.",
    icon: "Truck",
    image: IMG_EV1,
    title: "Reusable & Travel-Ready",
  },
  {
    description:
      "In-house graphic design and production means faster turnaround and tighter brand control.",
    icon: "Sparkles",
    image: IMG_EV2,
    title: "In-House Production",
  },
  {
    description:
      "Our team handles on-site build, breakdown, and logistics so your team can focus on selling.",
    icon: "Users",
    image: IMG_EV3,
    title: "Full Service On-Site",
  },
];

// ─── Culture ─────────────────────────────────────────────────────────────────

const CULTURE_DATA = {
  description:
    "We are a team of event strategists, designers, and pipeline hunters who believe that every trade show is a revenue opportunity.",
  eyebrow: "Our Culture",
  heading: "Built by People Who Live on the Show Floor",
  reasons: [
    {
      description: "We show up early, stay late, and treat every client goal as our own.",
      id: "ownership",
      image: IMG_EV1,
      title: "Radical Ownership",
    },
    {
      description: "Every KPI we set is tied back to pipeline, SQLs, or revenue outcomes.",
      id: "outcomes",
      image: IMG_EV2,
      title: "Outcome Obsession",
    },
    {
      description:
        "We adapt to new shows, new markets, and new client challenges without missing a beat.",
      id: "agility",
      image: IMG_EV3,
      title: "Event Agility",
    },
    {
      description: "Our global team brings on-the-ground knowledge in 40+ countries.",
      id: "global",
      image: IMG_EV4,
      title: "Global Perspective",
    },
  ],
};

// ─── Capabilities ──────────────────────────────────────────────────

const FEATURE_CAROUSEL_ITEMS = [
  {
    description: "On-floor teams that engage, qualify, and book meetings with your ideal accounts.",
    icon: "Users",
    id: "prospecting",
    image: IMG_WAF,
    label: "Active Prospecting",
  },
  {
    description: "Custom booth structures engineered for brand impact, logistics, and reuse.",
    icon: "Box",
    id: "booth",
    image: IMG_EV1,
    label: "Booth Design",
  },
  {
    description: "Cinematic event video, testimonial shoots, and same-day social content.",
    icon: "Video",
    id: "media",
    image: IMG_EV2,
    label: "Media Production",
  },
  {
    description: "Pre-event outreach, scheduling, and CRM-connected meeting tracking.",
    icon: "CalendarDays",
    id: "meetings",
    image: IMG_EV3,
    label: "Meeting Coordination",
  },
];

// ─── CardsSection ───────────────────────────────────────────────────────

const BASIC_CARD_ITEMS = [
  {
    bullets: ["LED video walls", "Interactive touch displays", "Live social feed integration"],
    image: { alt: "Tech-integrated booth", src: IMG_EV1 },
    title: "Technology Integration",
  },
  {
    bullets: [
      "FSC-certified materials",
      "Modular reuse across 5+ events",
      "Carbon-offset logistics",
    ],
    image: { alt: "Sustainable booth design", src: IMG_EV2 },
    title: "Sustainable Design",
  },
  {
    bullets: [
      "Real-time badge scan capture",
      "CRM push on conversation",
      "Analytics dashboard post-show",
    ],
    image: { alt: "Data capture booth", src: IMG_EV3 },
    title: "Data-First Lead Capture",
  },
];

// ─── ServiceCarouselSection ──────────────────────────────────────────────────

const _SERVICE_CAROUSEL_ITEMS = [
  {
    description:
      "On-floor teams that engage, qualify, and book meetings with your ideal enterprise accounts.",
    href: "/services",
    id: "prospecting",
    image: IMG_WAF,
    title: "Active Prospecting",
  },
  {
    description:
      "Custom modular booth structures built for brand impact, logistics efficiency, and multi-show reuse.",
    href: "/services",
    id: "booth",
    image: IMG_EV1,
    title: "Booth Design & Production",
  },
  {
    description:
      "Pre-event scheduling, diary management, and on-site CRM-connected meeting coordination.",
    href: "/services",
    id: "meetings",
    image: IMG_EV2,
    title: "Meeting Coordination",
  },
  {
    description:
      "Cinematic event video, on-site testimonial capture, and post-event case study production.",
    href: "/services",
    id: "media",
    image: IMG_EV3,
    title: "Media Production",
  },
];

const _SERVICE_CAROUSEL_ITEMS_TYPED: HomeServiceItem[] = _SERVICE_CAROUSEL_ITEMS.map((item) => ({
  ...item,
  color: "bg-brand-blue",
  icon: "ArrowRight",
}));

// ─── Timeline ─────────────────────────────────────────────────────────

const PROCESS_TIMELINE_PHASES = [
  {
    description:
      "Our event ROI forecasting framework evaluates five criteria before committing budget: audience quality, ICP patterns, competitive presence, sponsorship value, and historical pipeline impact. We only recommend events where return justifies investment.",
    title: "Event Selection and ROI Forecasting",
  },
  {
    description:
      "We handle the end-to-end design, fabrication, and logistics of your custom exhibition stand, engineered for visitor flow and lead conversion.",
    title: "Booth Design & Fabrication",
  },
  {
    description:
      "Active prospecting using pre-event target account lists, real-time event app intelligence, and structured outreach to secure qualified meetings before you land.",
    title: "Pre-Show Targeting & Meetings",
  },
  {
    description:
      "On-the-ground management including briefed event staff, visitor engagement, lead capture systems, and meeting coordination.",
    title: "On-Site Execution & Capture",
  },
  {
    description:
      "Full reporting delivered within 72 hours of event close: qualified lead volume, cost per qualified opportunity, CRM pipeline movement, and ROI vs. forecast.",
    title: "Post-Show Analytics & Pipeline",
  },
];

// ─── ContactUs ─────────────────────────────────────────────────────

const CONTACT_CINEMATIC_PROPS = {
  backgroundImage: { alt: "Event floor", src: IMG_SIBOS },
  badge: "Limited Availability — Book Early",
  description:
    "Tell us about your next event. We'll map out a custom engagement strategy within 24 hours.",
  headingLines: ["Ready to Turn Your", "Next Event Into Pipeline?"] as [string, string],
  primaryCta: {
    href: "/contact-us",
    label: "Get a Custom Proposal",
    opensModal: false,
  },
  proofLabel: "Trusted by global brands",
  secondaryCta: { href: "/case-studies", label: "See Case Studies" },
};

// ─── Spotlight ───────────────────────────────────────────────────────────────

const SPOTLIGHT_DEMO_PROPS = {
  description:
    "Most exhibitors measure success by business cards collected. We measure it by qualified pipeline generated within 30 days of event close.",
  imageUrl: IMG_EV1,
  label: "Our Approach",
  stats: PROOF_STATS,
  titleLine1: "Event ROI That",
  titleLine2: "You Can Measure",
};

// ─── BlogsCarousel ──────────────────────────────────────────────────────

const DEMO_BLOG_POSTS = getBlogsByTags([], 4);

// ─── IndustryShaderCard ──────────────────────────────────────────────────────

const INDUSTRY_SHADER_ITEMS = [
  {
    description: "SaaS, cloud infrastructure, and enterprise software vendors.",
    icon: "Monitor",
    image: "/media/home/hero/home_hero_bg.avif",
    title: "Technology & SaaS",
  },
  {
    description: "Payments, banking innovation, and financial technology brands.",
    icon: "CreditCard",
    image: "/media/home/hero/home_hero_bg.avif",
    title: "FinTech",
  },
  {
    description: "Energy, renewables, and utilities at major industry exhibitions.",
    icon: "Zap",
    image: "/media/home/hero/home_hero_bg.avif",
    title: "Energy & Utilities",
  },
];

// ─── RelatedServicesCard ─────────────────────────────────────────────────────

const RELATED_SERVICES_ITEMS = [
  {
    href: "/tradeshow-booth-solutions/trade-show-booth-builder",
    title: "Trade Show Booth Builder",
  },
  { href: "/tradeshow-booth-solutions/trade-show-booth-design", title: "Booth Design" },
  {
    href: "/sales-qualified-lead-generation/event-lead-generation",
    title: "Event Lead Generation",
  },
];

// ─── ServicesImageCard ───────────────────────────────────────────────────────

const SERVICES_IMAGE_CARD_ITEMS = [
  { image: IMG_EV1, service: "40×40 Ft Island Booth Design & Production" },
  { image: IMG_EV2, service: "Active Prospecting & SQL Generation" },
  { image: IMG_EV3, service: "On-Site Media & Video Production" },
];

// ─── DemoLabel ───────────────────────────────────────────────────────────────

type PageLink = { href: string; label: string };

const COMPONENT_PAGES: Record<string, PageLink[]> = {
  Blogs: [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
  ],
  BlogsCarousel: [
    {
      href: "/tradeshow-booth-solutions/booth-hostess-services",
      label: "Booth Hostess",
    },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-rental",
      label: "Trade Show Booth Rental",
    },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Booth Builder",
    },
  ],
  BoothWhyChooseUs: [
    {
      href: "/tradeshow-booth-solutions/booth-hostess-services",
      label: "Booth Hostess",
    },
    {
      href: "/global-event-solutions/corporate-event-solutions",
      label: "Corp Events",
    },
    {
      href: "/global-event-solutions/corporate-networking-events",
      label: "Corp Networking",
    },
  ],
  Capabilities: [
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  CardsSection: [
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Booth Builder",
    },
  ],
  CaseStudies: [
    { href: "/", label: "Home" },
    { href: "/global-event-solutions", label: "Service Hub" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  CaseStudyGridCard: [{ href: "/case-studies", label: "Case Studies" }],
  ClientLogos: [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact-us", label: "Contact" },
  ],
  ContactUs: [
    {
      href: "/market-research/data-augmentation-services",
      label: "Data Augmentation Services",
    },
    { href: "/global-event-solutions", label: "Global ES" },
    { href: "/market-research", label: "Market Research" },
  ],
  ContactUsForm: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/contact-us", label: "Contact" },
  ],
  CorporateVideoPortfolioSection: [
    {
      href: "/media-production/corporate-video-production",
      label: "Corporate Video",
    },
  ],
  Culture: [{ href: "/about-us", label: "About" }],
  Events: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-design",
      label: "Booth Design",
    },
  ],
  FAQ: [
    { href: "/", label: "Home" },
    { href: "/terms-and-conditions", label: "Terms" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  FAQAccordion: [
    {
      href: "/tradeshow-booth-solutions/booth-hostess-services",
      label: "Booth Hostess",
    },
    {
      href: "/global-event-solutions/corporate-event-solutions",
      label: "Corp Events",
    },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Booth Builder",
    },
  ],
  Hero: [
    { href: "/tradeshow-calendar", label: "Trade Show Cal." },
    { href: "/case-studies/waf-2025", label: "Case Study" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  HomeStats: [
    { href: "/", label: "Home" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
    { href: "/global-event-solutions", label: "Service Hub" },
  ],
  IndustriesAlt: [
    {
      href: "/media-production/corporate-video-production",
      label: "Corporate Video",
    },
  ],
  IndustryShaderCard: [{ href: "/about-us", label: "About" }],
  LeadPipelineSection: [
    {
      href: "/sales-qualified-lead-generation/event-lead-generation",
      label: "Event Lead Generation",
    },
  ],
  LinkedInFeed: [{ href: "/", label: "Home" }],
  Pricing: [
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  RelatedServicesCard: [
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  RentVsBuySection: [
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-rental",
      label: "Trade Show Booth Rental",
    },
  ],
  SectionContactCta: [
    {
      href: "/media-production/virtual-video-production",
      label: "Virtual Video Production",
    },
    {
      href: "/media-production/corporate-video-production",
      label: "Corporate Video",
    },
  ],
  ServicesImageCard: [{ href: "/case-studies/adobe-summit-2025", label: "Case Study Detail" }],
  ServicesScroll: [{ href: "/demo", label: "Demo" }],
  ServicesStack: [
    { href: "/", label: "Home" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  Spotlight: [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/global-event-solutions", label: "Service Hub" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  StickyScroll: [
    { href: "/", label: "Home" },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-rental",
      label: "Trade Show Booth Rental",
    },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Booth Builder",
    },
  ],
  Testimonials: [{ href: "/", label: "Home" }],
  Timeline: [
    {
      href: "/tradeshow-booth-solutions/booth-hostess-services",
      label: "Booth Hostess",
    },
    {
      href: "/tradeshow-booth-solutions/booth-logistics-services",
      label: "Event Logistics",
    },
    {
      href: "/tradeshow-booth-solutions/trade-show-booth-builder",
      label: "Service Detail",
    },
  ],
  TradeShowCard: [{ href: "/tradeshow-calendar", label: "Trade Show Calendar" }],
};

const COMPONENT_DEPENDENCIES: Record<string, { items: string[]; ui: string[] }> = {
  Blogs: {
    items: ["BlogCard", "BlogCardGrid"],
    ui: ["Button", "Eyebrow", "Heading"],
  },
  BlogsCarousel: { items: ["BlogsCarouselCard"], ui: ["Button", "Heading"] },
  BoothWhyChooseUs: { items: ["BoothWhyCard"], ui: ["Button", "Heading"] },
  Capabilities: { items: [], ui: ["Eyebrow", "Heading", "Icon"] },
  CardsSection: { items: ["BasicCards"], ui: ["Heading"] },
  CaseStudies: {
    items: ["CaseStudyItem"],
    ui: ["Button", "Eyebrow", "Heading"],
  },
  CaseStudyGridCard: { items: [], ui: [] },
  ClientLogos: { items: [], ui: ["Heading"] },
  ContactUs: { items: [], ui: ["Button", "ContactModal", "Heading"] },
  ContactUsForm: { items: [], ui: ["Eyebrow", "Heading"] },
  CorporateVideoPortfolioSection: { items: [], ui: ["Heading"] },
  Culture: { items: ["CultureReasonCard"], ui: ["Heading"] },
  Events: { items: [], ui: ["Button", "Eyebrow", "Heading"] },

  FAQAccordion: { items: ["FAQAccordionItem"], ui: ["Eyebrow", "Heading"] },
  Hero: { items: [], ui: ["Heading"] },
  HomeStats: { items: [], ui: ["Heading"] },
  IndustryShaderCard: { items: [], ui: ["Icon"] },
  LeadPipelineSection: { items: [], ui: ["Heading"] },
  LinkedInFeed: { items: [], ui: ["Heading"] },
  Pricing: { items: ["PricingCard"], ui: ["Eyebrow", "Heading"] },
  RelatedServicesCard: { items: [], ui: [] },
  RentVsBuySection: { items: [], ui: ["Heading"] },
  SectionContactCta: { items: [], ui: ["Button", "ContactModal"] },
  ServicesImageCard: { items: [], ui: [] },
  ServicesScroll: { items: [], ui: ["Button"] },
  ServicesStack: { items: ["ServicesCard"], ui: ["Eyebrow", "Heading"] },
  Spotlight: { items: [], ui: ["ContactModal", "Heading"] },
  StickyScroll: {
    items: [],
    ui: ["Button", "ContactModal", "Eyebrow", "Heading"],
  },
  Testimonials: {
    items: ["TestimonialCarouselCard"],
    ui: ["Eyebrow", "Heading"],
  },
  Timeline: { items: [], ui: ["Heading"] },
  TradeShowCard: { items: [], ui: ["Button"] },
};

const DemoLabel = ({ name }: { name: string }) => {
  const pages = COMPONENT_PAGES[name] ?? [];
  const deps = COMPONENT_DEPENDENCIES[name] ?? { items: [], ui: [] };

  return (
    <div className="sticky top-12 z-40 border-b border-white/10 bg-brand-charcoal/98 backdrop-blur-sm">
      <div className="flex items-center gap-3 px-6 pt-2 pb-1">
        <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase">
          section
        </span>
        <span className="font-mono text-xs font-bold tracking-wide text-brand-cyan">{name}</span>
      </div>
      {pages.length > 0 && (
        <div className="flex flex-wrap gap-1.5 px-6 pb-2">
          {pages.map((page) => (
            <a
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/50 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
              href={page.href}
              key={page.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {page.label}
            </a>
          ))}
        </div>
      )}
      {pages.length === 0 && (
        <div className="px-6 pb-2">
          <span className="font-mono text-[10px] text-white/25 italic">demo only</span>
        </div>
      )}

      {/* Dependencies */}
      {(deps.ui.length > 0 || deps.items.length > 0) && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-6 pb-2">
          {deps.ui.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                UI:
              </span>
              {deps.ui.map((uiName) => (
                <span
                  className="rounded border border-brand-blue/30 bg-brand-blue/10 px-1.5 py-0.5 font-mono text-[9px] text-brand-blue/80"
                  key={uiName}
                >
                  {uiName}
                </span>
              ))}
            </div>
          )}
          {deps.items.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                Items:
              </span>
              {deps.items.map((itemName) => (
                <span
                  className="rounded border border-purple-500/30 bg-purple-500/10 px-1.5 py-0.5 font-mono text-[9px] text-purple-400"
                  key={itemName}
                >
                  {itemName}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

const DemoPage = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      {/* Sticky demo banner */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-brand-charcoal px-4 py-3 shadow-xl md:px-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm font-black text-white">B2BSA2 / DEMO</span>
          <span className="hidden font-mono text-xs text-white/40 md:inline">
            — all section components
          </span>
        </div>
        <span className="rounded-full bg-brand-blue/30 px-3 py-1 font-mono text-xs text-brand-cyan">
          /demo
        </span>
      </div>

      {/* 01 – Hero (image cycling) */}
      <DemoLabel name="Hero" />
      <Hero
        images={IMAGE_HERO_IMAGES}
        primaryCta={IMAGE_HERO_CTA}
        title="World Aviation Festival 2025"
      />

      {/* 03 – Hero (video) */}
      <DemoLabel name="Hero (video)" />
      <Hero
        description="From initial brief to post-event debrief — our active prospecting teams deliver qualified conversations at the world's most competitive B2B events."
        primaryCta={SERVICE_HERO_PRIMARY}
        title="Active Prospecting"
      />

      {/* 04 – Spotlight */}
      <DemoLabel name="Spotlight" />
      <Spotlight {...SPOTLIGHT_DEMO_PROPS} />

      {/* 05 – ClientLogos */}
      <DemoLabel name="ClientLogos" />
      <ClientLogos />

      {/* 07 – HomeStats */}
      <DemoLabel name="HomeStats" />
      <HomeStats />

      {/* 12 – Culture */}
      <DemoLabel name="Culture" />
      <Culture data={CULTURE_DATA} />

      {/* 13 – ServicesStack */}
      <DemoLabel name="ServicesStack" />
      <ServicesStack />

      {/* 14 – RelatedServicesCard */}
      <DemoLabel name="RelatedServicesCard" />
      <CardsGrid heading="Related Services">
        {RELATED_SERVICES_ITEMS.map((service, index) => (
          <RelatedServicesCard index={index} key={service.href} service={service} />
        ))}
      </CardsGrid>

      {/* 15 – Capabilities */}
      <DemoLabel name="Capabilities" />
      <ServicesScroll
        description="Four core capabilities that turn trade show investment into enterprise pipeline."
        heading="How We Drive Results"
        services={FEATURE_CAROUSEL_ITEMS}
      />

      {/* 16 – IndustryShaderCard */}
      <DemoLabel name="IndustryShaderCard" />
      <CardsGrid heading="Industries We Serve">
        {INDUSTRY_SHADER_ITEMS.map((item, index) => (
          <IndustryShaderCard
            description={item.description}
            icon={item.icon}
            image={item.image}
            index={index}
            key={item.title}
            title={item.title}
          />
        ))}
      </CardsGrid>

      {/* 17 – StickyScroll */}
      <DemoLabel name="StickyScroll" />
      <StickyScroll />

      {/* 17b - ServicesScroll */}
      <DemoLabel name="ServicesScroll" />
      <ServicesScroll services={DEMO_SERVICES_SCROLL_ITEMS} />

      {/* 18 – BoothWhyChooseUs */}
      <DemoLabel name="BoothWhyChooseUs" />
      <CardsGrid cols={4} heading="Why Clients Choose Our Booths" id="why-choose-us">
        {BOOTH_WHY_ITEMS.map((item, i) => (
          <BoothWhyCard index={i} item={item} key={item.title} />
        ))}
      </CardsGrid>

      {/* 19 – CardsSection */}
      <DemoLabel name="CardsSection" />
      <CardsGrid heading="Future-Ready Stands">
        {BASIC_CARD_ITEMS.map((item) => (
          <BasicCards item={item} key={item.title} />
        ))}
      </CardsGrid>

      {/* 20 – ServiceCarouselSection */}
      <DemoLabel name="ServiceCarouselSection" />
      <Carousel cols={4} heading="Active Prospecting & Events">
        {_SERVICE_CAROUSEL_ITEMS_TYPED.map((item) => (
          <ServicesCard ctaLabel="Get Started" key={item.id} service={item} />
        ))}
      </Carousel>

      {/* 22 – CorporateVideoPortfolioSection */}
      <DemoLabel name="CorporateVideoPortfolioSection" />
      <CardsGrid
        className="bg-[#111111] text-white"
        heading={
          <SectionHeader as="h2" className="max-w-4xl text-white lg:text-4xl">
            Recent Event Programs
          </SectionHeader>
        }
        headingAlign="left"
      >
        {CORP_VIDEO_PORTFOLIO_ITEMS.map((item) => (
          <CaseStudyCard item={item} key={item.title} />
        ))}
      </CardsGrid>

      {/* 23 – Timeline */}
      <DemoLabel name="Timeline" />
      <ProcessTimeline heading="What We Manage" phases={PROCESS_TIMELINE_PHASES} />

      {/* 23b – LeadPipelineSection */}
      <DemoLabel name="LeadPipelineSection" />
      <LeadPipelineSection
        description={EVENT_LEAD_PIPELINE.description}
        heading={EVENT_LEAD_PIPELINE.heading}
        stages={EVENT_LEAD_PIPELINE.stages}
        steps={EVENT_LEAD_PIPELINE.steps}
      />

      {/* 24 – CaseStudies */}
      <DemoLabel name="CaseStudies" />
      <CaseStudies />

      {/* 24b – CaseStudyGridCard */}
      <DemoLabel name="CaseStudyGridCard" />
      <section className="bg-brand-gray py-12">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          <SectionHeader as="h2" className="mb-8 text-center">
            Case Study Grid Card
          </SectionHeader>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <CaseStudyGridCard
              colSpan="md:col-span-1"
              description="How B2B Sales Arrow Engineered End-to-End Impact at Adobe Summit 2025"
              image="/media/case-studies/cs-new-9.avif"
              metric="70+"
              metricLabel="SQLs Generated"
              revealed
              title="Adobe Summit 2025"
            />
            <CaseStudyGridCard
              colSpan="md:col-span-1"
              description="World Aviation Festival — Full Booth & Lead Generation Program"
              image={IMG_WAF}
              metric="120+"
              metricLabel="Qualified Meetings"
              revealed
              title="World Aviation Festival 2025"
            />
          </div>
        </div>
      </section>

      {/* 24c – ServicesImageCard */}
      <DemoLabel name="ServicesImageCard" />
      <section className="bg-brand-charcoal py-12">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          <SectionHeader as="h2" className="mb-8 text-center text-white">
            Services Delivered
          </SectionHeader>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_IMAGE_CARD_ITEMS.map((item, index) => (
              <ServicesImageCard
                image={item.image}
                index={index}
                key={item.service}
                service={item.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 26 – Testimonials */}
      <DemoLabel name="Testimonials" />
      <Testimonials />

      {/* 27 – Events */}
      <DemoLabel name="Events" />
      <CardsGrid
        cols={3}
        description={HOME_EVENTS_CONTENT.description}
        heading={HOME_EVENTS_CONTENT.heading}
        id="events-demo"
      >
        {getDefaultEvents().map((event, i) => (
          <EventsCard
            ctaLabel={HOME_EVENTS_CONTENT.ctaLabel ?? "View Event"}
            event={event}
            flipStyle="diagonalWipe"
            index={i}
            key={event.id}
          />
        ))}
      </CardsGrid>

      {/* 27b – TradeShowCard + TradeShowListItem */}
      <DemoLabel name="TradeShowCard" />
      <section className="bg-brand-gray py-12">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          <SectionHeader as="h2" className="mb-8 text-center">
            Trade Show Cards
          </SectionHeader>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRADE_SHOW_CALENDAR_EVENTS.slice(0, 3).map((show) => (
              <TradeShowCard key={show.id} show={show} />
            ))}
          </div>
          <SectionHeader as="h2" className="mb-6 text-center">
            Trade Show List Items
          </SectionHeader>
          <div className="space-y-4">
            {TRADE_SHOW_CALENDAR_EVENTS.slice(0, 3).map((show) => (
              <TradeShowListItem key={show.id} show={show} />
            ))}
          </div>
        </div>
      </section>

      {/* 30 – Blogs */}
      <DemoLabel name="Blogs" />
      <Blogs />

      {/* 31 – BlogsCarousel */}
      <DemoLabel name="BlogsCarousel" />
      <Carousel
        cols={4}
        heading="From the Blog"
        headingAction={
          <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        }
        headingAlign="left"
        id="blogs"
      >
        {DEMO_BLOG_POSTS.map((post) => (
          <BlogsCarouselCard key={post.id} post={post} />
        ))}
      </Carousel>

      {/* 32 – Pricing */}
      <DemoLabel name="Pricing" />
      <Carousel
        cols={3}
        description="High-end post-production packages tailored to B2B teams"
        heading="Creative Video Editing Pricing"
        id="pricing-demo"
      >
        {DEMO_PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </Carousel>

      {/* 33 – FAQ */}

      {/* 34 – FAQAccordion */}
      <DemoLabel name="FAQAccordion" />
      <FAQAccordion />

      {/* 35 – ContactUs */}
      <DemoLabel name="ContactUs" />
      <ContactUs
        backgroundImage={CONTACT_CINEMATIC_PROPS.backgroundImage}
        badge={CONTACT_CINEMATIC_PROPS.badge}
        description={CONTACT_CINEMATIC_PROPS.description}
        headingLines={CONTACT_CINEMATIC_PROPS.headingLines}
        primaryCta={CONTACT_CINEMATIC_PROPS.primaryCta}
        secondaryCta={CONTACT_CINEMATIC_PROPS.secondaryCta}
      />

      {/* 35b – SectionContactCta */}
      <DemoLabel name="SectionContactCta" />
      <SectionContactCta label="Contact Our Team" />

      {/* 36 – ContactUsForm */}
      <DemoLabel name="ContactUsForm" />
      <ContactUsForm />

      {/* 39 – LinkedInFeed */}
      <DemoLabel name="LinkedInFeed" />
      <Carousel
        description="Get real-time updates on booth builds, exhibition projects, event staffing, Event lead generation campaigns, and global trade show experiences from our team worldwide."
        heading="Follow Our Latest Event Executions on LinkedIn"
      >
        {LINKEDIN_POSTS.map((post, i) => (
          <LinkedInCard index={i} key={post.id} post={post} />
        ))}
      </Carousel>
    </main>
  );
};

export default DemoPage;
