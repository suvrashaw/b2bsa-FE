import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  EVENT_PHYSICAL_VIDEO_BLOGS_SECTION,
  EVENT_PHYSICAL_VIDEO_CASE_STUDIES,
  EVENT_PHYSICAL_VIDEO_CLIENT_LOGOS,
  EVENT_PHYSICAL_VIDEO_CONTACT_CTA,
  EVENT_PHYSICAL_VIDEO_DELIVERABLES,
  EVENT_PHYSICAL_VIDEO_FAQ,
  EVENT_PHYSICAL_VIDEO_IMAGE_HERO,
  EVENT_PHYSICAL_VIDEO_INTRO,
  EVENT_PHYSICAL_VIDEO_PAGE,
  EVENT_PHYSICAL_VIDEO_PROCESS,
  EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN,
  EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/event-physical-video-shoot/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_PHYSICAL_VIDEO_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_PHYSICAL_VIDEO_CASE_STUDIES}
      clientLogos={EVENT_PHYSICAL_VIDEO_CLIENT_LOGOS}
      contactUs={EVENT_PHYSICAL_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={3}
            heading={EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
          >
            {EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={EVENT_PHYSICAL_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Event Physical Video Shoot"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={EVENT_PHYSICAL_VIDEO_FAQ}
      faqVariant="accordion"
      hero={EVENT_PHYSICAL_VIDEO_IMAGE_HERO}
      page={EVENT_PHYSICAL_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <StickyScroll
          heading={EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN.heading}
          reasons={EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN.reasons}
        />
      }
      process={EVENT_PHYSICAL_VIDEO_PROCESS}
      proofBar={EVENT_PHYSICAL_VIDEO_INTRO}
      services={EVENT_PHYSICAL_VIDEO_DELIVERABLES}
      showPhaseNumbers={false}
      showServicesCommonCta
    />
  );
};

export default Page;
