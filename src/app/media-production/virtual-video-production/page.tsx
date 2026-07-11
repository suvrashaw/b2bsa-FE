import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { CapabilityCard } from "@/components/items/CapabilityCard";
import { WhyChooseUsCard } from "@/components/items/WhyChooseUsCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  VIRTUAL_VIDEO_BLOGS_SECTION,
  VIRTUAL_VIDEO_CAPABILITIES,
  VIRTUAL_VIDEO_CASE_STUDIES,
  VIRTUAL_VIDEO_CLIENT_LOGOS,
  VIRTUAL_VIDEO_CONTACT_CTA,
  VIRTUAL_VIDEO_DELIVERABLES,
  VIRTUAL_VIDEO_FAQ,
  VIRTUAL_VIDEO_IMAGE_HERO,
  VIRTUAL_VIDEO_INTRO,
  VIRTUAL_VIDEO_PAGE,
  VIRTUAL_VIDEO_RELATED_SERVICES,
  VIRTUAL_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/virtual-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(VIRTUAL_VIDEO_PAGE);

const capabilityFeatures = VIRTUAL_VIDEO_CAPABILITIES.phases.map((phase) => ({
  description: phase.description,
  icon: phase.icon,
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
      caseStudies={VIRTUAL_VIDEO_CASE_STUDIES}
      clientLogos={VIRTUAL_VIDEO_CLIENT_LOGOS}
      contactUs={VIRTUAL_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={3} heading={VIRTUAL_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us">
            {VIRTUAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <WhyChooseUsCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={VIRTUAL_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(VIRTUAL_VIDEO_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={VIRTUAL_VIDEO_FAQ}
      faqVariant="accordion"
      hero={VIRTUAL_VIDEO_IMAGE_HERO}
      page={VIRTUAL_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      preProcessSections={
        <CardsGrid
          cols={3}
          description={VIRTUAL_VIDEO_CAPABILITIES.description}
          heading={VIRTUAL_VIDEO_CAPABILITIES.title}
        >
          {capabilityFeatures.map((item) => (
            <CapabilityCard
              description={item.description}
              icon={item.icon}
              key={item.id}
              title={item.label}
            />
          ))}
        </CardsGrid>
      }
      relatedServicesHeading={VIRTUAL_VIDEO_RELATED_SERVICES.heading}
      services={VIRTUAL_VIDEO_DELIVERABLES}
      showServicesCommonCta
      spotlight={VIRTUAL_VIDEO_INTRO}
    />
  );
};

export default Page;
