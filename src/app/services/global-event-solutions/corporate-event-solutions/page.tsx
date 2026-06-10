import type { Metadata } from "next";

import { BlogsCarousel } from "@/components/sections/BlogsCarousel";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  CORP_EVENT_BLOGS_SECTION,
  CORP_EVENT_CAPABILITIES,
  CORP_EVENT_CASE_STUDIES,
  CORP_EVENT_CONTACT_CTA,
  CORP_EVENT_DELIVERABLES,
  CORP_EVENT_FAQ,
  CORP_EVENT_IMAGE_HERO,
  CORP_EVENT_INDUSTRIES_SECTION,
  CORP_EVENT_INTRO,
  CORP_EVENT_PAGE,
  CORP_EVENT_PROOF_BAR,
  CORP_EVENT_RELATED_SERVICES,
  CORP_EVENT_WHY_CHOOSE_US,
} from "@/content/services/detail/corporate-event-solutions";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(CORP_EVENT_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={CORP_EVENT_CASE_STUDIES}
      closingSections={
        <>
          <BoothWhyChooseUs {...CORP_EVENT_WHY_CHOOSE_US} />
          <BlogsCarousel
            heading={CORP_EVENT_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...CORP_EVENT_FAQ} />
          <RelatedServices services={CORP_EVENT_RELATED_SERVICES} />
          <ContactCinematicCTA {...CORP_EVENT_CONTACT_CTA} />
        </>
      }
      deliverables={CORP_EVENT_DELIVERABLES}
      faq={CORP_EVENT_FAQ}
      imageHero={CORP_EVENT_IMAGE_HERO}
      page={CORP_EVENT_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Your Corporate Event" />
          <ProcessTimeline
            phases={CORP_EVENT_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={CORP_EVENT_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Our Event Team" />
        </>
      }
      proofBar={CORP_EVENT_PROOF_BAR}
      secondaryServices={CORP_EVENT_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={CORP_EVENT_INTRO}
    />
  );
};

export default Page;
