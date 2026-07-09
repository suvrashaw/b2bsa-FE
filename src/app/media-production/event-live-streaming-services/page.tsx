import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { Spotlight } from "@/components/sections/Spotlight";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  LIVE_STREAMING_AREAS_SERVED,
  LIVE_STREAMING_BLOGS_SECTION,
  LIVE_STREAMING_CAPABILITIES,
  LIVE_STREAMING_CAPABILITIES_FEATURES,
  LIVE_STREAMING_CASE_STUDIES,
  LIVE_STREAMING_CLIENT_LOGOS,
  LIVE_STREAMING_CONTACT_CTA,
  LIVE_STREAMING_DELIVERABLES,
  LIVE_STREAMING_FAQ,
  LIVE_STREAMING_HERO,
  LIVE_STREAMING_INTRO,
  LIVE_STREAMING_PAGE,
  LIVE_STREAMING_RELATED_SERVICES,
  LIVE_STREAMING_WHY_CHOOSE_US,
} from "@/content/services/media-production/event-live-streaming-services/content";

export const metadata: Metadata = getMarketingPageMetadata(LIVE_STREAMING_PAGE);

const LIVE_STREAMING_AREAS_INTRO = {
  ...LIVE_STREAMING_AREAS_SERVED,
  imagePosition: "left" as const,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={LIVE_STREAMING_CASE_STUDIES}
      clientLogos={LIVE_STREAMING_CLIENT_LOGOS}
      contactUs={LIVE_STREAMING_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={3} heading={LIVE_STREAMING_WHY_CHOOSE_US.heading} id="why-choose-us">
            {LIVE_STREAMING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>

          <Carousel
            cols={4}
            heading={LIVE_STREAMING_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(LIVE_STREAMING_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={LIVE_STREAMING_FAQ}
      hero={LIVE_STREAMING_HERO}
      page={LIVE_STREAMING_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <>
          <ServicesScroll
            description={LIVE_STREAMING_CAPABILITIES.description}
            heading={LIVE_STREAMING_CAPABILITIES.heading}
            services={LIVE_STREAMING_CAPABILITIES_FEATURES}
          />

          <Spotlight {...LIVE_STREAMING_AREAS_INTRO} />
        </>
      }
      relatedServicesHeading={LIVE_STREAMING_RELATED_SERVICES.heading}
      services={LIVE_STREAMING_DELIVERABLES}
      showServicesCommonCta
      spotlight={LIVE_STREAMING_INTRO}
    />
  );
};

export default Page;
