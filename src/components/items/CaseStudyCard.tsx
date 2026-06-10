"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

const CARD_TRANSITION = { duration: 0.3, ease: "easeOut" as const };
const CARD_WHILE_HOVER = { y: -4 };

interface CaseStudyCardProps {
  colSpan: string;
  format: "gallery" | "text" | "video";
  iconName: string;
  image: string;
  metric: string;
  metricLabel: string;
  title: string;
}

export const CaseStudyCard = ({
  colSpan,
  format,
  iconName,
  image,
  metric,
  metricLabel,
  title,
}: CaseStudyCardProps) => {
  const sharedClassName = cn(
    "group relative h-[320px] w-full cursor-pointer overflow-hidden rounded-xl bg-brand-charcoal text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-white lg:h-[437px]",
    colSpan
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
        <div className="absolute inset-0 bg-brand-charcoal/30 transition-colors duration-300 group-hover:bg-brand-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent" />
      </div>

      <div className="absolute top-6 right-6 z-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/20">
        <div className="font-heading text-lg leading-none font-bold text-white">{metric}</div>
        <div className="mt-1 text-[8px] font-bold tracking-wider text-white/80 uppercase">
          {metricLabel}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white backdrop-blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:border-white/70 group-hover:bg-white/12 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Icon
            className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-white"
            name={iconName}
          />
        </div>

        <div className="mt-6 transform transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="max-w-xs font-sans text-lg leading-snug font-bold !text-white drop-shadow-md md:text-xl">
            {title}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.35em] text-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            VIEW SUCCESS STORY
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
