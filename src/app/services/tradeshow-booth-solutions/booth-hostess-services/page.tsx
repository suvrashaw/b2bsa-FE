import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  BOOTH_HOSTESS_BLOGS_SECTION,
  BOOTH_HOSTESS_CAPABILITIES,
  BOOTH_HOSTESS_CASE_STUDIES,
  BOOTH_HOSTESS_CONTACT_CTA,
  BOOTH_HOSTESS_DELIVERABLES,
  BOOTH_HOSTESS_FAQ,
  BOOTH_HOSTESS_IMAGE_HERO,
  BOOTH_HOSTESS_INTRO,
  BOOTH_HOSTESS_PAGE,
  BOOTH_HOSTESS_RELATED_SERVICES,
  BOOTH_HOSTESS_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/booth-hostess-services/content";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_HOSTESS_PAGE);

const servicesContactModal = {};
const deliverableProps = {
  ...BOOTH_HOSTESS_DELIVERABLES,
  commonCtaLabel: "Contact Our Team",
  contactModal: servicesContactModal,
  showCardCtas: false,
  showCommonCta: true,
};
const capabilityAssets = [
  { icon: "Users", image: "/images/services/booth/booth-5.avif" },
  { icon: "CalendarCheck", image: "/images/events/event_other_1.avif" },
  { icon: "Sparkles", image: "/images/services/booth/booth-6.avif" },
  { icon: "MessageSquare", image: "/images/events/event_other_2.avif" },
  { icon: "ClipboardList", image: "/images/services/booth/booth-7.avif" },
  { icon: "Globe2", image: "/images/home/why-choose-us/global_reach.avif" },
  { icon: "Presentation", image: "/images/events/event_other_3.avif" },
  { icon: "Award", image: "/images/events/event_other_4.avif" },
  { icon: "Users2", image: "/images/services/booth/booth-5.avif" },
  { icon: "Rocket", image: "/images/events/event_other_1.avif" },
];
const capabilityFeatures = BOOTH_HOSTESS_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Users",
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/images/services/booth/booth-5.avif",
  label: phase.title,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_HOSTESS_CASE_STUDIES}
      clientLogosHeading="Trusted by Global Brands for Event Hostess Services"
      contactUs={BOOTH_HOSTESS_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={4} heading={BOOTH_HOSTESS_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_HOSTESS_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={BOOTH_HOSTESS_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {RENTAL_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_HOSTESS_FAQ}
      faqVariant="accordion"
      hero={BOOTH_HOSTESS_IMAGE_HERO}
      page={BOOTH_HOSTESS_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <Capabilities
          capabilities={capabilityFeatures}
          description={BOOTH_HOSTESS_CAPABILITIES.description}
          heading={BOOTH_HOSTESS_CAPABILITIES.title}
        />
      }
      relatedServices={BOOTH_HOSTESS_RELATED_SERVICES}
      relatedServicesHeading="Related Event & Media Production Services"
      services={deliverableProps}
      spotlight={BOOTH_HOSTESS_INTRO}
    />
  );
};

export default Page;
