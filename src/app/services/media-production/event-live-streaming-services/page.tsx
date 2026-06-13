import type { Metadata } from "next";

import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  LIVE_STREAMING_CASE_STUDIES,
  LIVE_STREAMING_CONTACT_CTA,
  LIVE_STREAMING_DELIVERABLES,
  LIVE_STREAMING_FAQ,
  LIVE_STREAMING_HERO,
  LIVE_STREAMING_PAGE,
  LIVE_STREAMING_PROOF_BAR,
  LIVE_STREAMING_RELATED_SERVICES,
  LIVE_STREAMING_SPOTLIGHT,
  LIVE_STREAMING_WHY,
  LIVE_STREAMING_WHY_CHOOSE_US,
} from "@/content/services/media-production/live-streaming-services/content";

export const metadata: Metadata = getMarketingPageMetadata(LIVE_STREAMING_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={LIVE_STREAMING_CASE_STUDIES}
      clientLogosHeading="Trusted by Global Brands for Event Live Streaming Services"
      contactUs={LIVE_STREAMING_CONTACT_CTA}
      faq={LIVE_STREAMING_FAQ}
      hero={LIVE_STREAMING_HERO}
      page={LIVE_STREAMING_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={<StickyScroll {...LIVE_STREAMING_WHY_CHOOSE_US} />}
      proofBar={LIVE_STREAMING_PROOF_BAR}
      relatedServices={LIVE_STREAMING_RELATED_SERVICES}
      services={LIVE_STREAMING_DELIVERABLES}
      spotlight={LIVE_STREAMING_SPOTLIGHT}
      why={LIVE_STREAMING_WHY}
    />
  );
};

export default Page;
