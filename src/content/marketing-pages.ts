import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

import type { MarketingPageDefinition } from "./page-definitions";

import { ABOUT_PAGE } from "./about";
import { BLOG_PAGE } from "./blog";
import { CASE_STUDIES_PAGE } from "./case-studies";
import { CONTACT_PAGE } from "./contact";
import { HOME_PAGE } from "./home";
import { CORPORATE_VIDEO_PAGE } from "./services/detail/corporate-video-production";
import { DATA_AUGMENTATION_PAGE } from "./services/detail/data-augmentation";
import { BOOTH_RENTAL_PAGE } from "./services/detail/event-booth-rental";
import { EVENT_VIDEO_PAGE } from "./services/detail/event-video-production";
import { LIVE_STREAMING_PAGE } from "./services/detail/live-streaming-services";
import { MODULAR_BOOTHS_PAGE } from "./services/detail/modular-portable-booths";
import { PAID_ADS_PAGE } from "./services/detail/paid-advertising";
import { SEO_PAGE } from "./services/detail/seo-services";
import { BOOTH_BUILDER_PAGE } from "./services/detail/trade-show-booth-builder";
import { BOOTH_DESIGN_PAGE } from "./services/detail/trade-show-booth-design";
import { GES_PAGE } from "./services/global-event-solutions";
import { RESEARCH_PAGE } from "./services/market-research";
import { MEDIA_PAGE } from "./services/media-production";
import { PERF_PAGE } from "./services/performance-marketing";
import { SQL_PAGE } from "./services/sales-qualified-lead-generation";
import { TRADE_SHOW_CALENDAR_PAGE } from "./trade-show-calendar";

export const marketingPages = [
  HOME_PAGE,
  ABOUT_PAGE,
  BLOG_PAGE,
  CASE_STUDIES_PAGE,
  CONTACT_PAGE,
  TRADE_SHOW_CALENDAR_PAGE,
  GES_PAGE,
  BOOTH_DESIGN_PAGE,
  BOOTH_RENTAL_PAGE,
  BOOTH_BUILDER_PAGE,
  MODULAR_BOOTHS_PAGE,
  MEDIA_PAGE,
  EVENT_VIDEO_PAGE,
  CORPORATE_VIDEO_PAGE,
  LIVE_STREAMING_PAGE,
  PERF_PAGE,
  SEO_PAGE,
  PAID_ADS_PAGE,
  SQL_PAGE,
  RESEARCH_PAGE,
  DATA_AUGMENTATION_PAGE,
] satisfies MarketingPageDefinition[];

const normalizeLookupPath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};

const marketingPagesById = Object.fromEntries(marketingPages.map((page) => [page.pageId, page]));

const marketingPagesByPath = Object.fromEntries(
  marketingPages.map((page) => [normalizeLookupPath(page.seo.canonicalPath), page])
);

export const getMarketingPageById = (pageId: string) => marketingPagesById[pageId];

export const getMarketingPageByPath = (path: string) =>
  marketingPagesByPath[normalizeLookupPath(path)];

export const getMarketingPageGroup = (page: MarketingPageDefinition) => {
  if (page.pageType === "serviceHub" || page.pageType === "serviceDetail") {
    return "Service";
  }

  if (page.pageType === "company") {
    return "Company";
  }

  if (page.pageType === "resourceIndex") {
    return "Resources";
  }

  return "B2B Growth";
};

export const getMarketingPageMetadata = (page: MarketingPageDefinition): Metadata =>
  buildPageMetadata(page.seo, page.pageId);
