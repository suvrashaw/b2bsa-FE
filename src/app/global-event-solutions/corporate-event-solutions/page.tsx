import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  CORP_EVENT_BLOGS_SECTION,
  CORP_EVENT_CAPABILITIES,
  CORP_EVENT_CASE_STUDIES,
  CORP_EVENT_CLIENT_LOGOS,
  CORP_EVENT_CONTACT_CTA,
  CORP_EVENT_DELIVERABLES,
  CORP_EVENT_FAQ,
  CORP_EVENT_IMAGE_HERO,
  CORP_EVENT_INDUSTRIES,
  CORP_EVENT_INTRO,
  CORP_EVENT_PAGE,
  CORP_EVENT_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/corporate-event-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(CORP_EVENT_PAGE);

const capabilityFeatures = (
  CORP_EVENT_CAPABILITIES.phases as { description?: string; image: string; title: string }[]
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
      caseStudies={CORP_EVENT_CASE_STUDIES}
      clientLogos={CORP_EVENT_CLIENT_LOGOS}
      contactUs={CORP_EVENT_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={3} heading={CORP_EVENT_WHY_CHOOSE_US.heading} id="why-choose-us">
            {CORP_EVENT_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={CORP_EVENT_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(CORP_EVENT_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={CORP_EVENT_FAQ}
      faqVariant="accordion"
      hero={CORP_EVENT_IMAGE_HERO}
      industries={CORP_EVENT_INDUSTRIES}
      page={CORP_EVENT_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <CapabilitiesGrid
            description={CORP_EVENT_CAPABILITIES.description}
            heading={CORP_EVENT_CAPABILITIES.title}
            services={capabilityFeatures}
          />
        </>
      }
      services={CORP_EVENT_DELIVERABLES}
      showServicesCommonCta
      spotlight={CORP_EVENT_INTRO}
    />
  );
};

export default Page;
