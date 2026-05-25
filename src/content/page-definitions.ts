export interface CmsSeo {
  canonicalPath: string;
  description: string;
  focusKeyphrase?: string;
  noIndex?: boolean;
  secondaryKeywords?: readonly string[];
  title: string;
}

export type PageType =
  | "company"
  | "contact"
  | "home"
  | "legal"
  | "resourceIndex"
  | "serviceDetail"
  | "serviceHub"
  | "system";

export interface MarketingPageDefinition {
  pageId: string;
  pageName: string;
  pageType: MarketingPageType;
  seo: CmsSeo;
}

export type MarketingPageIdentity = Pick<MarketingPageDefinition, "pageName" | "seo">;

export type MarketingPageType = Exclude<PageType, "legal" | "system">;
