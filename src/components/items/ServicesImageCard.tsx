"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface ServicesImageCardProps {
  image?: string;
  index: number;
  service: string;
}

const PLACEHOLDER_IMAGE = "/media/home/hero/home_hero_bg.avif";

const CARD_INITIAL = { opacity: 0, y: 16 };
const CARD_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const CARD_VIEWPORT = { once: true };

export const ServicesImageCard = ({
  image = PLACEHOLDER_IMAGE,
  index,
  service,
}: ServicesImageCardProps) => {
  const transition = useMemo(() => ({ delay: index * 0.08, duration: 0.5 }), [index]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="group h-44 w-full overflow-hidden rounded-2xl md:rounded-xl"
      initial={CARD_INITIAL}
      transition={transition}
      viewport={CARD_VIEWPORT}
      whileInView={CARD_WHILE_IN_VIEW}
    >
      <Link className="flex h-full w-full" href="/services">
        {/* Left: brand-blue text panel */}
        <div className="flex w-[60%] shrink-0 flex-col justify-between bg-brand-blue px-6 py-5 transition-colors duration-300 group-hover:bg-[#155a8a]">
          <span className="font-heading text-xs font-bold tracking-widest text-white/30">
            {number}
          </span>
          <div>
            <h3 className="type-h3 leading-snug text-white">{service}</h3>
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
            quality={60}
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 15vw"
            src={image}
          />
          <div className="absolute inset-0 bg-brand-blue/30 transition-colors duration-300 group-hover:bg-brand-blue/15" />
        </div>
      </Link>
    </motion.div>
  );
};
