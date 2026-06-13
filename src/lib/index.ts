import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildOrganizationJsonLd,
  buildServiceJsonLd,
} from "@/lib/structured-data";

export { JsonLd, normalizePath, siteUrl } from "@/lib/json-ld";
