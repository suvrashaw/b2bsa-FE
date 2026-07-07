import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  CORP_NETWORKING_BLOGS_SECTION,
  CORP_NETWORKING_CAPABILITIES,
  CORP_NETWORKING_CASE_STUDIES,
  CORP_NETWORKING_CLIENT_LOGOS,
  CORP_NETWORKING_CONTACT_CTA,
  CORP_NETWORKING_DELIVERABLES,
  CORP_NETWORKING_EVENT_TYPES,
  CORP_NETWORKING_FAQ,
  CORP_NETWORKING_IMAGE_HERO,
  CORP_NETWORKING_INDUSTRIES,
  CORP_NETWORKING_INTRO,
  CORP_NETWORKING_PAGE,
  CORP_NETWORKING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/corporate-networking-events/content";

export const metadata: Metadata = getMarketingPageMetadata(CORP_NETWORKING_PAGE);

const capabilityFeatures = (
  CORP_NETWORKING_CAPABILITIES.phases as {
    description?: string;
    image: string;
    title: string;
  }[]
).map((phase) => ({
  description: phase.description,
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: phase.image,
  label: phase.title,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={CORP_NETWORKING_CASE_STUDIES}
      clientLogos={CORP_NETWORKING_CLIENT_LOGOS}
      contactUs={CORP_NETWORKING_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={CORP_NETWORKING_WHY_CHOOSE_US.heading}
            id="why-choose-us"
          >
            {CORP_NETWORKING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={CORP_NETWORKING_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(CORP_NETWORKING_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={CORP_NETWORKING_FAQ}
      faqVariant="accordion"
      hero={CORP_NETWORKING_IMAGE_HERO}
      industries={CORP_NETWORKING_INDUSTRIES}
      page={CORP_NETWORKING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <ServicesScroll
          description={CORP_NETWORKING_CAPABILITIES.description}
          heading={CORP_NETWORKING_CAPABILITIES.title}
          services={capabilityFeatures}
        />
      }
      preStudiesSections={
        <StickyScroll
          heading={CORP_NETWORKING_EVENT_TYPES.heading}
          reasons={CORP_NETWORKING_EVENT_TYPES.services.map(
            ({ description, id, image, title }) => ({
              description,
              id,
              image,
              title,
            })
          )}
        />
      }
      services={CORP_NETWORKING_DELIVERABLES}
      showServicesCommonCta
      spotlight={CORP_NETWORKING_INTRO}
    />
  );
};

export default Page;
