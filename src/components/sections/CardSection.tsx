"use client";

import type { ReactNode } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useEffect, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

type ColsValue = 2 | 3 | 4;

const FLEX_WIDTHS: Record<ColsValue, string> = {
  2: "w-full sm:w-[calc(50%-12px)]",
  3: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  4: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]",
};

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
  gridClassName?: string;
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
  gap,
  gridClassName,
  heading,
  headingAction,
  headingAlign = "center",
  id,
  layout = "grid",
}: CardSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const resolvedGap = gap ?? (layout === "carousel" ? "gap-5" : "gap-6");

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
    if (layout !== "carousel" || !autoplayInterval || isPaused) return;
    const timer = setInterval(handleScrollNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplayInterval, handleScrollNext, isPaused, layout]);

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

  const flexWidthClass = FLEX_WIDTHS[cols];
  const carouselWidthClass = CAROUSEL_WIDTHS[cols];

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {heading && (
          <div
            className={cn(
              "mb-12 md:mb-14",
              headingAlign === "left"
                ? "flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                : "text-center"
            )}
          >
            {typeof heading === "string" ? (
              <Heading as="h2" className={headingAlign === "center" ? "text-center" : ""}>
                {heading}
              </Heading>
            ) : (
              heading
            )}
            {headingAction && (
              <div className={headingAlign === "center" ? "mt-6" : ""}>{headingAction}</div>
            )}
          </div>
        )}

        {description && (
          <p
            className={cn(
              "-mt-6 mb-12 max-w-2xl text-sm text-brand-charcoal/70 md:text-base",
              headingAlign === "center" ? "mx-auto text-center" : ""
            )}
          >
            {description}
          </p>
        )}

        {layout === "grid" ? (
          <div className={cn("flex flex-wrap justify-center", resolvedGap, gridClassName)}>
            {Children.map(children, (child, i) => (
              <div className={flexWidthClass} key={i}>
                {child}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div
              className={cn(
                "flex snap-x snap-mandatory overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden",
                resolvedGap
              )}
              onMouseEnter={autoplayInterval ? handleMouseEnter : undefined}
              onMouseLeave={autoplayInterval ? handleMouseLeave : undefined}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              ref={scrollRef}
            >
              {Children.map(children, (child, i) => (
                <div
                  className={cn("shrink-0 snap-start", carouselWidthClass)}
                  data-card-scroll
                  key={i}
                >
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
          </>
        )}

        {cta && <div className="mt-10 flex justify-center">{cta}</div>}
      </div>
    </section>
  );
};
