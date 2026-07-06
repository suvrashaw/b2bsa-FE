import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";
import type { BlogsSectionContent } from "@/content/blogs";

import BLOG_DATA from "./blog.json";
import CAPABILITIES_DATA from "./capabilities.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact.json";
import STREAMING_INTRO_DATA from "./intro.json";

export const LIVE_STREAMING_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const LIVE_STREAMING_INTRO = {
  ...STREAMING_INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
  triggerContactModal: true,
};

export const LIVE_STREAMING_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export const LIVE_STREAMING_CAPABILITIES = {
  description: CAPABILITIES_DATA.description,
  heading: CAPABILITIES_DATA.heading,
};

export const LIVE_STREAMING_CAPABILITIES_FEATURES = CAPABILITIES_DATA.features;

export const LIVE_STREAMING_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export { default as LIVE_STREAMING_AREAS_SERVED } from "./areas-served.json";
export { default as LIVE_STREAMING_CLIENT_LOGOS } from "./client-logos.json";
export { default as LIVE_STREAMING_FAQ } from "./faq.json";
export { default as LIVE_STREAMING_HERO } from "./hero.json";
export { default as LIVE_STREAMING_PAGE } from "./page.json";
export { default as LIVE_STREAMING_DELIVERABLES } from "./services.json";
export { default as LIVE_STREAMING_WHY_CHOOSE_US } from "./why-choose-us.json";
