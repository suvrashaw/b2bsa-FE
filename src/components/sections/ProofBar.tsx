"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import Image from "next/image";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface ProofBarProps {
  className?: string;
  description?: ReactNode;
  heading?: string;
  headingHighlight?: string;
  imageAlt?: string;
  imageUrl: string;
  stats: string[];
}

interface StatItem {
  key: string;
  label: string;
  value: string;
}

const MARQUEE_SPEED = 18;

const useStatsMarquee = (isVisible: boolean) => {
  const baseX = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (isVisible) {
      baseX.set(baseX.get() - MARQUEE_SPEED * (delta / 1000));
    }
  });

  return useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
};

const StatChip = ({ item }: { item: StatItem }) => (
  <div className="flex shrink-0 flex-col items-center gap-1.5 px-8">
    <span className="font-heading text-3xl font-bold text-brand-blue md:text-4xl">
      {item.value}
    </span>
    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{item.label}</span>
  </div>
);

const StatRow = ({ items }: { items: StatItem[] }) => (
  <>
    {items.map((item, i) => (
      <div className="flex shrink-0 items-center" key={item.key}>
        {i > 0 && <div className="h-12 w-px shrink-0 bg-brand-blue/20" />}
        <StatChip item={item} />
      </div>
    ))}
  </>
);

const StatsMarquee = ({ items }: { items: StatItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const x = useStatsMarquee(isVisible);
  const marqueeStyle = useMemo(() => ({ x }), [x]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      {
        threshold: 0.1,
      }
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

const PROOF_INITIAL = { opacity: 0, y: 10 };
const PROOF_IN_VIEW = { opacity: 1, y: 0 };
const PROOF_VIEWPORT = { once: true } as const;
const PROOF_TRANSITION = { duration: 0.5 } as const;
const PROOF_DESC_TRANSITION = { delay: 0.1, duration: 0.5 } as const;
const PROOF_IMG_INITIAL = { opacity: 0, x: 24 };
const PROOF_IMG_IN_VIEW = { opacity: 1, x: 0 };
const PROOF_IMG_TRANSITION = { delay: 0.15, duration: 0.6 } as const;

export const ProofBar = ({
  className,
  description,
  heading,
  headingHighlight,
  imageAlt = "Statistics visual",
  imageUrl,
  stats,
}: ProofBarProps) => {
  const flatItems = useMemo(
    () =>
      stats.flatMap((stat, index) =>
        stat.split("|").map((s, pIndex) => {
          const trimmed = s.trim();
          const spaceIdx = trimmed.indexOf(" ");
          return {
            key: `${index}-${pIndex}`,
            label: spaceIdx === -1 ? "" : trimmed.slice(spaceIdx + 1),
            value: spaceIdx === -1 ? trimmed : trimmed.slice(0, spaceIdx),
          };
        })
      ),
    [stats]
  );

  if (!stats || stats.length === 0) return null;

  return (
    <div className={cn("bg-brand-gray py-16 md:py-20", className)}>
      <div className="container mx-auto px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: heading, description, stats marquee */}
          <div className="flex flex-col">
            {heading && (
              <motion.div
                initial={PROOF_INITIAL}
                transition={PROOF_TRANSITION}
                viewport={PROOF_VIEWPORT}
                whileInView={PROOF_IN_VIEW}
              >
                <Heading as="h2" className="mb-4" highlight={headingHighlight}>
                  {heading}
                </Heading>
              </motion.div>
            )}
            {description && (
              <motion.p
                className="mb-8 text-base leading-relaxed text-brand-charcoal/70 md:text-lg"
                initial={PROOF_INITIAL}
                transition={PROOF_DESC_TRANSITION}
                viewport={PROOF_VIEWPORT}
                whileInView={PROOF_IN_VIEW}
              >
                {description}
              </motion.p>
            )}
            <StatsMarquee items={flatItems} />
          </div>

          {/* Right column: image */}
          <motion.div
            className="group relative aspect-[4/3] w-full"
            initial={PROOF_IMG_INITIAL}
            transition={PROOF_IMG_TRANSITION}
            viewport={PROOF_VIEWPORT}
            whileInView={PROOF_IMG_IN_VIEW}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};
