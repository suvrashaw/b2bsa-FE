export interface CmsSeo {
  canonicalPath: string;
  description: string;
  focusKeyphrase?: string;
  noIndex?: boolean;
  secondaryKeywords?: readonly string[];
  title: string;
}

export interface MarketingPageDefinition {
  pageId: string;
  pageName: string;
  pageType: string;
  seo: CmsSeo;
}

export type MarketingPageIdentity = Pick<MarketingPageDefinition, "pageName" | "seo">;

export interface StaticPageHero {
  description: string;
  eyebrow: string;
  image: {
    alt: string;
    loaderAlt: string;
    src: string;
  };
  primaryCta?: { href: string; label: string } | null;
  secondaryCta?: { href: string; label: string } | null;
  showPreloader: boolean;
  stat?: {
    icon: string;
    label: string;
    value: string;
  } | null;
  title: string;
}
