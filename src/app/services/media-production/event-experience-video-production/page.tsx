import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Timeline } from "@/components/sections/Timeline";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
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
          <CardSection cols={4} heading={EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {RENTAL_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </CardSection>
          <FAQAccordion {...EVENT_EXPERIENCE_VIDEO_FAQ} />
          <RelatedServices services={EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES} />
          <ContactUs {...EVENT_EXPERIENCE_VIDEO_CONTACT_CTA} />
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
          <Timeline
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
