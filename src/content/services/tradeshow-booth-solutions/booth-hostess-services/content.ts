import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES } from "@/content/services";

import BLOG_DATA from "./blog.json";
import BOOTHHOSTESSCASESTUDIESDATA from "./case-studies.json";
import CONTACT_DATA from "./contact-cta.json";
import INDUSTRIES_DATA from "./industries.json";

export const BOOTH_HOSTESS_CASE_STUDIES = {
  ...BOOTHHOSTESSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_HOSTESS_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export const BOOTH_HOSTESS_INDUSTRIES = {
  ...INDUSTRIES_DATA,
  items: GLOBAL_INDUSTRY_SERVICES,
};

export const BOOTH_HOSTESS_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export { default as BOOTH_HOSTESS_CAPABILITIES } from "./capabilities.json";
export { default as BOOTH_HOSTESS_CLIENT_LOGOS } from "./client-logos.json";
export { default as BOOTH_HOSTESS_FAQ } from "./faq.json";

export { default as BOOTH_HOSTESS_IMAGE_HERO } from "./hero.json";
export { default as BOOTH_HOSTESS_INTRO } from "./intro.json";
export { default as BOOTH_HOSTESS_PAGE } from "./page.json";
export { default as BOOTH_HOSTESS_DELIVERABLES } from "./services.json";
export { default as BOOTH_HOSTESS_WHY_CHOOSE_US } from "./why-choose-us.json";
