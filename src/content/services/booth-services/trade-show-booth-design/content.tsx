import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import HERO_DATA from "./hero.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const BOOTH_DESIGN_HERO = HERO_DATA;

export { GLOBAL_PROOF_STATS as BOOTH_DESIGN_PROOF_BAR } from "../../shared";

export const BOOTH_DESIGN_SHOWCASE_ITEMS = DATA.designShowcaseItems;

export const BOOTH_DESIGN_SPOTLIGHT = DATA.designSpotlight;

export const BOOTH_DESIGN_DELIVERABLES = DATA.designDeliverables;

export const BOOTH_DESIGN_PROCESS = DATA.designProcess;

export const BOOTH_DESIGN_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_DESIGN_FAQ = FAQ_DATA;

export const BOOTH_DESIGN_PAGE = PAGE_DATA;

export const BOOTH_DESIGN_RELATED_SERVICES = DATA.designRelatedServices;

export const BOOTH_DESIGN_WHY_CHOOSE_US = DATA.designWhyChooseUs;

export const BOOTH_DESIGN_BLOGS_SECTION = DATA.designBlogsSection;

export const BOOTH_DESIGN_CONTACT_CTA = {
    ...DATA.designContactCta,
    headingLines: ["Every Square Foot", "Should Earn Its Place"] as [string, string]
};
