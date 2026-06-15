import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import CAPABILITIES_DATA from "./capabilities.json";
import CASESTUDIES_DATA from "./case-studies.json";
import INDUSTRIES_DATA from "./industries.json";

export const SEO_CLIENT_LOGOS_HEADING = "Trusted by Global Brands for B2B SEO Services";

export const SEO_CAPABILITIES = {
  description: CAPABILITIES_DATA.description,
  heading: CAPABILITIES_DATA.heading,
};

export const SEO_CAPABILITIES_FEATURES = CAPABILITIES_DATA.features;

export const SEO_INDUSTRIES = {
  heading: INDUSTRIES_DATA.heading,
  items: INDUSTRIES_DATA.items,
};

export const SEO_INDUSTRIES_FEATURES = INDUSTRIES_DATA.features;

export const SEO_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as SEO_BLOGS_SECTION } from "./blogs-section.json";
export { default as SEO_CAMPAIGNS } from "./campaigns.json";
export { default as SEO_CONTACT_CTA } from "./contact-cta.json";
export { default as SEO_FAQ } from "./faq.json";
export { default as SEO_HERO } from "./hero.json";
export { default as SEO_INTRO } from "./intro.json";
export { default as SEO_MODAL_SERVICE_FIELD } from "./modal-service-field.json";
export { default as SEO_PAGE } from "./page.json";
export { default as SEO_RELATED_SERVICES } from "./related-services.json";
export { default as SEO_SERVICES } from "./services.json";
export { default as SEO_WHY_CHOOSE_US } from "./why-choose-us.json";
