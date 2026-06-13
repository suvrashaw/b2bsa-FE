import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";

import BRANDINGCONTACTCTA_DATA from "./branding-contact-cta.json";
import BRANDINGINDUSTRIESSECTION_DATA from "./branding-industries-section.json";


export {default as EVENT_BRANDING_BLOGS_SECTION} from "./branding-blogs-section.json";







export const EVENT_BRANDING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_BRANDING_INDUSTRIES_SECTION = {
  ...BRANDINGINDUSTRIESSECTION_DATA,
  services: GLOBAL_INDUSTRY_SERVICES,
};





export const EVENT_BRANDING_CONTACT_CTA = {
  ...BRANDINGCONTACTCTA_DATA,
};

export {default as EVENT_BRANDING_CAPABILITIES} from "./branding-capabilities.json";
export {default as EVENT_BRANDING_DELIVERABLES} from "./branding-deliverables.json";
export {default as EVENT_BRANDING_INTRO} from "./branding-intro.json";
export {default as EVENT_BRANDING_RELATED_SERVICES} from "./branding-related-services.json";

export { default as EVENT_BRANDING_FAQ } from "./faq.json";
export { default as EVENT_BRANDING_IMAGE_HERO } from "./hero.json";
export { default as EVENT_BRANDING_PAGE } from "./page.json";
export { default as EVENT_BRANDING_WHY_CHOOSE_US } from "./why-choose-us.json";
export { GLOBAL_PROOF_STATS as EVENT_BRANDING_PROOF_BAR } from "@/content/shared";