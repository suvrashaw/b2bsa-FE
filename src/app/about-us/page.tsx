import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Culture } from "@/components/sections/Culture";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ABOUT_CORE_VALUES,
  ABOUT_FOUNDER_STORY,
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_RECENT_EVENTS,
  ABOUT_SIGNATURE_SERVICES,
  ABOUT_TEAM_IMAGES,
  ABOUT_VALUES,
  ABOUT_VISION_MISSION,
  ABOUT_WHO_WE_ARE,
} from "@/content/about-us/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { normalizeEvent } from "@/content/tradeshow-calendar";
import {
  buildAboutPageJsonLd,
  buildBreadcrumbJsonLd,
  buildImageObjectJsonLd,
  buildLocalBusinessJsonLd,
  buildPageGraph,
  siteUrl,
} from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const ABOUT_IMAGES = [ABOUT_HERO.image.src];
const ABOUT_URL = `${siteUrl}/about-us`;

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd
        data={buildPageGraph([
          buildAboutPageJsonLd(ABOUT_PAGE.seo.description),
          buildBreadcrumbJsonLd(
            [
              { name: "Home", url: siteUrl },
              { name: "About", url: ABOUT_URL },
            ],
            ABOUT_URL
          ),
          buildImageObjectJsonLd({ caption: ABOUT_HERO.title, url: ABOUT_HERO.image.src }),
        ])}
      />
      <Header />

      {/* Hero — centered, no description, "About Us" eyebrow, slide-from-left animation */}
      <Hero
        animateFromLeft
        centerContent
        centered
        eyebrow={ABOUT_HERO.eyebrow}
        imageOpacity={0.7}
        images={ABOUT_IMAGES}
        primaryCta={ABOUT_HERO.primaryCta ?? undefined}
        title={ABOUT_HERO.title}
      />

      {/* Who We Are */}
      <section className="bg-brand-gray pt-16 pb-6 md:pt-20 md:pb-8">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader as="h2" className="mb-6">
              {ABOUT_WHO_WE_ARE.heading}
            </SectionHeader>
            <p className="text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
              {ABOUT_WHO_WE_ARE.description}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission — left: Mission + Vision stacked, right: team images */}
      <section className="bg-brand-gray pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20">
            {/* Left: Mission + Vision */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-12 w-full">
                <SectionHeader as="h2" className="mb-6 text-center lg:text-left">
                  <span className="block text-brand-charcoal">
                    {ABOUT_VISION_MISSION.missionTitleLine1}
                  </span>
                  <span className="block text-[var(--heading-h2)]">
                    {ABOUT_VISION_MISSION.missionTitleLine2}
                  </span>
                </SectionHeader>
                <ul className="inline-block space-y-3 text-left">
                  {ABOUT_VISION_MISSION.missionItems.map((item) => (
                    <li
                      className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/70 md:text-base"
                      key={item}
                    >
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <SectionHeader as="h2" className="mb-4 text-center lg:text-left">
                  <span className="block text-brand-charcoal">
                    {ABOUT_VISION_MISSION.visionTitleLine1}
                  </span>
                  <span className="block text-[var(--heading-h2)]">
                    {ABOUT_VISION_MISSION.visionTitleLine2}
                  </span>
                </SectionHeader>
                <p className="text-justify text-sm leading-relaxed text-brand-charcoal/70 md:text-base">
                  {ABOUT_VISION_MISSION.vision}
                </p>
              </div>
            </div>

            {/* Right: Team images — stretches to match left column height */}
            <div className="flex flex-col gap-4 lg:h-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:flex-1">
                <Image
                  alt={ABOUT_TEAM_IMAGES[0].alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  src={ABOUT_TEAM_IMAGES[0].src}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt={ABOUT_TEAM_IMAGES[1].alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    src={ABOUT_TEAM_IMAGES[1].src}
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt={ABOUT_TEAM_IMAGES[2].alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    src={ABOUT_TEAM_IMAGES[2].src}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — separator row style */}
      <section className="bg-brand-gray py-12 md:py-16" id="core-values">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <SectionHeader as="h2" className="mb-2 text-center">
            {ABOUT_CORE_VALUES.heading}
          </SectionHeader>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-brand-charcoal/75 md:text-base">
            {ABOUT_CORE_VALUES.description}
          </p>
          <div className="mx-auto max-w-5xl divide-y divide-brand-charcoal/10 sm:grid sm:grid-cols-2 sm:divide-y-0">
            {ABOUT_CORE_VALUES.values.map((value, i) => (
              <div
                className="flex items-start gap-4 border-l-2 border-brand-blue/30 py-5 pl-5 sm:px-6 sm:odd:border-r sm:odd:border-r-brand-charcoal/10"
                key={value}
              >
                <span className="mt-1.5 font-heading text-xs font-bold text-brand-blue/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-brand-charcoal/80 md:text-base">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How B2B Sales Arrow Was Built */}
      <ProcessTimeline
        description={ABOUT_ORIGIN_TIMELINE.description}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
        phases={ABOUT_ORIGIN_TIMELINE.phases}
      />

      {/* Signature Services */}
      <ServicesStack
        heading={ABOUT_SIGNATURE_SERVICES.heading}
        services={ABOUT_SIGNATURE_SERVICES.services}
        showChildLinks={false}
      />

      {/* Events We Have Delivered */}
      <CardsGrid
        cols={3}
        cta={
          <Button asChild variant="primary">
            <Link href="/case-studies">{ABOUT_RECENT_EVENTS.viewAllLabel}</Link>
          </Button>
        }
        description={ABOUT_RECENT_EVENTS.description}
        heading={ABOUT_RECENT_EVENTS.heading}
        id="events"
      >
        {ABOUT_RECENT_EVENTS.events.map((event, i) => (
          <EventsCard
            ctaLabel={ABOUT_RECENT_EVENTS.ctaLabel}
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
        description={ABOUT_FOUNDER_STORY.story}
        id="founder"
        image={ABOUT_FOUNDER_STORY.image.src}
        imageAlt={ABOUT_FOUNDER_STORY.image.alt}
        imageClassName="object-top"
        imageContainerClassName="lg:max-w-[440px]"
        imagePosition="left"
        label={ABOUT_FOUNDER_STORY.sectionLabel}
        sectionClassName="scroll-mt-28"
        titleLine1={ABOUT_FOUNDER_STORY.nameLine1}
        titleLine2={ABOUT_FOUNDER_STORY.nameLine2}
      />

      {/* What We Believe In */}
      <Culture data={ABOUT_VALUES} />

      <Footer />
    </main>
  );
};

export default Page;
