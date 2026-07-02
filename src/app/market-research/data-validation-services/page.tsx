import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_VALIDATION_CASE_STUDIES,
  DATA_VALIDATION_CLIENT_LOGOS,
  DATA_VALIDATION_DELIVERABLES,
  DATA_VALIDATION_FAQ,
  DATA_VALIDATION_HERO,
  DATA_VALIDATION_INTRO,
  DATA_VALIDATION_PAGE,
  DATA_VALIDATION_PROCESS,
} from "@/content/services/market-research/data-validation-services/content";

export const metadata: Metadata = getMarketingPageMetadata(DATA_VALIDATION_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={DATA_VALIDATION_CASE_STUDIES}
      clientLogos={DATA_VALIDATION_CLIENT_LOGOS}
      faq={DATA_VALIDATION_FAQ}
      hero={DATA_VALIDATION_HERO}
      page={DATA_VALIDATION_PAGE}
      process={DATA_VALIDATION_PROCESS}
      services={DATA_VALIDATION_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={DATA_VALIDATION_INTRO}
    />
  );
};

export default Page;
