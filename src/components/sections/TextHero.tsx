"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading";

export interface TextHeroProps {
  description?: string;
  eyebrow?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  title: ReactNode;
}

const H1_STYLE = { color: "rgba(255,255,255,0.98)" };
const ANIMATE_IN = { opacity: 1, y: 0 };
const INITIAL = { opacity: 0, y: 20 };
const T_EYEBROW = { delay: 0.2, duration: 0.6 };
const T_HEADING = { delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };
const T_DESC = { delay: 0.5, duration: 0.6 };
const T_CTAS = { delay: 0.65, duration: 0.6 };

const PRIMARY_CTA_STYLE = {
  backdropFilter: "blur(8px)",
  background: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "4px",
  WebkitBackdropFilter: "blur(8px)",
};

const SECONDARY_CTA_STYLE = {
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: "4px",
};

export const TextHero = ({ description, eyebrow, primaryCta, secondaryCta, title }: TextHeroProps) => {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-blue pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(116,219,243,0.15)_0%,transparent_70%)]" />
      <div className="relative z-10 container mx-auto px-8 text-center">
        {eyebrow && (
          <motion.p
            animate={ANIMATE_IN}
            className="mb-6 text-sm font-bold tracking-[0.3em] text-brand-cyan uppercase"
            initial={INITIAL}
            transition={T_EYEBROW}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.div
          animate={ANIMATE_IN}
          initial={INITIAL}
          transition={T_HEADING}
        >
          <Heading as="h1" className="mb-8" style={H1_STYLE}>
            {title}
          </Heading>
        </motion.div>
        {description && (
          <motion.p
            animate={ANIMATE_IN}
            className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg"
            initial={INITIAL}
            transition={T_DESC}
          >
            {description}
          </motion.p>
        )}
        {(primaryCta ?? secondaryCta) && (
          <motion.div
            animate={ANIMATE_IN}
            className="flex flex-wrap items-center justify-center gap-4"
            initial={INITIAL}
            transition={T_CTAS}
          >
            {primaryCta && (
              <Link
                className="flex min-h-[52px] items-center justify-center rounded-[4px] px-8 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105"
                href={primaryCta.href}
                style={PRIMARY_CTA_STYLE}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                className="flex min-h-[52px] items-center justify-center rounded-[4px] px-8 py-3.5 font-bold text-white/90 transition-all duration-300 hover:scale-105"
                href={secondaryCta.href}
                style={SECONDARY_CTA_STYLE}
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
