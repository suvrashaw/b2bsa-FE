export interface CmsCTA {
  href?: string;
  label: string;
  pageId?: PageId;
  variant?: "ghost" | "primary" | "secondary";
}

export interface CmsFAQ {
  answer: string;
  question: string;
}

export interface CmsHeading {
  highlight?: string;
  highlightVariant?: "blue" | "cyan";
  text: string;
}

export interface CmsImage {
  alt: string;
  height?: number;
  priority?: boolean;
  sizes?: string;
  src: string;
  width?: number;
}

export interface CmsLink {
  href?: string;
  label: string;
  pageId?: PageId;
}

export interface CmsPage {
  ctas?: CmsCTA[];
  faqs?: CmsFAQ[];
  heroBadge?: { icon?: string; label: string; value: string };
  heroImage?: CmsImage;
  id: PageId;
  internalLinks?: CmsLink[];
  pageType: PageType;
  sectionHeadings?: Record<string, CmsHeading>;
  seo: CmsSeo;
  tags?: string[];
  title: CmsHeading;
}

export interface CmsSeo {
  canonicalPath: string;
  description: string;
  focusKeyphrase?: string;
  noIndex?: boolean;
  secondaryKeywords?: readonly string[];
  title: string;
}

export type PageId = { readonly __pageIdBrand?: never } & string;

export type PageType =
  | "company"
  | "contact"
  | "home"
  | "legal"
  | "resourceIndex"
  | "serviceDetail"
  | "serviceHub"
  | "system";
