import type { Metadata } from "next";

import { ServiceHub } from "@/components/templates/ServiceHub";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  RESEARCH_CASE_STUDIES,
  RESEARCH_FAQ,
  RESEARCH_HERO,
  RESEARCH_PAGE,
  RESEARCH_PROCESS,
  RESEARCH_PROOF_BAR,
  RESEARCH_SERVICES,
  RESEARCH_WHY,
} from "@/content/services/market-research";

export const metadata: Metadata = getMarketingPageMetadata(RESEARCH_PAGE);

const Page = () => {
  return (
    <ServiceHub
      caseStudies={RESEARCH_CASE_STUDIES}
      faq={RESEARCH_FAQ}
      hero={RESEARCH_HERO}
      page={RESEARCH_PAGE}
      process={RESEARCH_PROCESS}
      proofBar={RESEARCH_PROOF_BAR}
      services={RESEARCH_SERVICES}
      why={RESEARCH_WHY}
    />
  );
};

export default Page;
