import type { Metadata } from "next";

import { ContactUs } from "@/components/sections/ContactUs";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_VALIDATION_CASE_STUDIES,
  DATA_VALIDATION_CTA,
  DATA_VALIDATION_DELIVERABLES,
  DATA_VALIDATION_FAQ,
  DATA_VALIDATION_HERO,
  DATA_VALIDATION_PAGE,
  DATA_VALIDATION_PROCESS,
  DATA_VALIDATION_SPOTLIGHT,
} from "@/content/services/market-research/data-validation/content";
import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";

export const metadata: Metadata = getMarketingPageMetadata(DATA_VALIDATION_PAGE);

const contactCta = {
  ...CINEMATIC_CTA_SHARED,
  ...DATA_VALIDATION_CTA,
  badge: "Ready to Start",
  headingLines: [DATA_VALIDATION_CTA.title] as [string],
  primaryCta: {
    href: DATA_VALIDATION_CTA.ctaHref,
    label: DATA_VALIDATION_CTA.ctaLabel,
  },
};

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={DATA_VALIDATION_CASE_STUDIES}
      closingSections={<ContactUs {...contactCta} />}
      deliverables={DATA_VALIDATION_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={DATA_VALIDATION_FAQ}
      hero={DATA_VALIDATION_HERO}
      page={DATA_VALIDATION_PAGE}
      process={DATA_VALIDATION_PROCESS}
      spotlight={DATA_VALIDATION_SPOTLIGHT}
    />
  );
};

export default Page;
