"use client";

import { useMemo } from "react";

import type { FAQProps } from "@/components/sections/FAQAccordion";

import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { EventMetadata } from "@/components/items/EventMetadata";
import { TradeShowCard } from "@/components/items/TradeShowCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Carousel } from "@/components/sections/Carousel";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Hero } from "@/components/sections/Hero";
import { Spotlight } from "@/components/sections/Spotlight";
import { HOME_SERVICES_CONTENT } from "@/content/home/content";
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

const formatEventDateRange = (startDate: string, endDate: string) => {
  const fmt = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  });
  const compactFmt = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });

  const start = toUtcDate(startDate);
  const end = toUtcDate(endDate);

  if (startDate === endDate) return fmt.format(start);
  if (start.getUTCFullYear() === end.getUTCFullYear()) {
    return `${compactFmt.format(start)} – ${fmt.format(end)}`;
  }
  return `${fmt.format(start)} – ${fmt.format(end)}`;
};

const formatLocation = (event: CalendarTradeShow) =>
  [event.city, event.region, event.country].filter(Boolean).join(", ");

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

  const heroSecondaryCta = useMemo(
    () => ({ href: event.sourceUrl, label: "Visit Official Site" }),
    [event.sourceUrl]
  );

  const metadata = useMemo(
    () => [
      {
        label: "Date",
        value: formatEventDateRange(event.startDate, event.endDate),
      },
      { label: "Venue", value: event.venue },
      { label: "Location", value: formatLocation(event) },
      { label: "Industry", value: event.industry },
    ],
    [event]
  );

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
      HOME_SERVICES_CONTENT.services
        .slice(0, 5)
        .map((item) => ({ ...item, image: item.image ?? PLACEHOLDER_IMAGE })),
    []
  );

  const contactUsBg = useMemo(
    () => ({ alt: event.name, src: event.image ?? PLACEHOLDER_IMAGE }),
    [event.name, event.image]
  );

  const contactUsHeadingLines = useMemo(
    () => [`Ready to Exhibit at`, `${event.name}?`],
    [event.name]
  );

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <Hero
        eyebrow={<EventMetadata metadata={metadata} />}
        imageOpacity={0.35}
        images={heroImages}
        primaryCta={HERO_PRIMARY_CTA}
        secondaryCta={heroSecondaryCta}
        title={event.name}
      />

      {/* ── 3. Spotlight — Why Exhibit + Event at a Glance ──────────────── */}
      <Spotlight
        description={event.summary}
        imageAlt={event.name}
        imageUrl={event.image ?? PLACEHOLDER_IMAGE}
        stats={stats}
        titleLine1="Why Exhibit at"
        titleLine2={event.name}
      />

      {/* ── 5. Services Carousel — What We Deliver ───────────────────────── */}
      <Carousel
        autoplayInterval={4000}
        heading={`Our Event Services at ${event.name}`}
        id="services"
        layout="carousel"
      >
        {serviceItems.map((item, i) => (
          <BoothWhyCard index={i} item={item} key={item.id} />
        ))}
      </Carousel>

      {/* ── 6. Related Events Carousel ───────────────────────────────────── */}
      {relatedEvents.length > 0 && (
        <Carousel
          cols={3}
          description={`Other major ${event.industry} events where we help brands exhibit.`}
          heading={`More ${event.industry} Events`}
          id="related-events"
          layout="carousel"
        >
          {relatedEvents.map((show) => (
            <TradeShowCard key={show.id} show={show} />
          ))}
        </Carousel>
      )}

      {/* ── 7. FAQ (optional) ───────────────────────────────────────────── */}
      {faq && faq.faqs && faq.faqs.length > 0 && (
        <FAQAccordion
          description={faq.description}
          faqs={faq.faqs}
          heading={faq.heading ?? "Frequently Asked Questions"}
        />
      )}

      {/* ── 8. ContactUs ────────────────────────────────────────────────── */}
      <ContactUs
        backgroundImage={contactUsBg}
        badge="Talk to an Expert"
        description="Tell us about your booth goals and we'll build a tailored plan for this event."
        headingLines={contactUsHeadingLines}
        primaryCta={CONTACT_US_PRIMARY_CTA}
        secondaryCta={CONTACT_US_SECONDARY_CTA}
      />

      {/* ── 9. Footer ───────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
};
