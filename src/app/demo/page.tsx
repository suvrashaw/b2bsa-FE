"use client";

import { useCallback, useState } from "react";

import type { SharedBlogPost } from "@/content/blogs";

import { AboutCoreValues } from "@/components/sections/AboutCoreValues";
import { Blogs } from "@/components/sections/Blogs";
import { BlogsCarousel } from "@/components/sections/BlogsCarousel";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { CardsSection } from "@/components/sections/CardsSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { ContactUs } from "@/components/sections/ContactUs";
import { CorporateVideoIndustriesSection } from "@/components/sections/CorporateVideoIndustriesSection";
import { CorporateVideoPortfolioSection } from "@/components/sections/CorporateVideoPortfolioSection";
import { Culture } from "@/components/sections/Culture";
import { Events } from "@/components/sections/Events";
import { FAQ } from "@/components/sections/FAQ";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FeatureCarouselSection } from "@/components/sections/FeatureCarouselSection";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { ImageHero } from "@/components/sections/ImageHero";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentVsBuySection } from "@/components/sections/RentVsBuySection";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { Testimonials } from "@/components/sections/Testimonials";
import { TextHero } from "@/components/sections/TextHero";
import { TradeShowCalendarDirectory } from "@/components/sections/TradeShowCalendarDirectory";
import { VideoHero } from "@/components/sections/VideoHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { BLOG_HERO } from "@/content/blog";
import { SHARED_BLOG_POSTS } from "@/content/blogs";
import { CASE_STUDIES_PAGE_CONTENT, CASE_STUDIES_PAGE_STUDIES } from "@/content/case-studies";
import {
  TRADE_SHOW_CALENDAR_EVENTS,
  TRADE_SHOW_CALENDAR_HERO,
} from "@/content/trade-show-calendar";

// ─── Images ─────────────────────────────────────────────────────────────────

const IMG_WAF = "/images/case-studies/waf.avif";
const IMG_SIBOS = "/images/case-studies/sibos.avif";
const IMG_SAP = "/images/case-studies/cs-10.avif";
const IMG_DISTRIBUTECH = "/images/case-studies/cs-9.avif";
const IMG_MONEY = "/images/case-studies/cs-new-1.avif";
const _IMG_NRF = "/images/case-studies/cs-new-10.avif";
const _IMG_CS2 = "/images/case-studies/cs-new-2.avif";
const _IMG_CS3 = "/images/case-studies/cs-new-3.avif";
const IMG_EV1 = "/images/events/event_other_1.avif";
const IMG_EV2 = "/images/events/event_other_2.avif";
const IMG_EV3 = "/images/events/event_other_3.avif";
const IMG_EV4 = "/images/events/event_other_4.avif";

// ─── ImageHero ──────────────────────────────────────────────────────────────

const IMAGE_HERO_IMAGES = [IMG_WAF, IMG_SIBOS, IMG_SAP];
const IMAGE_HERO_CTA = { href: "/demo", label: "View Case Study" };

// ─── ServiceHero ────────────────────────────────────────────────────────────

const SERVICE_HERO_PRIMARY = { href: "/demo", label: "Get a Proposal" };
const SERVICE_HERO_SECONDARY = { href: "/demo", label: "See Our Work" };

// ─── ProofBar ───────────────────────────────────────────────────────────────

const PROOF_STATS = [
  "250+ Events Delivered",
  "$1.2B+ Pipeline Influenced",
  "98% Client Retention",
  "40+ Countries",
];

// ─── RelatedServices ────────────────────────────────────────────────────────

const RELATED_SERVICES = [
  { href: "/services", title: "Active Prospecting" },
  { href: "/services", title: "Booth Design & Production" },
  { href: "/services", title: "Meeting Coordination" },
  { href: "/services", title: "Media Production" },
];

// ─── CorporateVideoIndustriesSection ────────────────────────────────────────

const CORP_VIDEO_INDUSTRIES = [
  {
    description:
      "SaaS platforms, cloud infrastructure, and enterprise software vendors driving pipeline at major tech events.",
    title: "Technology & SaaS",
  },
  {
    description:
      "Payments, banking innovation, and financial technology brands at Money20/20 and SIBOS.",
    title: "FinTech",
  },
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
  { client: "Enterprise SaaS", href: "/case-studies", image: IMG_SAP, title: "SAP Sapphire 2023" },
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

// ─── FeatureCarouselSection ──────────────────────────────────────────────────

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

// ─── GlobalPresence ──────────────────────────────────────────────────────────

const GLOBAL_PRESENCE_DATA = {
  cities: [
    { color: "#4BC0D9", lat: 51.5074, lng: -0.1278, name: "London", size: 0.6 },
    { color: "#1E6091", lat: 40.7128, lng: -74.006, name: "New York", size: 0.7 },
    { color: "#4BC0D9", lat: 25.2048, lng: 55.2708, name: "Dubai", size: 0.5 },
    { color: "#1E6091", lat: 52.52, lng: 13.405, name: "Berlin", size: 0.45 },
    { color: "#4BC0D9", lat: 1.3521, lng: 103.8198, name: "Singapore", size: 0.5 },
    { color: "#1E6091", lat: 48.8566, lng: 2.3522, name: "Paris", size: 0.45 },
    { color: "#4BC0D9", lat: 37.7749, lng: -122.4194, name: "San Francisco", size: 0.5 },
    { color: "#1E6091", lat: 35.6762, lng: 139.6503, name: "Tokyo", size: 0.4 },
  ],
  description:
    "Our team has delivered enterprise event programs across 40+ countries, from Las Vegas to Singapore.",
  title: "A Global Footprint",
};

// ─── RentVsBuySection ────────────────────────────────────────────────────────

const RENT_VS_BUY_REASONS = [
  {
    description:
      "No capex, no warehouse, no maintenance. Pay per show and scale with your calendar.",
    icon: "DollarSign",
    title: "Zero Capital Outlay",
  },
  {
    description:
      "Access fresh, brand-aligned designs for every event without reusing stale assets.",
    icon: "Sparkles",
    title: "Always Fresh Creative",
  },
  {
    description: "We ship, build, and break down — your team lands and starts selling.",
    icon: "Truck",
    title: "End-to-End Logistics",
  },
  {
    description: "Need a 10×10 for a regional show and a 30×30 island for your flagship? We flex.",
    icon: "Maximize2",
    title: "Scalable Footprint",
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

// ─── ProcessTimeline ─────────────────────────────────────────────────────────

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

// ─── AboutCoreValues ─────────────────────────────────────────────────────────

const ABOUT_CORE_VALUES_DATA = {
  description:
    "These are the principles that guide every client engagement, every hire, and every event we run.",
  heading: "What We Stand For",
  values: [
    "Pipeline over presence — every show must drive revenue",
    "Radical ownership of client outcomes",
    "Transparent reporting, always",
    "Speed without sacrificing quality",
    "Global expertise, local execution",
    "People-first culture, results-first mindset",
  ],
};



// ─── ContactCinematicCTA ─────────────────────────────────────────────────────

const CONTACT_CINEMATIC_PROPS = {
  backgroundImage: { alt: "Event floor", src: IMG_SIBOS },
  badge: "Limited Availability — Book Early",
  description:
    "Tell us about your next event. We'll map out a custom engagement strategy within 24 hours.",
  headingLines: ["Ready to Turn Your", "Next Event Into Pipeline?"] as [string, string],
  primaryCta: { href: "/contact", label: "Get a Custom Proposal", opensModal: false },
  proofLabel: "Trusted by global brands",
  proofLogos: [
    { alt: "Client A", src: IMG_EV1 },
    { alt: "Client B", src: IMG_EV2 },
    { alt: "Client C", src: IMG_EV3 },
  ],
  secondaryCta: { href: "/case-studies", label: "See Case Studies" },
};

// ─── Spotlight ───────────────────────────────────────────────────────────────

const SPOTLIGHT_DEMO_PROPS = {
  ctaHref: "/case-studies",
  ctaLabel: "See Case Studies",
  description:
    "Most exhibitors measure success by business cards collected. We measure it by qualified pipeline generated within 30 days of event close.",
  imageUrl: IMG_EV1,
  label: "Our Approach",
  titleLine1: "Event ROI That",
  titleLine2: "You Can Measure",
};

// ─── BlogsCarousel ──────────────────────────────────────────────────────

const DEMO_BLOG_POSTS = SHARED_BLOG_POSTS.slice(0, 4) as SharedBlogPost[];

// ─── CaseStudiesGrid ─────────────────────────────────────────────────────────

const GRID_FILTERS = CASE_STUDIES_PAGE_CONTENT.gridFilters;
const GRID_EMPTY_TITLE = "No case studies found";
const GRID_EMPTY_DESC = "Try a different filter to find relevant case studies.";

// ─── DemoLabel ───────────────────────────────────────────────────────────────

type PageLink = { href: string; label: string };

const COMPONENT_PAGES: Record<string, PageLink[]> = {
  AboutCoreValues: [{ href: "/about", label: "About" }],

  Blogs: [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/thank-you", label: "Thank You" },
  ],
  BlogsCarousel: [
    { href: "/services/global-event-solutions/booth-hostess-services", label: "Booth Hostess" },
    { href: "/services/global-event-solutions/event-booth-rental", label: "Event Booth Rental" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Booth Builder" },
  ],
  BoothWhyChooseUs: [
    { href: "/services/global-event-solutions/booth-hostess-services", label: "Booth Hostess" },
    { href: "/services/global-event-solutions/corporate-event-solutions", label: "Corp Events" },
    {
      href: "/services/global-event-solutions/corporate-networking-events",
      label: "Corp Networking",
    },
  ],
  CardsSection: [
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Booth Builder" },
  ],
  CaseStudies: [
    { href: "/", label: "Home" },
    { href: "/services/global-event-solutions", label: "Service Hub" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  CaseStudiesGrid: [{ href: "/case-studies", label: "Case Studies" }],
  CinematicSequence: [],
  ClientLogos: [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ],
  ContactCinematicCTA: [
    { href: "/services/data-augmentation", label: "Data Augmentation" },
    { href: "/services/global-event-solutions", label: "Global ES" },
    { href: "/services/market-research", label: "Market Research" },
  ],
  ContactUs: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  CorporateVideoIndustriesSection: [
    { href: "/services/media-production/corporate-video-production", label: "Corporate Video" },
  ],
  CorporateVideoPortfolioSection: [
    { href: "/services/media-production/corporate-video-production", label: "Corporate Video" },
  ],
  Culture: [{ href: "/about", label: "About" }],
  Events: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services/global-event-solutions/trade-show-booth-design", label: "Booth Design" },
  ],
  FAQ: [
    { href: "/", label: "Home" },
    { href: "/terms-and-conditions", label: "Terms" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  FAQAccordion: [
    { href: "/services/global-event-solutions/booth-hostess-services", label: "Booth Hostess" },
    { href: "/services/global-event-solutions/corporate-event-solutions", label: "Corp Events" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Booth Builder" },
  ],
  FeatureCarouselSection: [
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  GlobalPresence: [{ href: "/about", label: "About" }],
  ImageHero: [
    { href: "/trade-show-calendar", label: "Trade Show Cal." },
    { href: "/case-studies/waf-2025", label: "Case Study" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  Pricing: [
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  ProcessTimeline: [
    { href: "/services/global-event-solutions/booth-hostess-services", label: "Booth Hostess" },
    { href: "/services/global-event-solutions/booth-logistics-services", label: "Event Logistics" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  ProofBar: [
    { href: "/case-studies/waf-2025", label: "Case Study" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
    { href: "/services/global-event-solutions", label: "Service Hub" },
  ],
  RelatedServices: [
    { href: "/case-studies/waf-2025", label: "Case Study" },
    { href: "/services/data-augmentation", label: "Data Augmentation" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  RentVsBuySection: [
    { href: "/services/global-event-solutions/event-booth-rental", label: "Event Booth Rental" },
  ],
  ServicesStack: [
    { href: "/", label: "Home" },
    { href: "/thank-you", label: "Thank You" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  Spotlight: [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/services/global-event-solutions", label: "Service Hub" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
  ],
  StickyScroll: [
    { href: "/", label: "Home" },
    { href: "/services/global-event-solutions/event-booth-rental", label: "Event Booth Rental" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Booth Builder" },
  ],
  Testimonials: [{ href: "/", label: "Home" }],
  TextHero: [{ href: "/blogs", label: "Blogs" }],
  TradeShowCalendarDirectory: [{ href: "/trade-show-calendar", label: "Trade Show Cal." }],
  WhoWeAre: [
    { href: "/", label: "Home" },
    { href: "/services/global-event-solutions/trade-show-booth-builder", label: "Service Detail" },
    { href: "/services/global-event-solutions", label: "Service Hub" },
  ],
};

const DemoLabel = ({ name }: { name: string }) => {
  const pages = COMPONENT_PAGES[name] ?? [];
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
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function DemoPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [caseStudiesGridPage, setCaseStudiesGridPage] = useState(1);

  const filteredStudies =
    activeFilter === "All"
      ? CASE_STUDIES_PAGE_STUDIES
      : CASE_STUDIES_PAGE_STUDIES.filter((s) => s.serviceCategories.includes(activeFilter));
  const handleCaseStudiesGridFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setCaseStudiesGridPage(1);
  }, []);

  return (
    <main className="min-h-screen bg-brand-gray">
      {/* Sticky demo banner */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-brand-charcoal px-8 py-3 shadow-xl">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm font-black text-white">B2BSA2 / DEMO</span>
          <span className="font-mono text-xs text-white/40">— all section components</span>
        </div>
        <span className="rounded-full bg-brand-blue/30 px-3 py-1 font-mono text-xs text-brand-cyan">
          /demo
        </span>
      </div>

      {/* 01 – ImageHero */}
      <DemoLabel name="ImageHero" />
      <ImageHero
        eyebrow="World Aviation Festival 2025 · London, UK"
        images={IMAGE_HERO_IMAGES}
        primaryCta={IMAGE_HERO_CTA}
        title="World Aviation Festival 2025"
      />

      {/* 02 – TextHero */}
      <DemoLabel name="TextHero" />
      <TextHero {...BLOG_HERO} />

      {/* 03 – VideoHero */}
      <DemoLabel name="VideoHero" />
      <VideoHero
        description="From initial brief to post-event debrief — our active prospecting teams deliver qualified conversations at the world's most competitive B2B events."
        primaryCta={SERVICE_HERO_PRIMARY}
        secondaryCta={SERVICE_HERO_SECONDARY}
        title="Active Prospecting"
      />

      {/* 04 – Spotlight */}
      <DemoLabel name="Spotlight" />
      <div className="px-8 py-20">
        <Spotlight {...SPOTLIGHT_DEMO_PROPS} />
      </div>

      {/* 05 – CinematicSequence */}
      <DemoLabel name="CinematicSequence" />
      <CinematicSequence />

      {/* 05 – ClientLogos */}
      <DemoLabel name="ClientLogos" />
      <ClientLogos />

      {/* 06 – ProofBar */}
      <DemoLabel name="ProofBar" />
      <ProofBar
        description="Consistent, measurable results across every engagement — from startup exhibitors to Fortune 500 event programs."
        heading="Proven at Scale"
        imageUrl="/images/Frames/ezgif-frame-017.jpg"
        stats={PROOF_STATS}
      />

      {/* 07 – WhoWeAre */}
      <DemoLabel name="WhoWeAre" />
      <WhoWeAre />

      {/* 08 – AboutCoreValues */}
      <DemoLabel name="AboutCoreValues" />
      <AboutCoreValues data={ABOUT_CORE_VALUES_DATA} />



      {/* 12 – Culture */}
      <DemoLabel name="Culture" />
      <Culture data={CULTURE_DATA} />

      {/* 13 – ServicesStack */}
      <DemoLabel name="ServicesStack" />
      <ServicesStack />

      {/* 15 – FeatureCarouselSection */}
      <DemoLabel name="FeatureCarouselSection" />
      <FeatureCarouselSection
        description="Four core capabilities that turn trade show investment into enterprise pipeline."
        eyebrow="Capabilities"
        features={FEATURE_CAROUSEL_ITEMS}
        heading="How We Drive Results"
      />

      {/* 16 – RelatedServices */}
      <DemoLabel name="RelatedServices" />
      <RelatedServices services={RELATED_SERVICES} title="Services Delivered" />

      {/* 17 – StickyScroll */}
      <DemoLabel name="StickyScroll" />
      <StickyScroll />

      {/* 18 – BoothWhyChooseUs */}
      <DemoLabel name="BoothWhyChooseUs" />
      <BoothWhyChooseUs heading="Why Clients Choose Our Booths" items={BOOTH_WHY_ITEMS} />

      {/* 19 – CardsSection */}
      <DemoLabel name="CardsSection" />
      <CardsSection heading="Future-Ready Stands" items={BASIC_CARD_ITEMS} />

      {/* 20 – RentVsBuySection */}
      <DemoLabel name="RentVsBuySection" />
      <RentVsBuySection
        description="For most enterprise exhibitors, renting outperforms buying on every dimension that matters."
        heading="Why Renting Beats Buying"
        reasons={RENT_VS_BUY_REASONS}
      />

      {/* 21 – CorporateVideoIndustriesSection */}
      <DemoLabel name="CorporateVideoIndustriesSection" />
      <CorporateVideoIndustriesSection
        description="We specialise in industries where the sales cycle is long, relationships matter, and trade shows are the fastest path to qualified pipeline."
        heading="Industries We Serve"
        industries={CORP_VIDEO_INDUSTRIES}
      />

      {/* 22 – CorporateVideoPortfolioSection */}
      <DemoLabel name="CorporateVideoPortfolioSection" />
      <CorporateVideoPortfolioSection
        heading="Recent Event Programs"
        items={CORP_VIDEO_PORTFOLIO_ITEMS}
      />

      {/* 23 – ProcessTimeline */}
      <DemoLabel name="ProcessTimeline" />
      <ProcessTimeline heading="What We Manage" phases={PROCESS_TIMELINE_PHASES} />

      {/* 24 – CaseStudies */}
      <DemoLabel name="CaseStudies" />
      <CaseStudies />

      {/* 25 – CaseStudiesGrid */}
      <DemoLabel name="CaseStudiesGrid" />
      <CaseStudiesGrid
        activeFilter={activeFilter}
        emptyStateDescription={GRID_EMPTY_DESC}
        emptyStateTitle={GRID_EMPTY_TITLE}
        filters={GRID_FILTERS}
        onFilterChange={handleCaseStudiesGridFilterChange}
        onPageChange={setCaseStudiesGridPage}
        page={caseStudiesGridPage}
        studies={filteredStudies}
      />

      {/* 26 – Testimonials */}
      <DemoLabel name="Testimonials" />
      <Testimonials />

      {/* 27 – Events */}
      <DemoLabel name="Events" />
      <Events />

      {/* 28 – TradeShowCalendarDirectory */}
      <DemoLabel name="TradeShowCalendarDirectory" />
      <TradeShowCalendarDirectory
        description={TRADE_SHOW_CALENDAR_HERO.description}
        events={TRADE_SHOW_CALENDAR_EVENTS}
        eyebrow={TRADE_SHOW_CALENDAR_HERO.eyebrow}
        searchPlaceholder={TRADE_SHOW_CALENDAR_HERO.searchPlaceholder}
        title={TRADE_SHOW_CALENDAR_HERO.title}
      />

      {/* 29 – GlobalPresence */}
      <DemoLabel name="GlobalPresence" />
      <GlobalPresence data={GLOBAL_PRESENCE_DATA} />

      {/* 30 – Blogs */}
      <DemoLabel name="Blogs" />
      <Blogs />

      {/* 31 – BlogsCarousel */}
      <DemoLabel name="BlogsCarousel" />
      <BlogsCarousel heading="From the Blog" posts={DEMO_BLOG_POSTS} />

      {/* 32 – Pricing */}
      <DemoLabel name="Pricing" />
      <Pricing />

      {/* 33 – FAQ */}
      <DemoLabel name="FAQ" />
      <FAQ />

      {/* 34 – FAQAccordion */}
      <DemoLabel name="FAQAccordion" />
      <FAQAccordion />

      {/* 35 – ContactCinematicCTA */}
      <DemoLabel name="ContactCinematicCTA" />
      <ContactCinematicCTA
        backgroundImage={CONTACT_CINEMATIC_PROPS.backgroundImage}
        badge={CONTACT_CINEMATIC_PROPS.badge}
        description={CONTACT_CINEMATIC_PROPS.description}
        headingLines={CONTACT_CINEMATIC_PROPS.headingLines}
        primaryCta={CONTACT_CINEMATIC_PROPS.primaryCta}
        proofLabel={CONTACT_CINEMATIC_PROPS.proofLabel}
        proofLogos={CONTACT_CINEMATIC_PROPS.proofLogos}
        secondaryCta={CONTACT_CINEMATIC_PROPS.secondaryCta}
      />

      {/* 36 – ContactUs */}
      <DemoLabel name="ContactUs" />
      <ContactUs />
    </main>
  );
}
