import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { SQL_HERO } from "@/content/services/sales-qualified-lead-generation/content";

import EVENT_LEAD_CASESTUDIES_DATA from "./case-studies.json";

export {
  SQL_CONTACT_CTA as EVENT_LEAD_CONTACT_CTA,
  SQL_FAQ as EVENT_LEAD_FAQ,
  SQL_PROCESS as EVENT_LEAD_PROCESS,
  SQL_SERVICES as EVENT_LEAD_SERVICES,
  SQL_WHY as EVENT_LEAD_WHY,
} from "../content";

export const EVENT_LEAD_CASE_STUDIES = {
  ...EVENT_LEAD_CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_LEAD_HERO = {
  ...SQL_HERO,
  title: "Event Lead Generation",
};

export { default as EVENT_LEAD_CLIENT_LOGOS } from "./client-logos.json";
export { default as EVENT_LEAD_INTRO } from "./intro.json";
export { default as EVENT_LEAD_PAGE } from "./page.json";
export { default as EVENT_LEAD_PIPELINE } from "./pipeline.json";
