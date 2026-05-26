"use client";

import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { SharedBlogPost } from "@/content/blogs";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { RentalBlogCard } from "@/components/ui/RentalBlogCard";
import { cn } from "@/lib";

export interface RentalBlogsSectionProps {
  heading: string;
  posts: SharedBlogPost[];
}

const SLIDE_TRANSITION = { duration: 0.5, ease: [0.32, 0.72, 0, 1] } as const;
const GAP = 32;

const TRACK_STYLE = { gap: GAP } as const;
const HEADING_INITIAL = { opacity: 0, y: 24 } as const;
const HEADING_ANIMATE = { opacity: 1, y: 0 } as const;
const HEADING_TRANSITION = { duration: 0.5 } as const;
const HEADING_VIEWPORT = { once: true } as const;
const TRACK_INITIAL = { x: 0 } as const;

interface DotButtonProps {
  active: boolean;
  index: number;
  onDotClick: (i: number) => void;
}

const DotButton = ({ active, index, onDotClick }: DotButtonProps) => {
  const handleClick = useCallback(() => onDotClick(index), [index, onDotClick]);
  return (
    <button
      className={cn(
        "h-2 rounded-full transition-all duration-300",
        active ? "w-6 bg-brand-blue" : "w-2 bg-brand-charcoal/25 hover:bg-brand-charcoal/40"
      )}
      onClick={handleClick}
      type="button"
    />
  );
};

const getPerView = () => {
  if (globalThis.window === undefined) return 4;
  if (globalThis.window.innerWidth >= 1024) return 4;
  if (globalThis.window.innerWidth >= 640) return 2;
  return 1;
};

export const RentalBlogsSection = ({ heading, posts }: RentalBlogsSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [cardStep, setCardStep] = useState(0);
  const offsetRef = useRef(posts.length); // start in middle of tripled array
  const [dotIndex, setDotIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const extended = [...posts, ...posts, ...posts];

  const computeCardStep = useCallback((): number => {
    if (!containerRef.current) return 0;
    const per = getPerView();
    const cardW = (containerRef.current.offsetWidth - GAP * (per - 1)) / per;
    return cardW + GAP;
  }, []);

  useEffect(() => {
    const update = () => {
      const step = computeCardStep();
      setCardStep(step);
      controls.set({ x: -(offsetRef.current * step) });
    };
    update();
    globalThis.window.addEventListener("resize", update);
    return () => globalThis.window.removeEventListener("resize", update);
  }, [computeCardStep, controls]);

  const slideTo = useCallback(
    async (newOffset: number) => {
      if (isAnimatingRef.current || cardStep === 0) return;
      isAnimatingRef.current = true;
      offsetRef.current = newOffset;
      setDotIndex(((newOffset - posts.length) % posts.length + posts.length) % posts.length);

      await controls.start({ x: -(newOffset * cardStep) }, SLIDE_TRANSITION);

      // Silently reset to middle section to keep infinite looping
      let reset = newOffset;
      if (newOffset >= posts.length * 2) reset = newOffset - posts.length;
      else if (newOffset < posts.length) reset = newOffset + posts.length;
      if (reset !== newOffset) {
        offsetRef.current = reset;
        controls.set({ x: -(reset * cardStep) });
      }

      isAnimatingRef.current = false;
    },
    [cardStep, controls, posts.length]
  );

  const goToDot = useCallback(
    (i: number) => {
      if (i === dotIndex || isAnimatingRef.current) return;
      const forward = (i - dotIndex + posts.length) % posts.length;
      const steps = forward > posts.length / 2 ? forward - posts.length : forward;
      slideTo(offsetRef.current + steps);
    },
    [dotIndex, posts.length, slideTo]
  );

  const cardStyle = useMemo(() => {
    const width = cardStep > 0 ? cardStep - GAP : "calc((100% - 96px) / 4)";
    return { flexShrink: 0 as const, width };
  }, [cardStep]);

  if (posts.length === 0) return null;

  return (
    <section className="bg-brand-gray py-20" id="blogs">
      <div className="container mx-auto px-8">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={HEADING_INITIAL}
            transition={HEADING_TRANSITION}
            viewport={HEADING_VIEWPORT}
            whileInView={HEADING_ANIMATE}
          >
            <Heading as="h2" className="text-brand-charcoal">
              {heading}
            </Heading>
          </motion.div>

          <Button asChild size="sm" variant="secondary">
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        </div>

        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            animate={controls}
            className="flex"
            initial={TRACK_INITIAL}
            style={TRACK_STYLE}
          >
            {extended.map((post, i) => (
              <div key={`${post.id}-${i}`} style={cardStyle}>
                <RentalBlogCard post={post} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {posts.map((post, i) => (
            <DotButton
              active={i === dotIndex}
              index={i}
              key={post.id}
              onDotClick={goToDot}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
