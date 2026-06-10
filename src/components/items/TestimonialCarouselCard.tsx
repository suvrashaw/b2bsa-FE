"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo } from "react";

import type { TestimonialsContent } from "@/content/home";

type TestimonialItem = TestimonialsContent["testimonials"][number];

const CARD_STYLE_BASE = { transformOrigin: "center", transformStyle: "preserve-3d" as const };
const CARD_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const isOuterQuoteMark = (char: string) =>
  char === '"' || char === "'" || char === "\u201C" || char === "\u201D";

const stripOuterQuoteMarks = (quote: string) => {
  let start = 0;
  let end = quote.length;

  while (start < end && isOuterQuoteMark(quote[start] ?? "")) start++;
  while (end > start && isOuterQuoteMark(quote[end - 1] ?? "")) end--;

  return quote.slice(start, end);
};

interface TestimonialCarouselCardProps {
  index: number;
  isCenter: boolean;
  isVisible: boolean;
  position: number;
  setActiveIndex: (i: number) => void;
  testimonial: TestimonialItem;
}

export const TestimonialCarouselCard = ({
  index,
  isCenter,
  isVisible,
  position,
  setActiveIndex,
  testimonial,
}: TestimonialCarouselCardProps) => {
  const pos = position;
  const absPos = Math.abs(pos);
  const sideRotateY = pos > 0 ? -25 : 25;
  const rotateY = isCenter ? 0 : sideRotateY;
  const sideX = pos > 0 ? `${65 * absPos}%` : `-${65 * absPos}%`;
  const x = isCenter ? 0 : sideX;
  const z = isCenter ? 100 : -100 * absPos;
  const scale = isCenter ? 1 : 1 - 0.1 * absPos;
  let opacity = 0;
  if (isCenter) {
    opacity = 1;
  } else if (absPos === 1) {
    opacity = 0.5;
  }
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
      className={`shadow-[0_12px_40px_rgba(0,0,0,0.08)](0,0,0,0.4)] absolute w-full max-w-[320px] cursor-pointer rounded-3xl border border-gray-100 bg-white p-8 will-change-transform sm:max-w-[400px] sm:p-10 ${
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
            <p className="font-heading text-base leading-tight font-bold text-gray-900">
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
          &quot;{stripOuterQuoteMarks(testimonial.quote)}&quot;
        </p>

        <div className="border-t border-gray-100 pt-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-[#1E6091]">{testimonial.designation}</p>
              <p className="text-xs font-medium text-gray-500">{testimonial.company}</p>
            </div>
            {testimonial.serviceTag && (
              <span className="shrink-0 rounded-full bg-[#1E6091]/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#1E6091] uppercase">
                {testimonial.serviceTag}
              </span>
            )}
          </div>
        </div>

        {!isCenter && (
          <div className="absolute inset-0 rounded-3xl bg-white/5 transition-colors duration-300 hover:bg-transparent" />
        )}
      </div>
    </motion.div>
  );
};
