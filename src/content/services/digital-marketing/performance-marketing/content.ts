import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import CAPABILITIES_DATA from "./capabilities.json";
import CASESTUDIES_DATA from "./case-studies.json";
import INDUSTRIES_DATA from "./industries.json";

export const PPC_CLIENT_LOGOS_HEADING = "Trusted by Global Brands for B2B Paid Advertising";

export const PPC_CAPABILITIES = {
  description: CAPABILITIES_DATA.description,
  heading: CAPABILITIES_DATA.heading,
};

export const PPC_CAPABILITIES_FEATURES = CAPABILITIES_DATA.features;

export const PPC_INDUSTRIES = {
  heading: INDUSTRIES_DATA.heading,
  items: INDUSTRIES_DATA.items,
};

export const PPC_INDUSTRIES_FEATURES = INDUSTRIES_DATA.features;

export const PPC_CASE_STUDIES = {
  ...CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as PPC_BLOGS_SECTION } from "./blogs-section.json";
export { default as PPC_CAMPAIGNS } from "./campaigns.json";
export { default as PPC_CONTACT_CTA } from "./contact-cta.json";
export { default as PPC_FAQ } from "./faq.json";
export { default as PPC_HERO } from "./hero.json";
export { default as PPC_INTRO } from "./intro.json";
export { default as PPC_MODAL_SERVICE_FIELD } from "./modal-service-field.json";
export { default as PPC_PAGE } from "./page.json";
export { default as PPC_RELATED_SERVICES } from "./related-services.json";
export { default as PPC_SERVICES } from "./services.json";
export { default as PPC_WHY_CHOOSE_US } from "./why-choose-us.json";
