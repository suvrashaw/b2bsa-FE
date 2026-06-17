"use client";

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import type { EventsContent } from "@/content/home/content";

import { Button } from "@/components/ui/Button";
import { getFallbackImage } from "@/content/events-utils";
import { cn } from "@/lib";

export type EventCardItem = {
  country?: string;
  ctaHref?: string;
} & EventsContent["events"][number];

interface EventDetailsPanelProps {
  ctaLabel: string;
  event: EventCardItem;
  eventCountry?: string;
  eventCtaHref: string;
  eventDate?: string;
  handleLinkClick: (linkEvent: MouseEvent<HTMLAnchorElement>) => void;
}

interface EventsCardProps {
  ctaLabel: string;
  event: EventCardItem;
  flipStyle: FlipStyle;
  index: number;
  viewAllHref?: string;
}

interface FlipCardProps extends EventDetailsPanelProps {
  eventImage: string;
  isFlipped: boolean;
  shouldReduceMotion: boolean;
}

type FlipStyle = "diagonal" | "diagonalWipe" | "hinge" | "horizontal" | "split" | "vertical";

const CARD_SHELL_CLASS =
  "group relative h-[180px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#1E6091,#B23A48)] p-[1.5px] shadow-sm shadow-brand-blue/10 transition-all duration-500 hover:shadow-[0_22px_52px_rgba(30,96,145,0.18)] focus-visible:ring-4 focus-visible:ring-[#1E6091]/15 focus-visible:outline-none md:h-[220px]";

const isInteractiveTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement && Boolean(target.closest("a, button"));

const CardFront = ({ event, eventImage }: { event: EventCardItem; eventImage: string }) => (
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
      <h3 className="line-clamp-2 font-heading text-lg leading-tight font-bold !text-white md:text-xl">
        {event.title}
      </h3>
    </div>
  </>
);

const EventDetails = ({
  ctaLabel,
  eventCountry,
  eventCtaHref,
  eventDate,
  handleLinkClick,
}: {
  ctaLabel: string;
  eventCountry?: string;
  eventCtaHref: string;
  eventDate?: string;
  handleLinkClick: (linkEvent: MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <>
    <div>
      <div className="mt-0 space-y-3">
        {eventDate ? (
          <div className="flex items-center gap-3 text-sm font-semibold text-brand-charcoal/80">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E6091]/10">
              <Calendar className="h-4 w-4 text-[#1E6091]" />
            </span>
            <span>{eventDate}</span>
          </div>
        ) : null}
        {eventCountry ? (
          <div className="flex items-center gap-3 text-sm font-semibold text-brand-charcoal/80">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B23A48]/10">
              <MapPin className="h-4 w-4 text-[#B23A48]" />
            </span>
            <span className="line-clamp-1">{eventCountry}</span>
          </div>
        ) : null}
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
  eventCountry,
  eventCtaHref,
  eventDate,
  handleLinkClick,
}: EventDetailsPanelProps) => (
  <div className="flex h-full flex-col justify-between rounded-[22px] bg-white p-5 md:p-6">
    <EventDetails
      ctaLabel={ctaLabel}
      eventCountry={eventCountry}
      eventCtaHref={eventCtaHref}
      eventDate={eventDate}
      handleLinkClick={handleLinkClick}
    />
  </div>
);

const HorizontalFlipCard = ({
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
        <CardFront event={event} eventImage={eventImage} />
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
        <CardFront event={event} eventImage={eventImage} />
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
      <CardFront event={event} eventImage={eventImage} />
    </div>
  </div>
);

const DiagonalFlipCard = ({
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
        <CardFront event={event} eventImage={eventImage} />
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
      <CardFront event={event} eventImage={eventImage} />
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
      <CardFront event={event} eventImage={eventImage} />
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
        <h3 className="line-clamp-2 font-heading text-lg leading-tight font-bold !text-white md:text-xl">
          {event.title}
        </h3>
      </div>
    </div>
  </div>
);

const FLIP_CARD_COMPONENTS: Record<FlipStyle, (props: FlipCardProps) => ReactNode> = {
  diagonal: DiagonalFlipCard,
  diagonalWipe: DiagonalWipeRevealCard,
  hinge: HingeFlipCard,
  horizontal: HorizontalFlipCard,
  split: SplitFlipCard,
  vertical: VerticalFlipCard,
};

export const EventsCard = ({
  ctaLabel,
  event,
  flipStyle,
  index,
  viewAllHref = "/tradeshow-calendar",
}: EventsCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const eventCountry = event.country ?? event.location;
  const eventDate = event.date;
  const eventCtaHref = event.ctaHref ?? viewAllHref;
  const eventImage = event.image ?? getFallbackImage(index);
  const FlipCard = FLIP_CARD_COMPONENTS[flipStyle];

  const handleClick = useCallback((clickEvent: MouseEvent<HTMLElement>) => {
    if (isInteractiveTarget(clickEvent.target)) return;
    setIsFlipped((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((keyEvent: KeyboardEvent<HTMLElement>) => {
    if (isInteractiveTarget(keyEvent.target)) return;

    if (keyEvent.key === "Enter" || keyEvent.key === " ") {
      keyEvent.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  }, []);

  const handleLinkClick = useCallback((linkEvent: MouseEvent<HTMLAnchorElement>) => {
    linkEvent.stopPropagation();
  }, []);

  return (
    <div className="w-full">
      <article
        aria-label={`Show details for ${event.title}`}
        className={cn(CARD_SHELL_CLASS, isFlipped && "shadow-[0_22px_52px_rgba(178,58,72,0.18)]")}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <FlipCard
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
