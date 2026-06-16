"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface ServicesImageCardProps {
  index: number;
  service: string;
}

const FALLBACK_IMAGES = [
  "/images/events/event_other_1.avif",
  "/images/events/event_other_2.avif",
  "/images/events/event_other_3.avif",
  "/images/events/event_other_4.avif",
  "/images/case-studies/cs-new-3.avif",
  "/images/case-studies/cs-new-10.avif",
];

const CARD_INITIAL = { opacity: 0, y: 16 };
const CARD_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const CARD_VIEWPORT = { once: true };

const getServiceImage = (serviceName: string, index: number): string => {
  const n = serviceName.toLowerCase();
  if (n.includes("booth") || n.includes("exhibit") || n.includes("stand")) {
    return "/images/services/booth/booth-5.avif";
  }
  if (n.includes("prospect") || n.includes("sql") || n.includes("lead") || n.includes("floor")) {
    return "/images/services/sql-generation-1.avif";
  }
  if (n.includes("database") || n.includes("data augment") || n.includes("data valid")) {
    return "/images/services/database-research-1.avif";
  }
  if (n.includes("media") || n.includes("video") || n.includes("stream") || n.includes("av")) {
    return "/images/services/media-production-1.avif";
  }
  if (
    n.includes("market") ||
    n.includes("digital") ||
    n.includes("performance") ||
    n.includes("social")
  ) {
    return "/images/services/performance-marketing-1.avif";
  }
  if (n.includes("research") || n.includes("intelligence") || n.includes("validation")) {
    return "/images/services/market-intelligence.avif";
  }
  return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length] ?? FALLBACK_IMAGES[0]!;
};

export const ServicesImageCard = ({ index, service }: ServicesImageCardProps) => {
  const transition = useMemo(() => ({ delay: index * 0.08, duration: 0.5 }), [index]);
  const image = useMemo(() => getServiceImage(service, index), [service, index]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="group h-44 w-full overflow-hidden rounded-xl"
      initial={CARD_INITIAL}
      transition={transition}
      viewport={CARD_VIEWPORT}
      whileInView={CARD_WHILE_IN_VIEW}
    >
      <Link className="flex h-full w-full" href="/services">
        {/* Left: brand-blue text panel */}
        <div className="flex flex-col w-[60%] shrink-0 justify-between bg-brand-blue px-6 py-5 transition-colors duration-300 group-hover:bg-[#155a8a]">
          <span className="font-heading text-xs font-bold tracking-widest text-white/30">
            {number}
          </span>
          <div>
            <h3 className="text-base font-heading font-bold leading-snug text-white md:text-lg">
              {service}
            </h3>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-brand-cyan uppercase">
              Explore
              <MoveRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Right: image panel */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            alt={service}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 15vw"
            src={image}
          />
          <div className="absolute inset-0 bg-brand-blue/30 transition-colors duration-300 group-hover:bg-brand-blue/15" />
        </div>
      </Link>
    </motion.div>
  );
};
