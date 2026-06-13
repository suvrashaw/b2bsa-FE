import type { EventCardItem } from "@/components/items/EventsCard";

import {
  type CalendarTradeShow,
  TRADE_SHOW_CALENDAR_EVENTS,
} from "@/content/trade-show-calendar/content";

const getFallbackImage = (index: number) => {
  const images = [
    "/images/events/adobe_summit_2026.avif",
    "/images/events/inma_2026.avif",
    "/images/events/servicenow_2026.avif",
    "/images/events/event_other_1.avif",
    "/images/events/event_other_2.avif",
    "/images/events/event_other_3.avif",
    "/images/events/event_other_4.avif",
  ];
  return images[index % images.length];
};

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

const formatCalendarDateRange = (startDate: string, endDate: string) => {
  const start = toUtcDate(startDate);
  const end = toUtcDate(endDate);

  if (startDate === endDate) return DATE_FORMAT.format(start);

  if (start.getUTCFullYear() === end.getUTCFullYear()) {
    return `${COMPACT_START_DATE_FORMAT.format(start)} - ${DATE_FORMAT.format(end)}`;
  }

  return `${DATE_FORMAT.format(start)} - ${DATE_FORMAT.format(end)}`;
};

const getCountryFromLocation = (location?: string) => {
  if (!location) return;
  const parts = location
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.at(-1) ?? location;
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

export const normalizeEvent = (event: EventCardItem, index: number): EventCardItem => ({
  ...event,
  country: event.country ?? getCountryFromLocation(event.location),
  ctaHref: event.ctaHref ?? "/trade-show-calendar",
  image: event.image ?? getFallbackImage(index),
});

export const getDefaultEvents = (): EventCardItem[] => {
  const today = new Date();
  const todayUtc = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  );

  return TRADE_SHOW_CALENDAR_EVENTS.filter((event) => toUtcDate(event.endDate) >= todayUtc)
    .toSorted((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(0, 8)
    .map((event, index) => mapCalendarEventToEvent(event, index));
};
