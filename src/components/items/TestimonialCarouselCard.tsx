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
  ["'", '"', "“", "”"].includes(char);

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
      className={`absolute w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] will-change-transform sm:max-w-[340px] ${
        isVisible ? "" : "pointer-events-none"
      }`}
      initial={false}
      key={testimonial.id}
      onClick={handleClick}
      style={CARD_STYLE_BASE}
      transition={CARD_TRANSITION}
    >
      {/* Portrait image — matches the aspect ratio of the testimonial photos */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          alt={testimonial.name}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 280px, 340px"
          src={testimonial.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Name + stars overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-heading text-sm font-bold leading-tight text-white">
            {testimonial.name}
          </p>
          <div className="mt-1 flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star className="h-3 w-3 fill-[#74DBF3] text-[#74DBF3]" key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Text content below image */}
      <div className="p-5">
        <p className="text-[13px] leading-relaxed text-gray-600">
          &quot;{stripOuterQuoteMarks(testimonial.quote)}&quot;
        </p>

        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-[#1E6091]">{testimonial.designation}</p>
              <p className="text-[11px] font-medium text-gray-500">{testimonial.company}</p>
            </div>
            {testimonial.serviceTag && (
              <span className="shrink-0 rounded-full bg-[#1E6091]/10 px-2 py-0.5 text-[9px] font-bold tracking-wide text-[#1E6091] uppercase">
                {testimonial.serviceTag}
              </span>
            )}
          </div>
        </div>
      </div>

      {!isCenter && (
        <div className="absolute inset-0 rounded-2xl bg-white/5 transition-colors duration-300 hover:bg-transparent" />
      )}
    </motion.div>
  );
};
