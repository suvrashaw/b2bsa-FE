import type { MetadataRoute } from "next";

import { marketingPages } from "@/content/marketing-pages";

const siteUrl = "https://b2bsalesarrow.com";

const legalPaths = ["/cookie-policy", "/privacy-policy", "/terms-and-conditions"];

const sitemap = (): MetadataRoute.Sitemap => {
  const marketingEntries: MetadataRoute.Sitemap = marketingPages.map((page) => ({
    changeFrequency: page.seo.canonicalPath === "/" ? "weekly" : "monthly",
    lastModified: new Date(),
    priority: getPriority(page.seo.canonicalPath),
    url: `${siteUrl}${page.seo.canonicalPath}`,
  }));

  const legalEntries: MetadataRoute.Sitemap = legalPaths.map((path) => ({
    changeFrequency: "yearly",
    lastModified: new Date(),
    priority: 0.3,
    url: `${siteUrl}${path}`,
  }));

  return [...marketingEntries, ...legalEntries];
};

const getPriority = (path: string): number => {
  if (path === "/") return 1;
  return path.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.6;
};

export default sitemap;
