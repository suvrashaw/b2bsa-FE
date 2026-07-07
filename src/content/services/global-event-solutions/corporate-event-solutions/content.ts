import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/services";

import BLOG_DATA from "./blog.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";
import INDUSTRIES_DATA from "./industries.json";
import PROOF_BAR_DATA from "./intro.json";

export const CORP_EVENT_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const CORP_EVENT_INTRO = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const CORP_EVENT_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

const industryItems = GLOBAL_INDUSTRY_SERVICES.map(({ color: _color, ...item }) => item);
const aviationIndustry = industryItems.find((s) => s.id === "aviation");
const otherIndustries = industryItems.filter((s) => s.id !== "aviation");

export const CORP_EVENT_INDUSTRIES = {
  ...INDUSTRIES_DATA,
  items: aviationIndustry ? [...otherIndustries, aviationIndustry] : industryItems,
};

export const CORP_EVENT_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as CORP_EVENT_CLIENT_LOGOS } from "./client-logos.json";
export { default as CORP_EVENT_FAQ } from "./faq.json";
export { default as CORP_EVENT_IMAGE_HERO } from "./hero.json";

export { default as CORP_EVENT_PAGE } from "./page.json";
export { default as CORP_EVENT_CAPABILITIES } from "./process.json";
export { default as CORP_EVENT_DELIVERABLES } from "./services.json";
export { default as CORP_EVENT_WHY_CHOOSE_US } from "./why-choose-us.json";
