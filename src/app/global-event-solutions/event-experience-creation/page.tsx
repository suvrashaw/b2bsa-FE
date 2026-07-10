import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { Carousel } from "@/components/sections/Carousel";
import { Spotlight, type SpotlightProps } from "@/components/sections/Spotlight";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  EVENT_EXPERIENCE_CONTACT_CTA,
  EVENT_EXPERIENCE_CREATION_BLOGS_SECTION,
  EVENT_EXPERIENCE_DELIVERABLES,
  EVENT_EXPERIENCE_DESIGNED_FOR,
  EVENT_EXPERIENCE_FAQ,
  EVENT_EXPERIENCE_IMAGE_HERO,
  EVENT_EXPERIENCE_INDUSTRIES,
  EVENT_EXPERIENCE_INTRO,
  EVENT_EXPERIENCE_PAGE,
  EVENT_EXPERIENCE_PROCESS,
  EVENT_EXPERIENCE_SERVICES_INCLUDE,
  EVENT_EXPERIENCE_WHY_CHOOSE_US,
  EVENT_EXPERIENCE_WHY_MATTERS,
} from "@/content/services/global-event-solutions/event-experience-creation/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_EXPERIENCE_PAGE);

const servicesIncludeFeatures = EVENT_EXPERIENCE_SERVICES_INCLUDE.servicesInclude.items.map(
  (item) => ({
    id: item.id,
    image: item.image,
    label: item.label,
  })
);

const Page = () => {
  return (
    <ServicePage
      contactUs={EVENT_EXPERIENCE_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={4} heading={EVENT_EXPERIENCE_WHY_CHOOSE_US.heading} id="why-choose-us">
            {EVENT_EXPERIENCE_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <CapabilitiesGrid
            heading={EVENT_EXPERIENCE_SERVICES_INCLUDE.servicesInclude.heading}
            services={servicesIncludeFeatures}
          />
          <Carousel
            cols={4}
            heading={EVENT_EXPERIENCE_CREATION_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(EVENT_EXPERIENCE_CREATION_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={EVENT_EXPERIENCE_FAQ}
      faqVariant="accordion"
      hero={EVENT_EXPERIENCE_IMAGE_HERO}
      industries={EVENT_EXPERIENCE_INDUSTRIES}
      page={EVENT_EXPERIENCE_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <Spotlight {...(EVENT_EXPERIENCE_DESIGNED_FOR as SpotlightProps)} />
          <StickyScroll
            heading={EVENT_EXPERIENCE_WHY_MATTERS.heading}
            reasons={EVENT_EXPERIENCE_WHY_MATTERS.reasons}
            showCta={false}
          />
        </>
      }
      process={EVENT_EXPERIENCE_PROCESS}
      services={EVENT_EXPERIENCE_DELIVERABLES}
      showServicesCommonCta
      spotlight={EVENT_EXPERIENCE_INTRO}
    />
  );
};

export default Page;
