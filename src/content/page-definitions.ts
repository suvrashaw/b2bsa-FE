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

export type MarketingPageType = Exclude<PageType, "legal" | "system">;

export type PageType =
  | "company"
  | "contact"
  | "home"
  | "legal"
  | "resourceIndex"
  | "serviceDetail"
  | "serviceHub"
  | "system";
