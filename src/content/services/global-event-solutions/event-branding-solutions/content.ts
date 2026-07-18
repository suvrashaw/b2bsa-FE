import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/services";

import BLOG_DATA from "./blog.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_DATA from "./contact-cta.json";
import INDUSTRIES_DATA from "./industries.json";
import PROOF_BAR_DATA from "./intro.json";

export const EVENT_BRANDING_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const EVENT_BRANDING_INTRO = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const EVENT_BRANDING_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_BRANDING_INDUSTRIES = {
  ...INDUSTRIES_DATA,
  items: GLOBAL_INDUSTRY_SERVICES,
};

export const EVENT_BRANDING_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as EVENT_BRANDING_CAPABILITIES } from "./capabilities.json";
export { default as EVENT_BRANDING_CLIENT_LOGOS } from "./client-logos.json";
export { default as EVENT_BRANDING_FAQ } from "./faq.json";

export { default as EVENT_BRANDING_IMAGE_HERO } from "./hero.json";
export { default as EVENT_BRANDING_PAGE } from "./page.json";
export { default as EVENT_BRANDING_DELIVERABLES } from "./services.json";
export { default as EVENT_BRANDING_WHY_CHOOSE_US } from "./why-choose-us.json";
