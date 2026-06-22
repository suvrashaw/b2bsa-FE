"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useCallback, useMemo } from "react";

import type { TestimonialsContent } from "@/content/home/content";

type TestimonialItem = TestimonialsContent["testimonials"][number];

const CARD_STYLE_BASE = { transformOrigin: "center", transformStyle: "preserve-3d" as const };
const CARD_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const isOuterQuoteMark = (char: string) => ["'", '"', "“", "”"].includes(char);

const stripOuterQuoteMarks = (quote: string) => {
  let start = 0;
  let end = quote.length;

  while (start < end && isOuterQuoteMark(quote[start] ?? "")) start++;
  while (end > start && isOuterQuoteMark(quote[end - 1] ?? "")) end--;

  return quote.slice(start, end);
};

interface TestimonialCardProps {
  index: number;
  isCenter: boolean;
  isVisible: boolean;
  position: number;
  setActiveIndex: (i: number) => void;
  testimonial: TestimonialItem;
}

export const TestimonialCard = ({
  index,
  isCenter,
  isVisible,
  position,
  setActiveIndex,
  testimonial,
}: TestimonialCardProps) => {
  const pos = position;
  const absPos = Math.abs(pos);
  const sideRotateY = pos > 0 ? -25 : 25;
  const rotateY = isCenter ? 0 : sideRotateY;
  const sideX = pos > 0 ? `${65 * absPos}%` : `-${65 * absPos}%`;
  const x = isCenter ? 0 : sideX;
  const z = isCenter ? 0 : -150 * absPos;
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
      className={`absolute w-full max-w-[340px] cursor-pointer rounded-b-[999px] bg-sky-50 pt-8 shadow-lg will-change-transform sm:max-w-[420px] ${
        isVisible ? "" : "pointer-events-none"
      }`}
      initial={false}
      key={testimonial.id}
      onClick={handleClick}
      style={CARD_STYLE_BASE}
      transition={CARD_TRANSITION}
    >
      {/* Quote icon — floats half above the card top edge */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${!isCenter ? "max-md:opacity-0" : ""}`}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue shadow-lg">
          <Quote className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className={`px-8 pt-3 pb-12 text-center transition-opacity duration-300 ${!isCenter ? "max-md:opacity-0" : ""}`}>
        <p className="type-body-m leading-relaxed text-gray-600">
          &ldquo;{stripOuterQuoteMarks(testimonial.quote)}&rdquo;
        </p>

        <div className="mt-5">
          <p className="font-heading text-sm font-bold text-brand-blue">{testimonial.author}</p>
        </div>

        <div className="mt-3 flex justify-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" key={i} />
          ))}
        </div>

        {testimonial.serviceTag && (
          <div className="mt-5 flex justify-center">
            <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-brand-blue uppercase">
              {testimonial.serviceTag}
            </span>
          </div>
        )}
      </div>

      {!isCenter && (
        <div className="absolute inset-0 rounded-b-[999px] bg-white/5 transition-colors duration-300 hover:bg-transparent" />
      )}
    </motion.div>
  );
};
