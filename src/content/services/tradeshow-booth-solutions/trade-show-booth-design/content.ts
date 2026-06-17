import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import BOOTHDESIGNCASESTUDIESDATA from "./case-studies.json";
import DESIGNCONTACTCTA_DATA from "./design-contact-cta.json";
import BOOTHDESIGNPROOFBARDATA from "./proof-bar.json";

export const BOOTH_DESIGN_PROOF_BAR = {
  ...BOOTHDESIGNPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_DESIGN_CASE_STUDIES = {
  ...BOOTHDESIGNCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_DESIGN_CONTACT_CTA = {
  ...DESIGNCONTACTCTA_DATA,
};

export { default as BOOTH_DESIGN_BLOGS_SECTION } from "./blog.json";
export { default as BOOTH_DESIGN_DELIVERABLES } from "./design-deliverables.json";
export { default as BOOTH_DESIGN_RELATED_SERVICES } from "./design-related-services.json";

export { default as BOOTH_DESIGN_SHOWCASE_ITEMS } from "./design-showcase-items.json";
export { default as BOOTH_DESIGN_SPOTLIGHT } from "./design-spotlight.json";
export { default as BOOTH_DESIGN_FAQ } from "./faq.json";
export { default as BOOTH_DESIGN_HERO } from "./hero.json";
export { default as BOOTH_DESIGN_PAGE } from "./page.json";
export { default as BOOTH_DESIGN_PROCESS } from "./process.json";
export { default as BOOTH_DESIGN_WHY_CHOOSE_US } from "./why-choose-us.json";
