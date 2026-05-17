import { HOME_HERO_CONTENT } from "@/content/home";
import { getMarketingPageById, getMarketingPageByPath } from "@/content/marketing-pages";

import type { CmsHeading, CmsPage, PageId, PageType } from "./types";

import { pageRoutes } from "./routes";
import { pageSeo } from "./seo";

const siteTitleSuffix = " | B2B Sales Arrow";

const stripSiteTitleSuffix = (title: string) => title.replace(siteTitleSuffix, "");

const buildHeading = (id: PageId, seo: CmsPage["seo"], pageName?: string): CmsHeading => {
  if (id === "home") {
    return {
      highlight: "Event",
      highlightVariant: "blue",
      text: "B2B Global Event Solutions & Trade Show Booth Design s",
    };
  }

  if (id === "privacy-policy" || id === "terms-and-conditions" || id === "cookie-policy") {
    return {
      highlight: seo.title.split(" ")[0],
      highlightVariant: "blue",
      text: stripSiteTitleSuffix(seo.title),
    };
  }

  if (id === "thank-you") {
    return { highlight: "Thank", highlightVariant: "blue", text: "Thank You" };
  }

  return {
    ...(seo.focusKeyphrase && {
      highlight: seo.focusKeyphrase.split(" ")[0],
      highlightVariant: "blue" as const,
    }),
    text: pageName ?? stripSiteTitleSuffix(seo.title),
  };
};

const getPageType = (id: PageId, marketingPageType?: PageType): PageType => {
  if (marketingPageType) return marketingPageType;
  if (id === "home") return "home";
  if (id === "about") return "company";
  if (id === "contact") return "contact";
  if (id === "blog" || id === "case-studies" || id === "events") return "resourceIndex";
  if (id === "privacy-policy" || id === "terms-and-conditions" || id === "cookie-policy") {
    return "legal";
  }
  if (id === "thank-you") return "system";
  return "serviceDetail";
};

export const cmsPages: CmsPage[] = Object.entries(pageRoutes).map(([id, path]) => {
  const marketingPage = getMarketingPageById(id) ?? getMarketingPageByPath(path);
  const seo = pageSeo[id];

  return {
    id,
    pageType: getPageType(id, marketingPage?.pageType),
    seo,
    title: buildHeading(id, seo, marketingPage?.pageName),
    ...(id === "home" && {
      heroBadge: {
        icon: HOME_HERO_CONTENT.stat.icon,
        label: HOME_HERO_CONTENT.stat.label,
        value: HOME_HERO_CONTENT.stat.value,
      },
      heroImage: {
        alt: HOME_HERO_CONTENT.image.alt,
        priority: true as const,
        src: HOME_HERO_CONTENT.image.src,
      },
    }),
    tags: seo.secondaryKeywords?.map((keyword) => `#${keyword.replaceAll(/\s+/g, "")}`),
  };
});

export const cmsPagesById: Record<PageId, CmsPage> = Object.fromEntries(
  cmsPages.map((page) => [page.id, page])
);

export const getCmsPage = (pageId: PageId): CmsPage | undefined => cmsPagesById[pageId];
