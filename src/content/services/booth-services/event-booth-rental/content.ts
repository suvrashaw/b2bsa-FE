import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import HERO_DATA from "./hero.json";
import FAQ_DATA from "./faq.json";
import WHY_DATA from "./why.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const BOOTH_RENTAL_RENT_VS_BUY = DATA.rentalRentVsBuy;

export const BOOTH_RENTAL_HERO = HERO_DATA;

export { GLOBAL_PROOF_STATS as BOOTH_RENTAL_PROOF_BAR } from "../../shared";

export const BOOTH_RENTAL_WHY = WHY_DATA;

export const BOOTH_RENTAL_PROCESS = DATA.rentalProcess;

export const BOOTH_RENTAL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_RENTAL_FAQ = FAQ_DATA;

export const BOOTH_RENTAL_RELATED_SERVICES = DATA.rentalRelatedServices;

export const BOOTH_RENTAL_BLOGS_SECTION = DATA.rentalBlogsSection;

export const BOOTH_RENTAL_CONTACT_CTA = {
    ...DATA.rentalContactCta,
    headingLines: ["Fast Does Not Have To", "Feel Temporary"] as [string, string]
};

export const BOOTH_RENTAL_PAGE = PAGE_DATA;
