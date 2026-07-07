import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION,
  EVENT_EXPERIENCE_VIDEO_CAPABILITIES,
  EVENT_EXPERIENCE_VIDEO_CASE_STUDIES,
  EVENT_EXPERIENCE_VIDEO_CLIENT_LOGOS,
  EVENT_EXPERIENCE_VIDEO_CONTACT_CTA,
  EVENT_EXPERIENCE_VIDEO_DELIVERABLES,
  EVENT_EXPERIENCE_VIDEO_FAQ,
  EVENT_EXPERIENCE_VIDEO_IMAGE_HERO,
  EVENT_EXPERIENCE_VIDEO_INTRO,
  EVENT_EXPERIENCE_VIDEO_PAGE,
  EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/event-experience-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_EXPERIENCE_VIDEO_PAGE);

const spotlightProps = { ...EVENT_EXPERIENCE_VIDEO_INTRO };
const deliverableProps = {
  ...EVENT_EXPERIENCE_VIDEO_DELIVERABLES,
  showCardCtas: false,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_EXPERIENCE_VIDEO_CASE_STUDIES}
      clientLogos={EVENT_EXPERIENCE_VIDEO_CLIENT_LOGOS}
      contactUs={EVENT_EXPERIENCE_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={3}
            heading={EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
          >
            {EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION.tags).map((post) => (
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
      preProcessSections={
        <ServicesScroll
          description={EVENT_EXPERIENCE_VIDEO_CAPABILITIES.description}
          heading={EVENT_EXPERIENCE_VIDEO_CAPABILITIES.heading}
          services={EVENT_EXPERIENCE_VIDEO_CAPABILITIES.features}
        />
      }
      relatedServicesHeading="Related Event & Media Production Services"
      services={deliverableProps}
      showPhaseNumbers={false}
      showServicesCommonCta
      spotlight={spotlightProps}
    />
  );
};

export default Page;
