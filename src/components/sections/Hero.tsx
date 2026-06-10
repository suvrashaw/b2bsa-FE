"use client";

import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface HeroProps {
  badge?: string;
  className?: string;
  compact?: boolean;
  description?: string;
  eyebrow?: string;
  headingClassName?: string;
  highlight?: string;
  highlightVariant?: "blue" | "cyan";
  image?:
    | {
        alt?: string;
        loaderAlt?: string;
        src: string;
      }
    | null
    | string;
  motionPhrases?: { color: string; id: string; text: string }[];
  primaryCtaHref?: string;
  primaryCtaLabel?: null | string;
  primaryCtaVariant?: ButtonProps["variant"];
  secondaryCtaHref?: string;
  secondaryCtaLabel?: null | string;
  secondaryCtaVariant?: ButtonProps["variant"];
  showPreloader?: boolean;
  stat?: {
    icon?: string;
    label: string;
    value: string;
  } | null;
  subtitle?: string;
  textColor?: "default" | "white";
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

const resolveImageProps = (
  img: HeroProps["image"],
): { alt: string; src: string } | null => {
  if (!img) return null;
  if (typeof img === "string") return { alt: "Corporate Event Strategy", src: img };
  return { alt: img.alt ?? "Corporate Event Strategy", src: img.src };
};

export const Hero = ({
  className,
  compact = false,
  description,
  headingClassName,
  highlight,
  highlightVariant = "blue",
  image = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Explore Our Work",
  primaryCtaVariant = "primary",
  secondaryCtaHref = "/case-studies",
  secondaryCtaLabel = "Our Services",
  secondaryCtaVariant = "secondary",
  stat = {
    icon: "Globe",
    label: "Countries Served",
    value: "40+",
  },
  subtitle = "End-to-End Solutions That Drive Pipeline and Revenue",
  textColor = "default",
  title = "Global B2B Event, Booth & Lead Generation Experts",
}: HeroProps) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const parallaxStyle = useMemo(() => ({ y: y1 }), [y1]);
  const resolvedImage = resolveImageProps(image);
  const hasImage = resolvedImage !== null;
  const resolvedSubtitle = description ?? subtitle;
  const lightText = textColor === "white";

  return (
    <section className={`relative flex ${compact ? "min-h-[50vh]" : "min-h-[90vh]"} items-center overflow-hidden pt-24 ${className ?? "bg-brand-gray"}`}>
      {/* Background gradient only shown when image is present */}
      {hasImage ? <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-brand-gray/20" /> : null}

      <div className={`relative z-10 container mx-auto px-8 ${hasImage ? "grid items-center gap-12 lg:grid-cols-2" : "flex flex-col items-center text-center"}`}>
        <motion.div
          animate={HERO_LEFT_ANIMATE}
          className={hasImage ? "max-w-2xl" : "max-w-3xl"}
          initial={HERO_LEFT_INITIAL}
          transition={HERO_LEFT_TRANSITION}
        >
          <Heading
            as="h1"
            className={cn("mb-6", lightText && "text-white", headingClassName)}
            highlight={highlight}
            highlightVariant={highlightVariant}
          >
            {title}
          </Heading>

          <p
            className={cn(
              "mb-10 text-xl leading-relaxed",
              hasImage ? "max-w-lg" : "mx-auto max-w-2xl",
              lightText ? "text-white/90" : "text-gray-700"
            )}
          >
            {resolvedSubtitle}
          </p>

          <div className={`flex flex-wrap gap-4 ${hasImage ? "items-center" : "items-center justify-center"}`}>
            {primaryCtaLabel ? (
              <Link href={primaryCtaHref}>
                <Button variant={primaryCtaVariant}>
                  {primaryCtaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : null}
            {secondaryCtaLabel ? (
              <Link href={secondaryCtaHref}>
                <Button variant={secondaryCtaVariant}>{secondaryCtaLabel}</Button>
              </Link>
            ) : null}
          </div>
        </motion.div>

        {hasImage ? (
          <div className="relative hidden h-[600px] w-full lg:block">
            <motion.div
              animate={HERO_RIGHT_ANIMATE}
              className="absolute inset-0 overflow-hidden rounded-3xl border-8 border-white shadow-2xl"
              initial={HERO_RIGHT_INITIAL}
              transition={HERO_RIGHT_TRANSITION}
            >
              <motion.div className="absolute inset-y-[-150px] right-0 left-0" style={parallaxStyle}>
                <Image alt={resolvedImage?.alt ?? ""} className="object-cover" fill priority src={resolvedImage?.src ?? ""} />
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
        ) : null}
      </div>
    </section>
  );
};
