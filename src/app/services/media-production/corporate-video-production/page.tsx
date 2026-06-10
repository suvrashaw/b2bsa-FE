import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { CorporateVideoIndustriesSection } from "@/components/sections/CorporateVideoIndustriesSection";
import { CorporateVideoPortfolioSection } from "@/components/sections/CorporateVideoPortfolioSection";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  CORPORATE_VIDEO_DELIVERABLES,
  CORPORATE_VIDEO_FAQ,
  CORPORATE_VIDEO_HERO,
  CORPORATE_VIDEO_INDUSTRIES,
  CORPORATE_VIDEO_INTRO,
  CORPORATE_VIDEO_PAGE,
  CORPORATE_VIDEO_PORTFOLIO,
  CORPORATE_VIDEO_PROOF_BAR,
  CORPORATE_VIDEO_WHY,
} from "@/content/services/detail/corporate-video-production";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(CORPORATE_VIDEO_PAGE);

const corporateVideoContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Build Authority",
  description:
    "When your offering is complex, corporate video makes it clear, with the production quality enterprise buyers expect.",
  headingLines: ["Complex Offerings", "Made Crystal Clear."] as [string, string],
  primaryCta: { href: "/contact", label: "Start Your Corporate Video Project" },
};

const corporateVideoProductionRelatedServices = [
  {
    href: "/services/media-production/event-video-production",
    title: "Event Video Production",
  },
  {
    href: "/services/media-production/live-streaming-services",
    title: "Live Streaming Services",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      afterSpotlightSections={
        <>
          <CorporateVideoIndustriesSection {...CORPORATE_VIDEO_INDUSTRIES} />
          <CorporateVideoPortfolioSection {...CORPORATE_VIDEO_PORTFOLIO} />
        </>
      }
      closingSections={
        <>
          <FAQ {...CORPORATE_VIDEO_FAQ} />
          <RelatedServices services={corporateVideoProductionRelatedServices} />
          <ContactCinematicCTA {...corporateVideoContactCta} />
        </>
      }
      deliverables={CORPORATE_VIDEO_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={CORPORATE_VIDEO_FAQ}
      hero={CORPORATE_VIDEO_HERO}
      page={CORPORATE_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      proofBar={CORPORATE_VIDEO_PROOF_BAR}
      proofBarDescription={CORPORATE_VIDEO_INTRO.description}
      proofBarHeading={CORPORATE_VIDEO_INTRO.heading}
      spotlight={CORPORATE_VIDEO_WHY}
    />
  );
};

export default Page;
