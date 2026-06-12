"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { TestimonialCarouselCard } from "@/components/items/TestimonialCarouselCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_TESTIMONIALS_CONTENT, type TestimonialsContent } from "@/content/home";

export interface TestimonialsProps {
  autoplayInterval?: TestimonialsContent["autoplayInterval"];
  content?: TestimonialsContent;
  eyebrow?: TestimonialsContent["eyebrow"];
  heading?: TestimonialsContent["heading"];
  initialIndex?: TestimonialsContent["initialIndex"];
  testimonials?: TestimonialsContent["testimonials"];
}

const CAROUSEL_PERSPECTIVE_STYLE = { perspective: "1000px" };

export const Testimonials = ({
  content = HOME_TESTIMONIALS_CONTENT,
  autoplayInterval = content.autoplayInterval,
  eyebrow = content.eyebrow,
  heading = content.heading,
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

  const { getRelativePosition, handleNext, handlePrev, setActiveIndex } = useCoverflowCarousel(
    testimonials.length,
    initialIndex,
    autoplayInterval,
    isVisible
  );

  return (
    <section className="relative overflow-hidden bg-brand-gray py-12" ref={sectionRef}>
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E6091]/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          {eyebrow && <Eyebrow variant="blue">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="mb-3 text-center">
            {heading}
          </Heading>
        </div>

        {/* 3D Coverflow Container */}
        <div
          className="relative flex h-[460px] w-full items-center justify-center sm:h-[500px]"
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

        {/* Navigation Arrows */}
        <div className="relative z-50 mt-8 flex items-center justify-center gap-8">
          <button
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
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
