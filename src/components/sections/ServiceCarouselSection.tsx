"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  ServiceCarouselCard,
  type ServiceCarouselItem,
} from "@/components/items/ServiceCarouselCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export interface ServiceCarouselSectionProps {
  eyebrow?: string;
  heading?: string;
  headingHighlight?: string;
  items: ServiceCarouselItem[];
}

const GAP = 24;
const TRACK_STYLE = { gap: GAP };
const TRANSITION = { damping: 30, stiffness: 300, type: "spring" } as const;

const getSlidesPerView = (): number => {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export const ServiceCarouselSection = ({
  eyebrow,
  heading,
  headingHighlight,
  items,
}: ServiceCarouselSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const maxIndex = Math.max(0, items.length - slidesPerView);

  const goTo = useCallback(
    (index: number) => setActiveIndex(Math.max(0, Math.min(index, maxIndex))),
    [maxIndex]
  );

  const updateLayout = useCallback(() => {
    const spv = getSlidesPerView();
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    setSlidesPerView(spv);
    setSlideWidth((containerWidth - GAP * (spv - 1)) / spv);
    setActiveIndex((prev) => Math.min(prev, Math.max(0, items.length - spv)));
  }, [items.length]);

  useEffect(() => {
    const id = requestAnimationFrame(() => updateLayout());
    window.addEventListener("resize", updateLayout);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout]);

  useEffect(() => {
    if (isPaused || items.length <= slidesPerView) return;
    const id = setInterval(() => setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4000);
    return () => clearInterval(id);
  }, [isPaused, items.length, maxIndex, slidesPerView]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX;
  }, []);

  const handleDotClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      goTo(Number(e.currentTarget.dataset.index));
    },
    [goTo]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const diff = e.clientX - pointerStartX.current;
      if (diff < -50) goTo(activeIndex + 1);
      else if (diff > 50) goTo(activeIndex - 1);
    },
    [activeIndex, goTo]
  );

  const trackX = slideWidth > 0 ? -(activeIndex * (slideWidth + GAP)) : 0;
  const trackAnimate = useMemo(() => ({ x: trackX }), [trackX]);

  const cardWidth =
    slideWidth > 0
      ? slideWidth
      : `calc((100% - ${GAP * (slidesPerView - 1)}px) / ${slidesPerView})`;
  const cardStyle = useMemo<React.CSSProperties>(() => ({ width: cardWidth }), [cardWidth]);

  return (
    <section className="bg-brand-gray py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {(eyebrow ?? heading) ? (
          <div className="mb-12 text-center">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {heading ? (
              <Heading as="h2" highlight={headingHighlight}>
                {heading}
              </Heading>
            ) : null}
          </div>
        ) : null}

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Carousel track */}
          <div
            className="overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            ref={containerRef}
          >
            <motion.div
              animate={trackAnimate}
              className="flex"
              style={TRACK_STYLE}
              transition={TRANSITION}
            >
              {items.map((item) => (
                <ServiceCarouselCard item={item} key={item.id} style={cardStyle} />
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                aria-label={`Go to slide group ${i + 1}`}
                className="group flex h-12 min-w-[32px] items-center justify-center p-1 focus:outline-none"
                data-index={i}
                key={i}
                onClick={handleDotClick}
                type="button"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === activeIndex ? "w-6 bg-brand-blue" : "w-2 bg-gray-300 group-hover:bg-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
