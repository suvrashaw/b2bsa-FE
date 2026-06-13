import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  RESEARCH_CASE_STUDIES,
  RESEARCH_CONTACT_CTA,
  RESEARCH_FAQ,
  RESEARCH_HERO,
  RESEARCH_PAGE,
  RESEARCH_PROCESS,
  RESEARCH_PROOF_BAR,
  RESEARCH_SERVICES,
  RESEARCH_WHY,
} from "@/content/services/market-research/content";

export const metadata: Metadata = getMarketingPageMetadata(RESEARCH_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={RESEARCH_CASE_STUDIES}
      contactUs={RESEARCH_CONTACT_CTA}
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
