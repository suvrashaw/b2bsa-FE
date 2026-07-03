import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  RESEARCH_CASE_STUDIES,
  RESEARCH_CLIENT_LOGOS,
  RESEARCH_FAQ,
  RESEARCH_HERO,
  RESEARCH_INTRO,
  RESEARCH_PAGE,
  RESEARCH_PROCESS,
  RESEARCH_SERVICES,
  RESEARCH_WHY,
} from "@/content/services/market-research/content";

export const metadata: Metadata = getMarketingPageMetadata(RESEARCH_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={RESEARCH_CASE_STUDIES}
      clientLogos={RESEARCH_CLIENT_LOGOS}
      faq={RESEARCH_FAQ}
      hero={RESEARCH_HERO}
      page={RESEARCH_PAGE}
      process={RESEARCH_PROCESS}
      services={RESEARCH_SERVICES}
      showServicesCommonCta
      spotlight={RESEARCH_INTRO}
      why={RESEARCH_WHY}
    />
  );
};

export default Page;
