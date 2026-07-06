import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  HUB_CASE_STUDIES,
  HUB_CLIENT_LOGOS,
  HUB_CONTACT_CTA,
  HUB_FAQ,
  HUB_HERO,
  HUB_INTRO,
  HUB_PAGE,
  HUB_SERVICES,
  HUB_WHY,
} from "@/content/services/hub/content";

export const metadata: Metadata = getMarketingPageMetadata(HUB_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={HUB_CASE_STUDIES}
      clientLogos={HUB_CLIENT_LOGOS}
      contactUs={HUB_CONTACT_CTA}
      faq={HUB_FAQ}
      hero={HUB_HERO}
      page={HUB_PAGE}
      services={HUB_SERVICES}
      spotlight={HUB_INTRO}
      why={HUB_WHY}
    />
  );
};

export default Page;
