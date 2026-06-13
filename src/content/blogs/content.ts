import { GES_SERVICES } from "@/content/services/global-event-solutions/content";
import { RESEARCH_SERVICES } from "@/content/services/market-research/content";
import { MEDIA_SERVICES } from "@/content/services/media-production/content";
import { PERF_SERVICES } from "@/content/services/performance-marketing/content";
import { SQL_SERVICES } from "@/content/services/sales-qualified-lead-generation/content";

import { SHARED_BLOG_POSTS } from "./data";

import HERO_DATA from "./hero.json";

export const BLOG_HERO = HERO_DATA;




import DATA from "./data.json";
import PAGE_DATA from "./page.json";

export const BLOG_CATEGORIES = DATA.categories;

export const BLOG_POSTS = {
  ...DATA.posts,
  blogs: SHARED_BLOG_POSTS,
};

export const BLOG_CONTACT = {
  ...DATA.contact,
  illustration: null,
};

export const BLOG_PAGE = PAGE_DATA;

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
