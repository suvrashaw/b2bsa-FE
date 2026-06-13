import type { CaseStudyItem as HomeCaseStudyItem } from "../home/content";

type SharedCaseStudyItem = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

import GLOBAL_CASE_STUDIES_DATA from "./case-studies.json";
import GLOBAL_INDUSTRY_SERVICES_DATA from "./industry-services.json";
import GLOBAL_PROOF_STATS_DATA from "./proof-stats.json";

export const GLOBAL_PROOF_STATS = GLOBAL_PROOF_STATS_DATA;

export const GLOBAL_CASE_STUDIES: SharedCaseStudyItem[] = GLOBAL_CASE_STUDIES_DATA;

export const GLOBAL_INDUSTRY_SERVICES = GLOBAL_INDUSTRY_SERVICES_DATA;
