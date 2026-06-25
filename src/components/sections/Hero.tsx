"use client";

import type { CSSProperties, ReactNode } from "react";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface HeroProps {
  animateFromLeft?: boolean;
  centered?: boolean;
  description?: string;
  eyebrow?: ReactNode | string;
  imageOpacity?: number;
  images?: string[];
  mobileVideoUrl?: string;
  mobileVideoWebm?: string;
  poster?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  title: ReactNode | string;
  variant?: "compact" | "default";
  videoSrc?: string;
  videoUrl?: string;
  videoWebm?: string;
}

const CINEMATIC_VEIL_STYLE = {
  background: "linear-gradient(180deg, rgba(33, 52, 67, 0.5) 0%, rgba(30, 96, 145, 0.9) 90.865%)",
};
const PLACEHOLDER_IMAGE = "/media/home/hero/home_hero_bg.avif";
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

const EYEBROW_ANIMATE = { opacity: 1, y: 0 };
const EYEBROW_INITIAL = { opacity: 0, y: 16 };
const EYEBROW_TRANSITION = { delay: 0.2, duration: 0.6 };
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

const TITLE_LINE_LEFT_INITIAL = { opacity: 0, x: "-60px" };
const TITLE_LINE_LEFT_ANIMATE = { opacity: 1, x: 0, y: 0 };

const TitleLine = ({
  fromLeft,
  index,
  line,
}: {
  fromLeft?: boolean;
  index: number;
  line: ReactNode;
}) => {
  const lineTransition = useMemo(
    () => ({ delay: 0.3 + index * 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] as const }),
    [index]
  );
  return (
    <span className={fromLeft ? "block" : "block overflow-hidden"}>
      <motion.span
        animate={fromLeft ? TITLE_LINE_LEFT_ANIMATE : TITLE_LINE_ANIMATE}
        className="block"
        initial={fromLeft ? TITLE_LINE_LEFT_INITIAL : TITLE_LINE_INITIAL}
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

  const isDone = charCount >= totalChars;
  const visibleLines = lines.map((line, idx) => {
    const charsBeforeThis = lines.slice(0, idx).reduce((s, l) => s + l.length, 0);
    return line.slice(0, Math.min(line.length, Math.max(0, charCount - charsBeforeThis)));
  });
  const activeLineIdx = isDone
    ? -1
    : lines.findIndex((line, idx) => {
        const charsBeforeThis = lines.slice(0, idx).reduce((s, l) => s + l.length, 0);
        return charCount < charsBeforeThis + line.length;
      });

  return { activeLineIdx, visibleLines };
};

const TypewriterLine = ({
  fullText,
  isActive,
  text,
}: {
  fullText: string;
  isActive: boolean;
  text: string;
}) => (
  <span className="relative block">
    <span aria-hidden="true" className="invisible">
      {fullText}
    </span>
    <span className="absolute inset-0">
      {text}
      {isActive && (
        <span className="ml-0.5 inline-block h-[0.85em] w-[2px] animate-pulse bg-current align-middle" />
      )}
    </span>
  </span>
);

const HeroBackground = ({
  currentIndex,
  effectiveVideoUrl,
  imageOpacityStyle,
  images,
  isVideoMode,
  mobileVideoUrl,
  mobileVideoWebm,
  poster,
  videoSrc,
  videoWebm,
}: {
  currentIndex: number;
  effectiveVideoUrl: string;
  imageOpacityStyle: CSSProperties;
  images?: string[];
  isVideoMode: boolean;
  mobileVideoUrl?: string;
  mobileVideoWebm?: string;
  poster?: string;
  videoSrc?: string;
  videoWebm?: string;
}) => {
  if (isVideoMode) {
    const hasMobileVideo = Boolean(mobileVideoUrl);
    return (
      <>
        <video
          autoPlay
          className={cn(
            "hero-bg-video absolute inset-0 size-full object-cover",
            hasMobileVideo && "hidden md:block"
          )}
          loop
          muted
          playsInline
          preload="metadata"
        >
          {videoWebm && <source src={videoWebm} type="video/webm" />}
          <source src={effectiveVideoUrl} type="video/mp4" />
          <track default kind="captions" label="English" src="data:text/vtt,WEBVTT" srcLang="en" />
        </video>
        {hasMobileVideo && (
          <video
            autoPlay
            className="hero-bg-video absolute inset-0 size-full object-cover md:hidden"
            loop
            muted
            playsInline
            preload="metadata"
          >
            {mobileVideoWebm && <source src={mobileVideoWebm} type="video/webm" />}
            <source src={mobileVideoUrl!} type="video/mp4" />
            <track
              default
              kind="captions"
              label="English"
              src="data:text/vtt,WEBVTT"
              srcLang="en"
            />
          </video>
        )}
      </>
    );
  }
  return videoSrc ? (
      <video
        autoPlay
        className="absolute inset-0 size-full object-cover"
        loop
        muted
        playsInline
        poster={poster ?? images?.[0]}
        src={videoSrc}
      >
        <track default kind="captions" label="English" src="data:text/vtt,WEBVTT" srcLang="en" />
      </video>
    ) : (
      <AnimatePresence>
        <motion.div
          animate={IMAGE_ANIMATE}
          className="absolute inset-0"
          exit={IMAGE_EXIT}
          initial={IMAGE_INITIAL}
          key={currentIndex}
          style={imageOpacityStyle}
          transition={IMAGE_TRANSITION}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src={images?.[currentIndex] || PLACEHOLDER_IMAGE}
          />
        </motion.div>
      </AnimatePresence>
    );
};

export const Hero = ({
  animateFromLeft = false,
  centered = false,
  description,
  eyebrow,
  imageOpacity = 1,
  images,
  mobileVideoUrl,
  mobileVideoWebm,
  poster,
  primaryCta,
  secondaryCta,
  title,
  variant = "default",
  videoSrc,
  videoUrl,
  videoWebm,
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isVideoMode = !images?.length;
  const effectiveVideoUrl = videoUrl ?? "/media/demo-video.mp4";
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
  const imageOpacityStyle = useMemo(() => ({ opacity: imageOpacity }), [imageOpacity]);

  let imageModeClass =
    "items-center md:items-end min-h-[560px] pt-28 pb-12 md:min-h-svh md:pt-48 md:pb-20";
  if (variant === "compact") {
    imageModeClass = "items-center md:items-end min-h-[50vh] pt-24 pb-12 md:pt-32 md:pb-16";
  } else if (isVideoMode) {
    imageModeClass =
      "items-center md:items-end min-h-[560px] pt-28 pb-24 md:min-h-svh md:pt-48 md:pb-40";
  }

  return (
    <section
      className={cn("relative flex overflow-hidden bg-brand-charcoal", imageModeClass)}
      ref={containerRef}
    >
      {isVideoMode && (
        <link
          as="video"
          href={videoWebm ?? effectiveVideoUrl}
          rel="preload"
          type={videoWebm ? "video/webm" : "video/mp4"}
        />
      )}
      <div className="absolute inset-0 z-0">
        <HeroBackground
          currentIndex={currentIndex}
          effectiveVideoUrl={effectiveVideoUrl}
          imageOpacityStyle={imageOpacityStyle}
          images={images}
          isVideoMode={isVideoMode}
          mobileVideoUrl={mobileVideoUrl}
          mobileVideoWebm={mobileVideoWebm}
          poster={poster}
          videoSrc={videoSrc}
          videoWebm={videoWebm}
        />
        <div className="pointer-events-none absolute inset-0 z-10" style={CINEMATIC_VEIL_STYLE} />
      </div>

      <div
        className={cn(
          "relative z-20 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8",
          centered && "flex flex-col items-center text-center"
        )}
      >
        <motion.div className={cn("max-w-4xl", centered && "w-full")} style={contentStyle}>
          {eyebrow && (
            <motion.div
              animate={EYEBROW_ANIMATE}
              initial={EYEBROW_INITIAL}
              transition={EYEBROW_TRANSITION}
            >
              {typeof eyebrow === "string" ? (
                <Eyebrow className="mb-4 border-white/30 bg-white/10 text-white/90">
                  {eyebrow}
                </Eyebrow>
              ) : (
                eyebrow
              )}
            </motion.div>
          )}
          <SectionHeader as="h1" className="mb-8" style={H1_STYLE}>
            {isStringTitle && !animateFromLeft
              ? (titleLines as string[]).map((_, index) => (
                  <TypewriterLine
                    fullText={stringLines[index] ?? ""}
                    isActive={activeLineIdx === index}
                    key={index}
                    text={visibleLines[index] ?? ""}
                  />
                ))
              : (titleLines as ReactNode[]).map((line, index) => (
                  <TitleLine fromLeft={animateFromLeft} index={index} key={index} line={line} />
                ))}
          </SectionHeader>

          {description && (
            <motion.p
              animate={DESCRIPTION_ANIMATE}
              className="type-body-l mb-12 max-w-2xl leading-relaxed font-semibold"
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
              className={cn(
                "flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:gap-6",
                centered && "justify-center"
              )}
              initial={CTA_INITIAL}
              transition={CTA_TRANSITION}
            >
              {primaryCta && (
                <Link
                  className="group relative flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold whitespace-nowrap text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
                  href={primaryCta.href}
                  style={PRIMARY_CTA_STYLE}
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-3 size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  className="flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold whitespace-nowrap text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
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
