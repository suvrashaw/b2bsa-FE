import type { MarketingPageDefinition } from "@/content/page-definitions";

import { GES_SERVICES } from "@/content/services/global-event-solutions/content";
import { RESEARCH_SERVICES } from "@/content/services/market-research/content";
import { MEDIA_SERVICES } from "@/content/services/media-production/content";
import { PERF_SERVICES } from "@/content/services/performance-marketing/content";
import { SQL_SERVICES } from "@/content/services/sales-qualified-lead-generation/content";

import BLOGS_SECTION_DATA from "./blogs-section.json";
import CONTACT_DATA from "./contact.json";
import { SHARED_BLOG_POSTS } from "./data";
import PAGE_DATA from "./page.json";
import SERVICECAROUSEL_DATA from "./service-carousel.json";

export const BLOG_POSTS = {
  ...BLOGS_SECTION_DATA,
  blogs: SHARED_BLOG_POSTS,
};

export const BLOG_CONTACT = {
  ...CONTACT_DATA,
  illustration: null,
};

export const BLOG_PAGE = PAGE_DATA as MarketingPageDefinition;

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
  ...SERVICECAROUSEL_DATA,
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

export {default as BLOG_CATEGORIES} from "./categories.json";
export {default as BLOG_HERO} from "./hero.json";