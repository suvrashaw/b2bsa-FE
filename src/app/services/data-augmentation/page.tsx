import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_CTA,
  DATA_AUGMENTATION_DEFINITION,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_FAQ,
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_PAGE,
  DATA_AUGMENTATION_PROCESS,
} from "@/content/services/detail/data-augmentation";

export const metadata: Metadata = getMarketingPageMetadata(DATA_AUGMENTATION_PAGE);

const contactCta = {
  ...CINEMATIC_CTA_SHARED,
  ...DATA_AUGMENTATION_CTA,
  badge: "Ready to Start",
  headingLines: [DATA_AUGMENTATION_CTA.title] as [string],
  primaryCta: {
    href: DATA_AUGMENTATION_CTA.ctaHref,
    label: DATA_AUGMENTATION_CTA.ctaLabel,
  },
};

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      closingSections={<ContactCinematicCTA {...contactCta} />}
      definitionBlock={DATA_AUGMENTATION_DEFINITION}
      deliverables={DATA_AUGMENTATION_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      process={DATA_AUGMENTATION_PROCESS}
    />
  );
};

export default Page;
