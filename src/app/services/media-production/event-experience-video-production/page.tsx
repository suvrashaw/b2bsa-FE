import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
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
} from "@/content/services/media-production/event-experience-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_EXPERIENCE_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_EXPERIENCE_VIDEO_CASE_STUDIES}
      contactUs={EVENT_EXPERIENCE_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid
            cols={4}
            heading={EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US.heading}
            id="why-choose-us"
          >
            {EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
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
          </Carousel>
        </>
      }
      faq={EVENT_EXPERIENCE_VIDEO_FAQ}
      faqVariant="accordion"
      hero={EVENT_EXPERIENCE_VIDEO_IMAGE_HERO}
      page={EVENT_EXPERIENCE_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      process={EVENT_EXPERIENCE_VIDEO_CAPABILITIES}
      proofBar={EVENT_EXPERIENCE_VIDEO_PROOF_BAR}
      relatedServices={EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES}
      secondaryServices={EVENT_EXPERIENCE_VIDEO_EVENT_TYPES_SECTION}
      secondaryServicesSectionType="carousel"
      services={EVENT_EXPERIENCE_VIDEO_DELIVERABLES}
      showPhaseNumbers={false}
      spotlight={EVENT_EXPERIENCE_VIDEO_INTRO}
    />
  );
};

export default Page;
