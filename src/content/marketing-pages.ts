import type { Metadata } from "next";

import { normalizePath } from "@/lib";
import { buildPageMetadata } from "@/lib/seo";

import type { MarketingPageDefinition } from "./page-definitions";

import { ABOUT_PAGE } from "./about-us/content";
import { BLOG_PAGE } from "./blogs";
import { CASE_STUDIES_PAGE } from "./case-studies";
import { CONTACT_PAGE } from "./contact-us/content";
import { COOKIE_PAGE } from "./cookie-policy/content";
import { HOME_PAGE } from "./home/content";
import { PRIVACY_PAGE } from "./privacy-policy/content";
import { SERVICES_PAGE } from "./services";
import { PERF_PAGE } from "./services/digital-marketing/content";
import { PPC_PAGE } from "./services/digital-marketing/performance-marketing/content";
import { SEO_PAGE } from "./services/digital-marketing/seo-services/content";
import { SMM_PAGE } from "./services/digital-marketing/social-media-marketing/content";
import { GES_PAGE } from "./services/global-event-solutions/content";
import { CORP_EVENT_PAGE } from "./services/global-event-solutions/corporate-event-solutions/content";
import { CORP_NETWORKING_PAGE } from "./services/global-event-solutions/corporate-networking-events/content";
import { EVENT_BRANDING_PAGE } from "./services/global-event-solutions/event-branding-solutions/content";
import { EVENT_EXPERIENCE_PAGE } from "./services/global-event-solutions/event-experience-creation/content";
import { MARKET_INTELLIGENCE_PAGE } from "./services/human-powered-market-intelligence/content";
import { RESEARCH_PAGE } from "./services/market-research/content";
import { DATA_AUGMENTATION_PAGE } from "./services/market-research/data-augmentation-services/content";
import { DATA_VALIDATION_PAGE } from "./services/market-research/data-validation-services/content";
import { MEDIA_PAGE } from "./services/media-production/content";
import { CORPORATE_VIDEO_PAGE } from "./services/media-production/corporate-video-production/content";
import { EVENT_EXPERIENCE_VIDEO_PAGE } from "./services/media-production/event-experience-video-production/content";
import { LIVE_STREAMING_PAGE } from "./services/media-production/event-live-streaming-services/content";
import { EVENT_PHYSICAL_VIDEO_PAGE } from "./services/media-production/event-physical-video-shoot/content";
import { EVENT_VIDEO_PAGE } from "./services/media-production/event-video-production/content";
import { VIRTUAL_VIDEO_PAGE } from "./services/media-production/virtual-video-production/content";
import { SQL_PAGE } from "./services/sales-qualified-lead-generation/content";
import { EVENT_LEAD_PAGE } from "./services/sales-qualified-lead-generation/event-lead-generation/content";
import { BOOTH_HOSTESS_PAGE } from "./services/tradeshow-booth-solutions/booth-hostess-services/content";
import { EVENT_LOGISTICS_PAGE } from "./services/tradeshow-booth-solutions/booth-logistics-services/content";
import { BS_PAGE } from "./services/tradeshow-booth-solutions/content";
import { MODULAR_BOOTHS_PAGE } from "./services/tradeshow-booth-solutions/modular-booth-solutions/content";
import { BOOTH_BUILDER_PAGE } from "./services/tradeshow-booth-solutions/trade-show-booth-builder/content";
import { BOOTH_DESIGN_PAGE } from "./services/tradeshow-booth-solutions/trade-show-booth-design/content";
import { BOOTH_RENTAL_PAGE } from "./services/tradeshow-booth-solutions/trade-show-booth-rental/content";
import { TERMS_PAGE } from "./terms-and-conditions/content";
import { TRADE_SHOW_CALENDAR_PAGE } from "./tradeshow-calendar";

export const marketingPages = [
  HOME_PAGE,
  ABOUT_PAGE,
  BLOG_PAGE,
  CASE_STUDIES_PAGE,
  CONTACT_PAGE,
  TRADE_SHOW_CALENDAR_PAGE,
  SERVICES_PAGE,
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
  EVENT_LEAD_PAGE,
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
  PRIVACY_PAGE,
  TERMS_PAGE,
  COOKIE_PAGE,
] satisfies MarketingPageDefinition[];

const marketingPagesById = Object.fromEntries(marketingPages.map((page) => [page.pageId, page]));

const marketingPagesByPath = Object.fromEntries(
  marketingPages.map((page) => [normalizePath(page.seo.canonicalPath), page])
);

export const getMarketingPageById = (pageId: string) => marketingPagesById[pageId];

export const getMarketingPageByPath = (path: string) => marketingPagesByPath[normalizePath(path)];

import MARKETING_PAGES_CONFIG from "./marketing-pages-config.json";

export const getMarketingPageGroup = (page: MarketingPageDefinition) => {
  return (
    MARKETING_PAGES_CONFIG.groups[page.pageType as keyof typeof MARKETING_PAGES_CONFIG.groups] ||
    MARKETING_PAGES_CONFIG.defaultGroup
  );
};

export const getMarketingPageMetadata = (page: MarketingPageDefinition): Metadata =>
  buildPageMetadata(page.seo, page.pageId);
