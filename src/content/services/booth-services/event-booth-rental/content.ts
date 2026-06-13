import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import BOOTHRENTALCASESTUDIESDATA from "./case-studies.json";
import BOOTHRENTALPROOFBARDATA from "./proof-bar.json";
import RENTALCONTACTCTA_DATA from "./rental-contact-cta.json";

export const BOOTH_RENTAL_PROOF_BAR = {
  ...BOOTHRENTALPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_RENTAL_CASE_STUDIES = {
  ...BOOTHRENTALCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_RENTAL_CONTACT_CTA = {
  ...RENTALCONTACTCTA_DATA,
};

export { default as BOOTH_RENTAL_FAQ } from "./faq.json";
export { default as BOOTH_RENTAL_HERO } from "./hero.json";
export { default as BOOTH_RENTAL_PAGE } from "./page.json";
export { default as BOOTH_RENTAL_PROCESS } from "./process.json";

export { default as BOOTH_RENTAL_BLOGS_SECTION } from "./rental-blogs-section.json";
export { default as BOOTH_RENTAL_RELATED_SERVICES } from "./rental-related-services.json";
export { default as BOOTH_RENTAL_RENT_VS_BUY } from "./rental-rent-vs-buy.json";
export { default as BOOTH_RENTAL_WHY } from "./why.json";
