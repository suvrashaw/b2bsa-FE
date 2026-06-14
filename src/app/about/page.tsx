import type { Metadata } from "next";

import { EventsCard } from "@/components/items/EventsCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutCoreValues } from "@/components/sections/AboutCoreValues";
import { ContactUs } from "@/components/sections/ContactUs";
import { Culture } from "@/components/sections/Culture";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Hero } from "@/components/sections/Hero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { Timeline } from "@/components/sections/Timeline";
import {
  ABOUT_CORE_VALUES,
  ABOUT_FOUNDER_STORY,
  ABOUT_HERO,
  ABOUT_INQUIRY,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_PRESENCE,
  ABOUT_RECENT_EVENTS,
  ABOUT_SIGNATURE_SERVICES,
  ABOUT_SIGNATURE_SERVICES_STACK,
  ABOUT_VALUES,
  ABOUT_VISION_MISSION,
  ABOUT_VISION_SPOTLIGHT,
} from "@/content/about/content";
import CLIENT_LOGOS from "@/content/home/client-logos.json";
import { normalizeEvent } from "@/content/events-utils";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { buildLocalBusinessJsonLd } from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const ABOUT_IMAGES = ["/images/about/culture/culture-5.avif"];
const ABOUT_PRIMARY_CTA = { href: ABOUT_HERO.primaryCtaHref, label: ABOUT_HERO.primaryCtaLabel };

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <Header darkBackground />
      <Hero
        description={ABOUT_HERO.description}
        images={ABOUT_IMAGES}
        primaryCta={ABOUT_PRIMARY_CTA}
        title={ABOUT_HERO.title}
      />
      <Spotlight
        align="left"
        description=""
        descriptionItems={ABOUT_VISION_MISSION.missionItems}
        label={ABOUT_VISION_MISSION.sectionLabel}
        secondarySpotlight={ABOUT_VISION_SPOTLIGHT}
        showCta={false}
        titleLine1={ABOUT_VISION_MISSION.missionTitleLine1}
        titleLine2={ABOUT_VISION_MISSION.missionTitleLine2}
      />
      <Timeline
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
        phases={ABOUT_ORIGIN_TIMELINE.phases}
      />
      <AboutCoreValues data={ABOUT_CORE_VALUES} />
      <ServicesStack
        heading={ABOUT_SIGNATURE_SERVICES.heading}
        services={ABOUT_SIGNATURE_SERVICES_STACK}
      />
      <CardsGrid
        cols={3}
        description={ABOUT_RECENT_EVENTS.description}
        heading={ABOUT_RECENT_EVENTS.heading}
        id="events"
      >
        {ABOUT_RECENT_EVENTS.events.map((event, i) => (
          <EventsCard
            ctaLabel={ABOUT_RECENT_EVENTS.ctaLabel ?? "View Event"}
            event={normalizeEvent(event, i)}
            flipStyle="diagonalWipe"
            index={i}
            key={event.id}
          />
        ))}
      </CardsGrid>
      <Spotlight
        align="left"
        className="[&>div:first-child]:md:order-last"
        description={ABOUT_FOUNDER_STORY.story}
        id="founder"
        imageAlt={ABOUT_FOUNDER_STORY.image.alt}
        imageUrl={ABOUT_FOUNDER_STORY.imageUrl}
        label={ABOUT_FOUNDER_STORY.sectionLabel}
        sectionClassName="scroll-mt-28"
        showCta={false}
        titleLine1={ABOUT_FOUNDER_STORY.nameLine1}
        titleLine2={ABOUT_FOUNDER_STORY.nameLine2}
      />
      <Culture data={ABOUT_VALUES} />
      {}
      <GlobalPresence data={ABOUT_PRESENCE} />
      <ContactUs
        headingLines={[ABOUT_INQUIRY.heading]}
        primaryCta={{ href: "/contact", label: ABOUT_INQUIRY.form.ctaLabel }}
        proofLabel={ABOUT_INQUIRY.proofLabel}
        proofLogos={CLIENT_LOGOS.slice(0, 5)}
      />
      <Footer />
    </main>
  );
};

export default Page;
