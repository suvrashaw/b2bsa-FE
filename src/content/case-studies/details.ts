import CASE_STUDY_DETAILS_DATA from "./details.json";

export interface CaseStudyDetail {
  challenges: string;
  client: string;
  event: string;
  eventDescription: string;
  gallery?: string[];
  id: string;
  image: string;
  location: string;
  outcome: string;
  outcomeStats: string[];
  requirements: string;
  services: string[];
  solution: string;
  title: string;
}

// Kept out of index.ts so client components that only need GLOBAL_CASE_STUDIES
// (the card-summary list) don't transitively pull in the full case study
// detail bodies just by importing from that module.
export const CASE_STUDY_DETAILS: CaseStudyDetail[] = CASE_STUDY_DETAILS_DATA;
