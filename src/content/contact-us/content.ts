import type { MarketingPageDefinition } from "@/content/page-definitions";

import PAGE_DATA from "./page.json";

export const CONTACT_PAGE = PAGE_DATA as MarketingPageDefinition;

import CONTACT_FORM_DATA from "./contact-form.json";

export const CONTACT_US = CONTACT_FORM_DATA.cta;

export { default as CONTACT_US_CONTACT_FORM } from "./contact-form.json";

export { default as CONTACT_HERO } from "./hero.json";

export { default as CONTACT_NEXT_STEPS } from "./process.json";
