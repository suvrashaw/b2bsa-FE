import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";
import DATA from "./data.json";

export const BS_PROOF_BAR = {
    ...DATA.proofBar,
    stats: GLOBAL_PROOF_STATS,
};







export const BS_CASE_STUDIES = {
    ...DATA.caseStudies,
    items: GLOBAL_CASE_STUDIES,
};





export const BS_CONTACT_CTA = {
    ...DATA.contactCta,
    ...CINEMATIC_CTA_SHARED,
  headingLines: ["250+ Events.", "$1.2B+ Influenced."] as [string, string]
};

export {default as BS_FAQ} from "./faq.json";
export {default as BS_HERO} from "./hero.json";
export {default as BS_PAGE} from "./page.json";
export {default as BS_PROCESS} from "./process.json";
export {default as BS_SERVICES} from "./services.json";
export {default as BS_WHY} from "./why.json";