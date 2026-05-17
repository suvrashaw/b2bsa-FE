"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const COUNTRIES = ["New York", "London", "Dubai", "Singapore", "Sydney", "Toronto"];

const ITEM_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const GLOW_ANIMATE = { opacity: 0.8 };
const GLOW_EXIT = { opacity: 0 };
const GLOW_INITIAL = { opacity: 0 };
const GLOW_TRANSITION = { duration: 0.8, ease: "easeOut" as const };

const CountryItem = ({ country, isActive }: { country: string; isActive: boolean }) => {
  const itemAnimate = useMemo(
    () => ({ opacity: isActive ? 1 : 0.3, scale: isActive ? 1.05 : 1, y: isActive ? -2 : 0 }),
    [isActive]
  );
  return (
    <motion.div
      animate={itemAnimate}
      className="relative cursor-default"
      transition={ITEM_TRANSITION}
    >
      <span className="font-heading text-2xl tracking-wide text-white md:text-3xl">{country}</span>
      {isActive && (
        <motion.div
          animate={GLOW_ANIMATE}
          className="absolute -bottom-2 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-brand-blue blur-[2px]"
          exit={GLOW_EXIT}
          initial={GLOW_INITIAL}
          layoutId="activeCountryGlow"
          transition={GLOW_TRANSITION}
        />
      )}
    </motion.div>
  );
};

export const GlobalPresence = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % COUNTRIES.length);
    }, 3000); // 3 seconds per highlight

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 w-full overflow-hidden bg-brand-blue py-12">
      <div className="container mx-auto px-8">
        <h3 className="mb-8 text-center text-xs font-bold tracking-[0.3em] !text-white uppercase">
          Global Enterprise Reach
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {COUNTRIES.map((country, index) => (
            <CountryItem country={country} isActive={index === activeIndex} key={country} />
          ))}
        </div>
      </div>
    </div>
  );
};
