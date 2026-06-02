import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  LINKEDIN_ADS_CASE_STUDIES,
  LINKEDIN_ADS_DELIVERABLES,
  LINKEDIN_ADS_FAQ,
  LINKEDIN_ADS_HERO,
  LINKEDIN_ADS_PAGE,
  LINKEDIN_ADS_PROOF_BAR,
  LINKEDIN_ADS_WHY,
} from "@/content/services/detail/linkedin-ads-b2b";
import { PERF_PAGE } from "@/content/services/performance-marketing";

export const metadata: Metadata = getMarketingPageMetadata(LINKEDIN_ADS_PAGE);

const linkedInAdsContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Reach Decision-Makers",
  description:
    "Your next enterprise customer is on LinkedIn right now. Show them the right message at the right moment.",
  headingLines: ["Your Next Customer", "Is on LinkedIn Now."] as [string, string],
  primaryCta: { href: "/contact", label: "Get a Free LinkedIn Ads Audit" },
};

const linkedInAdsRelatedServices = [
  { href: "/services/seo-services", title: "SEO Services" },
  { href: "/services/paid-advertising", title: "Paid Advertising" },
  { href: "/services/performance-marketing", title: "Performance Marketing" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={LINKEDIN_ADS_CASE_STUDIES}
      closingSections={
        <>
          <FAQ {...LINKEDIN_ADS_FAQ} />
          <RelatedServices services={linkedInAdsRelatedServices} />
          <ContactCinematicCTA {...linkedInAdsContactCta} />
        </>
      }
      deliverables={LINKEDIN_ADS_DELIVERABLES}
      faq={LINKEDIN_ADS_FAQ}
      hero={LINKEDIN_ADS_HERO}
      page={LINKEDIN_ADS_PAGE}
      parentPage={PERF_PAGE}
      proofBar={LINKEDIN_ADS_PROOF_BAR}
      why={LINKEDIN_ADS_WHY}
    />
  );
};

export default Page;
