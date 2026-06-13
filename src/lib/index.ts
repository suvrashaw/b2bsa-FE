import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export { JsonLd, normalizePath, siteUrl } from "@/lib/json-ld";

export {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildOrganizationJsonLd,
  buildServiceJsonLd,
} from "@/lib/structured-data";
