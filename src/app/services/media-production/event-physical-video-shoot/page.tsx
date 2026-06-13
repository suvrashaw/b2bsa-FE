import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  EVENT_PHYSICAL_VIDEO_BLOGS_SECTION,
  EVENT_PHYSICAL_VIDEO_CASE_STUDIES,
  EVENT_PHYSICAL_VIDEO_CONTACT_CTA,
  EVENT_PHYSICAL_VIDEO_DELIVERABLES,
  EVENT_PHYSICAL_VIDEO_FAQ,
  EVENT_PHYSICAL_VIDEO_IMAGE_HERO,
  EVENT_PHYSICAL_VIDEO_INTRO,
  EVENT_PHYSICAL_VIDEO_PAGE,
  EVENT_PHYSICAL_VIDEO_PROCESS,
  EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN,
  EVENT_PHYSICAL_VIDEO_PROOF_BAR,
  EVENT_PHYSICAL_VIDEO_RELATED_SERVICES,
  EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/detail/event-physical-video-shoot";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_PHYSICAL_VIDEO_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={EVENT_PHYSICAL_VIDEO_CASE_STUDIES}
      caseStudiesDescription="B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are three recent programs from 2025 & 2026."
      closingSections={
        <>
          <CardSection cols={4} heading={EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us" layout="grid">
            {EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={EVENT_PHYSICAL_VIDEO_BLOGS_SECTION.heading}
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
          <FAQAccordion {...EVENT_PHYSICAL_VIDEO_FAQ} />
          <RelatedServices services={EVENT_PHYSICAL_VIDEO_RELATED_SERVICES} />
          <ContactCinematicCTA {...EVENT_PHYSICAL_VIDEO_CONTACT_CTA} />
        </>
      }
      deliverables={EVENT_PHYSICAL_VIDEO_DELIVERABLES}
      faq={EVENT_PHYSICAL_VIDEO_FAQ}
      imageHero={EVENT_PHYSICAL_VIDEO_IMAGE_HERO}
      page={EVENT_PHYSICAL_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Your On-Site Video Shoot" />
          <ProcessTimeline
            phases={EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN.phases}
            title={EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN.title}
          />
          <ContactModalTrigger label="Book Event Video Production" />
        </>
      }
      process={EVENT_PHYSICAL_VIDEO_PROCESS}
      proofBar={EVENT_PHYSICAL_VIDEO_PROOF_BAR}
      proofBarDescription={EVENT_PHYSICAL_VIDEO_INTRO.description}
      proofBarHeading={EVENT_PHYSICAL_VIDEO_INTRO.heading}
      showPhaseNumbers={false}
    />
  );
};

export default Page;
