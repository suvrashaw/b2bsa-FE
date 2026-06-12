"use client";

import type { ReactNode } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useRef } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface CardSectionProps {
  children: ReactNode;
  className?: string;
  cols?: 2 | 3 | 4;
  description?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
  id?: string;
  layout?: "carousel" | "grid";
  showArrows?: boolean;
}

export const CardSection = ({
  children,
  className,
  cols = 3,
  description,
  heading,
  headingAction,
  headingAlign = "center",
  id,
  layout = "grid",
  showArrows = true,
}: CardSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollPrev = useCallback(() => {
    const card = scrollRef.current?.querySelector<HTMLElement>("[data-card-scroll]");
    scrollRef.current?.scrollBy({
      behavior: "smooth",
      left: -1 * ((card?.offsetWidth ?? 300) + 20),
    });
  }, []);

  const handleScrollNext = useCallback(() => {
    const card = scrollRef.current?.querySelector<HTMLElement>("[data-card-scroll]");
    scrollRef.current?.scrollBy({
      behavior: "smooth",
      left: 1 * ((card?.offsetWidth ?? 300) + 20),
    });
  }, []);

  let gridColsClass = "sm:grid-cols-2 lg:grid-cols-3";
  if (cols === 2) gridColsClass = "sm:grid-cols-2";
  else if (cols === 4) gridColsClass = "sm:grid-cols-2 lg:grid-cols-4";

  let carouselWidthClass = "w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(33.33%-14px)]";
  if (cols === 2) carouselWidthClass = "w-[85%] sm:w-[72%] md:w-[calc(50%-10px)]";
  else if (cols === 4) carouselWidthClass = "w-[85%] sm:w-[72%] md:w-[46%] lg:w-[calc(25%-15px)]";

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {/* Heading Block */}
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

        {description && headingAlign === "center" && (
          <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-sm text-brand-charcoal/70 md:text-base">
            {description}
          </p>
        )}
        {description && headingAlign === "left" && (
          <p className="-mt-6 mb-12 max-w-2xl text-sm text-brand-charcoal/70 md:text-base">
            {description}
          </p>
        )}

        {layout === "grid" ? (
          <div className={cn("grid gap-6", gridColsClass)}>{children}</div>
        ) : (
          <>
            <div
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
              ref={scrollRef}
            >
              {Children.map(children, (child, i) => (
                <div
                  className={cn("snap-start shrink-0", carouselWidthClass)}
                  data-card-scroll
                  key={i}
                >
                  {child}
                </div>
              ))}
            </div>

            {showArrows && (
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
            )}
          </>
        )}
      </div>
    </section>
  );
};
