import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  EVENT_LOGISTICS_BENEFITS,
  EVENT_LOGISTICS_BLOGS_SECTION,
  EVENT_LOGISTICS_CAPABILITIES,
  EVENT_LOGISTICS_CASE_STUDIES,
  EVENT_LOGISTICS_CLIENT_LOGOS,
  EVENT_LOGISTICS_CONTACT_CTA,
  EVENT_LOGISTICS_DELIVERABLES,
  EVENT_LOGISTICS_FAQ,
  EVENT_LOGISTICS_IMAGE_HERO,
  EVENT_LOGISTICS_INDUSTRIES,
  EVENT_LOGISTICS_INTRO,
  EVENT_LOGISTICS_PAGE,
  EVENT_LOGISTICS_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/booth-logistics-services/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_LOGISTICS_PAGE);

const capabilityAssets = [
  { icon: "Truck", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Building2", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Wrench", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "ClipboardCheck", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Package", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "CalendarDays", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Globe2", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Settings", image: "/media/home/hero/home_hero_bg.avif" },
];

const capabilityFeatures = EVENT_LOGISTICS_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Truck",
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
      caseStudies={EVENT_LOGISTICS_CASE_STUDIES}
      clientLogos={EVENT_LOGISTICS_CLIENT_LOGOS}
      contactUs={EVENT_LOGISTICS_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={4}
            heading={EVENT_LOGISTICS_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
          >
            {EVENT_LOGISTICS_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={EVENT_LOGISTICS_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Booth Logistics Services"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={EVENT_LOGISTICS_FAQ}
      faqVariant="accordion"
      hero={EVENT_LOGISTICS_IMAGE_HERO}
      industries={EVENT_LOGISTICS_INDUSTRIES}
      page={EVENT_LOGISTICS_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ServicesScroll
            description={EVENT_LOGISTICS_CAPABILITIES.description}
            heading={EVENT_LOGISTICS_CAPABILITIES.title}
            services={capabilityFeatures}
          />
          <ContactModalTrigger label="Plan Your Event Logistics" />
        </>
      }
      preStudiesSections={
        <>
          <CardsGrid
            className="bg-brand-charcoal/5"
            cols={3}
            cta={<ContactModalTrigger label="Get a Logistics Quote" />}
            heading={EVENT_LOGISTICS_BENEFITS.heading}
            id="benefits"
          >
            {EVENT_LOGISTICS_BENEFITS.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
        </>
      }
      services={EVENT_LOGISTICS_DELIVERABLES}
      showServicesCommonCta
      spotlight={EVENT_LOGISTICS_INTRO}
    />
  );
};

export default Page;
