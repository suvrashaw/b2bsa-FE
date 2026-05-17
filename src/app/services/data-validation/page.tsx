import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_VALIDATION_CASE_STUDIES,
  DATA_VALIDATION_DELIVERABLES,
  DATA_VALIDATION_FAQ,
  DATA_VALIDATION_HERO,
  DATA_VALIDATION_PAGE,
  DATA_VALIDATION_PROOF_BAR,
  DATA_VALIDATION_WHY,
  DATA_VALIDATION_WORKFLOW,
} from "@/content/services/detail/data-validation";
import { RESEARCH_PAGE } from "@/content/services/market-research";

export const metadata: Metadata = getMarketingPageMetadata(DATA_VALIDATION_PAGE);

const dataValidationCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Validate My List",
  description: "Before launching another campaign, make sure the list is worth using.",
  title: "Do not prospect with broken data.",
};

const dataValidationRelatedServices = [
  {
    href: "/services/market-intelligence",
    title: "Human-Powered Market Intelligence",
  },
  { href: "/services/data-augmentation", title: "Data Augmentation" },
  { href: "/services/market-research", title: "Market Research" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={DATA_VALIDATION_CASE_STUDIES}
      ctaBanner={dataValidationCtaBanner}
      deliverables={DATA_VALIDATION_DELIVERABLES}
      faq={DATA_VALIDATION_FAQ}
      hero={DATA_VALIDATION_HERO}
      page={DATA_VALIDATION_PAGE}
      parentPage={RESEARCH_PAGE}
      pricing={DATA_VALIDATION_WORKFLOW}
      proofBar={DATA_VALIDATION_PROOF_BAR}
      relatedServices={dataValidationRelatedServices}
      why={DATA_VALIDATION_WHY}
    />
  );
};

export default Page;
