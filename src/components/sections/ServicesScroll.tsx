"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib";

export interface ServicesScrollProps {
  services: ServiceData[];
}

interface ServiceData {
  ctaText: string;
  description: string;
  features: string[];
  id: string;
  image: string;
  label: string; // e.g. "SERVICE 01"
  number: string; // e.g. "01"
  title: string;
}

export const ServicesScroll = ({ services }: ServicesScrollProps) => {
  const [activeId, setActiveId] = useState<string>(services[0]?.id || "");
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
    <section className="bg-brand-gray/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-16 lg:gap-24">
          {/* Left Navigation - Hidden on Mobile, Sticky on Desktop */}
          <div className="hidden shrink-0 md:block md:w-[280px]">
            <div className="sticky top-32 flex flex-col gap-6">
              {services.map((service) => {
                const isActive = activeId === service.id;
                return (
                  <button
                    className={cn(
                      "flex items-center gap-4 text-left transition-all duration-300",
                      isActive
                        ? "translate-x-2 font-bold text-brand-charcoal"
                        : "font-medium text-gray-400 hover:text-gray-600"
                    )}
                    key={service.id}
                    // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                    onClick={() => handleNavClick(service.id)}
                  >
                    <span className={cn("text-sm", isActive ? "text-orange-500" : "text-gray-300")}>
                      {service.number}
                    </span>
                    <span className="text-lg">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Cards Area */}
          <div className="flex w-full max-w-4xl flex-1 flex-col gap-12 md:gap-24">
            {services.map((service) => (
              <div
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-xl md:p-12 lg:p-16"
                id={service.id}
                key={service.id}
                // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                ref={(el) => {
                  cardRefs.current[service.id] = el;
                }}
              >
                {/* Background Large Number */}
                <div className="pointer-events-none absolute top-4 right-4 text-[8rem] leading-none font-black text-gray-50/80 select-none md:top-8 md:right-8 md:text-[12rem]">
                  {service.number}
                </div>

                <div className="relative z-10">
                  <div className="mb-4 text-sm font-bold tracking-wider text-orange-500 uppercase">
                    {service.label}
                  </div>
                  <h3 className="mb-8 text-3xl font-bold text-brand-charcoal md:text-5xl">
                    {service.title}
                  </h3>

                  {/* Image */}
                  <div className="relative mb-10 aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[21/9]">
                    <Image
                      alt={service.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                      src={service.image}
                    />
                  </div>

                  {/* Description */}
                  <p className="mb-8 text-base leading-relaxed text-brand-blue md:text-lg">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    {service.features.map((feature, idx) => (
                      <div className="flex items-start gap-3" key={idx}>
                        <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                        <span className="text-sm font-medium text-brand-blue/80 md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button variant="primary">{service.ctaText}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
