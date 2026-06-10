import type { ClientLogoItem } from "@/content/home";

import { GES_SERVICES } from "@/content/services/global-event-solutions";
import { RESEARCH_SERVICES } from "@/content/services/market-research";
import { MEDIA_SERVICES } from "@/content/services/media-production";
import { PERF_SERVICES } from "@/content/services/performance-marketing";
import { SQL_SERVICES } from "@/content/services/sales-qualified-lead-generation";

import { SHARED_BLOG_POSTS } from "./blogs";

export const BLOG_HERO = {
  description:
    "Ideas should help you make better decisions, not fill a content calendar. Practical intelligence on trade show strategy, performance marketing, B2B video, market research, and pipeline growth. Written for senior marketers who need substance, not noise.",
  eyebrow: "B2B GROWTH INSIGHTS",
  primaryCta: { href: "#posts", label: "Read the Latest Insights" },
  secondaryCta: { href: "/contact", label: "Subscribe for Growth Intelligence" },
  title: (
    <>
      Thought Leadership for <br />
      <span className="text-white/80">Enterprise Growth Teams</span>
    </>
  ),
};

export const BLOG_LOGOS: ClientLogoItem[] = [
  { alt: "Event strategy category", id: "event-strategy", src: "/logos/blog/event-strategy.svg" },
  { alt: "Booth design category", id: "booth-design", src: "/logos/blog/booth-design.svg" },
  {
    alt: "Performance marketing category",
    id: "performance-marketing",
    src: "/logos/blog/performance-marketing.svg",
  },
  {
    alt: "Video production category",
    id: "video-production",
    src: "/logos/blog/video-production.svg",
  },
  {
    alt: "Market research category",
    id: "market-research",
    src: "/logos/blog/market-research.svg",
  },
  {
    alt: "Lead generation category",
    id: "lead-generation",
    src: "/logos/blog/lead-generation.svg",
  },
  { alt: "Case studies category", id: "case-studies", src: "/logos/blog/case-studies.svg" },
  { alt: "Trade shows category", id: "trade-shows", src: "/logos/blog/trade-shows.svg" },
  { alt: "B2B sales category", id: "b2b-sales", src: "/logos/blog/b2b-sales.svg" },
  { alt: "Exhibition category", id: "exhibition", src: "/logos/blog/exhibition.svg" },
  { alt: "Digital ads category", id: "digital-ads", src: "/logos/blog/digital-ads.svg" },
  { alt: "SQLs category", id: "sqls", src: "/logos/blog/sqls.svg" },
];

export const BLOG_POSTS = {
  blogs: SHARED_BLOG_POSTS,
  ctaLabel: "Browse All Articles",
  eyebrow: "",
  heading: (
    <>
      Expert Strategies to Maximize <br />
      <span className="text-brand-primary">Your Global Event Solutions</span>
    </>
  ),
};

export const BLOG_CONTACT = {
  description:
    "Monthly growth intelligence on event strategy, performance marketing, pipeline generation, and market intelligence, delivered to 4,000+ enterprise marketers.",
  eyebrow: "",
  form: {
    ctaLabel: "Subscribe to Growth Intelligence",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
  },
  heading: (
    <>
      Subscribe to <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Growth Intelligence
      </span>
    </>
  ),
  illustration: null,
};

export const BLOG_PAGE = {
  pageId: "blog",
  pageName: "Blogs",
  pageType: "resourceIndex",
  seo: {
    canonicalPath: "/blogs",
    description:
      "Practical B2B growth insights on trade show strategy, performance marketing, video production, lead generation, and market research, written for enterprise marketers and sales leaders.",
    focusKeyphrase: "B2B marketing blog",
    secondaryKeywords: [
      "enterprise marketing insights",
      "trade show strategy blog",
      "market research",
      "video production company",
    ],
    title: "B2B Growth Insights and Strategy Blog | B2B Sales Arrow",
  },
} as const;

type LooseService = {
  description: string;
  href?: string;
  id: string;
  image: string;
  title: string;
};

const SERVICE_FALLBACK_HREFS: Record<string, string> = {
  appointment: "/services/sales-qualified-lead-generation",
  database: "/services/sales-qualified-lead-generation",
  icp: "/services/sales-qualified-lead-generation",
  intelligence: "/services/market-research",
  prospecting: "/services/sales-qualified-lead-generation",
  validation: "/services/market-research",
};

export const BLOG_SERVICE_CAROUSEL = {
  heading: "Explore Our Services",
  items: (
    [
      ...GES_SERVICES.services,
      ...MEDIA_SERVICES.services,
      ...PERF_SERVICES.services,
      ...RESEARCH_SERVICES.services,
      ...SQL_SERVICES.services,
    ] as LooseService[]
  ).map((s) => ({
    description: s.description,
    href: s.href ?? SERVICE_FALLBACK_HREFS[s.id] ?? "/services",
    id: s.id,
    image: s.image,
    title: s.title,
  })),
};
