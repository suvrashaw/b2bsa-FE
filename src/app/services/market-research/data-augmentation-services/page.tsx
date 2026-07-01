import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_CLIENT_LOGOS,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_FAQ,
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_INTRO,
  DATA_AUGMENTATION_PAGE,
  DATA_AUGMENTATION_PROCESS,
} from "@/content/services/market-research/data-augmentation-services/content";

export const metadata: Metadata = getMarketingPageMetadata(DATA_AUGMENTATION_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      clientLogos={DATA_AUGMENTATION_CLIENT_LOGOS}
      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      process={DATA_AUGMENTATION_PROCESS}
      services={DATA_AUGMENTATION_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={DATA_AUGMENTATION_INTRO}
    />
  );
};

export default Page;
