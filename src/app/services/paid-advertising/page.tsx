import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  PAID_ADS_CASE_STUDIES,
  PAID_ADS_DELIVERABLES,
  PAID_ADS_FAQ,
  PAID_ADS_HERO,
  PAID_ADS_PAGE,
  PAID_ADS_PROCESS,
  PAID_ADS_PROOF_BAR,
  PAID_ADS_WHY,
} from "@/content/services/detail/paid-advertising";
import { PERF_PAGE } from "@/content/services/performance-marketing";

export const metadata: Metadata = getMarketingPageMetadata(PAID_ADS_PAGE);

const paidAdvertisingCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Request a Paid Media Audit",
  description: "Fixing these is faster than increasing budget.",
  title:
    "A paid media audit reveals wasted spend, low-intent keywords, poor conversion paths, and attribution blind spots.",
};

const paidAdvertisingRelatedServices = [
  { href: "/services/seo-services", title: "SEO Services" },
  { href: "/services/linkedin-ads", title: "LinkedIn Ads for B2B" },
  { href: "/services/performance-marketing", title: "Performance Marketing" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={PAID_ADS_CASE_STUDIES}
      ctaBanner={paidAdvertisingCtaBanner}
      deliverables={PAID_ADS_DELIVERABLES}
      faq={PAID_ADS_FAQ}
      hero={PAID_ADS_HERO}
      page={PAID_ADS_PAGE}
      parentPage={PERF_PAGE}
      process={PAID_ADS_PROCESS}
      proofBar={PAID_ADS_PROOF_BAR}
      relatedServices={paidAdvertisingRelatedServices}
      why={PAID_ADS_WHY}
    />
  );
};

export default Page;
