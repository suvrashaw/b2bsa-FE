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
