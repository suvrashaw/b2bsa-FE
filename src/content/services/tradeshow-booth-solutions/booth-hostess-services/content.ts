import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import BOOTHHOSTESSCASESTUDIESDATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";

export const BOOTH_HOSTESS_CASE_STUDIES = {
  ...BOOTHHOSTESSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_HOSTESS_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as BOOTH_HOSTESS_BLOGS_SECTION } from "./blog.json";
export { default as BOOTH_HOSTESS_FAQ } from "./faq.json";
export { default as BOOTH_HOSTESS_IMAGE_HERO } from "./hero.json";
export { default as BOOTH_HOSTESS_CAPABILITIES } from "./capabilities.json";

export { default as BOOTH_HOSTESS_DELIVERABLES } from "./hostess-deliverables.json";
export { default as BOOTH_HOSTESS_INTRO } from "./hostess-intro.json";
export { default as BOOTH_HOSTESS_RELATED_SERVICES } from "./related-services.json";
export { default as BOOTH_HOSTESS_PAGE } from "./page.json";
export { default as BOOTH_HOSTESS_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as BOOTH_HOSTESS_CLIENT_LOGOS } from "./client-logos.json";
