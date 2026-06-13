"use client";

import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface HorizontalScrollTrackProps {
  children: ReactNode;
}

export const HorizontalScrollTrack = ({ children }: HorizontalScrollTrackProps) => {
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const motionStyle = useMemo(() => ({ x }), [x]);

  return (
    <section className="relative hidden h-[400vh] bg-brand-gray md:block" ref={targetRef}>
      <div className="sticky top-0 flex h-[80vh] min-h-[500px] w-full items-stretch overflow-hidden">
        <motion.div
          className="flex h-full items-stretch will-change-transform"
          ref={trackRef}
          style={motionStyle}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
