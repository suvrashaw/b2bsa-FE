"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib";

interface CaseStudyItemData {
  href?: string;
  icon: string;
  id: string;
  image: string;
  secondarySummary: { text: string };
  title: string;
}

interface CaseStudyItemProps {
  active: boolean;
  className?: string;
  ctaLabel: string;
  item: CaseStudyItemData;
  onActivate?: () => void;
}

const CARD_TRANSITION = {
  layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};
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
        "group relative cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl",
        active ? "lg:max-w-none lg:flex-[4]" : "lg:max-w-[120px] lg:flex-[1]",
        className,
      )}
      layout
      onClick={onActivate}
      onFocusCapture={onActivate}
      onHoverStart={onActivate}
      transition={CARD_TRANSITION}
    >
      <div className="absolute inset-0 size-full">
        <Image
          alt={item.title}
          className={cn(
            "object-cover transition-transform duration-1000 max-lg:scale-105 max-lg:blur-[6px]",
            active ? "scale-105" : "scale-100 grayscale hover:grayscale-0",
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
              ? "bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/70 to-brand-charcoal/30 lg:from-brand-charcoal/90 lg:via-brand-charcoal/40 lg:to-transparent"
              : "bg-brand-charcoal/70 lg:bg-brand-charcoal/60 lg:group-hover:bg-brand-charcoal/40",
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-col",
          active
            ? "relative z-[1] p-4 md:p-8 lg:absolute lg:inset-0 lg:justify-end lg:p-8"
            : "absolute inset-0 justify-center p-4 sm:p-6 lg:justify-end lg:p-8",
        )}
      >
        <div
          className={cn("flex gap-4", active ? "items-start" : "items-center")}
        >
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300 md:size-12",
              active
                ? "bg-brand-blue/90"
                : "bg-white/10 group-hover:bg-brand-cyan/80",
            )}
          >
            <Icon className="size-4 text-white md:size-5" name={item.icon} />
          </div>

          {!active && (
            <h3 className="line-clamp-2 min-w-0 flex-1 font-heading text-sm font-bold text-white lg:hidden">
              {item.title}
            </h3>
          )}

          <AnimatePresence mode="popLayout">
            {active ? (
              <motion.div
                animate={ACTIVE_CONTENT_ANIMATE}
                className="flex min-w-0 flex-1 flex-col pr-0 lg:pr-40"
                exit={ACTIVE_CONTENT_EXIT}
                initial={ACTIVE_CONTENT_INITIAL}
                transition={ACTIVE_CONTENT_TRANSITION}
              >
                <h3 className="mb-4 font-heading text-sm font-bold !text-white md:text-xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-xs leading-relaxed text-gray-200 md:text-base">
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
              className="mt-4 self-end md:mt-6 lg:absolute lg:right-8 lg:bottom-8 lg:mt-0"
              exit={CTA_EXIT}
              initial={CTA_INITIAL}
              transition={CTA_TRANSITION}
            >
              <Link href={item.href}>
                <Button className="shadow-lg" variant="primary">
                  {ctaLabel} <ArrowUpRight className="size-4" />
                </Button>
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
