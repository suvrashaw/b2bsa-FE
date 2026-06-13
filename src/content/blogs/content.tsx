import { GES_SERVICES } from "@/content/services/global-event-solutions/content";
import { RESEARCH_SERVICES } from "@/content/services/market-research/content";
import { MEDIA_SERVICES } from "@/content/services/media-production/content";
import { PERF_SERVICES } from "@/content/services/performance-marketing/content";
import { SQL_SERVICES } from "@/content/services/sales-qualified-lead-generation/content";

import { SHARED_BLOG_POSTS } from "./data";

export const BLOG_HERO = {
  description:
    "Ideas should help you make better decisions, not fill a content calendar. Practical intelligence on trade show strategy, performance marketing, B2B video, market research, and pipeline growth. Written for senior marketers who need substance, not noise.",
  eyebrow: "",
  primaryCta: { href: "#posts", label: "Read the Latest Insights" },
  secondaryCta: { href: "/contact", label: "Subscribe for Growth Intelligence" },
  title: (
    <>
      Thought Leadership for <br />
      <span className="text-white/80">Enterprise Growth Teams</span>
    </>
  ),
};




import DATA from "./data.json";

export const BLOG_CATEGORIES = DATA.categories;

export const BLOG_POSTS = {
  ...DATA.posts,
  blogs: SHARED_BLOG_POSTS,
  heading: (
    <>
      Expert Strategies to Maximize <br />
      <span className="text-brand-primary">Your Global Event Solutions</span>
    </>
  ),
};

export const BLOG_CONTACT = {
  ...DATA.contact,
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
  ...DATA.serviceCarousel,
  items: (
    [
      ...GES_SERVICES.services,
      ...MEDIA_SERVICES.services,
      ...PERF_SERVICES.services,
      ...RESEARCH_SERVICES.services,
      ...SQL_SERVICES.services,
    ] as LooseService[]
  )
    .map((s) => ({
      description: s.description,
      href: s.href ?? SERVICE_FALLBACK_HREFS[s.id] ?? "/services",
      id: s.id,
      image: s.image,
      title: s.title,
    }))
    .toSorted((a, b) => (b.description?.length || 0) - (a.description?.length || 0)),
};
