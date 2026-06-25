export interface CaseStudyEntry {
  challenge: string;
  client: string;
  event: string;
  href: string;
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

import STUDIES_DATA from "@/content/case-studies/case-studies.json";

import CARD_CTA_LABEL_DATA from "./card-cta-label.json";
import CTA_DATA from "./cta.json";
import EMPTY_STATE_DATA from "./empty-state.json";
import FILTERS_TITLE_DATA from "./filters-title.json";
import FILTERS_DATA from "./filters.json";
import GRID_FILTERS_DATA from "./grid-filters.json";
import HERO_DATA from "./hero.json";
import INTRO_DATA from "./intro.json";
import PAGE_DATA from "./page.json";
import RESULTS_HEADING_DATA from "./results-heading.json";
import TEMPLATE_DATA from "./template.json";

export const CASE_STUDIES_PAGE_CONTENT = {
  cardCtaLabel: CARD_CTA_LABEL_DATA,
  cta: CTA_DATA,
  emptyState: EMPTY_STATE_DATA,
  filters: FILTERS_DATA,
  filtersTitle: FILTERS_TITLE_DATA,
  gridFilters: GRID_FILTERS_DATA,
  hero: HERO_DATA,
  intro: INTRO_DATA,
  resultsHeading: RESULTS_HEADING_DATA,
  template: TEMPLATE_DATA,
};
export const CASE_STUDIES_PAGE_STUDIES =
  STUDIES_DATA as unknown as CaseStudyEntry[];

export const CASE_STUDIES_PAGE = PAGE_DATA as MarketingPageDefinition;

export interface CaseStudyDetail {
  challenges: string;
  client: string;
  event: string;
  eventDescription: string;
  image: string;
  location: string;
  outcome: string;
  outcomeStats: string[];
  requirements: string;
  services: string[];
  slug: string;
  solution: string;
  title: string;
}

import CASE_STUDY_DETAILS_DATA from "./details.json";

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = CASE_STUDY_DETAILS_DATA;

const SELECTED_CASE_STUDY_IDS = [
  "sap-sapphire-2023",
  "nrf-2023",
  "distributech-2023",
  "sibos-2025",
  "waf-2025",
];

export const GLOBAL_CASE_STUDIES: CaseStudyEntry[] =
  SELECTED_CASE_STUDY_IDS.map((id) =>
    STUDIES_DATA.find((cs) => cs.id === id),
  ).filter(Boolean) as unknown as CaseStudyEntry[];
