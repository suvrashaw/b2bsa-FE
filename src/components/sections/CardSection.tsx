"use client";

import type { ReactNode } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib";

import { SectionHeader } from "./SectionHeader";

type ColsValue = 2 | 3 | 4;

const CAROUSEL_WIDTHS: Record<ColsValue, string> = {
  2: "w-[85%] sm:w-[72%] md:w-[calc(50%-10px)]",
  3: "w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(33.33%-14px)]",
  4: "w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(25%-15px)]",
};

export interface CardSectionProps {
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

export const CardSection = ({
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
}: CardSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleScrollPrev = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card-scroll]");
    el.scrollBy({ behavior: "smooth", left: -1 * ((card?.offsetWidth ?? 300) + 20) });
  }, []);

  const handleScrollNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
    if (atEnd) {
      el.scrollTo({ behavior: "smooth", left: 0 });
    } else {
      const card = el.querySelector<HTMLElement>("[data-card-scroll]");
      el.scrollBy({ behavior: "smooth", left: (card?.offsetWidth ?? 300) + 20 });
    }
  }, []);

  useEffect(() => {
    if (!autoplayInterval || isPaused) return;
    const timer = setInterval(handleScrollNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplayInterval, handleScrollNext, isPaused]);

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

  const carouselWidthClass = CAROUSEL_WIDTHS[cols];

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <SectionHeader
          description={description}
          heading={heading}
          headingAction={headingAction}
          headingAlign={headingAlign}
        />

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
          {Children.map(children, (child, i) => (
            <div className={cn("shrink-0 snap-start", carouselWidthClass)} data-card-scroll key={i}>
              {child}
            </div>
          ))}
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

        {cta && <div className="mt-10 flex justify-center">{cta}</div>}
      </div>
    </section>
  );
};
