import type { CaseStudyItem as HomeCaseStudyItem } from "@/content/home/content";

type SharedCaseStudyItem = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

import GLOBAL_CASE_STUDIES_DATA from "./case-studies.json";

export const GLOBAL_CASE_STUDIES: SharedCaseStudyItem[] = GLOBAL_CASE_STUDIES_DATA;

export { default as GLOBAL_INDUSTRY_SERVICES } from "./industry-services.json";
export { default as GLOBAL_PROOF_STATS } from "./proof-stats.json";
