import type { CaseStudyEntry } from "./content";

import GLOBAL_CASE_STUDIES_DATA from "./case-studies.json";

const SELECTED_CASE_STUDY_IDS = [
  "sap-sapphire-2023",
  "nrf-2023",
  "distributech-2023",
  "sibos-2025",
  "waf-2025",
];

export const GLOBAL_CASE_STUDIES: CaseStudyEntry[] = SELECTED_CASE_STUDY_IDS.map((id) =>
  GLOBAL_CASE_STUDIES_DATA.find((cs) => cs.id === id)
).filter(Boolean) as unknown as CaseStudyEntry[];
