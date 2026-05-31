"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface BoothSizeItem {
  description: string;
  id: string;
  image: string;
  title: string;
}

export interface BoothSizesFeatureProps {
  ctaHref?: string;
  ctaLabel?: string;
  eyebrow?: string;
  heading: string;
  items: BoothSizeItem[];
}

const IMAGE_VARIANTS = {
  center: { opacity: 1 },
  enter: { opacity: 0 },
  exit: { opacity: 0 },
};

const IMAGE_TRANSITION = { duration: 0.35 };
const EXPAND_ANIMATE = { height: "auto", opacity: 1 };
const EXPAND_EXIT = { height: 0, opacity: 0 };
const EXPAND_INITIAL = { height: 0, opacity: 0 };
const EXPAND_TRANSITION = { duration: 0.25 };

export const BoothSizesFeature = ({
  ctaHref = "/contact",
  ctaLabel = "Get a Quote",
  eyebrow,
  heading,
  items,
}: BoothSizesFeatureProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(Number(e.currentTarget.dataset.index));
  }, []);

  return (
    <section className="bg-brand-gray py-20" id="booth-sizes">
      <div className="container mx-auto px-8">
        <div className="mb-14">
          {eyebrow && <Eyebrow variant="cyan">{eyebrow}</Eyebrow>}
          <Heading as="h2">{heading}</Heading>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: scrollable booth size list */}
          <div className="flex flex-col gap-3 lg:sticky lg:top-24">
            {items.map((item, index) => (
              <button
                className={cn(
                  "group w-full rounded-2xl border bg-white p-6 text-left transition-all duration-300",
                  activeIndex === index
                    ? "border-brand-blue/30 shadow-lg"
                    : "border-gray-100 shadow-sm hover:border-brand-blue/15 hover:shadow-md"
                )}
                data-index={index}
                key={item.id}
                onClick={handleItemClick}
                type="button"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={cn(
                      "text-lg font-bold transition-colors duration-200",
                      activeIndex === index ? "text-brand-blue" : "text-brand-charcoal"
                    )}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      activeIndex === index ? "scale-125 bg-brand-cyan" : "bg-gray-200"
                    )}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      animate={EXPAND_ANIMATE}
                      className="overflow-hidden"
                      exit={EXPAND_EXIT}
                      initial={EXPAND_INITIAL}
                      transition={EXPAND_TRANSITION}
                    >
                      <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/68">
                        {item.description}
                      </p>
                      <Button asChild className="mt-4" size="sm" variant="primary">
                        <Link href={ctaHref}>
                          {ctaLabel}
                          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Right: sticky image panel */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                animate="center"
                className="absolute inset-0"
                exit="exit"
                initial="enter"
                key={activeIndex}
                transition={IMAGE_TRANSITION}
                variants={IMAGE_VARIANTS}
              >
                <Image
                  alt={items[activeIndex]?.title ?? ""}
                  className="object-cover"
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={items[activeIndex]?.image ?? ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent" />
                <div className="absolute right-6 bottom-6 left-6">
                  <p className="font-heading text-xl font-bold text-white drop-shadow">
                    {items[activeIndex]?.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
