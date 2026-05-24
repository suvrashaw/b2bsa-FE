"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Mail, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface ContactCinematicCTAProps {
  backgroundImage: {
    alt: string;
    src: string;
  };
  badge: string;
  description: string;
  headingLines: [string, string];
  primaryCta: {
    href: string;
    label: string;
  };
  proofLabel: string;
  proofLogos: {
    alt: string;
    src: string;
  }[];
  secondaryCta: {
    href: string;
    label: string;
  };
  trustItems: {
    label: string;
    value: string;
  }[];
}

const decorativeStars = [
  { className: "left-[8%] top-[18%]", icon: Sparkles, size: "h-5 w-5" },
  { className: "right-[10%] top-[16%]", icon: Star, size: "h-3.5 w-3.5" },
  { className: "left-[14%] bottom-[22%]", icon: Star, size: "h-3 w-3" },
  { className: "right-[18%] bottom-[18%]", icon: Sparkles, size: "h-4 w-4" },
  { className: "left-1/2 top-[12%]", icon: Star, size: "h-2.5 w-2.5" },
  { className: "left-[60%] bottom-[12%]", icon: Sparkles, size: "h-4 w-4" },
];

const dotColumns = [0, 1, 2, 3, 4];
const dotRows = [0, 1, 2, 3];
const ctaViewport = { once: true } as const;
const ctaRevealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { delay, duration: 0.6 },
    y: 0,
  }),
};
const ctaBadgeVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55 },
    y: 0,
  },
};
const ctaFloatOneAnimate = { scale: [1, 1.06, 1], y: [0, -16, 0] };
const ctaFloatOneTransition = {
  duration: 8,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
} as const;
const ctaFloatTwoAnimate = { scale: [1, 1.08, 1], y: [0, 14, 0] };
const ctaFloatTwoTransition = {
  duration: 9,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
} as const;
const ctaFloatThreeAnimate = { scale: [1, 1.04, 1], x: [0, 12, 0], y: [0, -10, 0] };
const ctaFloatThreeTransition = {
  duration: 10,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
} as const;
const ctaSparkleAnimate = {
  opacity: [0.25, 0.8, 0.25],
  scale: [0.92, 1.1, 0.92],
  y: [0, -6, 0],
};
const ctaSparkleTransition = {
  duration: 5.5,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
} as const;

export const ContactCinematicCTA = ({
  backgroundImage,
  badge,
  description,
  headingLines,
  primaryCta,
  proofLabel,
  proofLogos,
  secondaryCta,
  trustItems,
}: ContactCinematicCTAProps) => {
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 36;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 36;
    setPointerOffset({ x, y });
  }, []);

  const resetPointer = useCallback(() => {
    setPointerOffset({ x: 0, y: 0 });
  }, []);

  const floatingBubbleOneStyle = useMemo(
    () => ({
      transform: `translate3d(${pointerOffset.x * 0.65}px, ${pointerOffset.y * 0.65}px, 0)`,
    }),
    [pointerOffset.x, pointerOffset.y]
  );
  const floatingBubbleTwoStyle = useMemo(
    () => ({
      transform: `translate3d(${-pointerOffset.x * 0.7}px, ${-pointerOffset.y * 0.55}px, 0)`,
    }),
    [pointerOffset.x, pointerOffset.y]
  );

  return (
    <section
      className="relative overflow-hidden bg-brand-charcoal py-24"
      id="contact"
      onMouseLeave={resetPointer}
      onMouseMove={handlePointerMove}
    >
      <div className="absolute inset-0">
        <Image
          alt={backgroundImage.alt}
          className="object-cover"
          fill
          sizes="100vw"
          src={backgroundImage.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,38,54,0.94),rgba(20,96,145,0.9),rgba(75,192,217,0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_45%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[8%]" style={floatingBubbleOneStyle}>
          <motion.div
            animate={ctaFloatOneAnimate}
            className="h-40 w-40 rounded-full bg-white/12 blur-3xl"
            transition={ctaFloatOneTransition}
          />
        </div>
        <div className="absolute right-[12%] bottom-16" style={floatingBubbleTwoStyle}>
          <motion.div
            animate={ctaFloatTwoAnimate}
            className="h-56 w-56 rounded-full bg-brand-cyan/20 blur-3xl"
            transition={ctaFloatTwoTransition}
          />
        </div>
        <motion.div
          animate={ctaFloatThreeAnimate}
          className="absolute top-1/3 left-1/2 h-28 w-28 rounded-full bg-white/8 blur-2xl"
          transition={ctaFloatThreeTransition}
        />

        <div className="absolute inset-0 opacity-30">
          {decorativeStars.map(({ className, icon: Icon, size }) => (
            <motion.div
              animate={ctaSparkleAnimate}
              className={cn("absolute text-white/70", className)}
              key={className}
              transition={ctaSparkleTransition}
            >
              <Icon className={size} />
            </motion.div>
          ))}
        </div>

        <div className="absolute top-24 right-[8%] grid grid-cols-5 gap-3 opacity-25">
          {dotRows.flatMap((row) =>
            dotColumns.map((column) => (
              <span className="h-1.5 w-1.5 rounded-full bg-white" key={`${row}-${column}`} />
            ))
          )}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-5 py-2.5 text-sm font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-md"
            initial="hidden"
            variants={ctaBadgeVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/80" />
            </span>
            {badge}
          </motion.div>

          <motion.div
            custom={0.08}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            <Heading
              as="h2"
              className="mt-8 font-heading text-4xl leading-[1.02] font-black text-white md:text-6xl"
              preserveClassName
            >
              <span className="block">{headingLines[0]}</span>
              <span className="mt-2 block bg-linear-to-r from-white via-brand-cyan to-white bg-clip-text text-transparent">
                {headingLines[1]}
              </span>
            </Heading>
          </motion.div>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/88 md:text-xl"
            custom={0.16}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            custom={0.24}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            <Button
              asChild
              className="min-w-[250px] rounded-full px-8 py-6 text-base shadow-2xl shadow-brand-charcoal/30"
              size="lg"
              variant="primary"
            >
              <Link href={primaryCta.href}>
                <CalendarDays className="mr-2 h-5 w-5" />
                {primaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              className="min-w-[200px] rounded-full border-white/30 bg-white/10 px-8 py-6 text-base text-white backdrop-blur-md hover:border-white/50 hover:bg-white/18 hover:text-white"
              size="lg"
              variant="outline"
            >
              <Link href={secondaryCta.href}>
                <Mail className="mr-2 h-5 w-5" />
                {secondaryCta.label}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4"
            custom={0.32}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {proofLogos.map((logo) => (
                <div
                  className="flex h-14 items-center rounded-full border border-white/18 bg-white/92 px-5 shadow-lg shadow-brand-charcoal/10"
                  key={logo.alt}
                >
                  <Image alt={logo.alt} height={22} src={logo.src} width={92} />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium tracking-[0.12em] text-white/82 uppercase">
              {proofLabel}
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            custom={0.4}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            {trustItems.map((item) => (
              <div
                className="rounded-[1.5rem] border border-white/16 bg-white/10 px-6 py-5 text-left backdrop-blur-md"
                key={item.label}
              >
                <p className="font-heading text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-white/74">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
