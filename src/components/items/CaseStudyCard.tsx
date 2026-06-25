"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib";

const CARD_TRANSITION = { duration: 0.3, ease: "easeOut" as const };
const CARD_WHILE_HOVER = { y: -4 };

interface CaseStudyCardProps {
  colSpan: string;
  ctaLabel?: string;
  description: string;
  format?: "gallery" | "text" | "video";
  image: string;
  metric: string;
  metricLabel: string;
  revealed?: boolean;
  title: string;
}

export const CaseStudyCard = ({
  colSpan,
  ctaLabel = "View Case Study",
  description,
  format: _format,
  image,
  metric,
  metricLabel,
  revealed = false,
  title,
}: CaseStudyCardProps) => {
  const sharedClassName = cn(
    "group relative h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl bg-brand-charcoal text-left focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none md:rounded-xl lg:h-[437px]",
    colSpan,
  );

  const inner = (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          alt={title}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent" />
      </div>

      {/* Blue overlay — hidden by default, blooms on hover */}
      <div className="absolute inset-0 z-[1] bg-brand-blue/0 transition-colors duration-500 group-hover:bg-brand-blue/80" />

      {/* Metric badge */}
      <div
        className={cn(
          "absolute top-6 right-6 z-10 translate-y-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:border-white/20 group-hover:bg-white/20 group-hover:opacity-100",
          revealed && "translate-y-0 opacity-100",
        )}
      >
        <div className="font-heading text-lg leading-none font-bold text-white">
          {metric}
        </div>
        <div className="mt-1 text-[8px] font-bold tracking-wider text-white/80 uppercase">
          {metricLabel}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
        <div
          className={cn(
            "w-full translate-y-3 transform text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
            revealed && "translate-y-0 opacity-100",
          )}
        >
          <h3 className="mx-auto max-w-xs text-center font-sans text-base leading-snug font-bold !text-white drop-shadow-md md:text-xl">
            {title}
          </h3>
          <p
            className={cn(
              "mx-auto mt-4 line-clamp-2 max-w-md text-xs leading-relaxed text-white/85 opacity-0 transition-opacity delay-75 duration-500 group-hover:opacity-100",
              revealed && "opacity-100",
            )}
          >
            {description}
          </p>
          <span
            className={cn(
              "mt-4 inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.35em] text-white/95 uppercase opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100",
              revealed && "opacity-100",
            )}
          >
            {ctaLabel}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      className={sharedClassName}
      transition={CARD_TRANSITION}
      whileHover={CARD_WHILE_HOVER}
    >
      {inner}
    </motion.div>
  );
};
