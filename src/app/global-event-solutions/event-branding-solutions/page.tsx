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
  EVENT_BRANDING_BLOGS_SECTION,
  EVENT_BRANDING_CAPABILITIES,
  EVENT_BRANDING_CASE_STUDIES,
  EVENT_BRANDING_CLIENT_LOGOS,
  EVENT_BRANDING_CONTACT_CTA,
  EVENT_BRANDING_DELIVERABLES,
  EVENT_BRANDING_FAQ,
  EVENT_BRANDING_IMAGE_HERO,
  EVENT_BRANDING_INDUSTRIES,
  EVENT_BRANDING_INTRO,
  EVENT_BRANDING_PAGE,
  EVENT_BRANDING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/event-branding-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_BRANDING_PAGE);

const capabilityFeatures = EVENT_BRANDING_CAPABILITIES.phases.map((phase) => ({
  description: phase.description,
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: phase.image,
  label: phase.title,
}));

const BRANDING_SPOTLIGHT = {
  ...EVENT_BRANDING_INTRO,
  sectionClassName: "pt-8 md:pt-12",
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_BRANDING_CASE_STUDIES}
      clientLogos={EVENT_BRANDING_CLIENT_LOGOS}
      contactUs={EVENT_BRANDING_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={4} heading={EVENT_BRANDING_WHY_CHOOSE_US.heading} id="why-choose-us">
            {EVENT_BRANDING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={EVENT_BRANDING_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(EVENT_BRANDING_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={EVENT_BRANDING_FAQ}
      faqVariant="accordion"
      hero={EVENT_BRANDING_IMAGE_HERO}
      industries={EVENT_BRANDING_INDUSTRIES}
      page={EVENT_BRANDING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <CapabilitiesGrid
          description={EVENT_BRANDING_CAPABILITIES.description}
          heading={EVENT_BRANDING_CAPABILITIES.title}
          services={capabilityFeatures}
        />
      }
      services={EVENT_BRANDING_DELIVERABLES}
      showServicesCommonCta
      spotlight={BRANDING_SPOTLIGHT}
    />
  );
};

export default Page;
