import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES } from "@/content/services";

import BLOG_DATA from "./blog.json";
import EVENTLOGISTICSCASESTUDIESDATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";
import INDUSTRIES_DATA from "./industries.json";

export const EVENT_LOGISTICS_CASE_STUDIES = {
  ...EVENTLOGISTICSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_LOGISTICS_INDUSTRIES = {
  ...INDUSTRIES_DATA,
  items: GLOBAL_INDUSTRY_SERVICES,
};

export const EVENT_LOGISTICS_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export const EVENT_LOGISTICS_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export { default as EVENT_LOGISTICS_CAPABILITIES } from "./capabilities.json";
export { default as EVENT_LOGISTICS_CLIENT_LOGOS } from "./client-logos.json";
export { default as EVENT_LOGISTICS_FAQ } from "./faq.json";
export { default as EVENT_LOGISTICS_IMAGE_HERO } from "./hero.json";
export { default as EVENT_LOGISTICS_INTRO } from "./intro.json";
export { default as EVENT_LOGISTICS_BENEFITS } from "./logistics-benefits.json";
export { default as EVENT_LOGISTICS_CTA } from "./logistics-cta.json";
export { default as EVENT_LOGISTICS_PAGE } from "./page.json";
export { default as EVENT_LOGISTICS_DELIVERABLES } from "./services.json";
export { default as EVENT_LOGISTICS_WHY_CHOOSE_US } from "./why-choose-us.json";
