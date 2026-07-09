import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES } from "@/content/services";

import BLOG_DATA from "./blog.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";
import INDUSTRIES_DATA from "./industries.json";

export const CORP_NETWORKING_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const CORP_NETWORKING_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const CORP_NETWORKING_INDUSTRIES = {
  ...INDUSTRIES_DATA,
  items: GLOBAL_INDUSTRY_SERVICES.map(
    ({ color: _color, description: _description, ...item }) => item
  ),
};

export const CORP_NETWORKING_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as CORP_NETWORKING_CAPABILITIES } from "./capabilities.json";
export { default as CORP_NETWORKING_CLIENT_LOGOS } from "./client-logos.json";
export { default as CORP_NETWORKING_FAQ } from "./faq.json";
export { default as CORP_NETWORKING_IMAGE_HERO } from "./hero.json";
export { default as CORP_NETWORKING_INTRO } from "./intro.json";
export { default as CORP_NETWORKING_EVENT_TYPES } from "./networking-event-types.json";
export { default as CORP_NETWORKING_PAGE } from "./page.json";
export { default as CORP_NETWORKING_DELIVERABLES } from "./services.json";
export { default as CORP_NETWORKING_WHY_CHOOSE_US } from "./why-choose-us.json";
