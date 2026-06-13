"use client";

import type { ReactNode } from "react";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

interface StatItem {
  key: string;
  label: string;
  value: string;
}

interface StatsProps {
  className?: string;
  description?: ReactNode;
  heading?: string;
  imageAlt?: string;
  imageUrl: string;
  stats: string[];
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

const StatsMarquee = ({ items }: { items: StatItem[] }) => {
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

export const Stats = ({
  className,
  description,
  heading,
  imageAlt = "Statistics visual",
  imageUrl,
  stats,
}: StatsProps) => {
  if (!stats || stats.length === 0) return null;

  const flatItems = stats.flatMap((stat, index) =>
    stat.split("|").map((s, pIndex) => {
      const trimmed = s.trim();
      const spaceIdx = trimmed.indexOf(" ");
      return {
        key: `${index}-${pIndex}`,
        label: spaceIdx === -1 ? "" : trimmed.slice(spaceIdx + 1),
        value: spaceIdx === -1 ? trimmed : trimmed.slice(0, spaceIdx),
      };
    })
  );

  return (
    <div className={cn("bg-brand-gray py-16 md:py-20", className)}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            {heading && (
              <SectionHeader as="h2" className="mb-4">
                {heading}
              </SectionHeader>
            )}
            {description && (
              <p className="mb-8 text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
                {description}
              </p>
            )}
            <StatsMarquee items={flatItems} />
          </div>

          <div className="group relative aspect-[4/3] w-full">
            <div className="absolute inset-0 rounded-3xl border border-brand-blue/10 shadow-[6px_6px_0px_0px] shadow-brand-blue/10 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px] group-hover:shadow-brand-blue/15" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                alt={imageAlt}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={imageUrl}
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
