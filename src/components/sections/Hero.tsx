"use client";

import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export interface HeroProps {
  badge?: string;
  compact?: boolean;
  description?: string;
  eyebrow?: string;
  highlight?: string;
  highlightVariant?: "blue" | "cyan";
  image?:
    | {
        alt?: string;
        loaderAlt?: string;
        src: string;
      }
    | string;
  motionPhrases?: { color: string; id: string; text: string }[];
  primaryCtaHref?: string;
  primaryCtaLabel?: null | string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: null | string;
  showPreloader?: boolean;
  stat?: {
    icon?: string;
    label: string;
    value: string;
  } | null;
  subtitle?: string;
  title?: ReactNode | string;
}

const HERO_LEFT_ANIMATE = { opacity: 1, x: 0 };
const HERO_LEFT_INITIAL = { opacity: 0, x: -30 };
const HERO_LEFT_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const HERO_RIGHT_ANIMATE = { opacity: 1, x: 0 };
const HERO_RIGHT_INITIAL = { opacity: 0, x: 30 };
const HERO_RIGHT_TRANSITION = { duration: 1, ease: [0.16, 1, 0.3, 1] as const };
const HERO_STAT_ANIMATE = { opacity: 1, y: 0 };
const HERO_STAT_INITIAL = { opacity: 0, y: 20 };
const HERO_STAT_TRANSITION = { delay: 0.6, duration: 0.6 };

export const Hero = ({
  compact = false,
  description,
  highlight,
  highlightVariant = "blue",
  image = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Explore Our Work",
  secondaryCtaHref = "/case-studies",
  secondaryCtaLabel = "Our Services",
  stat = {
    icon: "Globe",
    label: "Countries Served",
    value: "40+",
  },
  subtitle = "End-to-End Solutions That Drive Pipeline and Revenue",
  title = "Global B2B Event, Booth & Lead Generation Experts",
}: HeroProps) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const parallaxStyle = useMemo(() => ({ y: y1 }), [y1]);
  const imageSrc = typeof image === "string" ? image : image.src;
  const imageAlt =
    typeof image === "string"
      ? "Corporate Event Strategy"
      : (image.alt ?? "Corporate Event Strategy");
  const resolvedSubtitle = description ?? subtitle;

  return (
    <section className={`relative flex ${compact ? "min-h-[50vh]" : "min-h-[90vh]"} items-center overflow-hidden bg-white pt-24`}>
      {/* Background Gradients */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-brand-gray/20" />

      <div className="relative z-10 container mx-auto grid items-center gap-12 px-8 lg:grid-cols-2">
        <motion.div
          animate={HERO_LEFT_ANIMATE}
          className="max-w-2xl"
          initial={HERO_LEFT_INITIAL}
          transition={HERO_LEFT_TRANSITION}
        >
          <Heading
            as="h1"
            className="mb-6"
            highlight={highlight}
            highlightVariant={highlightVariant}
          >
            {title}
          </Heading>

          <p className="/70 mb-10 max-w-lg text-xl leading-relaxed">{resolvedSubtitle}</p>

          <div className="flex flex-wrap items-center gap-4">
            {primaryCtaLabel ? (
              <Link href={primaryCtaHref}>
                <Button variant="primary">
                  {primaryCtaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : null}
            {secondaryCtaLabel ? (
              <Link href={secondaryCtaHref}>
                <Button variant="secondary">{secondaryCtaLabel}</Button>
              </Link>
            ) : null}
          </div>
        </motion.div>

        <div className="relative hidden h-[600px] w-full lg:block">
          <motion.div
            animate={HERO_RIGHT_ANIMATE}
            className="absolute inset-0 overflow-hidden rounded-3xl border-8 border-white shadow-2xl"
            initial={HERO_RIGHT_INITIAL}
            transition={HERO_RIGHT_TRANSITION}
          >
            <motion.div className="absolute inset-y-[-150px] right-0 left-0" style={parallaxStyle}>
              <Image alt={imageAlt} className="object-cover" fill priority src={imageSrc} />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-brand-blue/5" />

            {/* Floating stat card */}
            {stat ? (
              <motion.div
                animate={HERO_STAT_ANIMATE}
                className="absolute bottom-12 left-[-40px] rounded-xl border border-gray-100 bg-white p-8 shadow-2xl backdrop-blur-md"
                initial={HERO_STAT_INITIAL}
                transition={HERO_STAT_TRANSITION}
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                    <Globe className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-brand-blue">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
