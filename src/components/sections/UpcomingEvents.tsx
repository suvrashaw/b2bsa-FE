"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_UPCOMING_EVENTS_CONTENT, type UpcomingEventsContent } from "@/content/home";

export interface UpcomingEventsProps {
  badgeLabel?: UpcomingEventsContent["badgeLabel"];
  content?: UpcomingEventsContent;
  ctaLabel?: UpcomingEventsContent["ctaLabel"];
  description?: UpcomingEventsContent["description"];
  events?: UpcomingEventsContent["events"];
  eyebrow?: UpcomingEventsContent["eyebrow"];
  heading?: UpcomingEventsContent["heading"];
  viewAllLabel?: UpcomingEventsContent["viewAllLabel"];
}

const UPCOMINGEVENTS_INITIAL = { opacity: 0, y: 30 };
const UPCOMINGEVENTS_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const UPCOMINGEVENTS_VIEWPORT = { once: true };

export const UpcomingEvents = ({
  content = HOME_UPCOMING_EVENTS_CONTENT,
  badgeLabel = content.badgeLabel,
  ctaLabel = content.ctaLabel,
  description = content.description,
  events = content.events,
  eyebrow = content.eyebrow,
  heading = content.heading,
  viewAllLabel = content.viewAllLabel,
}: UpcomingEventsProps = {}) => {
  const eventTransitions = useMemo(
    () => events.map((_, index) => ({ delay: index * 0.2, duration: 0.6 })),
    [events]
  );

  return (
    <section className="relative bg-brand-gray py-20" id="events">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-start text-left">
          {eyebrow && <Eyebrow variant="cyan">{eyebrow}</Eyebrow>}
          <Heading as="h2">{heading}</Heading>
          {description && <p className="mt-4 max-w-2xl text-base text-gray-600">{description}</p>}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl"
              initial={UPCOMINGEVENTS_INITIAL}
              key={event.id}
              transition={eventTransitions[index]}
              viewport={UPCOMINGEVENTS_VIEWPORT}
              whileInView={UPCOMINGEVENTS_WHILE_IN_VIEW}
            >
              <div className="relative h-[250px] w-full overflow-hidden md:h-[300px]">
                <Image
                  alt={event.title}
                  className="transform object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={event.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover Reveal CTA */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-brand-charcoal/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                  <Button
                    className="translate-y-4 shadow-lg group-hover:translate-y-0"
                    variant="primary"
                  >
                    {ctaLabel} <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute right-6 bottom-6 left-6 z-10">
                  {badgeLabel && (
                    <span className="mb-3 inline-block rounded-full bg-brand-blue px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                      {badgeLabel}
                    </span>
                  )}
                  <h3 className="line-clamp-2 font-heading text-2xl leading-tight font-bold !text-white md:text-3xl">
                    {event.title}
                  </h3>
                </div>
              </div>

              {(event.date || event.location) && (
                <div className="relative flex flex-1 flex-col justify-center p-8">
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    {event.date && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gray">
                          <Calendar className="h-4 w-4 text-brand-blue" />
                        </div>
                        <p className="text-sm font-semibold">{event.date}</p>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gray">
                          <MapPin className="h-4 w-4 text-brand-cyan" />
                        </div>
                        <p className="line-clamp-2 text-sm font-semibold">{event.location}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {viewAllLabel && (
          <div className="mt-12 text-center">
            <Link href="/events">
              <Button className="hidden md:inline-flex" variant="tertiary">
                {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
