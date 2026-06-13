import { GLOBAL_CASE_STUDIES, GLOBAL_INDUSTRY_SERVICES } from "@/content/shared";
import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as BOOTH_HOSTESS_PROOF_BAR } from "../../shared";

export const BOOTH_HOSTESS_INTRO = DATA.hostessIntro;

export const BOOTH_HOSTESS_DELIVERABLES = DATA.hostessDeliverables;

export const BOOTH_HOSTESS_CAPABILITIES = DATA.hostessCapabilities;

export const BOOTH_HOSTESS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_HOSTESS_INDUSTRIES_SECTION = {
    ...DATA.hostessIndustriesSection,
    services: GLOBAL_INDUSTRY_SERVICES,
};



export const BOOTH_HOSTESS_BLOGS_SECTION = DATA.hostessBlogsSection;



export const BOOTH_HOSTESS_RELATED_SERVICES = DATA.hostessRelatedServices;

export const BOOTH_HOSTESS_CONTACT_CTA = {
    ...DATA.hostessContactCta,
    headingLines: ["Looking for Professional", "Event Hostess Services?"] as [string, string]
};



export {default as BOOTH_HOSTESS_FAQ} from "./faq.json";
export {default as BOOTH_HOSTESS_IMAGE_HERO} from "./hero.json";
export {default as BOOTH_HOSTESS_PAGE} from "./page.json";
export {default as BOOTH_HOSTESS_WHY_CHOOSE_US} from "./why-choose-us.json";