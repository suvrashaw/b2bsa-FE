import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { Carousel } from "@/components/sections/Carousel";
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
  CORP_NETWORKING_INDUSTRIES_SECTION,
  CORP_NETWORKING_INTRO,
  CORP_NETWORKING_PAGE,
  CORP_NETWORKING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/corporate-networking-events/content";

export const metadata: Metadata = getMarketingPageMetadata(CORP_NETWORKING_PAGE);

const capabilityAssets = [
  { icon: "Users", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "MessageSquare", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "CalendarCheck", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Globe2", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Star", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Zap", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Award", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "ClipboardList", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Compass", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Map", image: "/media/home/hero/home_hero_bg.avif" },
];

const capabilityFeatures = (
  CORP_NETWORKING_CAPABILITIES.phases as {
    description?: string;
    title: string;
  }[]
).map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Users",
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
      caseStudies={CORP_NETWORKING_CASE_STUDIES}
      clientLogos={CORP_NETWORKING_CLIENT_LOGOS}
      contactUs={CORP_NETWORKING_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={CORP_NETWORKING_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
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
            layout="carousel"
          >
            {getBlogsByTags(["Corporate Networking Events"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={CORP_NETWORKING_FAQ}
      faqVariant="accordion"
      hero={CORP_NETWORKING_IMAGE_HERO}
      page={CORP_NETWORKING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <Capabilities
          capabilities={capabilityFeatures}
          description={CORP_NETWORKING_CAPABILITIES.description}
          heading={CORP_NETWORKING_CAPABILITIES.title}
          mediaPosition="right"
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
      secondaryServices={CORP_NETWORKING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      services={CORP_NETWORKING_DELIVERABLES}
      showServicesCommonCta
      spotlight={CORP_NETWORKING_INTRO}
    />
  );
};

export default Page;
