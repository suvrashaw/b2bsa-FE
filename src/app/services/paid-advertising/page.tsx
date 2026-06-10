import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
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

const paidAdsContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Audit Your Spend",
  description:
    "A paid media audit reveals wasted spend, low-intent keywords, poor conversion paths, and attribution blind spots. Fixing these is faster than increasing budget.",
  headingLines: ["Fix the Leaks", "Before Adding Budget."] as [string, string],
  primaryCta: { href: "/contact", label: "Request a Paid Media Audit" },
};

const paidAdvertisingRelatedServices = [
  { href: "/services/seo-services", title: "SEO Services" },
  { href: "/services/performance-marketing", title: "Performance Marketing" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={PAID_ADS_CASE_STUDIES}
      closingSections={
        <>
          <FAQ {...PAID_ADS_FAQ} />
          <RelatedServices services={paidAdvertisingRelatedServices} />
          <ContactCinematicCTA {...paidAdsContactCta} />
        </>
      }
      deliverables={PAID_ADS_DELIVERABLES}
      faq={PAID_ADS_FAQ}
      hero={PAID_ADS_HERO}
      page={PAID_ADS_PAGE}
      parentPage={PERF_PAGE}
      process={PAID_ADS_PROCESS}
      proofBar={PAID_ADS_PROOF_BAR}
      why={PAID_ADS_WHY}
    />
  );
};

export default Page;
