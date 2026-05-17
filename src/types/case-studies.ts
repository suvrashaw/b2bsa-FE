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

export interface CaseStudyCardSummary {
  label: string;
  text: string;
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
