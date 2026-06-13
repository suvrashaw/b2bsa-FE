import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

import type { MarketingPageDefinition } from "./page-definitions";

import { ABOUT_PAGE } from "./about/content";
import { BLOG_PAGE } from "./blogs/content";
import { CASE_STUDIES_PAGE } from "./case-studies/content";
import { CONTACT_PAGE } from "./contact/content";
import { HOME_PAGE } from "./home/content";
import { BOOTH_HOSTESS_PAGE } from "./services/booth-services/booth-hostess-services/content";
import { EVENT_LOGISTICS_PAGE } from "./services/booth-services/booth-logistics-services/content";
import { BS_PAGE } from "./services/booth-services/content";
import { BOOTH_RENTAL_PAGE } from "./services/booth-services/event-booth-rental/content";
import { MODULAR_BOOTHS_PAGE } from "./services/booth-services/modular-booth-solutions/content";
import { BOOTH_BUILDER_PAGE } from "./services/booth-services/trade-show-booth-builder/content";
import { BOOTH_DESIGN_PAGE } from "./services/booth-services/trade-show-booth-design/content";
import { GES_PAGE } from "./services/global-event-solutions/content";
import { CORP_EVENT_PAGE } from "./services/global-event-solutions/corporate-event-solutions/content";
import { CORP_NETWORKING_PAGE } from "./services/global-event-solutions/corporate-networking-events/content";
import { EVENT_BRANDING_PAGE } from "./services/global-event-solutions/event-branding-services/content";
import { EVENT_EXPERIENCE_PAGE } from "./services/global-event-solutions/event-experience-creation/content";
import { RESEARCH_PAGE } from "./services/market-research/content";
import { DATA_AUGMENTATION_PAGE } from "./services/market-research/data-augmentation/content";
import { DATA_VALIDATION_PAGE } from "./services/market-research/data-validation/content";
import { MARKET_INTELLIGENCE_PAGE } from "./services/market-research/market-intelligence/content";
import { MEDIA_PAGE } from "./services/media-production/content";
import { CORPORATE_VIDEO_PAGE } from "./services/media-production/corporate-video-production/content";
import { EVENT_EXPERIENCE_VIDEO_PAGE } from "./services/media-production/event-experience-video-production/content";
import { EVENT_PHYSICAL_VIDEO_PAGE } from "./services/media-production/event-physical-video-shoot/content";
import { EVENT_VIDEO_PAGE } from "./services/media-production/event-video-production/content";
import { LIVE_STREAMING_PAGE } from "./services/media-production/live-streaming-services/content";
import { VIRTUAL_VIDEO_PAGE } from "./services/media-production/virtual-video-production/content";
import { PERF_PAGE } from "./services/performance-marketing/content";
import { PPC_PAGE } from "./services/performance-marketing/ppc-services/content";
import { SEO_PAGE } from "./services/performance-marketing/seo-services/content";
import { SMM_PAGE } from "./services/performance-marketing/social-media-marketing-services/content";
import { SQL_PAGE } from "./services/sales-qualified-lead-generation/content";
import { TRADE_SHOW_CALENDAR_PAGE } from "./trade-show-calendar/content";

const marketingPages = [
  HOME_PAGE,
  ABOUT_PAGE,
  BLOG_PAGE,
  CASE_STUDIES_PAGE,
  CONTACT_PAGE,
  TRADE_SHOW_CALENDAR_PAGE,
  GES_PAGE,
  BS_PAGE,
  BOOTH_DESIGN_PAGE,
  BOOTH_RENTAL_PAGE,
  BOOTH_BUILDER_PAGE,
  MODULAR_BOOTHS_PAGE,
  MEDIA_PAGE,
  EVENT_VIDEO_PAGE,
  CORPORATE_VIDEO_PAGE,
  LIVE_STREAMING_PAGE,
  PERF_PAGE,
  PPC_PAGE,
  SEO_PAGE,
  SMM_PAGE,
  SQL_PAGE,
  RESEARCH_PAGE,
  DATA_AUGMENTATION_PAGE,
  DATA_VALIDATION_PAGE,
  MARKET_INTELLIGENCE_PAGE,
  BOOTH_HOSTESS_PAGE,
  CORP_EVENT_PAGE,
  CORP_NETWORKING_PAGE,
  EVENT_BRANDING_PAGE,
  EVENT_EXPERIENCE_PAGE,
  EVENT_EXPERIENCE_VIDEO_PAGE,
  EVENT_LOGISTICS_PAGE,
  EVENT_PHYSICAL_VIDEO_PAGE,
  VIRTUAL_VIDEO_PAGE,
] satisfies MarketingPageDefinition[];

const normalizeLookupPath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};

// eslint-disable-next-line compat/compat
const marketingPagesById = Object.fromEntries(marketingPages.map((page) => [page.pageId, page]));

// eslint-disable-next-line compat/compat
const marketingPagesByPath = Object.fromEntries(
  marketingPages.map((page) => [normalizeLookupPath(page.seo.canonicalPath), page])
);

export const getMarketingPageById = (pageId: string) => marketingPagesById[pageId];

export const getMarketingPageByPath = (path: string) =>
  marketingPagesByPath[normalizeLookupPath(path)];

import MARKETING_PAGES_CONFIG from "./marketing-pages-config.json";

export const getMarketingPageGroup = (page: MarketingPageDefinition) => {
  return (
    MARKETING_PAGES_CONFIG.groups[page.pageType as keyof typeof MARKETING_PAGES_CONFIG.groups] ||
    MARKETING_PAGES_CONFIG.defaultGroup
  );
};

export const getMarketingPageMetadata = (page: MarketingPageDefinition): Metadata =>
  buildPageMetadata(page.seo, page.pageId);
