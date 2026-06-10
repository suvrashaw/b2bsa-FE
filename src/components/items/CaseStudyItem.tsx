"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { CaseStudyCardData } from "@/content/case-studies";

import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

interface CaseStudyItemProps {
  active: boolean;
  className?: string;
  ctaLabel: string;
  item: CaseStudyCardData;
  onActivate?: () => void;
}

const CARD_TRANSITION = { layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } };
const ACTIVE_CONTENT_ANIMATE = { opacity: 1, x: 0 };
const ACTIVE_CONTENT_INITIAL = { opacity: 0, x: -20 };
const ACTIVE_CONTENT_EXIT = { opacity: 0, x: -20 };
const ACTIVE_CONTENT_TRANSITION = { duration: 0.3 };
const CTA_ANIMATE = { opacity: 1, y: 0 };
const CTA_INITIAL = { opacity: 0, y: 20 };
const CTA_EXIT = { opacity: 0, y: 20 };
const CTA_TRANSITION = { delay: 0.2, duration: 0.3 };

export const CaseStudyItem = ({
  active,
  className,
  ctaLabel,
  item,
  onActivate,
}: CaseStudyItemProps) => {
  return (
    <motion.div
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl",
        active ? "lg:max-w-none lg:flex-[3]" : "lg:max-w-[120px] lg:flex-[1]",
        className
      )}
      layout
      onClick={onActivate}
      onFocusCapture={onActivate}
      onHoverStart={onActivate}
      transition={CARD_TRANSITION}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          alt={item.title}
          className={cn(
            "object-cover transition-transform duration-1000",
            active ? "scale-105" : "scale-100 grayscale hover:grayscale-0"
          )}
          fill
          priority={active}
          sizes="(max-width: 1024px) 100vw, 40vw"
          src={item.image}
        />
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            active
              ? "from-brand-charcoal/90 via-brand-charcoal/40 bg-gradient-to-t to-transparent"
              : "bg-brand-charcoal/60 group-hover:bg-brand-charcoal/40"
          )}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300",
              active ? "bg-brand-blue/90" : "group-hover:bg-brand-cyan/80 bg-white/10"
            )}
          >
            <Icon className="h-5 w-5 text-white" name={item.icon} />
          </div>

          <AnimatePresence mode="popLayout">
            {active ? (
              <motion.div
                animate={ACTIVE_CONTENT_ANIMATE}
                className="flex min-w-0 flex-1 flex-col pr-40"
                exit={ACTIVE_CONTENT_EXIT}
                initial={ACTIVE_CONTENT_INITIAL}
                transition={ACTIVE_CONTENT_TRANSITION}
              >
                <h3 className="mb-4 line-clamp-2 font-heading text-xl font-bold !text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="line-clamp-4 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
                  {item.secondarySummary.text}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {active && item.href ? (
            <motion.div
              animate={CTA_ANIMATE}
              className="absolute right-8 bottom-8"
              exit={CTA_EXIT}
              initial={CTA_INITIAL}
              transition={CTA_TRANSITION}
            >
              <Link href={item.href}>
                <Button className="shadow-lg" variant="primary">
                  {ctaLabel} <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
