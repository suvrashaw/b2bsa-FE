"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib";

interface StatItem {
  key: string;
  label: string;
  value: string;
}

const MARQUEE_SPEED = 5;

const useStatsMarquee = (isVisible: boolean, isPaused: boolean) => {
  const baseX = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (isVisible && !isPaused) {
      baseX.set(baseX.get() - MARQUEE_SPEED * (delta / 1000));
    }
  });

  return useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
};

const StatChip = ({ index, item }: { index: number; item: StatItem }) => {
  const bg = ["bg-brand-blue", "bg-brand-cyan", "bg-brand-primary"][index % 3];
  return (
    <div
      className={cn(
        "mx-3 flex min-w-[180px] shrink-0 flex-col items-center gap-1.5 rounded-xl px-8 py-6 shadow-lg",
        bg,
        "text-white"
      )}
    >
      <span className="font-heading text-3xl font-bold md:text-4xl">{item.value}</span>
      <span className="text-xs font-bold tracking-widest uppercase opacity-80">{item.label}</span>
    </div>
  );
};

const StatRow = ({ items }: { items: StatItem[] }) => (
  <>
    {items.map((item, i) => (
      <div className="flex shrink-0 items-center" key={item.key}>
        <StatChip index={i} item={item} />
      </div>
    ))}
  </>
);

export const StatsMarquee = ({ items }: { items: StatItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced =
    globalThis.window !== undefined &&
    globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const x = useStatsMarquee(isVisible, prefersReduced);
  const marqueeStyle = useMemo(() => ({ x }), [x]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // eslint-disable-next-line compat/compat
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden py-4" ref={containerRef}>
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-linear-to-r from-brand-gray to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-linear-to-l from-brand-gray to-transparent" />
      <motion.div className="flex w-max" style={marqueeStyle}>
        <div className="flex items-center">
          <StatRow items={items} />
        </div>
        <div className="flex items-center">
          <StatRow items={items} />
        </div>
      </motion.div>
    </div>
  );
};
