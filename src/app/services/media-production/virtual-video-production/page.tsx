import type { Metadata } from "next";

import { BlogsCarousel } from "@/components/sections/BlogsCarousel";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  VIRTUAL_VIDEO_BLOGS_SECTION,
  VIRTUAL_VIDEO_CAPABILITIES,
  VIRTUAL_VIDEO_CASE_STUDIES,
  VIRTUAL_VIDEO_CONTACT_CTA,
  VIRTUAL_VIDEO_DELIVERABLES,
  VIRTUAL_VIDEO_FAQ,
  VIRTUAL_VIDEO_IMAGE_HERO,
  VIRTUAL_VIDEO_INTRO,
  VIRTUAL_VIDEO_PAGE,
  VIRTUAL_VIDEO_PROOF_BAR,
  VIRTUAL_VIDEO_RELATED_SERVICES,
  VIRTUAL_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/detail/virtual-video-production";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(VIRTUAL_VIDEO_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={VIRTUAL_VIDEO_CASE_STUDIES}
      caseStudiesDescription="Explore how B2B Sales Arrow has helped brands deliver successful virtual events, webinars, fireside chats, and executive discussions through professional production and audience engagement."
      closingSections={
        <>
          <BoothWhyChooseUs {...VIRTUAL_VIDEO_WHY_CHOOSE_US} />
          <BlogsCarousel heading={VIRTUAL_VIDEO_BLOGS_SECTION.heading} posts={RENTAL_BLOG_POSTS} />
          <FAQAccordion {...VIRTUAL_VIDEO_FAQ} />
          <RelatedServices services={VIRTUAL_VIDEO_RELATED_SERVICES} />
          <ContactCinematicCTA {...VIRTUAL_VIDEO_CONTACT_CTA} />
        </>
      }
      deliverables={VIRTUAL_VIDEO_DELIVERABLES}
      faq={VIRTUAL_VIDEO_FAQ}
      imageHero={VIRTUAL_VIDEO_IMAGE_HERO}
      page={VIRTUAL_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Virtual Event" />
          <ProcessTimeline
            phases={VIRTUAL_VIDEO_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={VIRTUAL_VIDEO_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Virtual Production Experts" />
        </>
      }
      proofBar={VIRTUAL_VIDEO_PROOF_BAR}
      spotlight={VIRTUAL_VIDEO_INTRO}
    />
  );
};

export default Page;
