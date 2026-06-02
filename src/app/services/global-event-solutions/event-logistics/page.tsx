import type { Metadata } from "next";

import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  EVENT_LOGISTICS_BLOGS_SECTION,
  EVENT_LOGISTICS_CAPABILITIES,
  EVENT_LOGISTICS_CASE_STUDIES,
  EVENT_LOGISTICS_CONTACT_CTA,
  EVENT_LOGISTICS_DELIVERABLES,
  EVENT_LOGISTICS_FAQ,
  EVENT_LOGISTICS_IMAGE_HERO,
  EVENT_LOGISTICS_INDUSTRIES_SECTION,
  EVENT_LOGISTICS_INTRO,
  EVENT_LOGISTICS_PAGE,
  EVENT_LOGISTICS_PROOF_BAR,
  EVENT_LOGISTICS_RELATED_SERVICES,
  EVENT_LOGISTICS_WHY_CHOOSE_US,
} from "@/content/services/detail/event-logistics";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_LOGISTICS_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_LOGISTICS_CASE_STUDIES}
      closingSections={
        <>
          <BoothWhyChooseUs {...EVENT_LOGISTICS_WHY_CHOOSE_US} />
          <RentalBlogsSection
            heading={EVENT_LOGISTICS_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...EVENT_LOGISTICS_FAQ} />
          <RelatedServices services={EVENT_LOGISTICS_RELATED_SERVICES} />
          <ContactCinematicCTA {...EVENT_LOGISTICS_CONTACT_CTA} />
        </>
      }
      deliverables={EVENT_LOGISTICS_DELIVERABLES}
      faq={EVENT_LOGISTICS_FAQ}
      imageHero={EVENT_LOGISTICS_IMAGE_HERO}
      page={EVENT_LOGISTICS_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Talk to Our Event Team" />
          <ProcessTimeline
            phases={EVENT_LOGISTICS_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={EVENT_LOGISTICS_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Plan Your Event Logistics" />
        </>
      }
      proofBar={EVENT_LOGISTICS_PROOF_BAR}
      secondaryServices={EVENT_LOGISTICS_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={EVENT_LOGISTICS_INTRO}
    />
  );
};

export default Page;
