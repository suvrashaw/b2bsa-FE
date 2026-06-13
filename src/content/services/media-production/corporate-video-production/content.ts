import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import HERO_DATA from "./hero.json";
import WHY_DATA from "./why.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const CORPORATE_VIDEO_HERO = HERO_DATA;

export const CORPORATE_VIDEO_PROOF_BAR = DATA.corporateVideoProofBar;

export const CORPORATE_VIDEO_INTRO = DATA.corporateVideoIntro;

export const CORPORATE_VIDEO_WHY = WHY_DATA;

export const CORPORATE_VIDEO_INDUSTRIES = DATA.corporateVideoIndustries;

export const CORPORATE_VIDEO_PORTFOLIO = {
    ...DATA.corporateVideoPortfolio,
    items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const CORPORATE_VIDEO_DELIVERABLES = DATA.corporateVideoDeliverables;

export const CORPORATE_VIDEO_FAQ = FAQ_DATA;

export const CORPORATE_VIDEO_PAGE = PAGE_DATA;
