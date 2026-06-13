export interface CaseStudyCardData {
  badge?: string;
  client: string;
  href?: string;
  icon: string;
  id: string;
  image: string;
  inactiveLabel?: string;
  metric: string;
  metricLabel: string;
  primarySummary: CaseStudyCardSummary;
  secondarySummary: CaseStudyCardSummary;
  title: string;
}

export interface CaseStudyIndexEntry {
  anchorId: string;
  card: CaseStudyCardData;
  challenge: string;
  companySize: string;
  event: string;
  format: "gallery" | "text" | "video";
  formatIcon: string;
  geography: string;
  id: string;
  industry: string;
  results: string;
  serviceCategories: string[];
  servicesText: string;
  title: string;
  whatWeDid: string;
}

interface CaseStudyCardSummary {
  label: string;
  text: string;
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
import STUDIES_DATA from "./studies.json";
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
export const CASE_STUDIES_PAGE_STUDIES = STUDIES_DATA as unknown as CaseStudyIndexEntry[];

export const CASE_STUDIES_PAGE = PAGE_DATA as MarketingPageDefinition;
