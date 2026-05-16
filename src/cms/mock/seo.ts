import type { Metadata } from "next";

import { getMarketingPageById, getMarketingPageByPath } from "@/content/marketing-pages";
import { buildPageMetadata } from "@/lib/seo";

import type { CmsSeo, PageId } from "./types";

import { pageRoutes } from "./routes";

const manualSeo: Partial<Record<PageId, CmsSeo>> = {
  "cookie-policy": {
    canonicalPath: "/cookie-policy",
    description:
      "Learn how B2B Sales Arrow uses session, analytics, and functional cookies to operate and improve the website.",
    title: "Cookie Policy | B2B Sales Arrow",
  },
  "privacy-policy": {
    canonicalPath: "/privacy-policy",
    description:
      "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
    title: "Privacy Policy | B2B Sales Arrow",
  },
  "terms-and-conditions": {
    canonicalPath: "/terms-and-conditions",
    description:
      "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
    title: "Terms & Conditions | B2B Sales Arrow",
  },
  "thank-you": {
    canonicalPath: "/thank-you",
    description:
      "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
    noIndex: true,
    title: "Thank You | B2B Sales Arrow",
  },
};

const getSeoForRoute = (id: PageId, path: string): CmsSeo => {
  const marketingPage = getMarketingPageById(id) ?? getMarketingPageByPath(path);

  if (marketingPage) {
    return marketingPage.seo;
  }

  const manual = manualSeo[id];

  if (manual) return manual;

  throw new Error(`[cms] No SEO source configured for pageId: "${id}" at path "${path}"`);
};

export const pageSeo: Record<PageId, CmsSeo> = Object.fromEntries(
  Object.entries(pageRoutes).map(([id, path]) => [id, getSeoForRoute(id, path)])
);

export const getCmsPageMetadata = (pageId: PageId): Metadata => {
  const seo = pageSeo[pageId];

  if (!seo) {
    throw new Error(`[cms] No SEO entry for pageId: "${pageId}"`);
  }

  return buildPageMetadata(seo, pageId);
};
