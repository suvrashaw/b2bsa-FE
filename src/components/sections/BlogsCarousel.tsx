"use client";

import { motion, useAnimationControls } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { SharedBlogPost } from "@/content/blogs";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface BlogsCarouselProps {
  heading: string;
  headingHighlight?: string;
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

const getPerView = () => {
  if (globalThis.window === undefined) return 4;
  if (globalThis.window.innerWidth >= 1024) return 4;
  if (globalThis.window.innerWidth >= 640) return 2;
  return 1;
};

export const BlogsCarousel = ({ heading, headingHighlight, posts }: BlogsCarouselProps) => {
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
      setDotIndex((((newOffset - posts.length) % posts.length) + posts.length) % posts.length);

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

  const cardStyle = useMemo(() => {
    const width = cardStep > 0 ? cardStep - GAP : "calc((100% - 96px) / 4)";
    return { flexShrink: 0 as const, width };
  }, [cardStep]);

  if (posts.length === 0) return null;

  return (
    <section className="bg-brand-gray py-20" id="blogs">
      <div className="container mx-auto px-8">
        <div className="mb-14 flex items-center justify-between gap-6">
          <motion.div
            initial={HEADING_INITIAL}
            transition={HEADING_TRANSITION}
            viewport={HEADING_VIEWPORT}
            whileInView={HEADING_ANIMATE}
          >
            <Heading as="h2" highlight={headingHighlight}>
              {heading}
            </Heading>
          </motion.div>

          <Button asChild className="shrink-0" variant="secondary">
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        </div>

        <div className="overflow-visible" ref={containerRef}>
          <motion.div
            animate={controls}
            className="flex"
            initial={TRACK_INITIAL}
            style={TRACK_STYLE}
          >
            {extended.map((post, i) => (
              <div key={`${post.id}-${i}`} style={cardStyle}>
                <BlogsCarouselCard post={post} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8">
          <button
            aria-label="Previous post"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={() => slideTo(offsetRef.current - 1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next post"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={() => slideTo(offsetRef.current + 1)}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
