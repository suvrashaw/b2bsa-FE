"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface BoothShowcaseItem {
  cta: { href: string; label: string };
  descriptions: string[];
  eyebrow: string;
  heading: string;
  id: string;
  image: string;
}

interface BoothScrollShowcaseProps {
  heading?: string;
  items: BoothShowcaseItem[];
}

const RADIUS = "round 2rem";
const IMG_ANIMATE = { clipPath: `inset(0% 0% 0% 0% ${RADIUS})` };
const IMG_EXIT = { clipPath: `inset(0% 0% 100% 0% ${RADIUS})` };
const IMG_INITIAL = { clipPath: `inset(100% 0% 0% 0% ${RADIUS})` };
const CONTENT_ANIMATE = { x: 0 };
const CONTENT_EXIT = { x: -40 };
const CONTENT_INITIAL = { x: 40 };
const IMG_TRANSITION = { duration: 0.55, ease: [0.4, 0, 0.2, 1] } as const;
const CONTENT_TRANSITION = { duration: 0.4, ease: [0.4, 0, 0.2, 1] } as const;

interface DotButtonProps {
  active: boolean;
  index: number;
  onClick: (i: number) => void;
}

const DotButton = ({ active, index, onClick }: DotButtonProps) => {
  const handleClick = useCallback(() => onClick(index), [index, onClick]);
  return (
    <button
      aria-label={`Go to slide ${index + 1}`}
      className={cn(
        "h-2 rounded-full transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2",
        active ? "w-10 bg-brand-cyan" : "w-2 bg-gray-300"
      )}
      onClick={handleClick}
      type="button"
    />
  );
};

export const BoothScrollShowcase = ({ heading, items }: BoothScrollShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (items.length === 0) return;
    const index = Math.min(items.length - 1, Math.max(0, Math.floor(latest * items.length)));
    if (index !== activeIndex) setActiveIndex(index);
  });

  const active = items[Math.min(activeIndex, items.length - 1)];
  const sectionStyle = useMemo(() => ({ height: `${items.length * 100}vh` }), [items.length]);

  return (
    <section
      className="relative bg-brand-gray"
      ref={containerRef}
      style={sectionStyle}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center pt-16 pb-12">
        {heading && (
          <div className="container mx-auto px-8 pb-12">
            <Heading as="h2" className="text-center">{heading}</Heading>
          </div>
        )}
        <div className="container mx-auto grid flex-1 grid-cols-2 items-center gap-16 px-8">

          {/* Left: Sticky image */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                animate={IMG_ANIMATE}
                className="relative aspect-[4/5] max-h-[calc(100vh-10rem)] w-full max-w-[540px] overflow-hidden shadow-2xl"
                exit={IMG_EXIT}
                initial={IMG_INITIAL}
                key={active.id}
                transition={IMG_TRANSITION}
              >
                <Image alt={active.heading} className="object-cover" fill sizes="540px" src={active.image} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                animate={CONTENT_ANIMATE}
                className="flex flex-col"
                exit={CONTENT_EXIT}
                initial={CONTENT_INITIAL}
                key={active.id}
                transition={CONTENT_TRANSITION}
              >
                <span className="mb-3 text-sm font-semibold tracking-widest text-brand-cyan uppercase">
                  {active.eyebrow}
                </span>
                <h3 className="mb-6 font-heading text-xl leading-tight font-bold text-brand-charcoal md:text-2xl">
                  {active.heading}
                </h3>
                <div className="space-y-3">
                  {active.descriptions.map((desc, i) => (
                    <p className="text-base leading-relaxed text-gray-600" key={i}>
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild variant="secondary">
                    <Link href={active.cta.href}>{active.cta.label}</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-12 flex items-center gap-3">
              {items.map((_, i) => (
                <DotButton
                  active={i === activeIndex}
                  index={i}
                  key={i}
                  onClick={setActiveIndex}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
