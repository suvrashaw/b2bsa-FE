import type { MetadataRoute } from "next";

import { pageRoutes } from "@/cms/mock/routes";
import { pageSeo } from "@/cms/mock/seo";

const siteUrl = "https://b2bsalesarrow.com";

const sitemap = (): MetadataRoute.Sitemap =>
  Object.entries(pageRoutes)
    .filter(([id]) => !pageSeo[id]?.noIndex)
    .map(([, path]) => ({
      changeFrequency: path === "/" ? "weekly" : "monthly",
      lastModified: new Date(),
      priority: getPriority(path),
      url: `${siteUrl}${path}`,
    }));

const getPriority = (url: string): number => {
  if (url === "/") return 1;
  return url.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.6;
};

export default sitemap;
