export interface CaseStudyEntry {
  id: string;
  title: string;
  event: string;
  location: string;
  client: string;
  services: string[];
  requirements: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  image: string;
  href: string;
}

import type { MarketingPageDefinition } from "@/content/page-definitions";

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
import STUDIES_DATA from "@/content/shared/case-studies.json";
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
export const CASE_STUDIES_PAGE_STUDIES = STUDIES_DATA as unknown as CaseStudyEntry[];

export const CASE_STUDIES_PAGE = PAGE_DATA as MarketingPageDefinition;
