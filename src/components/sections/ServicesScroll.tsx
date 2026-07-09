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

const MOTION_INITIAL = { opacity: 0, y: 60 };
const MOTION_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const MOTION_TRANSITION = { duration: 0.8 };
const MOTION_VIEWPORT = { amount: 0.15, once: true };

export const ServicesScroll = ({ description, heading, services }: ServicesScrollProps) => {
  const [activeId, setActiveId] = useState<string>(services[0]?.id || "");
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
    <section className="relative bg-brand-gray py-12 md:py-24">
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
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-stretch md:gap-16 lg:gap-24">
          {/* Left Navigation - Hidden on Mobile, Sticky on Desktop */}
          <div className="hidden shrink-0 md:block md:w-[280px]">
            <div className="sticky top-32 flex flex-col gap-2 pl-4 before:absolute before:inset-y-2 before:left-0 before:w-[2px] before:bg-gray-200">
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
          <div className="flex w-full max-w-4xl flex-1 flex-col gap-4 md:gap-12">
            {services.map((service, idx) => {
              return (
                <motion.article
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-0 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-xl md:rounded-3xl md:p-8 lg:p-10"
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
                  <div className="pointer-events-none absolute top-4 right-4 hidden text-[6rem] leading-none font-black text-gray-50/80 select-none md:top-8 md:right-8 md:block md:text-[8rem]">
                    {service.number || `0${idx + 1}`}
                  </div>

                  {/* Card Content Layout */}
                  <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
                    {/* Left Column: Label, Title, Image */}
                    <div className="flex w-full flex-col md:w-1/2">
                      <div className="mb-4 text-sm font-bold tracking-wider text-orange-500 uppercase">
                        {service.number ? service.label : `SERVICE 0${idx + 1}`}
                      </div>

                      <h3 className="mb-6 text-3xl leading-tight font-bold text-slate-900 md:text-4xl">
                        {service.title || service.label}
                      </h3>

                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                          alt={service.title || service.label || "Service image"}
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          src={service.image}
                        />
                      </div>
                    </div>

                    {/* Right Column: Description, Features, CTA */}
                    <div className="relative z-10 flex w-full flex-col md:w-1/2">
                      <p className="mb-8 text-lg leading-relaxed text-slate-600">
                        {service.description}
                      </p>

                      {service.features && service.features.length > 0 && (
                        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                          {service.features.map((feature, fIdx) => (
                            <div className="flex items-center gap-3" key={fIdx}>
                              <Check className="size-5 shrink-0 text-orange-500" />
                              <span className="text-sm font-medium text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {service.ctaText && (
                        <div className="mt-auto">
                          <Button className="w-full md:w-auto" variant="primary">
                            {service.ctaText}
                          </Button>
                        </div>
                      )}
                    </div>
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
