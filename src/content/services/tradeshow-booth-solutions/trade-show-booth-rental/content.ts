import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import BOOTHRENTALCASESTUDIESDATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";
import BOOTHRENTALPROOFBARDATA from "./intro.json";

export const BOOTH_RENTAL_INTRO = {
  ...BOOTHRENTALPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_RENTAL_CASE_STUDIES = {
  ...BOOTHRENTALCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_RENTAL_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as BOOTH_RENTAL_BLOGS_SECTION } from "./blog.json";
export { default as BOOTH_RENTAL_CLIENT_LOGOS } from "./client-logos.json";
export { default as BOOTH_RENTAL_FAQ } from "./faq.json";
export { default as BOOTH_RENTAL_HERO } from "./hero.json";

export { default as BOOTH_RENTAL_PAGE } from "./page.json";
export { default as BOOTH_RENTAL_PROCESS } from "./process.json";
export { default as BOOTH_RENTAL_RELATED_SERVICES } from "./related-services.json";
export { default as BOOTH_RENTAL_RENT_VS_BUY } from "./rental-rent-vs-buy.json";
export { default as BOOTH_RENTAL_WHY } from "./why.json";
