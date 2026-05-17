import type { Metadata } from "next";

import type { CmsSeo } from "@/cms/mock/types";

const BASE_URL = "https://b2bsalesarrow.com";

export const buildPageMetadata = (seo: CmsSeo, pageId?: string): Metadata => {
  const canonicalUrl = `${BASE_URL}${seo.canonicalPath}`;
  const ogImageUrl = pageId
    ? `${BASE_URL}/og?pageId=${pageId}&title=${encodeURIComponent(seo.title)}`
    : `${BASE_URL}/og-default.png`;

  return {
    alternates: { canonical: canonicalUrl },
    description: seo.description,
    openGraph: {
      description: seo.description,
      images: [{ height: 630, url: ogImageUrl, width: 1200 }],
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
}
