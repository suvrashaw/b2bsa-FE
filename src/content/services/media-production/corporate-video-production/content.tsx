import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import HERO_DATA from "./hero.json";
import WHY_DATA from "./why.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const CORPORATE_VIDEO_HERO = HERO_DATA;

export const CORPORATE_VIDEO_PROOF_BAR = DATA.corporateVideoProofBar;

export const CORPORATE_VIDEO_INTRO = {
    ...DATA.corporateVideoIntro,
    description: (
    <>
      Corporate video production is the process of creating video content specifically for business
      purposes. Unlike traditional advertising or entertainment media, corporate videos are designed
      to support organizational goals such as marketing, training, internal communication, or
      stakeholder engagement.
      <br />
      <br />
      The process typically involves multiple stages: planning, scripting, production, and
      distribution. The aim is to ensure that videos are aligned with brand messaging and tailored
      to their target audiences. These videos can take many forms, from short promotional clips and
      product explainers to long-form training modules or event documentation.
      <br />
      <br />
      Their purpose is both to inform and to influence behavior, whether that means motivating
      employees, attracting customers, or building trust with partners. By combining visuals, sound,
      and narrative, corporate video production provides companies with a versatile communication
      tool that is both scalable and impactful.
    </>
  )
};

export const CORPORATE_VIDEO_WHY = WHY_DATA;

export const CORPORATE_VIDEO_INDUSTRIES = DATA.corporateVideoIndustries;

export const CORPORATE_VIDEO_PORTFOLIO = {
    ...DATA.corporateVideoPortfolio,
    items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const CORPORATE_VIDEO_DELIVERABLES = DATA.corporateVideoDeliverables;

export const CORPORATE_VIDEO_FAQ = FAQ_DATA;

export const CORPORATE_VIDEO_PAGE = PAGE_DATA;
