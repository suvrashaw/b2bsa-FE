import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { EventsCard } from "@/components/items/EventsCard";
import { WhyChooseUsCard } from "@/components/items/WhyChooseUsCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { HOME_EVENTS_CONTENT } from "@/content/home/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { BS_PAGE } from "@/content/services/tradeshow-booth-solutions/content";
import {
  BOOTH_DESIGN_BLOGS_SECTION,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_CLIENT_LOGOS,
  BOOTH_DESIGN_CONTACT_CTA,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_INTRO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-design/content";
import { getDefaultEvents } from "@/content/tradeshow-calendar";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_DESIGN_PAGE);

const EMPTY_CONTACT_MODAL = {};

const SHOWCASE_SERVICES = BOOTH_DESIGN_SHOWCASE_ITEMS.items.map((item) => ({
  description: item.descriptions.join(" "),
  icon: item.icon,
  id: item.id,
  image: item.image,
  title: item.heading,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      clientLogos={BOOTH_DESIGN_CLIENT_LOGOS}
      contactUs={BOOTH_DESIGN_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid
            cols={3}
            cta={
              <Button asChild variant="primary">
                <Link href="/tradeshow-calendar">Explore All Upcoming Events</Link>
              </Button>
            }
            description={HOME_EVENTS_CONTENT.description}
            heading={HOME_EVENTS_CONTENT.heading}
            id="events"
          >
            {getDefaultEvents().map((event, i) => (
              <EventsCard
                ctaLabel={HOME_EVENTS_CONTENT.ctaLabel ?? "View Event"}
                event={event}
                flipStyle="diagonalWipe"
                index={i}
                key={event.id}
              />
            ))}
          </CardsGrid>
          <Carousel cols={4} heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <WhyChooseUsCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={BOOTH_DESIGN_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(BOOTH_DESIGN_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_DESIGN_FAQ}
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={BS_PAGE}
      preProcessSections={
        <ServicesStack
          cardCtaMode="none"
          commonCtaLabel={BOOTH_DESIGN_SHOWCASE_ITEMS.ctaLabel}
          contactModal={EMPTY_CONTACT_MODAL}
          heading={BOOTH_DESIGN_SHOWCASE_ITEMS.heading}
          serviceLabel=""
          services={SHOWCASE_SERVICES}
          showCommonCta
        />
      }
      process={BOOTH_DESIGN_PROCESS}
      services={BOOTH_DESIGN_DELIVERABLES}
      servicesSectionType="carousel"
      showPhaseNumbers={false}
      spotlight={BOOTH_DESIGN_INTRO}
    />
  );
};

export default Page;
