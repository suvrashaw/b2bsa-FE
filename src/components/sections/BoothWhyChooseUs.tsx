"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { BoothWhyCard, type BoothWhyChooseUsItem } from "@/components/items/BoothWhyCard";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export interface BoothWhyChooseUsProps {
  heading: string;
  items: BoothWhyChooseUsItem[];
  layout?: "carousel" | "grid";
  showCta?: boolean;
  showUnderline?: boolean;
}

const GAP = 24;
const TRACK_STYLE = { gap: GAP };
const TRANSITION = { damping: 30, stiffness: 300, type: "spring" } as const;

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, transition: { duration: 0.55 }, y: 0 },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { delay: 0.35, duration: 0.45 }, y: 0 },
};

const viewport = { once: true } as const;

const getSlidesPerView = (): number => {
  if (globalThis.window === undefined) return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export const BoothWhyChooseUs = ({
  heading,
  items,
  layout = "grid",
  showCta = false,
  showUnderline = false,
}: BoothWhyChooseUsProps) => {
  // Carousel state
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
    if (layout !== "carousel") return;
    const spv = getSlidesPerView();
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    setSlidesPerView(spv);
    setSlideWidth((containerWidth - GAP * (spv - 1)) / spv);
    setActiveIndex((prev) => Math.min(prev, Math.max(0, items.length - spv)));
  }, [items.length, layout]);

  useEffect(() => {
    if (layout !== "carousel") return;
    const id = requestAnimationFrame(() => updateLayout());
    window.addEventListener("resize", updateLayout);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout, layout]);

  useEffect(() => {
    if (layout !== "carousel" || isPaused || items.length <= slidesPerView) return;
    const id = setInterval(() => setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4000);
    return () => clearInterval(id);
  }, [isPaused, items.length, maxIndex, slidesPerView, layout]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX;
  }, []);

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
  const carouselCardStyle = useMemo<React.CSSProperties>(() => ({ width: cardWidth }), [cardWidth]);

  const handlePrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const handleNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  return (
    <section className="overflow-hidden bg-brand-gray py-20" id="why-choose-us">
      <div className="container mx-auto px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          variants={headingVariants}
          viewport={viewport}
          whileInView="visible"
        >
          <Heading as="h2" className="inline">
            {heading}
          </Heading>
          {showUnderline && (
            <div className="mt-8 flex justify-center">
              <svg
                fill="none"
                height="22"
                viewBox="0 0 140 22"
                width="140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16.5C35.8 4.1 75.1 1.7 134 15.6"
                  stroke="#4BC0D9"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
              </svg>
            </div>
          )}
        </motion.div>

        {layout === "grid" ? (
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {items.map((item, index) => (
              <BoothWhyCard
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                index={index}
                item={item}
                key={item.title}
              />
            ))}
          </div>
        ) : (
          <div
            className="relative mt-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="overflow-visible"
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
                {items.map((item, index) => (
                  <BoothWhyCard
                    className="shrink-0"
                    index={index}
                    item={item}
                    key={item.title}
                    style={carouselCardStyle}
                  />
                ))}
              </motion.div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              <button
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}

        {showCta && (
          <motion.div
            className="mt-12 flex justify-center"
            initial="hidden"
            variants={ctaVariants}
            viewport={viewport}
            whileInView="visible"
          >
            <Button asChild variant="secondary">
              <a href="#contact">Browse All Our Projects</a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
