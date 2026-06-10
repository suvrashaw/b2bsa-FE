"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import {
  type EventCardItem,
  EventsCard,
  type FlipStyle,
  getFallbackImage,
} from "@/components/items/EventsCard";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type EventsContent, HOME_EVENTS_CONTENT } from "@/content/home";
import { type CalendarTradeShow, TRADE_SHOW_CALENDAR_EVENTS } from "@/content/trade-show-calendar";

export interface EventsProps {
  badgeLabel?: EventsContent["badgeLabel"];
  content?: EventsContent;
  ctaLabel?: EventsContent["ctaLabel"];
  description?: EventsContent["description"];
  events?: EventsContent["events"];
  eyebrow?: EventsContent["eyebrow"];
  heading?: EventsContent["heading"];
  headingHighlight?: string;
  viewAllHref?: string;
  viewAllLabel?: EventsContent["viewAllLabel"];
}

const CARD_CTA_LABEL = "View Event";
const EVENT_CARD_FLIP_STYLE: FlipStyle = "diagonalWipe";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

const COMPACT_START_DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

const toUtcDate = (value: string) => new Date(`${value}T00:00:00.000Z`);

const getTodayUtc = () => {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
};

const formatCalendarDateRange = (startDate: string, endDate: string) => {
  const start = toUtcDate(startDate);
  const end = toUtcDate(endDate);

  if (startDate === endDate) {
    return DATE_FORMAT.format(start);
  }

  if (start.getUTCFullYear() === end.getUTCFullYear()) {
    return `${COMPACT_START_DATE_FORMAT.format(start)} - ${DATE_FORMAT.format(end)}`;
  }

  return `${DATE_FORMAT.format(start)} - ${DATE_FORMAT.format(end)}`;
};

const getCountryFromLocation = (location?: string) => {
  if (!location) return;

  const locationParts = location
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return locationParts.at(-1) ?? location;
};

const mapCalendarEventToEvent = (event: CalendarTradeShow, index: number): EventCardItem => ({
  country: event.country,
  ctaHref: "/trade-show-calendar",
  date: formatCalendarDateRange(event.startDate, event.endDate),
  id: event.id,
  image: getFallbackImage(index),
  location: event.country,
  title: event.name,
});

const getDefaultEvents = () => {
  const today = getTodayUtc();

  return TRADE_SHOW_CALENDAR_EVENTS.filter((event) => toUtcDate(event.endDate) >= today)
    .toSorted((firstEvent, secondEvent) =>
      firstEvent.startDate.localeCompare(secondEvent.startDate)
    )
    .slice(0, 8)
    .map((event, index) => mapCalendarEventToEvent(event, index));
};

const normalizeEvent = (event: EventCardItem, index: number): EventCardItem => ({
  ...event,
  country: event.country ?? getCountryFromLocation(event.location),
  ctaHref: event.ctaHref ?? "/trade-show-calendar",
  image: event.image ?? getFallbackImage(index),
});

export const Events = ({
  content = HOME_EVENTS_CONTENT,
  badgeLabel = content.badgeLabel,
  ctaLabel,
  description = content.description,
  events,
  eyebrow = content.eyebrow,
  heading = content.heading,
  headingHighlight = content.headingHighlight,
  viewAllHref = "/trade-show-calendar",
  viewAllLabel = content.viewAllLabel,
}: EventsProps = {}) => {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [activeEventId, setActiveEventId] = useState<null | string>(null);
  const resolvedEvents = useMemo(() => {
    const sourceEvents =
      events ?? (content === HOME_EVENTS_CONTENT ? getDefaultEvents() : content.events);

    return sourceEvents.map((event, index) => normalizeEvent(event, index));
  }, [content, events]);
  const resolvedCtaLabel =
    ctaLabel ?? (events || content !== HOME_EVENTS_CONTENT ? content.ctaLabel : CARD_CTA_LABEL);
  const handleCardToggle = useCallback((eventId: string) => {
    setActiveEventId((currentEventId) => (currentEventId === eventId ? null : eventId));
  }, []);

  return (
    <section className="relative bg-brand-gray py-20" id="events">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          {eyebrow && <Eyebrow variant="cyan">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="text-center" highlight={headingHighlight}>
            {heading}
          </Heading>
          {description && <p className="mt-4 max-w-2xl text-base text-gray-600">{description}</p>}
        </div>

        <div className="mx-auto grid max-w-[1050px] gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {resolvedEvents.map((event, index) => (
            <EventsCard
              badgeLabel={badgeLabel}
              ctaLabel={resolvedCtaLabel}
              event={event}
              flipStyle={EVENT_CARD_FLIP_STYLE}
              index={index}
              isFlipped={activeEventId === event.id}
              key={event.id}
              onToggle={handleCardToggle}
              shouldReduceMotion={shouldReduceMotion}
              viewAllHref={viewAllHref}
            />
          ))}
        </div>

        {viewAllLabel && (
          <div className="mt-12 text-center">
            <Button asChild variant="secondary">
              <Link href={viewAllHref}>
                {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
