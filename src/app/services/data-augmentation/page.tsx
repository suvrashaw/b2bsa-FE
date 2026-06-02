import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_FAQ,
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_PAGE,
  DATA_AUGMENTATION_PROCESS,
  DATA_AUGMENTATION_PROOF_BAR,
} from "@/content/services/detail/data-augmentation";
import { RESEARCH_PAGE } from "@/content/services/market-research";

export const metadata: Metadata = getMarketingPageMetadata(DATA_AUGMENTATION_PAGE);

const dataAugmentationContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Enrich Your Pipeline",
  description:
    "Your CRM is leaking revenue. Better data enrichment improves segmentation, personalisation, deliverability, and sales productivity simultaneously.",
  headingLines: ["Your CRM Is", "Leaking Revenue."] as [string, string],
  primaryCta: { href: "/contact", label: "Request a Data Audit" },
};

const dataAugmentationRelatedServices = [
  { href: "/services/market-research", title: "Market Research" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      closingSections={
        <>
          <FAQ {...DATA_AUGMENTATION_FAQ} />
          <RelatedServices services={dataAugmentationRelatedServices} />
          <ContactCinematicCTA {...dataAugmentationContactCta} />
        </>
      }
      deliverables={DATA_AUGMENTATION_DELIVERABLES}
      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      parentPage={RESEARCH_PAGE}
      process={DATA_AUGMENTATION_PROCESS}
      proofBar={DATA_AUGMENTATION_PROOF_BAR}
    />
  );
};

export default Page;
