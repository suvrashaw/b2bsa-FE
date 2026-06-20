"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Mail, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

const PROOF_LOGOS = [
  { alt: "Airtel", src: "/media/client-logos/Airtel-Icon.svg" },
  { alt: "SingleStore", src: "/media/client-logos/SingleStore-Icon.svg" },
  { alt: "CSC", src: "/media/client-logos/CSC-Icon.svg" },
  { alt: "United Payments", src: "/media/client-logos/UnitedPayments-Icon.svg" },
] as const;

export interface ContactUsProps {
  backgroundImage?: {
    alt: string;
    src: string;
  };
  badge?: string;
  description?: string;
  headingLines?: string[];
  primaryCta: {
    href: string;
    label: string;
    opensModal?: boolean;
  };
  proofLabel?: string;
  secondaryCta?: {
    href: string;
    label: string;
  };
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

export const ContactUs = ({
  backgroundImage = { alt: "B2B Sales Agency", src: "/media/home/hero/home_hero_bg.avif" },
  badge,
  description,
  headingLines,
  primaryCta,
  proofLabel,
  secondaryCta,
}: ContactUsProps) => {
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handlePointerMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 36;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 36;
    setPointerOffset({ x, y });
  }, []);

  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);
  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);

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
      className="relative overflow-hidden bg-brand-charcoal py-12 md:py-16 lg:py-20"
      id="contact"
      onMouseLeave={resetPointer}
      onMouseMove={handlePointerMove}
    >
      <div className="absolute inset-0">
        {backgroundImage ? (
          <Image
            alt={backgroundImage.alt}
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src={backgroundImage.src}
          />
        ) : null}
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

      <div className="relative z-10 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {badge ? (
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
          ) : null}

          {headingLines && headingLines.length > 0 && (
            <motion.div
              custom={0.08}
              initial="hidden"
              variants={ctaRevealVariants}
              viewport={ctaViewport}
              whileInView="visible"
            >
              <SectionHeader as="h2" className="mt-8 text-white">
                <span className="block text-white/80">{headingLines[0]}</span>
                {headingLines[1] ? (
                  <span className="mt-2 block text-white">{headingLines[1]}</span>
                ) : null}
              </SectionHeader>
            </motion.div>
          )}

          {description && (
            <motion.p
              className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/88 md:text-xl"
              custom={0.16}
              initial="hidden"
              variants={ctaRevealVariants}
              viewport={ctaViewport}
              whileInView="visible"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            custom={0.24}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            {primaryCta.opensModal ? (
              <Button onClick={openContactModal} size="lg" variant="white">
                <CalendarDays className="mr-2 h-5 w-5" />
                {primaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            ) : (
              <Button asChild size="lg" variant="white">
                <Link href={primaryCta.href}>
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}

            {secondaryCta ? (
              <Button asChild size="lg" variant="white-outline">
                <Link href={secondaryCta.href}>
                  <Mail className="mr-2 h-5 w-5" />
                  {secondaryCta.label}
                </Link>
              </Button>
            ) : null}
          </motion.div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-4"
            custom={0.32}
            initial="hidden"
            variants={ctaRevealVariants}
            viewport={ctaViewport}
            whileInView="visible"
          >
            <div className="flex -space-x-3">
              {PROOF_LOGOS.map((logo) => (
                <div
                  className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/50 bg-white transition-all duration-300 hover:z-10 hover:scale-110"
                  key={logo.alt}
                >
                  <Image
                    alt={logo.alt}
                    className="object-cover"
                    height={40}
                    src={logo.src}
                    width={40}
                  />
                </div>
              ))}
            </div>
            {proofLabel ? <p className="text-sm font-medium text-white/80">{proofLabel}</p> : null}
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};
