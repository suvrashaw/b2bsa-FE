import type { MarketingPageDefinition } from "@/content/page-definitions";

import CONTACT_DATA from "./contactus.json";
import PAGE_DATA from "./page.json";

export const TERMS_CONTACT = {
  ...CONTACT_DATA,
  illustration: null,
};

export const TERMS_PAGE = PAGE_DATA as MarketingPageDefinition;

export { default as TERMS_FAQ } from "./faq.json";
export { default as TERMS_HERO } from "./hero.json";
