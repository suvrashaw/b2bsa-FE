import type { CaseStudyEntry } from "@/content/case-studies/content";

import GLOBAL_CASE_STUDIES_DATA from "./case-studies.json";

export const GLOBAL_CASE_STUDIES: CaseStudyEntry[] =
  GLOBAL_CASE_STUDIES_DATA as unknown as CaseStudyEntry[];

export { default as GLOBAL_INDUSTRY_SERVICES } from "./industry-services.json";
export { default as GLOBAL_PROOF_STATS } from "./proof-stats.json";
