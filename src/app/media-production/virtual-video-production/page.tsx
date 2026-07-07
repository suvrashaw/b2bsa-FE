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
  VIRTUAL_VIDEO_WHY_CHOOSE_US,
} from "@/content/services/media-production/virtual-video-production/content";

export const metadata: Metadata = getMarketingPageMetadata(VIRTUAL_VIDEO_PAGE);

const capabilityAssets = [
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
  { image: "/media/home/hero/home_hero_bg.avif" },
];

const capabilityFeatures = VIRTUAL_VIDEO_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/media/home/hero/home_hero_bg.avif",
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
          <Carousel
            cols={3}
            heading={VIRTUAL_VIDEO_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
          >
            {VIRTUAL_VIDEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
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
            layout="carousel"
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
        <ServicesScroll
          description={VIRTUAL_VIDEO_CAPABILITIES.description}
          heading={VIRTUAL_VIDEO_CAPABILITIES.title}
          services={capabilityFeatures}
        />
      }
      relatedServicesHeading="Related Event & Media Production Services"
      services={VIRTUAL_VIDEO_DELIVERABLES}
      showServicesCommonCta
      spotlight={VIRTUAL_VIDEO_INTRO}
    />
  );
};

export default Page;
