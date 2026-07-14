import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const toTitleCase = (value: string) =>
  value.toLowerCase().replaceAll(/\b\w/g, (char) => char.toUpperCase());

export const toHeadingCaps = (value: string) => value.toUpperCase();

export const buildCapabilityFeatures = <
  T extends { description?: string; icon?: string; image: string; title: string },
>(
  phases: T[]
) =>
  phases.map((phase) => ({
    description: phase.description,
    icon: phase.icon,
    id: phase.title
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replaceAll(/(^-|-$)/g, ""),
    image: phase.image,
    label: phase.title,
  }));

export { JsonLd, normalizePath, siteUrl } from "@/lib/json-ld";

export {
  buildAboutPageJsonLd,
  buildBreadcrumbJsonLd,
  buildContactPageJsonLd,
  buildEventJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildImageObjectJsonLd,
  buildItemListJsonLd,
  buildLinkedItemListJsonLd,
  buildLocalBusinessJsonLd,
  buildLocalBusinessListJsonLd,
  buildOrganizationJsonLd,
  buildPageGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/structured-data";
