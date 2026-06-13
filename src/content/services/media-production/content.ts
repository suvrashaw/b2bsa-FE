import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";
import DATA from "./data.json";

export const MEDIA_PROOF_BAR = {
    ...DATA.proofBar,
    stats: GLOBAL_PROOF_STATS,
};







export const MEDIA_CASE_STUDIES = {
    ...DATA.caseStudies,
    items: GLOBAL_CASE_STUDIES,
};





export const MEDIA_CONTACT_CTA = {
    ...DATA.contactCta,
    ...CINEMATIC_CTA_SHARED,
  headingLines: ["Content Should", "Keep Working."] as [string, string]
};

export {default as MEDIA_FAQ} from "./faq.json";
export {default as MEDIA_HERO} from "./hero.json";
export {default as MEDIA_PAGE} from "./page.json";
export {default as MEDIA_PROCESS} from "./process.json";
export {default as MEDIA_SERVICES} from "./services.json";
export {default as MEDIA_WHY} from "./why.json";