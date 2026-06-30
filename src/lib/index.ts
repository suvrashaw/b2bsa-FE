import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const toTitleCase = (value: string) =>
  value.toLowerCase().replaceAll(/\b\w/g, (char) => char.toUpperCase());

export const toHeadingCaps = (value: string) => value.toUpperCase();

export { JsonLd, normalizePath, siteUrl } from "@/lib/json-ld";
export {
  getStructuredPageContent,
  mergeCmsContent,
  submitContactForm,
  subscribeNewsletter,
} from "@/lib/cms-api";

export {
  buildAboutPageJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildContactPageJsonLd,
  buildEventJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildLinkedItemListJsonLd,
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildPageGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/structured-data";
