import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { EventsCard } from "@/components/items/EventsCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs/data";
import { getDefaultEvents } from "@/content/tradeshow-calendar/events-utils";
import { HOME_EVENTS_CONTENT } from "@/content/home/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  BOOTH_DESIGN_BLOGS_SECTION,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_CONTACT_CTA,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_RELATED_SERVICES,
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_SPOTLIGHT,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-design/content";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_DESIGN_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      contactUs={BOOTH_DESIGN_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid
            cols={3}
            cta={
              <Button asChild variant="secondary">
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
          <CardsGrid cols={4} heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={BOOTH_DESIGN_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Trade Show Booth Design"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_DESIGN_FAQ}
      faqVariant="accordion"
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={GES_PAGE}
      preContactSections={
        <section className="bg-brand-gray py-12 md:py-16">
          <div className="container mx-auto max-w-screen-2xl px-4 text-center sm:px-6 md:px-8">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact-us">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      }
      preProcessSections={
        <StickyScroll
          heading="Booth Sizes and Formats We Design"
          reasons={BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
            description: item.descriptions.join(" "),
            id: item.id,
            image: item.image,
            title: item.heading,
          }))}
          showImagePanel
        />
      }
      process={BOOTH_DESIGN_PROCESS}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      relatedServices={BOOTH_DESIGN_RELATED_SERVICES}
      services={BOOTH_DESIGN_DELIVERABLES}
      servicesSectionType="carousel"
      showPhaseNumbers={false}
      spotlight={BOOTH_DESIGN_SPOTLIGHT}
    />
  );
};

export default Page;
