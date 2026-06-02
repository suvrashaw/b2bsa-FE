"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  type KeyboardEvent,
  type MouseEvent,
  useCallback,
  useMemo,
  useState,
} from "react";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_UPCOMING_EVENTS_CONTENT, type UpcomingEventsContent } from "@/content/home";
import {
  type CalendarTradeShow,
  TRADE_SHOW_CALENDAR_EVENTS,
} from "@/content/trade-show-calendar";
import { cn } from "@/lib";

export interface UpcomingEventsProps {
  badgeLabel?: UpcomingEventsContent["badgeLabel"];
  content?: UpcomingEventsContent;
  ctaLabel?: UpcomingEventsContent["ctaLabel"];
  description?: UpcomingEventsContent["description"];
  events?: UpcomingEventsContent["events"];
  eyebrow?: UpcomingEventsContent["eyebrow"];
  heading?: UpcomingEventsContent["heading"];
  viewAllHref?: string;
  viewAllLabel?: UpcomingEventsContent["viewAllLabel"];
}

interface EventDetailsPanelProps {
  ctaLabel: string;
  event: UpcomingEventCard;
  eventCountry: string;
  eventCtaHref: string;
  eventDate: string;
  handleLinkClick: (linkEvent: MouseEvent<HTMLAnchorElement>) => void;
}

interface FlipCardProps extends EventDetailsPanelProps {
  badgeLabel?: string;
  eventImage: string;
  isFlipped: boolean;
  shouldReduceMotion: boolean;
}

type FlipStyle = "diagonal" | "diagonalWipe" | "hinge" | "horizontal" | "split" | "vertical";

type UpcomingEventCard = {
  country?: string;
  ctaHref?: string;
} & UpcomingEventsContent["events"][number];

interface UpcomingEventFlipCardProps {
  badgeLabel?: string;
  ctaLabel: string;
  event: UpcomingEventCard;
  flipStyle: FlipStyle;
  index: number;
  isFlipped: boolean;
  onToggle: (eventId: string) => void;
  shouldReduceMotion: boolean;
  viewAllHref: string;
}

const CARD_CTA_LABEL = "View Event";
const CARD_SHELL_CLASS =
  "group relative h-[220px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#1E6091,#B23A48)] p-[1.5px] shadow-sm shadow-brand-blue/10 transition-all duration-500 hover:shadow-[0_22px_52px_rgba(30,96,145,0.18)] focus-visible:ring-4 focus-visible:ring-[#1E6091]/15 focus-visible:outline-none md:h-[260px]";
const DEFAULT_EVENT_IMAGES = [
  "/images/recent-events/frame-219.png",
  "/images/recent-events/frame-220.png",
  "/images/recent-events/frame-221.png",
  "/images/recent-events/frame-222.png",
  "/images/recent-events/frame-223.png",
  "/images/recent-events/frame-224.png",
  "/images/recent-events/frame-225.png",
];
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

const getFallbackImage = (index: number) =>
  DEFAULT_EVENT_IMAGES[index % DEFAULT_EVENT_IMAGES.length];

const getCountryFromLocation = (location?: string) => {
  if (!location) return;

  const locationParts = location.split(",").map((part) => part.trim()).filter(Boolean);
  return locationParts.at(-1) ?? location;
};

const mapCalendarEventToUpcomingEvent = (
  event: CalendarTradeShow,
  index: number
): UpcomingEventCard => ({
  country: event.country,
  ctaHref: "/trade-show-calendar",
  date: formatCalendarDateRange(event.startDate, event.endDate),
  id: event.id,
  image: getFallbackImage(index),
  location: event.country,
  title: event.name,
});

const getDefaultUpcomingEvents = () => {
  const today = getTodayUtc();

  return TRADE_SHOW_CALENDAR_EVENTS.filter((event) => toUtcDate(event.endDate) >= today)
    .toSorted((firstEvent, secondEvent) =>
      firstEvent.startDate.localeCompare(secondEvent.startDate)
    )
    .slice(0, 8)
    .map((event, index) => mapCalendarEventToUpcomingEvent(event, index));
};

const normalizeEvent = (event: UpcomingEventCard, index: number): UpcomingEventCard => ({
  ...event,
  country: event.country ?? getCountryFromLocation(event.location),
  ctaHref: event.ctaHref ?? "/trade-show-calendar",
  image: event.image ?? getFallbackImage(index),
});

const isInteractiveTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement && Boolean(target.closest("a, button"));

const CardFront = ({
  badgeLabel,
  event,
  eventImage,
}: {
  badgeLabel?: string;
  event: UpcomingEventCard;
  eventImage: string;
}) => (
  <>
    <Image
      alt={event.title}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 500px"
      src={eventImage}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
    <div className="absolute right-5 bottom-5 left-5 z-10">
      {badgeLabel && (
        <span className="mb-3 inline-block rounded-full bg-[#1E6091] px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase">
          {badgeLabel}
        </span>
      )}
      <h3 className="line-clamp-2 font-heading text-lg leading-tight font-bold !text-white md:text-xl">
        {event.title}
      </h3>
    </div>
  </>
);

const EventDetails = ({
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  handleLinkClick,
}: {
  ctaLabel: string;
  event: UpcomingEventCard;
  eventCountry: string;
  eventCtaHref: string;
  eventDate: string;
  handleLinkClick: (linkEvent: MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <>
    <div>
      <h3 className="line-clamp-2 font-heading text-xl leading-tight font-bold text-brand-charcoal md:text-2xl">
        {event.title}
      </h3>
      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm font-semibold text-brand-charcoal/80">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E6091]/10">
            <Calendar className="h-4 w-4 text-[#1E6091]" />
          </span>
          <span>{eventDate}</span>
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-brand-charcoal/80">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B23A48]/10">
            <MapPin className="h-4 w-4 text-[#B23A48]" />
          </span>
          <span className="line-clamp-1">{eventCountry}</span>
        </div>
      </div>
    </div>

    <Button
      asChild
      className="mt-5 w-fit bg-[#1E6091] hover:bg-[#1E6091]/90"
      size="sm"
      variant="primary"
    >
      <Link href={eventCtaHref} onClick={handleLinkClick}>
        {ctaLabel} <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Button>
  </>
);

const EventDetailsPanel = ({
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  handleLinkClick,
}: EventDetailsPanelProps) => (
  <div className="flex h-full flex-col justify-between rounded-[22px] bg-white p-5 md:p-6">
    <EventDetails
      ctaLabel={ctaLabel}
      event={event}
      eventCountry={eventCountry}
      eventCtaHref={eventCtaHref}
      eventDate={eventDate}
      handleLinkClick={handleLinkClick}
    />
  </div>
);

const HorizontalFlipCard = ({
  badgeLabel,
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  eventImage,
  handleLinkClick,
  isFlipped,
  shouldReduceMotion,
}: FlipCardProps) => (
  <div className="absolute inset-[1.5px] rounded-[22px] bg-white [perspective:1100px]">
    <div
      className={cn(
        "relative h-full w-full rounded-[22px] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]",
        shouldReduceMotion ? "transition-none" : "transition-transform duration-700 ease-out",
        isFlipped && "[transform:rotateY(180deg)]"
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[22px] [backface-visibility:hidden]">
        <CardFront badgeLabel={badgeLabel} event={event} eventImage={eventImage} />
      </div>
      <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <EventDetailsPanel
          ctaLabel={ctaLabel}
          event={event}
          eventCountry={eventCountry}
          eventCtaHref={eventCtaHref}
          eventDate={eventDate}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </div>
  </div>
);

const VerticalFlipCard = ({
  badgeLabel,
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  eventImage,
  handleLinkClick,
  isFlipped,
  shouldReduceMotion,
}: FlipCardProps) => (
  <div className="absolute inset-[1.5px] rounded-[22px] bg-white [perspective:1100px]">
    <div
      className={cn(
        "relative h-full w-full rounded-[22px] [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] group-focus-within:[transform:rotateX(180deg)]",
        shouldReduceMotion ? "transition-none" : "transition-transform duration-700 ease-out",
        isFlipped && "[transform:rotateX(180deg)]"
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[22px] [backface-visibility:hidden]">
        <CardFront badgeLabel={badgeLabel} event={event} eventImage={eventImage} />
      </div>
      <div className="absolute inset-0 [transform:rotateX(180deg)] [backface-visibility:hidden]">
        <EventDetailsPanel
          ctaLabel={ctaLabel}
          event={event}
          eventCountry={eventCountry}
          eventCtaHref={eventCtaHref}
          eventDate={eventDate}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </div>
  </div>
);

const HingeFlipCard = ({
  badgeLabel,
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  eventImage,
  handleLinkClick,
  isFlipped,
  shouldReduceMotion,
}: FlipCardProps) => (
  <div className="absolute inset-[1.5px] rounded-[22px] bg-white [perspective:1200px]">
    <EventDetailsPanel
      ctaLabel={ctaLabel}
      event={event}
      eventCountry={eventCountry}
      eventCtaHref={eventCtaHref}
      eventDate={eventDate}
      handleLinkClick={handleLinkClick}
    />
    <div
      className={cn(
        "absolute inset-0 origin-left overflow-hidden rounded-[22px] [backface-visibility:hidden] [transform-style:preserve-3d] group-hover:[transform:rotateY(-112deg)] group-focus-within:[transform:rotateY(-112deg)]",
        shouldReduceMotion ? "transition-none" : "transition-transform duration-700 ease-out",
        isFlipped && "[transform:rotateY(-112deg)]"
      )}
    >
      <CardFront badgeLabel={badgeLabel} event={event} eventImage={eventImage} />
    </div>
  </div>
);

const DiagonalFlipCard = ({
  badgeLabel,
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  eventImage,
  handleLinkClick,
  isFlipped,
  shouldReduceMotion,
}: FlipCardProps) => (
  <div className="absolute inset-[1.5px] rounded-[22px] bg-white [perspective:1200px]">
    <div
      className={cn(
        "relative h-full w-full rounded-[22px] [transform-style:preserve-3d] group-hover:[transform:rotate3d(1,1,0,180deg)] group-focus-within:[transform:rotate3d(1,1,0,180deg)]",
        shouldReduceMotion ? "transition-none" : "transition-transform duration-700 ease-out",
        isFlipped && "[transform:rotate3d(1,1,0,180deg)]"
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[22px] [backface-visibility:hidden]">
        <CardFront badgeLabel={badgeLabel} event={event} eventImage={eventImage} />
      </div>
      <div className="absolute inset-0 [transform:rotate3d(1,1,0,180deg)] [backface-visibility:hidden]">
        <EventDetailsPanel
          ctaLabel={ctaLabel}
          event={event}
          eventCountry={eventCountry}
          eventCtaHref={eventCtaHref}
          eventDate={eventDate}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </div>
  </div>
);

const DiagonalWipeRevealCard = ({
  badgeLabel,
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  eventImage,
  handleLinkClick,
  isFlipped,
  shouldReduceMotion,
}: FlipCardProps) => (
  <div className="absolute inset-[1.5px] overflow-hidden rounded-[22px] bg-white">
    <div
      className={cn(
        "absolute inset-0 z-10 flex flex-col justify-between rounded-[22px] bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100",
        shouldReduceMotion ? "delay-0" : "delay-500",
        isFlipped && "opacity-100 delay-0"
      )}
    >
      <EventDetailsPanel
        ctaLabel={ctaLabel}
        event={event}
        eventCountry={eventCountry}
        eventCtaHref={eventCtaHref}
        eventDate={eventDate}
        handleLinkClick={handleLinkClick}
      />
    </div>
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[22px] transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0",
        shouldReduceMotion ? "delay-0" : "delay-500",
        isFlipped && "opacity-0 delay-0"
      )}
    >
      <CardFront badgeLabel={badgeLabel} event={event} eventImage={eventImage} />
    </div>
    <div
      className={cn(
        "pointer-events-none absolute -inset-20 z-30 -translate-x-[130%] skew-x-[-18deg] bg-[linear-gradient(135deg,#1E6091_0%,#B23A48_58%,#780000_100%)] opacity-95 transition-transform duration-700 ease-out group-hover:translate-x-[130%] group-focus-within:translate-x-[130%]",
        shouldReduceMotion && "hidden",
        isFlipped && "translate-x-[130%]"
      )}
    />
  </div>
);

const SplitFlipCard = ({
  badgeLabel,
  ctaLabel,
  event,
  eventCountry,
  eventCtaHref,
  eventDate,
  eventImage,
  handleLinkClick,
  isFlipped,
  shouldReduceMotion,
}: FlipCardProps) => (
  <div className="absolute inset-[1.5px] overflow-hidden rounded-[22px] bg-white [perspective:1200px]">
    <EventDetailsPanel
      ctaLabel={ctaLabel}
      event={event}
      eventCountry={eventCountry}
      eventCtaHref={eventCtaHref}
      eventDate={eventDate}
      handleLinkClick={handleLinkClick}
    />
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[22px] transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0",
        isFlipped && "opacity-0"
      )}
    >
      <CardFront badgeLabel={badgeLabel} event={event} eventImage={eventImage} />
    </div>
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[22px] opacity-0 transition-opacity duration-100 group-hover:opacity-100 group-focus-within:opacity-100",
        isFlipped && "opacity-100"
      )}
    >
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1/2 origin-left overflow-hidden rounded-l-[22px] [backface-visibility:hidden] group-hover:[transform:rotateY(-112deg)] group-focus-within:[transform:rotateY(-112deg)]",
          shouldReduceMotion ? "transition-none" : "transition-transform duration-700 ease-out",
          isFlipped && "[transform:rotateY(-112deg)]"
        )}
      >
        <Image
          alt=""
          className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 50vw, 250px"
          src={eventImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
      </div>
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-1/2 origin-right overflow-hidden rounded-r-[22px] [backface-visibility:hidden] group-hover:[transform:rotateY(112deg)] group-focus-within:[transform:rotateY(112deg)]",
          shouldReduceMotion ? "transition-none" : "transition-transform duration-700 ease-out",
          isFlipped && "[transform:rotateY(112deg)]"
        )}
      >
        <Image
          alt=""
          className="object-cover object-right transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 50vw, 250px"
          src={eventImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
      </div>
      <div
        className={cn(
          "pointer-events-none absolute right-5 bottom-5 left-5 z-30 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0",
          isFlipped && "opacity-0"
        )}
      >
        {badgeLabel && (
          <span className="mb-3 inline-block rounded-full bg-[#1E6091] px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase">
            {badgeLabel}
          </span>
        )}
        <h3 className="line-clamp-2 font-heading text-lg leading-tight font-bold !text-white md:text-xl">
          {event.title}
        </h3>
      </div>
    </div>
  </div>
);

const FLIP_CARD_COMPONENTS: Record<FlipStyle, (props: FlipCardProps) => React.ReactNode> = {
  diagonal: DiagonalFlipCard,
  diagonalWipe: DiagonalWipeRevealCard,
  hinge: HingeFlipCard,
  horizontal: HorizontalFlipCard,
  split: SplitFlipCard,
  vertical: VerticalFlipCard,
};

const UpcomingEventFlipCard = ({
  badgeLabel,
  ctaLabel,
  event,
  flipStyle,
  index,
  isFlipped,
  onToggle,
  shouldReduceMotion,
  viewAllHref,
}: UpcomingEventFlipCardProps) => {
  const eventCountry = event.country ?? event.location ?? "Global";
  const eventDate = event.date ?? "Date TBA";
  const eventCtaHref = event.ctaHref ?? viewAllHref;
  const eventImage = event.image ?? getFallbackImage(index);
  const FlipCard = FLIP_CARD_COMPONENTS[flipStyle];

  const handleClick = useCallback(
    (clickEvent: MouseEvent<HTMLElement>) => {
      if (isInteractiveTarget(clickEvent.target)) return;
      onToggle(event.id);
    },
    [event.id, onToggle]
  );

  const handleKeyDown = useCallback(
    (keyEvent: KeyboardEvent<HTMLElement>) => {
      if (isInteractiveTarget(keyEvent.target)) return;

      if (keyEvent.key === "Enter" || keyEvent.key === " ") {
        keyEvent.preventDefault();
        onToggle(event.id);
      }
    },
    [event.id, onToggle]
  );

  const handleLinkClick = useCallback((linkEvent: MouseEvent<HTMLAnchorElement>) => {
    linkEvent.stopPropagation();
  }, []);

  return (
    <div className="mx-auto w-full max-w-[500px]">
      <article
        aria-label={`Show details for ${event.title}`}
        className={cn(
          CARD_SHELL_CLASS,
          isFlipped && "shadow-[0_22px_52px_rgba(178,58,72,0.18)]"
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <FlipCard
          badgeLabel={badgeLabel}
          ctaLabel={ctaLabel}
          event={event}
          eventCountry={eventCountry}
          eventCtaHref={eventCtaHref}
          eventDate={eventDate}
          eventImage={eventImage}
          handleLinkClick={handleLinkClick}
          isFlipped={isFlipped}
          shouldReduceMotion={shouldReduceMotion}
        />
      </article>
    </div>
  );
};

export const UpcomingEvents = ({
  content = HOME_UPCOMING_EVENTS_CONTENT,
  badgeLabel = content.badgeLabel,
  ctaLabel,
  description = content.description,
  events,
  eyebrow = content.eyebrow,
  heading = content.heading,
  viewAllHref = "/trade-show-calendar",
  viewAllLabel = content.viewAllLabel,
}: UpcomingEventsProps = {}) => {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [activeEventId, setActiveEventId] = useState<null | string>(null);
  const resolvedEvents = useMemo(() => {
    const sourceEvents =
      events ??
      (content === HOME_UPCOMING_EVENTS_CONTENT ? getDefaultUpcomingEvents() : content.events);

    return sourceEvents.map((event, index) => normalizeEvent(event, index));
  }, [content, events]);
  const resolvedCtaLabel =
    ctaLabel ??
    (events || content !== HOME_UPCOMING_EVENTS_CONTENT ? content.ctaLabel : CARD_CTA_LABEL);
  const handleCardToggle = useCallback((eventId: string) => {
    setActiveEventId((currentEventId) => (currentEventId === eventId ? null : eventId));
  }, []);

  return (
    <section className="relative bg-brand-gray py-20" id="events">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          {eyebrow && <Eyebrow variant="cyan">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="text-center">{heading}</Heading>
          {description && <p className="mt-4 max-w-2xl text-base text-gray-600">{description}</p>}
        </div>

        <div className="mx-auto grid max-w-[1050px] gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {resolvedEvents.map((event, index) => (
            <UpcomingEventFlipCard
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
            <Button asChild variant="primary">
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
