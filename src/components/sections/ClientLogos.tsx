"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { type ClientLogoItem, HOME_CLIENT_LOGOS } from "@/content/home";

export interface ClientLogosProps {
  heading?: string;
  logos?: ClientLogoItem[];
  overlap?: boolean;
  speed?: number;
  wheelSpeed?: number;
}

const useLogoMarquee = (speed: number, wheelSpeed: number, isVisible: boolean) => {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!isHovered && isVisible) {
      baseX.set(baseX.get() - speed * (delta / 1000));
    }
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const handleWheel = (e: React.WheelEvent) => {
    const scrollAmount = e.deltaX === 0 ? e.deltaY : e.deltaX;
    baseX.set(baseX.get() - scrollAmount * wheelSpeed);
  };

  return { handleWheel, setIsHovered, x };
};

const LogosRow = ({ logos }: { logos: ClientLogoItem[] }) => (
  <>
    {logos.map((logo) => (
      <div
        className="flex shrink-0 items-center"
        key={logo.id}
      >
        <img
          alt={logo.alt}
          className="h-8 w-auto max-w-[140px] object-contain transition-all duration-300 hover:scale-110"
          draggable={false}
          src={logo.src}
        />
      </div>
    ))}
  </>
);

export const ClientLogos = ({
  heading = "Trusted by Leading Brands for Trade Show & Exhibition Solutions",
  logos = HOME_CLIENT_LOGOS,
  overlap = true,
  speed = 2.5,
  wheelSpeed = 0.05,
}: ClientLogosProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { handleWheel, setIsHovered, x } = useLogoMarquee(speed, wheelSpeed, isVisible);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), [setIsHovered]);
  const handleMouseLeave = useCallback(() => setIsHovered(false), [setIsHovered]);
  const marqueeStyle = useMemo(() => ({ x }), [x]);

  return (
    <div className={`pointer-events-none relative z-30 w-full bg-brand-gray ${overlap ? "-mt-16" : ""}`} ref={containerRef}>
      <div
        className="pointer-events-auto relative overflow-hidden py-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-48 bg-linear-to-r from-brand-gray to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-48 bg-linear-to-l from-brand-gray to-transparent" />

        <motion.div className="flex w-max cursor-grab active:cursor-grabbing" style={marqueeStyle}>
          <div className="flex items-center gap-10 px-8 md:gap-16 md:px-12">
            <LogosRow logos={logos} />
          </div>
          <div className="flex items-center gap-10 px-8 md:gap-16 md:px-12">
            <LogosRow logos={logos} />
          </div>
        </motion.div>
      </div>
      {heading && (
        <Heading
          as="h4"
          className="mt-4 text-center text-sm font-semibold tracking-widest text-gray-400 uppercase"
          preserveClassName
        >
          {heading}
        </Heading>
      )}
    </div>
  );
};
