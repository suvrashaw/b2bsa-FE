"use client";

import type { ReactNode } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useEffect, useRef, useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

type ColsValue = 2 | 3 | 4;

const CAROUSEL_WIDTHS: Record<ColsValue, string> = {
  2: "w-[85%] sm:w-[72%] md:w-[calc(50%-10px)]",
  3: "w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(33.33%-14px)]",
  4: "w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(25%-15px)]",
};

// ─── Copies rendered to enable seamless infinite looping ─────────────────────
// Layout: [copy-0] [copy-1 ← start here] [copy-2]
// When scroll drifts into copy-0 or copy-2, teleport instantly back into copy-1.
const COPY_COUNT = 3;
const MIDDLE_COPY = 1;

export interface CarouselProps {
  autoplayInterval?: number;
  children: ReactNode;
  className?: string;
  cols?: ColsValue;
  cta?: ReactNode;
  description?: string;
  gap?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
  id?: string;
  layout?: "carousel" | "grid";
}

export const Carousel = ({
  autoplayInterval,
  children,
  className,
  cols = 3,
  cta,
  description,
  gap = "gap-5",
  heading,
  headingAction,
  headingAlign = "center",
  id,
}: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const childArray = Children.toArray(children);
  const carouselWidthClass = CAROUSEL_WIDTHS[cols];

  // ── Initialise scroll at the start of the middle copy ──────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || childArray.length === 0) return;
    requestAnimationFrame(() => {
      const singleWidth = el.scrollWidth / COPY_COUNT;
      el.scrollTo({ behavior: "instant", left: singleWidth * MIDDLE_COPY });
    });
    // Only run once on mount — childArray.length won't change after mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Teleport back into the middle copy when scrolling hits a boundary ──────
  // Uses a debounce so the teleport only fires after the smooth-scroll animation
  // has settled — the instant jump is then invisible to the user.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;

    const recentre = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const singleWidth = el.scrollWidth / COPY_COUNT;
        if (el.scrollLeft < singleWidth) {
          // Drifted into copy-0 → jump forward by one copy width
          el.scrollTo({ behavior: "instant", left: el.scrollLeft + singleWidth });
        } else if (el.scrollLeft >= singleWidth * 2) {
          // Drifted into copy-2 → jump back by one copy width
          el.scrollTo({ behavior: "instant", left: el.scrollLeft - singleWidth });
        }
      }, 50);
    };

    el.addEventListener("scroll", recentre, { passive: true });
    return () => {
      el.removeEventListener("scroll", recentre);
      clearTimeout(timer);
    };
  }, []);

  // ── Navigation ─────────────────────────────────────────────────────────────
  const scrollByCard = useCallback((direction: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card-scroll]");
    el.scrollBy({ behavior: "smooth", left: direction * ((card?.offsetWidth ?? 300) + 20) });
  }, []);

  const handleScrollPrev = useCallback(() => scrollByCard(-1), [scrollByCard]);
  const handleScrollNext = useCallback(() => scrollByCard(1), [scrollByCard]);

  // ── Autoplay ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!autoplayInterval || isPaused) return;
    const timer = setInterval(handleScrollNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplayInterval, handleScrollNext, isPaused]);

  // ── Pointer / drag ─────────────────────────────────────────────────────────
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX;
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const diff = e.clientX - pointerStartX.current;
      if (diff < -50) handleScrollNext();
      else if (diff > 50) handleScrollPrev();
    },
    [handleScrollNext, handleScrollPrev]
  );

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <SectionHeader description={description} heading={heading} headingAlign={headingAlign} />

        <div
          className={cn(
            "flex snap-x snap-mandatory overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden",
            gap
          )}
          onMouseEnter={autoplayInterval ? handleMouseEnter : undefined}
          onMouseLeave={autoplayInterval ? handleMouseLeave : undefined}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          ref={scrollRef}
        >
          {/* Three copies: [copy-0] [copy-1 (start)] [copy-2] */}
          {Array.from({ length: COPY_COUNT }, (_, copyIndex) =>
            childArray.map((child, i) => (
              <div
                className={cn("shrink-0 snap-start", carouselWidthClass)}
                data-card-scroll
                key={`copy-${copyIndex}-${i}`}
              >
                {child}
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            aria-label="Previous"
            className="flex h-12 min-h-[44px] w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={handleScrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next"
            className="flex h-12 min-h-[44px] w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={handleScrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {(cta ?? headingAction) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {headingAction}
            {cta}
          </div>
        )}
      </div>
    </section>
  );
};
