import { SQL_HERO } from "@/content/services/sales-qualified-lead-generation/content";

export {
  SQL_CASE_STUDIES as EVENT_LEAD_CASE_STUDIES,
  SQL_CONTACT_CTA as EVENT_LEAD_CONTACT_CTA,
  SQL_FAQ as EVENT_LEAD_FAQ,
  SQL_PROCESS as EVENT_LEAD_PROCESS,
  SQL_PROOF_BAR as EVENT_LEAD_PROOF_BAR,
  SQL_SERVICES as EVENT_LEAD_SERVICES,
  SQL_WHY as EVENT_LEAD_WHY,
} from "../content";

export const EVENT_LEAD_HERO = {
  ...SQL_HERO,
  title: "Event Lead Generation",
};

export { default as EVENT_LEAD_PAGE } from "./page.json";
