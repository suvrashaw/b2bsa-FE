"use client";

import { useMemo } from "react";

import type { FAQProps } from "@/components/sections/FAQ";

import { TradeShowCard } from "@/components/items/TradeShowCard";
import { WhyChooseUsCard } from "@/components/items/WhyChooseUsCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Carousel } from "@/components/sections/Carousel";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Spotlight } from "@/components/sections/Spotlight";
import { HOME_SERVICES } from "@/content/home/content";
import { type CalendarTradeShow, TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";

// ─── Constants ───────────────────────────────────────────────────────────────

const HERO_PRIMARY_CTA = {
  href: "/contact-us",
  label: "Plan Your Presence",
} as const;

const CONTACT_US_PRIMARY_CTA = {
  href: "/contact-us",
  label: "Start a Conversation",
  opensModal: true,
} as const;

const CONTACT_US_SECONDARY_CTA = {
  href: "/case-studies",
  label: "View Case Studies",
} as const;

const PLACEHOLDER_IMAGE = "/media/home/hero/home_hero_bg.avif";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const toUtcDate = (value: string) => new Date(`${value}T00:00:00.000Z`);

const computeDurationDays = (startDate: string, endDate: string) => {
  const start = toUtcDate(startDate);
  const end = toUtcDate(endDate);
  const diffMs = end.getTime() - start.getTime();
  return Math.max(1, Math.round(diffMs / (1000 * 60 * 60 * 24)) + 1);
};

const formatStat = (value: number) => {
  const fmt = new Intl.NumberFormat("en-US");
  return value >= 1000 ? `${fmt.format(value)}+` : fmt.format(value);
};

// ─── Props ───────────────────────────────────────────────────────────────────

export interface EventPageProps {
  event: CalendarTradeShow;
  faq?: FAQProps;
}

// ─── EventPage ────────────────────────────────────────────────────────────────

export const EventPage = ({ event, faq }: EventPageProps) => {
  const heroImages = useMemo(() => [event.image ?? PLACEHOLDER_IMAGE], [event.image]);

  const durationDays = useMemo(
    () => computeDurationDays(event.startDate, event.endDate),
    [event.startDate, event.endDate]
  );

  const stats = useMemo(
    () => [
      `${formatStat(event.attendeeCount)} Attendees`,
      `${formatStat(event.exhibitorCount)} Exhibitors`,
      `${durationDays} ${durationDays === 1 ? "Day" : "Days"}`,
    ],
    [event.attendeeCount, event.exhibitorCount, durationDays]
  );

  const relatedEvents = useMemo(
    () =>
      TRADE_SHOW_CALENDAR_EVENTS.filter(
        (e) => e.industry === event.industry && e.id !== event.id
      ).slice(0, 6),
    [event.industry, event.id]
  );

  const serviceItems = useMemo(
    () =>
      HOME_SERVICES.services
        .slice(0, 5)
        .map((item) => ({ ...item, image: item.image ?? PLACEHOLDER_IMAGE })),
    []
  );

  const contactUsBg = useMemo(
    () => ({ alt: event.title, src: event.image ?? PLACEHOLDER_IMAGE }),
    [event.title, event.image]
  );

  const contactUsHeadingLines = useMemo(
    () => [`Ready to Exhibit at`, `${event.title}?`],
    [event.title]
  );

  const introDescription = useMemo(
    () => (event.summaryDetail ? `${event.summary}\n\n${event.summaryDetail}` : event.summary),
    [event.summary, event.summaryDetail]
  );

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <Hero
        description={event.description}
        imageOpacity={0.35}
        images={heroImages}
        primaryCta={HERO_PRIMARY_CTA}
        title={event.heroHeading ?? event.title}
      />

      {/* ── 3. Introduction — Why Exhibit + Event at a Glance ────────────── */}
      <Spotlight
        description={introDescription}
        image={event.image ?? PLACEHOLDER_IMAGE}
        imageAlt={event.title}
        label="INTRODUCTION"
        stats={stats}
        titleLine1="Why Exhibit at"
        titleLine2={event.title}
      />

      {/* ── 5. Services Carousel — What We Deliver ───────────────────────── */}
      <Carousel
        autoplayInterval={4000}
        heading={`Our Event Services at ${event.title}`}
        id="services"
      >
        {serviceItems.map((item, i) => (
          <WhyChooseUsCard index={i} item={item} key={item.id} />
        ))}
      </Carousel>

      {/* ── 6. Related Events Carousel ───────────────────────────────────── */}
      {relatedEvents.length > 0 && (
        <Carousel
          cols={3}
          description={`Other major ${event.industry} events where we help brands exhibit.`}
          heading={`More ${event.industry} Events`}
          id="related-events"
        >
          {relatedEvents.map((show) => (
            <TradeShowCard key={show.id} show={show} />
          ))}
        </Carousel>
      )}

      {/* ── 7. FAQ (optional) ───────────────────────────────────────────── */}
      {faq && faq.faqs && faq.faqs.length > 0 && (
        <FAQ
          description={faq.description}
          faqs={faq.faqs}
          heading={faq.heading ?? "Frequently Asked Questions"}
        />
      )}

      {/* ── 8. ContactUs ────────────────────────────────────────────────── */}
      <ContactUs
        backgroundImage={contactUsBg}
        description="Tell us about your booth goals and we'll build a tailored plan for this event."
        eyebrow="Talk to an Expert"
        headingLines={contactUsHeadingLines}
        primaryCta={CONTACT_US_PRIMARY_CTA}
        secondaryCta={CONTACT_US_SECONDARY_CTA}
      />

      {/* ── 9. Footer ───────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
};
