"use client";

import type { ReactNode } from "react";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface HeroProps {
  description?: string;
  images?: string[];
  poster?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  title: ReactNode | string;
  variant?: "compact" | "default";
  videoSrc?: string;
  videoUrl?: string;
}

const CINEMATIC_VEIL_STYLE = {
  background: "linear-gradient(180deg, rgba(33, 52, 67, 0.5) 0%, rgba(30, 96, 145, 0.9) 90.865%)",
};
const H1_STYLE = {
  color: "rgba(255, 255, 255, 0.98)",
  textShadow: "0 20px 50px rgba(4, 9, 15, 0.24)",
};
const DESCRIPTION_STYLE = { color: "rgba(255, 255, 255, 0.86)" };
const PRIMARY_CTA_STYLE = {
  background: `linear-gradient(135deg, rgba(116, 219, 243, 0.96) 0%, rgba(52, 144, 181, 0.98) 38%, rgba(30, 96, 145, 1) 100%)`,
  border: "1px solid rgba(201, 244, 255, 0.68)",
  borderRadius: "4px",
  boxShadow:
    "0 22px 44px rgba(8, 26, 41, 0.28), 0 8px 18px rgba(52, 144, 181, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.34)",
};
const SECONDARY_CTA_STYLE = {
  backdropFilter: "blur(12px)",
  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.3) 100%)`,
  border: "1px solid rgba(255, 255, 255, 0.25)",
  borderRadius: "4px",
  boxShadow: "0 18px 38px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
  WebkitBackdropFilter: "blur(12px)",
};

const DESCRIPTION_ANIMATE = { opacity: 1, y: 0 };
const DESCRIPTION_INITIAL = { opacity: 0, y: 20 };
const DESCRIPTION_TRANSITION = { delay: 0.7, duration: 0.8 };
const CTA_ANIMATE = { opacity: 1, y: 0 };
const CTA_INITIAL = { opacity: 0, y: 20 };
const CTA_TRANSITION = { delay: 0.9, duration: 0.6 };
const TITLE_LINE_ANIMATE = { opacity: 1, y: 0 };
const TITLE_LINE_INITIAL = { opacity: 0, y: "110%" };
const IMAGE_ANIMATE = { opacity: 1 };
const IMAGE_INITIAL = { opacity: 0 };
const IMAGE_EXIT = { opacity: 0 };
const IMAGE_TRANSITION = { duration: 1.2 };

const TitleLine = ({ index, line }: { index: number; line: ReactNode }) => {
  const lineTransition = useMemo(
    () => ({ delay: 0.4 + index * 0.15, duration: 0.72, ease: [0.22, 1, 0.36, 1] as const }),
    [index]
  );
  return (
    <span className="block overflow-hidden">
      <motion.span
        animate={TITLE_LINE_ANIMATE}
        className="block"
        initial={TITLE_LINE_INITIAL}
        transition={lineTransition}
      >
        {line}
      </motion.span>
    </span>
  );
};

const useTypewriter = (lines: string[], charDelay = 30) => {
  const [charCount, setCharCount] = useState(0);
  const totalChars = useMemo(() => lines.reduce((s, l) => s + l.length, 0), [lines]);

  useEffect(() => {
    if (charCount >= totalChars) return;
    const t = setTimeout(() => setCharCount((c) => c + 1), charDelay);
    return () => clearTimeout(t);
  }, [charCount, totalChars, charDelay]);

  const done = charCount >= totalChars;
  const visibleLines = lines.map((line, idx) => {
    const charsBeforeThis = lines.slice(0, idx).reduce((s, l) => s + l.length, 0);
    return line.slice(0, Math.min(line.length, Math.max(0, charCount - charsBeforeThis)));
  });
  const activeLineIdx = done
    ? -1
    : lines.findIndex((line, idx) => {
        const charsBeforeThis = lines.slice(0, idx).reduce((s, l) => s + l.length, 0);
        return charCount < charsBeforeThis + line.length;
      });

  return { activeLineIdx, visibleLines };
};

const TypewriterLine = ({ isActive, text }: { isActive: boolean; text: string }) => (
  <span className="block">
    {text}
    {isActive && (
      <span className="ml-0.5 inline-block h-[0.85em] w-[2px] animate-pulse bg-current align-middle" />
    )}
  </span>
);

export const Hero = ({
  description,
  images,
  poster,
  primaryCta,
  secondaryCta,
  title,
  variant = "default",
  videoSrc,
  videoUrl,
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isVideoMode = !images?.length;
  const effectiveVideoUrl = videoUrl ?? "/videos/hero-gtc-2026.mp4";
  const isStringTitle = typeof title === "string";
  const titleLines = isStringTitle ? (title as string).split("\n") : [title as ReactNode];
  const stringLines = isStringTitle ? (title as string).split("\n") : [];
  const { activeLineIdx, visibleLines } = useTypewriter(stringLines, 30);

  const imagesLength = images?.length ?? 0;
  useEffect(() => {
    if (imagesLength <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesLength);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagesLength]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const contentStyle = useMemo(() => ({ y }), [y]);

  const imageModeClass =
    variant === "compact"
      ? "items-center md:items-end min-h-[50vh] pt-16 pb-12 md:pt-24 md:pb-16"
      : "items-center md:items-end min-h-[560px] pt-20 pb-12 md:min-h-svh md:pt-32 md:pb-20";
  const sectionClass = isVideoMode
    ? "min-h-[560px] md:min-h-svh items-end pt-24 pb-16 md:pt-32 md:pb-20"
    : imageModeClass;

  let background: React.ReactNode;
  if (isVideoMode) {
    background = (
      <video
        autoPlay
        className="hero-bg-video absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={effectiveVideoUrl} type="video/mp4" />
      </video>
    );
  } else if (videoSrc) {
    background = (
      <video
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={poster ?? images?.[0]}
        src={videoSrc}
      />
    );
  } else {
    background = (
      <AnimatePresence>
        <motion.div
          animate={IMAGE_ANIMATE}
          className="absolute inset-0"
          exit={IMAGE_EXIT}
          initial={IMAGE_INITIAL}
          key={currentIndex}
          transition={IMAGE_TRANSITION}
        >
          <Image alt="" className="object-cover" fill priority src={images?.[currentIndex] ?? ""} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <section
      className={cn("relative flex overflow-hidden bg-brand-charcoal", sectionClass)}
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0">
        {background}
        <div className="pointer-events-none absolute inset-0 z-10" style={CINEMATIC_VEIL_STYLE} />
      </div>

      <div className="relative z-20 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <motion.div className="max-w-4xl" style={contentStyle}>
          <Heading as="h1" className="mb-8" style={H1_STYLE}>
            {isStringTitle
              ? (titleLines as string[]).map((_, index) => (
                  <TypewriterLine
                    isActive={activeLineIdx === index}
                    key={index}
                    text={visibleLines[index] ?? ""}
                  />
                ))
              : (titleLines as ReactNode[]).map((line, index) => (
                  <TitleLine index={index} key={index} line={line} />
                ))}
          </Heading>

          {description && (
            <motion.p
              animate={DESCRIPTION_ANIMATE}
              className="mb-12 max-w-2xl text-base leading-relaxed font-semibold lg:text-xl"
              initial={DESCRIPTION_INITIAL}
              style={DESCRIPTION_STYLE}
              transition={DESCRIPTION_TRANSITION}
            >
              {description}
            </motion.p>
          )}

          {(primaryCta ?? secondaryCta) && (
            <motion.div
              animate={CTA_ANIMATE}
              className="flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:gap-6"
              initial={CTA_INITIAL}
              transition={CTA_TRANSITION}
            >
              {primaryCta && (
                <Link
                  className="group relative flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
                  href={primaryCta.href}
                  style={PRIMARY_CTA_STYLE}
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  className="flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
                  href={secondaryCta.href}
                  style={SECONDARY_CTA_STYLE}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .hero-bg-video {
          animation: hero-media-drift 22s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes hero-media-drift {
          0% {
            transform: scale(1.03) translate3d(-1.5%, 0, 0);
          }
          50% {
            transform: scale(1.08) translate3d(1%, -1.2%, 0);
          }
          100% {
            transform: scale(1.05) translate3d(0.5%, 1%, 0);
          }
        }
      `}</style>
    </section>
  );
};
