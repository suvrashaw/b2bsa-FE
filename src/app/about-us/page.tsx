import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ContactUs } from "@/components/sections/ContactUs";
import { Culture } from "@/components/sections/Culture";
import { Hero } from "@/components/sections/Hero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { Timeline } from "@/components/sections/Timeline";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ABOUT_CONTACTUS,
  ABOUT_CORE_VALUES,
  ABOUT_FOUNDER_STORY,
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_RECENT_EVENTS,
  ABOUT_SIGNATURE_SERVICES,
  ABOUT_SIGNATURE_SERVICES_STACK,
  ABOUT_VALUES,
  ABOUT_VISION_MISSION,
} from "@/content/about-us/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { normalizeEvent } from "@/content/tradeshow-calendar/events-utils";
import { buildLocalBusinessJsonLd } from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const ABOUT_IMAGES = ["/images/about-us/culture/culture-5.avif"];
const ABOUT_PRIMARY_CTA = { href: ABOUT_HERO.primaryCtaHref, label: ABOUT_HERO.primaryCtaLabel };

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <Header darkBackground />

      {/* Hero — centered, no description, "About Us" eyebrow, slide-from-left animation */}
      <Hero
        animateFromLeft
        centered
        eyebrow="About Us"
        imageOpacity={0.7}
        images={ABOUT_IMAGES}
        primaryCta={ABOUT_PRIMARY_CTA}
        title={ABOUT_HERO.title}
      />

      {/* Who We Are */}
      <section className="bg-brand-gray py-16 md:py-20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader as="h2" className="mb-6">
              Who We Are
            </SectionHeader>
            <p className="text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
              B2B Sales Arrow is not a vendor. We are a strategic growth partner, bringing event
              solutions, video production, performance marketing, and market research under one team
              with one commercial brief and clear accountability to outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission — left: Mission + Vision stacked, right: team images */}
      <section className="bg-brand-gray py-16 md:py-20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <p className="mb-10 text-xs font-medium tracking-[0.25em] text-brand-charcoal/50 uppercase">
            {ABOUT_VISION_MISSION.sectionLabel}
          </p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            {/* Left: Mission + Vision */}
            <div>
              <div className="mb-12">
                <SectionHeader as="h2" className="mb-6 text-left">
                  <span className="block text-brand-charcoal">
                    {ABOUT_VISION_MISSION.missionTitleLine1}
                  </span>
                  <span className="block text-[var(--heading-h2)]">
                    {ABOUT_VISION_MISSION.missionTitleLine2}
                  </span>
                </SectionHeader>
                <ul className="space-y-3">
                  {ABOUT_VISION_MISSION.missionItems.map((item) => (
                    <li
                      className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/70 md:text-base"
                      key={item}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeader as="h2" className="mb-4 text-left">
                  <span className="block text-brand-charcoal">
                    {ABOUT_VISION_MISSION.visionTitleLine1}
                  </span>
                  <span className="block text-[var(--heading-h2)]">
                    {ABOUT_VISION_MISSION.visionTitleLine2}
                  </span>
                </SectionHeader>
                <p className="text-sm leading-relaxed text-brand-charcoal/70 md:text-base">
                  {ABOUT_VISION_MISSION.vision}
                </p>
              </div>
            </div>

            {/* Right: Team images */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  alt="B2B Sales Arrow team"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  src="/images/about-us/culture/culture-1.avif"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt="B2B Sales Arrow team"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    src="/images/about-us/culture/culture-4.avif"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt="B2B Sales Arrow team"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    src="/images/about-us/culture/culture-5.avif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — simple bullet list */}
      <section className="bg-brand-gray py-12 md:py-16" id="core-values">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <SectionHeader as="h2" className="mb-2 text-center">
            {ABOUT_CORE_VALUES.heading}
          </SectionHeader>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-brand-charcoal/60 md:text-base">
            {ABOUT_CORE_VALUES.description}
          </p>
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {ABOUT_CORE_VALUES.values.map((value) => (
              <li
                className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/80 md:text-base"
                key={value}
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-cyan" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How B2B Sales Arrow Was Built */}
      <Timeline
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
        phases={ABOUT_ORIGIN_TIMELINE.phases}
      />

      {/* Signature Services */}
      <ServicesStack
        heading={ABOUT_SIGNATURE_SERVICES.heading}
        services={ABOUT_SIGNATURE_SERVICES_STACK}
      />

      {/* Events We Have Delivered */}
      <CardsGrid
        cols={3}
        cta={
          <Button asChild variant="primary">
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        }
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

      {/* Founder Story — smaller image */}
      <Spotlight
        align="left"
        className="[&>div:first-child]:md:order-last"
        description={ABOUT_FOUNDER_STORY.story}
        id="founder"
        imageAlt={ABOUT_FOUNDER_STORY.image.alt}
        imageContainerClassName="lg:max-w-[340px]"
        imageUrl={ABOUT_FOUNDER_STORY.imageUrl}
        label={ABOUT_FOUNDER_STORY.sectionLabel}
        sectionClassName="scroll-mt-28"
        showCta={false}
        titleLine1={ABOUT_FOUNDER_STORY.nameLine1}
        titleLine2={ABOUT_FOUNDER_STORY.nameLine2}
      />

      {/* What We Believe In — without the zoomed parallax/quote section */}
      <Culture data={ABOUT_VALUES} showParallax={false} />

      {/* CTA */}
      <ContactUs {...ABOUT_CONTACTUS} />

      <Footer />
    </main>
  );
};

export default Page;
