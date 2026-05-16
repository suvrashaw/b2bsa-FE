import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MARKET_INTEL_CASE_STUDIES,
  MARKET_INTEL_DELIVERABLES,
  MARKET_INTEL_FAQ,
  MARKET_INTEL_HERO,
  MARKET_INTEL_PAGE,
  MARKET_INTEL_PROOF_BAR,
  MARKET_INTEL_TIERS,
  MARKET_INTEL_WHY,
} from "@/content/services/detail/human-powered-market-intelligence";
import { RESEARCH_PAGE } from "@/content/services/market-research";

export const metadata: Metadata = getMarketingPageMetadata(MARKET_INTEL_PAGE);

const marketIntelligenceRelatedServices = [
  { href: "/services/data-validation", title: "Data Validation" },
  { href: "/services/data-augmentation", title: "Data Augmentation" },
  { href: "/services/market-research", title: "Market Research" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={MARKET_INTEL_CASE_STUDIES}
      deliverables={MARKET_INTEL_DELIVERABLES}
      faq={MARKET_INTEL_FAQ}
      hero={MARKET_INTEL_HERO}
      page={MARKET_INTEL_PAGE}
      parentPage={RESEARCH_PAGE}
      pricing={MARKET_INTEL_TIERS}
      proofBar={MARKET_INTEL_PROOF_BAR}
      relatedServices={marketIntelligenceRelatedServices}
      why={MARKET_INTEL_WHY}
    />
  );
}

export default Page;
