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
  buildAboutPageJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildContactPageJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildPageGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/structured-data";
