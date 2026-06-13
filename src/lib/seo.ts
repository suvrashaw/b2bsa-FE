import type { Metadata } from "next";

import type { CmsSeo } from "@/content/page-definitions";

import { siteUrl } from "@/lib/json-ld";

export const buildPageMetadata = (seo: CmsSeo, pageId?: string): Metadata => {
  const canonicalUrl = `${siteUrl}${seo.canonicalPath}`;
  const ogImageUrl = pageId
    ? `${siteUrl}/og?pageId=${pageId}&title=${encodeURIComponent(seo.title)}`
    : `${siteUrl}/og-default.png`;

  return {
    alternates: { canonical: canonicalUrl },
    description: seo.description,
    ...(seo.focusKeyphrase && {
      keywords: [seo.focusKeyphrase, ...(seo.secondaryKeywords ?? [])],
    }),
    openGraph: {
      description: seo.description,
      images: [{ height: 630, url: ogImageUrl, width: 1200 }],
      locale: "en_US",
      siteName: "B2B Sales Arrow",
      title: seo.title,
      type: "website",
      url: canonicalUrl,
    },
    title: seo.title,
    twitter: {
      card: "summary_large_image",
      description: seo.description,
      images: [ogImageUrl],
      title: seo.title,
    },
    ...(seo.noIndex && { robots: { follow: false, index: false } }),
  };
};
