import type { Metadata } from "next";

import { SectionContactCta } from "@/components/sections/SectionContactCta";
import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  EVENT_VIDEO_CASE_STUDIES,
  EVENT_VIDEO_CLIENT_LOGOS,
  EVENT_VIDEO_CONTACT_CTA,
  EVENT_VIDEO_CREATIVE_PRICING,
  EVENT_VIDEO_DELIVERABLES,
  EVENT_VIDEO_FAQ,
  EVENT_VIDEO_HERO,
  EVENT_VIDEO_INTRO,
  EVENT_VIDEO_PAGE,
  EVENT_VIDEO_WHY,
} from "@/content/services/media-production/event-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_VIDEO_CASE_STUDIES}
      clientLogos={EVENT_VIDEO_CLIENT_LOGOS}
      contactUs={EVENT_VIDEO_CONTACT_CTA}
      creativePricing={EVENT_VIDEO_CREATIVE_PRICING}
      faq={EVENT_VIDEO_FAQ}
      hero={EVENT_VIDEO_HERO}
      page={EVENT_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={<SectionContactCta />}
      services={EVENT_VIDEO_DELIVERABLES}
      showServicesCommonCta
      spotlight={EVENT_VIDEO_INTRO}
      why={EVENT_VIDEO_WHY}
    />
  );
};

export default Page;
