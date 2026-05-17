"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

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
const CARD_STYLE_BASE = { transformOrigin: "center", transformStyle: "preserve-3d" as const };
const CARD_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

type TestimonialItem = TestimonialsContent["testimonials"][number];

const TestimonialCard = ({
  activeIndex: _activeIndex,
  index,
  isCenter,
  isVisible,
  setActiveIndex,
  testimonial,
}: {
  activeIndex: number;
  index: number;
  isCenter: boolean;
  isVisible: boolean;
  setActiveIndex: (i: number) => void;
  testimonial: TestimonialItem;
}) => {
  const pos = index - _activeIndex;
  const absPos = Math.abs(pos);
  const sideRotateY = pos > 0 ? -25 : 25;
  const rotateY = isCenter ? 0 : sideRotateY;
  const sideX = pos > 0 ? `${65 * absPos}%` : `-${65 * absPos}%`;
  const x = isCenter ? 0 : sideX;
  const z = isCenter ? 100 : -100 * absPos;
  const scale = isCenter ? 1 : 1 - 0.1 * absPos;
  const opacity = isCenter ? 1 : Math.max(0, 0.5 - 0.3 * (absPos - 1));
  const blur = isCenter ? 0 : 3 * absPos;
  const zIndex = 50 - absPos * 10;
  const cardAnimate = useMemo(
    () => ({ filter: `blur(${blur}px)`, opacity, rotateY, scale, x, z, zIndex }),
    [blur, opacity, rotateY, scale, x, z, zIndex]
  );
  const handleClick = useCallback(() => setActiveIndex(index), [index, setActiveIndex]);

  return (
    <motion.div
      animate={cardAnimate}
      className={`shadow-[0_12px_40px_rgba(0,0,0,0.08)](0,0,0,0.4)] absolute w-full max-w-[320px] cursor-pointer rounded-[20px] border border-gray-100 bg-white p-8 will-change-transform sm:max-w-[400px] sm:p-10 ${
        isVisible ? "" : "pointer-events-none"
      }`}
      initial={false}
      key={testimonial.id}
      onClick={handleClick}
      style={CARD_STYLE_BASE}
      transition={CARD_TRANSITION}
    >
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#1E6091]">
            <Image
              alt={testimonial.name}
              className="object-cover"
              fill
              sizes="56px"
              src={testimonial.image}
            />
          </div>
          <div>
            <p className="font-heading text-lg leading-tight font-bold text-gray-900">
              {testimonial.name}
            </p>
            <div className="mt-1 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star className="h-3.5 w-3.5 fill-[#1E6091] text-[#1E6091]" key={i} />
              ))}
            </div>
          </div>
        </div>

        <p className="relative z-10 text-[15px] leading-relaxed text-gray-600">
          &quot;{testimonial.quote}&quot;
        </p>

        <div className="border-t border-gray-100 pt-5">
          <p className="text-sm font-semibold text-[#1E6091]">{testimonial.designation}</p>
          <p className="text-xs font-medium text-gray-500">{testimonial.company}</p>
        </div>

        {!isCenter && (
          <div className="absolute inset-0 rounded-[20px] bg-white/5 transition-colors duration-300 hover:bg-transparent" />
        )}
      </div>
    </motion.div>
  );
};

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
      className={`h-2 rounded-full transition-all duration-500 ease-out ${
        activeIndex === idx ? "w-10 bg-[#1E6091]" : "w-2 bg-gray-300"
      }`}
      onClick={handleClick}
    />
  );
};

export const Testimonials = ({
  content = HOME_TESTIMONIALS_CONTENT,
  autoplayInterval = content.autoplayInterval,
  eyebrow = content.eyebrow,
  heading = content.heading,
  initialIndex = content.initialIndex,
  testimonials = content.testimonials,
}: TestimonialsProps = {}) => {
  const { activeIndex, getRelativePosition, handleNext, handlePrev, setActiveIndex } =
    useCoverflowCarousel(testimonials.length, initialIndex, autoplayInterval);

  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E6091]/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-12 flex flex-col items-start text-left">
          <Eyebrow variant="blue">{eyebrow}</Eyebrow>
          <Heading as="h2" className="mb-6 text-left">
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
            const isVisible = absPos <= 2;
            return (
              <TestimonialCard
                activeIndex={activeIndex}
                index={index}
                isCenter={isCenter}
                isVisible={isVisible}
                key={testimonial.id}
                setActiveIndex={setActiveIndex}
                testimonial={testimonial}
              />
            );
          })}
        </div>

        {/* Custom Pagination & Navigation */}
        <div className="relative z-50 mt-16 flex items-center justify-center gap-12">
          <button
            aria-label="Previous testimonial"
            className="hover:border-[#1E6091]:bg-[#4BC0D9]:text-[#1a1c1e] flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:bg-[#1E6091] hover:text-white"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <DotButton
                activeIndex={activeIndex}
                idx={idx}
                key={idx}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <button
            aria-label="Next testimonial"
            className="hover:border-[#1E6091]:bg-[#4BC0D9]:text-[#1a1c1e] flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:bg-[#1E6091] hover:text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

const useCoverflowCarousel = (total: number, initialIndex: number, autoplayInterval: number) => {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(initialIndex, Math.max(total - 1, 0))
  );

  // Auto-scroll functionality
  useEffect(() => {
    if (total <= 1 || autoplayInterval <= 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval, total]);

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
}
