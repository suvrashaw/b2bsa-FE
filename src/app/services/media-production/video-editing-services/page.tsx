import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  VIDEO_EDITING_CASE_STUDIES,
  VIDEO_EDITING_DELIVERABLES,
  VIDEO_EDITING_FAQ,
  VIDEO_EDITING_HERO,
  VIDEO_EDITING_PAGE,
  VIDEO_EDITING_PROCESS,
  VIDEO_EDITING_PROOF_BAR,
} from "@/content/services/detail/video-editing-services";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(VIDEO_EDITING_PAGE);

const videoEditingContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Polish Your Content",
  description:
    "You already have the raw material. We shape it into content people watch, understand, and act on.",
  headingLines: ["You Have the Footage.", "We Shape the Story."] as [string, string],
  primaryCta: { href: "/contact", label: "Upload Your Project Brief" },
};

const videoEditingServicesRelatedServices = [
  {
    href: "/services/media-production/event-video-production",
    title: "Event Video Production",
  },
  {
    href: "/services/media-production/corporate-video-production",
    title: "Corporate Video Production",
  },
  {
    href: "/services/media-production/live-streaming-services",
    title: "Live Streaming Services",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={VIDEO_EDITING_CASE_STUDIES}
      closingSections={
        <>
          <FAQ {...VIDEO_EDITING_FAQ} />
          <RelatedServices services={videoEditingServicesRelatedServices} />
          <ContactCinematicCTA {...videoEditingContactCta} />
        </>
      }
      deliverables={VIDEO_EDITING_DELIVERABLES}
      faq={VIDEO_EDITING_FAQ}
      hero={VIDEO_EDITING_HERO}
      page={VIDEO_EDITING_PAGE}
      parentPage={MEDIA_PAGE}
      process={VIDEO_EDITING_PROCESS}
      proofBar={VIDEO_EDITING_PROOF_BAR}
    />
  );
};

export default Page;
