import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
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

const dataAugmentationCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Request a Data Audit",
  description:
    "Better data enrichment improves segmentation, personalisation, deliverability, and sales productivity simultaneously.",
  title: "Your CRM is leaking revenue.",
};

const dataAugmentationRelatedServices = [
  {
    href: "/services/market-intelligence",
    title: "Human-Powered Market Intelligence",
  },
  { href: "/services/data-validation", title: "Data Validation" },
  { href: "/services/market-research", title: "Market Research" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      ctaBanner={dataAugmentationCtaBanner}
      deliverables={DATA_AUGMENTATION_DELIVERABLES}
      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      parentPage={RESEARCH_PAGE}
      process={DATA_AUGMENTATION_PROCESS}
      proofBar={DATA_AUGMENTATION_PROOF_BAR}
      relatedServices={dataAugmentationRelatedServices}
    />
  );
};

export default Page;
