"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface ServicesScrollProps {
  description?: ReactNode;
  heading?: ReactNode;
  services: ServiceData[];
}

interface ServiceData {
  ctaText?: string;
  description?: string;
  features?: string[];
  icon?: string;
  id: string;
  image: string;
  label?: string; // e.g. "SERVICE 01"
  number?: string; // e.g. "01"
  title?: string;
}

export const DEFAULT_SERVICES_SCROLL_ITEMS: ServiceData[] = [
  {
    ctaText: "Get a Free 3D Booth Design",
    description:
      "We design custom exhibition stands for World Aviation Festival 2026 that maximize visitor flow, support executive conversations, and create memorable brand experiences.",
    features: [
      "Custom 3D Booth Design",
      "Turnkey Build & Installation",
      "Meeting & Hospitality Zones",
      "AV & Interactive Displays",
    ],
    id: "booth-design",
    image: "/media/home/hero/home_hero_bg.avif",
    label: "SERVICE 01",
    number: "01",
    title: "Booth Design & Build",
  },
  {
    ctaText: "Design My Engagement Strategy",
    description:
      "Create memorable interactions that attract aviation executives and decision-makers. We design immersive experiences, live demonstrations, and engagement strategies.",
    features: [
      "Interactive Visitor Experiences",
      "Executive Roundtables",
      "Product Demonstrations",
      "Audience Engagement Strategy",
    ],
    id: "experience-creation",
    image: "/media/home/hero/home_hero_bg.avif",
    label: "SERVICE 02",
    number: "02",
    title: "Experience Creation",
  },
  {
    ctaText: "See How Our Lead Gen Works",
    description:
      "Generate qualified meetings and sales opportunities before, during, and after the event. Our aviation-focused lead generation teams identify, engage, and qualify prospects in real time.",
    features: [
      "Pre-Event Outreach Campaigns",
      "Meeting Scheduling",
      "Real-Time Lead Qualification",
      "Sales Qualified Lead Delivery",
    ],
    id: "lead-gen",
    image: "/media/home/hero/home_hero_bg.avif",
    label: "SERVICE 03",
    number: "03",
    title: "On-Ground Lead Generation",
  },
];

const MOTION_INITIAL = { opacity: 0, y: 60 };
const MOTION_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const MOTION_TRANSITION = { duration: 0.8 };
const MOTION_VIEWPORT = { amount: 0.15, once: true };

export const ServicesScroll = ({ description, heading, services }: ServicesScrollProps) => {
  const [activeId, setActiveId] = useState<string>(services[0]?.id || "");
  const [mobileActiveId, setMobileActiveId] = useState<string>(services[0]?.id || "");
  const cardRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const visibilityMap = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityMap.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        }

        let maxId = "";
        let maxRatio = 0;

        for (const [id, ratio] of Object.entries(visibilityMap.current)) {
          if (ratio <= maxRatio) {
            continue;
          }

          maxRatio = ratio;
          maxId = id;
        }

        if (maxId) {
          setActiveId(maxId);
        }
      },
      {
        // Adjust these margins to trigger activation when the card reaches the middle of the screen
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    for (const el of Object.values(cardRefs.current)) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    const el = document.querySelector(`#${CSS.escape(id)}`);
    if (el) {
      // scroll with offset for the sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ behavior: "smooth", top: y });
    }
  };

  return (
    <section className="relative overflow-hidden bg-brand-gray py-12 md:py-24">
      {/* Optional Heading & Description mimicking old Capabilities section */}
      {(heading || description) && (
        <div className="relative z-10 container mx-auto mb-12 max-w-screen-2xl px-4 md:mb-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {heading && (
              <SectionHeader as="h2" className="mb-6">
                {heading}
              </SectionHeader>
            )}
            {description && (
              <p className="type-body-l mx-auto max-w-2xl leading-relaxed text-brand-charcoal/70">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="relative container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-16 lg:gap-24">
          {/* Left Navigation - Hidden on Mobile, Sticky on Desktop */}
          <div className="hidden shrink-0 md:block md:w-[280px]">
            <div className="relative sticky top-32 flex flex-col gap-2 pl-4 before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:bg-gray-200">
              {services.map((service, idx) => {
                const isActive = activeId === service.id;
                return (
                  <button
                    className={cn(
                      "relative flex items-center gap-4 py-3 text-left transition-all duration-300",
                      isActive
                        ? "translate-x-2 font-bold text-brand-charcoal"
                        : "font-medium text-gray-400 hover:text-gray-600"
                    )}
                    key={service.id}
                    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                    onClick={() => handleNavClick(service.id)}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute left-[-1.05rem] size-2 rounded-full bg-orange-500"
                        layoutId="navIndicator"
                      />
                    )}
                    <span className={cn("text-sm", isActive ? "text-orange-500" : "text-gray-300")}>
                      {service.number || `0${idx + 1}`}
                    </span>
                    <span className="text-lg">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Cards Area */}
          <div className="flex w-full max-w-4xl flex-1 flex-col gap-4 md:gap-24">
            {services.map((service, idx) => {
              const isMobileActive = mobileActiveId === service.id;

              return (
                <motion.article
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-0 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-xl md:rounded-3xl md:p-12 lg:p-16"
                  )}
                  id={service.id}
                  initial={MOTION_INITIAL}
                  key={service.id}
                  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                  ref={(el) => {
                    cardRefs.current[service.id] = el;
                  }}
                  transition={MOTION_TRANSITION}
                  viewport={MOTION_VIEWPORT}
                  whileInView={MOTION_WHILE_IN_VIEW}
                >
                  {/* Background Large Number (Desktop Only) */}
                  <div className="pointer-events-none absolute top-4 right-4 hidden text-[8rem] leading-none font-black text-gray-50/80 select-none md:top-8 md:right-8 md:block md:text-[12rem]">
                    {service.number || `0${idx + 1}`}
                  </div>

                  {/* Header / Image Area (Clickable on Mobile) */}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                  <div
                    className="relative cursor-pointer md:cursor-auto"
                    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                    onClick={() => setMobileActiveId(service.id)}
                  >
                    <div
                      className={cn(
                        "relative w-full overflow-hidden bg-gray-100 transition-all duration-500 md:mb-10 md:aspect-[21/9] md:h-auto md:rounded-2xl",
                        isMobileActive
                          ? "h-[180px]"
                          : "h-[220px]"
                      )}
                    >
                      <Image
                        alt={service.title || service.label || "Service image"}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        src={service.image}
                      />
                      {/* Mobile Dark Overlay */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-black/40 transition-opacity duration-300 md:hidden",
                          isMobileActive ? "opacity-0" : "opacity-100"
                        )}
                      />
                    </div>

                    {/* Mobile Title Overlay */}
                    <div
                      className={cn(
                        "absolute inset-x-4 bottom-4 text-white transition-opacity duration-300 md:hidden",
                        isMobileActive ? "pointer-events-none opacity-0" : "opacity-100"
                      )}
                    >
                      <div className="mb-1 text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">
                        {service.number ? service.label : `SERVICE 0${idx + 1}`}
                      </div>
                      <h3 className="text-xl font-bold">{service.title || service.label}</h3>
                    </div>
                  </div>

                  {/* Body Content (Collapsible on mobile) */}
                  <div
                    className={cn(
                      "relative z-10 overflow-hidden transition-all duration-500 md:!max-h-none md:!p-0 md:!opacity-100",
                      isMobileActive
                        ? "max-h-[1000px] px-6 pt-4 pb-6 opacity-100"
                        : "max-h-0 px-6 py-0 opacity-0"
                    )}
                  >
                    <div className="hidden text-sm font-bold tracking-wider text-orange-500 uppercase md:mb-4 md:block">
                      {service.number ? service.label : `SERVICE 0${idx + 1}`}
                    </div>
                    <h3 className="hidden text-3xl font-bold text-brand-charcoal md:mb-8 md:block md:text-5xl">
                      {service.title || service.label}
                    </h3>

                    <div className="mb-4 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase md:hidden">
                      {service.number ? service.label : `SERVICE 0${idx + 1}`}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-brand-charcoal md:hidden">
                      {service.title || service.label}
                    </h3>

                    <p className="mb-6 text-base leading-relaxed text-brand-blue md:mb-8 md:text-lg">
                      {service.description}
                    </p>

                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:mb-10">
                      {service.features?.map((feature, idx) => (
                        <div className="flex items-start gap-3" key={idx}>
                          <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                          <span className="text-sm font-medium text-brand-blue/80 md:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {service.ctaText && (
                      <Button className="w-full md:w-auto" variant="primary">
                        {service.ctaText}
                      </Button>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
