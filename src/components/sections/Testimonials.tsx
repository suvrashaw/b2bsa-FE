"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { TestimonialCarouselCard } from "@/components/items/TestimonialCarouselCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_TESTIMONIALS_CONTENT, type TestimonialsContent } from "@/content/home";
import { cn } from "@/lib";

export interface TestimonialsProps {
  autoplayInterval?: TestimonialsContent["autoplayInterval"];
  content?: TestimonialsContent;
  eyebrow?: TestimonialsContent["eyebrow"];
  heading?: TestimonialsContent["heading"];
  headingHighlight?: string;
  initialIndex?: TestimonialsContent["initialIndex"];
  testimonials?: TestimonialsContent["testimonials"];
}

const CAROUSEL_PERSPECTIVE_STYLE = { perspective: "1000px" };

const DotButton = ({
  activeIndex,
  idx,
  setActiveIndex,
}: {
  activeIndex: number;
  idx: number;
  setActiveIndex: (i: number) => void;
}) => {
  const handleClick = useCallback(() => setActiveIndex(idx), [idx, setActiveIndex]);
  return (
    <button
      aria-label={`Go to slide ${idx + 1}`}
      className="group flex h-12 min-w-[32px] items-center justify-center p-1 focus:outline-none"
      onClick={handleClick}
      type="button"
    >
      <span
        className={cn(
          "block h-2 rounded-full transition-all duration-500 ease-out group-focus-visible:ring-2 group-focus-visible:ring-brand-blue group-focus-visible:ring-offset-2",
          activeIndex === idx ? "w-10 bg-brand-blue" : "w-2 bg-gray-300 group-hover:bg-gray-400"
        )}
      />
    </button>
  );
};

export const Testimonials = ({
  content = HOME_TESTIMONIALS_CONTENT,
  autoplayInterval = content.autoplayInterval,
  eyebrow = content.eyebrow,
  heading = content.heading,
  headingHighlight = content.headingHighlight,
  initialIndex = content.initialIndex,
  testimonials = content.testimonials,
}: TestimonialsProps = {}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { activeIndex, getRelativePosition, setActiveIndex } = useCoverflowCarousel(
    testimonials.length,
    initialIndex,
    autoplayInterval,
    isVisible
  );

  return (
    <section className="relative overflow-hidden bg-brand-gray py-20" ref={sectionRef}>
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E6091]/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          {eyebrow && <Eyebrow variant="blue">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="mb-6 text-center" highlight={headingHighlight}>
            {heading}
          </Heading>
        </div>

        {/* 3D Coverflow Container */}
        <div
          className="relative flex h-[450px] w-full items-center justify-center sm:h-[400px]"
          style={CAROUSEL_PERSPECTIVE_STYLE}
        >
          {testimonials.map((testimonial, index) => {
            const pos = getRelativePosition(index);
            const isCenter = pos === 0;
            const absPos = Math.abs(pos);
            const isVisible = absPos <= 1;
            return (
              <TestimonialCarouselCard
                index={index}
                isCenter={isCenter}
                isVisible={isVisible}
                key={testimonial.id}
                position={pos}
                setActiveIndex={setActiveIndex}
                testimonial={testimonial}
              />
            );
          })}
        </div>

        {/* Custom Pagination */}
        <div className="relative z-50 mt-16 flex items-center justify-center">
          <div className="flex">
            {testimonials.map((_, idx) => (
              <DotButton
                activeIndex={activeIndex}
                idx={idx}
                key={idx}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const useCoverflowCarousel = (
  total: number,
  initialIndex: number,
  autoplayInterval: number,
  isVisible: boolean
) => {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(initialIndex, Math.max(total - 1, 0))
  );

  // Auto-scroll functionality
  useEffect(() => {
    if (total <= 1 || autoplayInterval <= 0 || !isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval, isVisible, total]);

  const handleNext = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const resolvedActiveIndex = Math.min(activeIndex, Math.max(total - 1, 0));

  // Helper to determine position in a circular array
  const getRelativePosition = (index: number) => {
    const diff = index - resolvedActiveIndex;
    // Normalize difference to handle wrapping (-2, -1, 0, 1, 2)
    let normalizedDiff = diff % total;
    if (normalizedDiff > Math.floor(total / 2)) normalizedDiff -= total;
    if (normalizedDiff < -Math.floor(total / 2)) normalizedDiff += total;
    return normalizedDiff;
  };

  return {
    activeIndex: resolvedActiveIndex,
    getRelativePosition,
    handleNext,
    handlePrev,
    setActiveIndex,
  };
};
