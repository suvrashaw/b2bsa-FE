import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
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
  CORP_EVENT_CONTACT_CTA,
  CORP_EVENT_DELIVERABLES,
  CORP_EVENT_FAQ,
  CORP_EVENT_IMAGE_HERO,
  CORP_EVENT_INDUSTRIES_SECTION,
  CORP_EVENT_INTRO,
  CORP_EVENT_PAGE,
  CORP_EVENT_PROOF_BAR,
  CORP_EVENT_RELATED_SERVICES,
  CORP_EVENT_CLIENT_LOGOS,
  CORP_EVENT_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/corporate-event-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(CORP_EVENT_PAGE);

const capabilityAssets = [
  { icon: "CalendarCheck", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Building", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Wrench", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Users", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Palette", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "UserPlus", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Truck", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "ClipboardCheck", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Star", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Globe2", image: "/media/home/hero/home_hero_bg.avif" },
];

const capabilityFeatures = (
  CORP_EVENT_CAPABILITIES.phases as { description?: string; title: string }[]
).map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "CalendarCheck",
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
      caseStudies={CORP_EVENT_CASE_STUDIES}
      clientLogos={CORP_EVENT_CLIENT_LOGOS}
      contactUs={CORP_EVENT_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={3} heading={CORP_EVENT_WHY_CHOOSE_US.heading} id="why-choose-us">
            {CORP_EVENT_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={CORP_EVENT_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Corporate Event Solutions"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={CORP_EVENT_FAQ}
      faqVariant="accordion"
      hero={CORP_EVENT_IMAGE_HERO}
      page={CORP_EVENT_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <Capabilities
            capabilities={capabilityFeatures}
            description={CORP_EVENT_CAPABILITIES.description}
            heading={CORP_EVENT_CAPABILITIES.title}
            mediaPosition="right"
          />
        </>
      }
      proofBar={CORP_EVENT_PROOF_BAR}
      relatedServices={CORP_EVENT_RELATED_SERVICES}
      relatedServicesHeading="Related Event & Media Production Services"
      secondaryServices={CORP_EVENT_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      services={CORP_EVENT_DELIVERABLES}
      spotlight={CORP_EVENT_INTRO}
    />
  );
};

export default Page;
