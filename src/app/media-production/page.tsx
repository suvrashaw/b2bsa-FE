import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MEDIA_CASE_STUDIES,
  MEDIA_CLIENT_LOGOS,
  MEDIA_CONTACT_CTA,
  MEDIA_FAQ,
  MEDIA_HERO,
  MEDIA_INTRO,
  MEDIA_PAGE,
  MEDIA_PROCESS,
  MEDIA_SERVICES,
  MEDIA_WHY,
} from "@/content/services/media-production/content";

export const metadata: Metadata = getMarketingPageMetadata(MEDIA_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={MEDIA_CASE_STUDIES}
      clientLogos={MEDIA_CLIENT_LOGOS}
      contactUs={MEDIA_CONTACT_CTA}
      faq={MEDIA_FAQ}
      hero={MEDIA_HERO}
      page={MEDIA_PAGE}
      process={MEDIA_PROCESS}
      services={MEDIA_SERVICES}
      spotlight={MEDIA_INTRO}
      why={MEDIA_WHY}
    />
  );
};

export default Page;
