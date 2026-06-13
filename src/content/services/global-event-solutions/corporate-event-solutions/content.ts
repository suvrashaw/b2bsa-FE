import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";
import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as CORP_EVENT_PROOF_BAR } from "../../shared";

export const CORP_EVENT_INTRO = DATA.eventIntro;

export const CORP_EVENT_DELIVERABLES = DATA.eventDeliverables;

export const CORP_EVENT_CAPABILITIES = DATA.eventCapabilities;

export const CORP_EVENT_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const CORP_EVENT_INDUSTRIES_SECTION = {
    ...DATA.eventIndustriesSection,
    services: GLOBAL_INDUSTRY_SERVICES,
};



export const CORP_EVENT_BLOGS_SECTION = DATA.eventBlogsSection;



export const CORP_EVENT_RELATED_SERVICES = DATA.eventRelatedServices;

export const CORP_EVENT_CONTACT_CTA = {
    ...DATA.eventContactCta,
    headingLines: ["Looking for End-to-End", "Corporate Event Solutions?"] as [string, string]
};



export {default as CORP_EVENT_FAQ} from "./faq.json";
export {default as CORP_EVENT_IMAGE_HERO} from "./hero.json";
export {default as CORP_EVENT_PAGE} from "./page.json";
export {default as CORP_EVENT_WHY_CHOOSE_US} from "./why-choose-us.json";