import type { MarketingPageDefinition, StaticPageHero } from "@/content/page-definitions";

import CONTACT_DATA from "./contactus.json";
import HERO_DATA from "./hero.json";
import PAGE_DATA from "./page.json";

export const TERMS_CONTACT = {
  ...CONTACT_DATA,
  illustration: null,
};

export const TERMS_HERO: StaticPageHero = HERO_DATA;
export const TERMS_PAGE = PAGE_DATA as MarketingPageDefinition;

export { default as TERMS_FAQ } from "./faq.json";
