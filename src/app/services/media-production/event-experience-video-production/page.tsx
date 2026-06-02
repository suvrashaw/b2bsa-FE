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
  EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION,
  EVENT_EXPERIENCE_VIDEO_CAPABILITIES,
  EVENT_EXPERIENCE_VIDEO_CASE_STUDIES,
  EVENT_EXPERIENCE_VIDEO_CONTACT_CTA,
  EVENT_EXPERIENCE_VIDEO_DELIVERABLES,
  EVENT_EXPERIENCE_VIDEO_EVENT_TYPES_SECTION,
  EVENT_EXPERIENCE_VIDEO_FAQ,
  EVENT_EXPERIENCE_VIDEO_IMAGE_HERO,
  EVENT_EXPERIENCE_VIDEO_INTRO,
  EVENT_EXPERIENCE_VIDEO_PAGE,
  EVENT_EXPERIENCE_VIDEO_PROOF_BAR,
  EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES,
  EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/detail/event-experience-video-production";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_EXPERIENCE_VIDEO_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_EXPERIENCE_VIDEO_CASE_STUDIES}
      caseStudiesDescription="Discover how B2B Sales Arrow has helped global brands create engaging event experience videos for conferences, exhibitions, networking events, product launches, and corporate gatherings."
      closingSections={
        <>
          <BoothWhyChooseUs {...EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US} />
          <RentalBlogsSection
            heading={EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...EVENT_EXPERIENCE_VIDEO_FAQ} />
          <RelatedServices services={EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES} />
          <ContactCinematicCTA {...EVENT_EXPERIENCE_VIDEO_CONTACT_CTA} />
        </>
      }
      deliverables={EVENT_EXPERIENCE_VIDEO_DELIVERABLES}
      faq={EVENT_EXPERIENCE_VIDEO_FAQ}
      imageHero={EVENT_EXPERIENCE_VIDEO_IMAGE_HERO}
      page={EVENT_EXPERIENCE_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Create Event Videos" variant="secondary" />
          <ProcessTimeline
            phases={EVENT_EXPERIENCE_VIDEO_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={EVENT_EXPERIENCE_VIDEO_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Book Event Video Production" variant="secondary" />
        </>
      }
      proofBar={EVENT_EXPERIENCE_VIDEO_PROOF_BAR}
      secondaryServices={EVENT_EXPERIENCE_VIDEO_EVENT_TYPES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={EVENT_EXPERIENCE_VIDEO_INTRO}
    />
  );
};

export default Page;
