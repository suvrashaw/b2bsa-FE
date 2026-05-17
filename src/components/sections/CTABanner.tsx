"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface CTABannerProps {
  className?: string;
  ctaHref: string;
  ctaLabel?: string;
  ctaText?: string;
  description?: string;
  subtitle?: string;
  title: string;
}

const CATABANNER_INITIAL = { opacity: 0, y: 20 };
const CATABANNER_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const CATABANNER_TRANSITION = { duration: 0.6 };
const CATABANNER_VIEWPORT = { once: true };

export const CTABanner = ({
  className,
  ctaHref,
  ctaLabel,
  ctaText,
  description,
  subtitle,
  title,
}: CTABannerProps) => {
  const resolvedSubtitle = subtitle ?? description;
  const resolvedCtaText = ctaText ?? ctaLabel ?? "Book a Strategy Session";

  return (
    <section className={cn("py-24 px-8", className)}>
      <div className="container mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-[3rem] bg-brand-blue p-12 text-center shadow-2xl shadow-brand-blue/30 md:p-24"
          initial={CATABANNER_INITIAL}
          transition={CATABANNER_TRANSITION}
          viewport={CATABANNER_VIEWPORT}
          whileInView={CATABANNER_WHILE_IN_VIEW}
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-cyan/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <Heading
              as="h2"
              className="mb-8 font-heading text-3xl leading-tight font-bold text-white md:text-6xl"
              preserveClassName
            >
              {title}
            </Heading>
            {resolvedSubtitle && (
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                {resolvedSubtitle}
              </p>
            )}
            <Link
              className="hover: group inline-flex transform items-center gap-3 rounded-full bg-white px-12 py-5 font-bold text-brand-blue shadow-xl transition-all duration-300 hover:scale-105 hover:bg-brand-cyan"
              href={ctaHref}
            >
              {resolvedCtaText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
