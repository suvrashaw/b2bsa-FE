"use client";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  Clock,
  Globe2,
  Network,
  Package,
  Shield,
  Target,
  TrendingDown,
  TrendingUp,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { cn } from "@/lib";

const icons = {
  Award,
  CheckCircle,
  Clock,
  Globe2,
  Network,
  Package,
  Shield,
  Target,
  TrendingDown,
  TrendingUp,
  Users2,
} as const;

interface BoothWhyChooseUsItem {
  description: string;
  href?: string;
  icon?: string;
  image?: string;
  title: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.45 },
    y: 0,
  }),
};

const BOOTH_WHY_CARD_VIEWPORT = { once: true } as const;

interface BoothWhyCardProps {
  className?: string;
  index: number;
  item: BoothWhyChooseUsItem;
  style?: React.CSSProperties;
}

export const BoothWhyCard = ({ className, index, item, style }: BoothWhyCardProps) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon ? icons[item.icon as keyof typeof icons] : undefined;

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);



  return (
    <motion.article
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-brand-blue/8 bg-white transition-all duration-500 hover:border-brand-blue/30 hover:shadow-2xl",
        className
      )}
      custom={index}
      initial="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      variants={cardVariants}
      viewport={BOOTH_WHY_CARD_VIEWPORT}
      whileInView="visible"
    >
      {item.href ? (
        <Link className="block h-full w-full" href={item.href}>
          <div className="relative h-32 overflow-hidden bg-brand-gray/50">
            {item.image && (
              <Image
                alt={item.title}
                className={`object-cover transition-all duration-700 ${hovered ? "scale-110" : "scale-100"}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={item.image}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
            {Icon && (
              <div
                className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-500 ${hovered ? "scale-110 rotate-6" : ""}`}
              >
                <Icon
                  className={`h-6 w-6 text-brand-blue transition-transform duration-300 ${hovered ? "scale-110" : ""}`}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-center p-6 text-center">
            <h3
              className={`type-h3 mb-2 transition-all duration-300 ${hovered ? "translate-x-1 text-brand-blue" : "text-brand-charcoal"}`}
            >
              {item.title}
            </h3>
            <p
              className={`line-clamp-4 text-xs leading-relaxed transition-all duration-300 md:text-base ${hovered ? "text-brand-charcoal" : "text-brand-charcoal/68"}`}
            >
              {item.description}
            </p>
          </div>

          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-brand-blue transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        </Link>
      ) : (
        <div className="block h-full w-full">
          <div className="relative h-32 overflow-hidden bg-brand-gray/50">
            {item.image && (
              <Image
                alt={item.title}
                className={`object-cover transition-all duration-700 ${hovered ? "scale-110" : "scale-100"}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={item.image}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
            {Icon && (
              <div
                className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-500 ${hovered ? "scale-110 rotate-6" : ""}`}
              >
                <Icon
                  className={`h-6 w-6 text-brand-blue transition-transform duration-300 ${hovered ? "scale-110" : ""}`}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-center p-6 text-center">
            <h3
              className={`type-h3 mb-2 transition-all duration-300 ${hovered ? "translate-x-1 text-brand-blue" : "text-brand-charcoal"}`}
            >
              {item.title}
            </h3>
            <p
              className={`line-clamp-4 text-xs leading-relaxed transition-all duration-300 md:text-base ${hovered ? "text-brand-charcoal" : "text-brand-charcoal/68"}`}
            >
              {item.description}
            </p>
          </div>

          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-brand-blue transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      )}
    </motion.article>
  );
};
