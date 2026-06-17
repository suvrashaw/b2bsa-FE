import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { SectionContactCta } from "@/components/sections/SectionContactCta";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { MEDIA_PAGE } from "@/content/services/media-production/content";
import {
  VIRTUAL_VIDEO_BLOGS_SECTION,
  VIRTUAL_VIDEO_CAPABILITIES,
  VIRTUAL_VIDEO_CASE_STUDIES,
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

const capabilityAssets = [
  { icon: "Users", image: "/images/events/event_other_1.avif" },
  { icon: "Video", image: "/images/events/event_other_2.avif" },
  { icon: "Mic", image: "/images/events/event_other_3.avif" },
  { icon: "MessageCircle", image: "/images/events/event_other_4.avif" },
  { icon: "Layers", image: "/images/services/booth/booth-5.avif" },
  { icon: "Wrench", image: "/images/services/booth/booth-6.avif" },
  { icon: "Globe", image: "/images/services/booth/booth-7.avif" },
  { icon: "Film", image: "/images/home/why-choose-us/global_reach.avif" },
  { icon: "Monitor", image: "/images/home/why-choose-us/proven_execution.avif" },
  { icon: "Shuffle", image: "/images/home/why-choose-us/strategic_creativity.avif" },
];

const capabilityFeatures = VIRTUAL_VIDEO_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Video",
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/images/events/event_other_1.avif",
  label: phase.title,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={VIRTUAL_VIDEO_CASE_STUDIES}
      clientLogosHeading="Trusted by Global Brands for Virtual Video Event Production"
      contactUs={VIRTUAL_VIDEO_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={4} heading={VIRTUAL_VIDEO_WHY_CHOOSE_US.heading} id="why-choose-us">
            {VIRTUAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={VIRTUAL_VIDEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Virtual Video Production"]).map((post) => (
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
        <>
          <Capabilities
            capabilities={capabilityFeatures}
            description={VIRTUAL_VIDEO_CAPABILITIES.description}
            heading={VIRTUAL_VIDEO_CAPABILITIES.title}
            mediaPosition="right"
          />
          <SectionContactCta label="Contact Our Team" />
        </>
      }
      relatedServices={VIRTUAL_VIDEO_RELATED_SERVICES}
      relatedServicesHeading="Related Event & Media Production Services"
      services={VIRTUAL_VIDEO_DELIVERABLES}
      spotlight={VIRTUAL_VIDEO_INTRO}
    />
  );
};

export default Page;
