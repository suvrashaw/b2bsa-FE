export interface CaseStudyEntry {
  challenge: string;
  client: string;
  event: string;
  href: string;
  icon?: string;
  id: string;
  image: string;
  location: string;
  metric: string;
  metricLabel: string;
  outcome: string;
  requirements: string;
  services: string[];
  solution: string;
  title: string;
}

import type { MarketingPageDefinition } from "@/content/page-definitions";

import STUDIES_DATA from "@/content/case-studies/case-studies-data.json";

import EMPTY_STATE_DATA from "./empty-state.json";
import GRID_FILTERS_DATA from "./grid-filters.json";
import HERO_DATA from "./hero.json";
import PAGE_DATA from "./page.json";

export const CASE_STUDIES_PAGE_DATA = {
  emptyState: EMPTY_STATE_DATA,
  gridFilters: GRID_FILTERS_DATA,
  hero: HERO_DATA,
};
export const CASE_STUDIES_PAGE_STUDIES = STUDIES_DATA as unknown as CaseStudyEntry[];

export const CASE_STUDIES_PAGE = PAGE_DATA as MarketingPageDefinition;

const SELECTED_CASE_STUDY_IDS = [
  "sap-sapphire-2023",
  "nrf-2023",
  "distributech-2023",
  "sibos-2025",
  "waf-2025",
];

export const GLOBAL_CASE_STUDIES: CaseStudyEntry[] = SELECTED_CASE_STUDY_IDS.map((id) =>
  STUDIES_DATA.find((cs) => cs.id === id)
).filter(Boolean) as unknown as CaseStudyEntry[];
