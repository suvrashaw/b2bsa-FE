"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export interface ServiceCarouselItem {
  description: string;
  href: string;
  id: string;
  image: string;
  title: string;
}

export interface ServiceCarouselSectionProps {
  eyebrow?: string;
  heading?: string;
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

  const handlePrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const handleNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

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
            {heading ? <Heading as="h2">{heading}</Heading> : null}
          </div>
        ) : null}

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Prev button */}
          <button
            aria-label="Previous services"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-md transition hover:bg-brand-blue hover:text-white disabled:pointer-events-none disabled:opacity-30 lg:flex"
            disabled={activeIndex === 0}
            onClick={handlePrev}
            type="button"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            aria-label="Next services"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-md transition hover:bg-brand-blue hover:text-white disabled:pointer-events-none disabled:opacity-30 lg:flex"
            disabled={activeIndex >= maxIndex}
            onClick={handleNext}
            type="button"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

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
                <div
                  className="relative h-72 shrink-0 overflow-hidden rounded-2xl md:h-80"
                  key={item.id}
                  style={cardStyle}
                >
                  <Image
                    alt={item.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <p className="font-heading text-xl font-bold text-white">{item.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-gray-300">
                      {item.description}
                    </p>
                    <Link
                      className="mt-3 inline-block text-sm font-semibold text-brand-cyan transition hover:opacity-75"
                      href={item.href}
                    >
                      View Service →
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                aria-label={`Go to slide group ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-brand-blue" : "bg-gray-300 hover:bg-gray-400"
                }`}
                data-index={i}
                key={i}
                onClick={handleDotClick}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
