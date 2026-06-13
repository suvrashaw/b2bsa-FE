import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";




export const CORPORATE_VIDEO_PROOF_BAR = DATA.corporateVideoProofBar;

export const CORPORATE_VIDEO_INTRO = DATA.corporateVideoIntro;



export const CORPORATE_VIDEO_INDUSTRIES = DATA.corporateVideoIndustries;

export const CORPORATE_VIDEO_PORTFOLIO = {
  ...DATA.corporateVideoPortfolio,
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const CORPORATE_VIDEO_DELIVERABLES = DATA.corporateVideoDeliverables;





export {default as CORPORATE_VIDEO_FAQ} from "./faq.json";
export {default as CORPORATE_VIDEO_HERO} from "./hero.json";
export {default as CORPORATE_VIDEO_PAGE} from "./page.json";
export {default as CORPORATE_VIDEO_WHY} from "./why.json";