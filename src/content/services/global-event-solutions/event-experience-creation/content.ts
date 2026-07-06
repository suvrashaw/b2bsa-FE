import { GLOBAL_INDUSTRY_SERVICES, GLOBAL_PROOF_STATS } from "@/content/services";

import CONTACT_DATA from "./contact.json";
import INDUSTRIES_DATA from "./industries.json";
import PROOF_BAR_DATA from "./intro.json";

export const EVENT_EXPERIENCE_INTRO = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const EVENT_EXPERIENCE_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export const EVENT_EXPERIENCE_INDUSTRIES = {
  ...INDUSTRIES_DATA,
  items: GLOBAL_INDUSTRY_SERVICES.map(({ color: _color, ...item }) => item),
};

export { default as EVENT_EXPERIENCE_CAPABILITIES } from "./capabilities.json";
export { default as EVENT_EXPERIENCE_DESIGNED_FOR } from "./designed-for.json";
export { default as EVENT_EXPERIENCE_FAQ } from "./faq.json";
export { default as EVENT_EXPERIENCE_IMAGE_HERO } from "./hero.json";
export { default as EVENT_EXPERIENCE_PAGE } from "./page.json";
export { default as EVENT_EXPERIENCE_DELIVERABLES } from "./services.json";
export { default as EVENT_EXPERIENCE_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as EVENT_EXPERIENCE_WHY_MATTERS } from "./why-matters.json";
