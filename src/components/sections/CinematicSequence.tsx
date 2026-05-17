"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  type CinematicSequenceContent,
  HOME_CINEMATIC_SEQUENCE_CONTENT,
} from "@/content/home";

export interface CinematicSequenceProps {
  content?: CinematicSequenceContent;
  frameCount?: CinematicSequenceContent["frameCount"];
  frameUrls?: CinematicSequenceContent["frameUrls"];
  frameUrlTemplate?: CinematicSequenceContent["frameUrlTemplate"];
  heroOverlay?: CinematicSequenceContent["heroOverlay"];
  loadingText?: CinematicSequenceContent["loadingText"];
}

const HERO_PRIMARY_CTA_STYLE = {
  background:
    "linear-gradient(135deg, rgba(116,219,243,0.96) 0%, rgba(52,144,181,0.98) 38%, rgba(30,96,145,1) 100%)",
  border: "1px solid rgba(201,244,255,0.68)",
  boxShadow:
    "0 22px 44px rgba(8,26,41,0.28), 0 8px 18px rgba(52,144,181,0.26), inset 0 1px 0 rgba(255,255,255,0.34)",
};
const HERO_SECONDARY_CTA_STYLE = {
  backdropFilter: "blur(18px) saturate(150%)",
  background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 100%)",
  border: "1px solid rgba(255,255,255,0.28)",
  boxShadow: "0 18px 38px rgba(8,12,18,0.2), inset 0 1px 0 rgba(255,255,255,0.28)",
  WebkitBackdropFilter: "blur(18px) saturate(150%)",
};
const HERO_H1_STYLE = {
  color: "rgba(255,255,255,0.98)",
  textShadow: "0 20px 50px rgba(4,9,15,0.3)",
};
const HERO_DESC_STYLE = { color: "rgba(255,255,255,0.86)" };

export const CinematicSequence = ({
  content = HOME_CINEMATIC_SEQUENCE_CONTENT,
  frameCount = content.frameCount,
  frameUrls = content.frameUrls,
  frameUrlTemplate = content.frameUrlTemplate,
  heroOverlay = content.heroOverlay,
  loadingText = content.loadingText,
}: CinematicSequenceProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { imagesLoaded, imagesRef } = useCinematicFrameImages(
    frameCount,
    frameUrlTemplate,
    frameUrls
  );

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: containerRef,
  });

  // Track progress and draw the corresponding frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current) return;

    const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[frameIndex];

    if (ctx && img) {
      drawCover(ctx, img, canvas.width, canvas.height);
    }
  });

  // Initial draw and handle resize
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount));
      if (ctx && imagesRef.current[frameIndex]) {
        drawCover(ctx, imagesRef.current[frameIndex], canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [frameCount, imagesLoaded, imagesRef, scrollYProgress]);

  return (
    <section className="relative h-[400vh] bg-black" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Frame canvas */}
        <canvas className="absolute inset-0" ref={canvasRef} />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Persistent hero content — visible throughout the scroll */}
        {heroOverlay && (
          <div className="absolute bottom-0 left-0 z-20 max-w-3xl px-8 pb-16 md:px-16 md:pb-20">
            {heroOverlay.eyebrow && (
              <p className="mb-4 text-sm font-bold tracking-[0.3em] text-brand-cyan uppercase drop-shadow-md">
                {heroOverlay.eyebrow}
              </p>
            )}
            <h1
              className="mb-6 font-heading text-4xl leading-[1.05] font-black lg:text-6xl"
              style={HERO_H1_STYLE}
            >
              {heroOverlay.title}
            </h1>
            <p
              className="mb-10 max-w-xl text-lg leading-relaxed font-semibold"
              style={HERO_DESC_STYLE}
            >
              {heroOverlay.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="flex min-h-[52px] items-center justify-center rounded-full px-8 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105"
                href={heroOverlay.primaryCta.href}
                style={HERO_PRIMARY_CTA_STYLE}
              >
                {heroOverlay.primaryCta.label}
              </Link>
              <Link
                className="flex min-h-[52px] items-center justify-center rounded-full px-8 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105"
                href={heroOverlay.secondaryCta.href}
                style={HERO_SECONDARY_CTA_STYLE}
              >
                {heroOverlay.secondaryCta.label}
              </Link>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {!imagesLoaded && (
          <div className="absolute z-50 text-sm font-semibold tracking-widest text-white/50 uppercase">
            {loadingText}
          </div>
        )}
      </div>
    </section>
  );
};

const drawCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) => {
  const imgRatio = img.width / img.height;
  const canvasRatio = w / h;
  let renderH, renderW, x, y;

  if (imgRatio > canvasRatio) {
    renderH = h;
    renderW = img.width * (h / img.height);
    x = (w - renderW) / 2;
    y = 0;
  } else {
    renderW = w;
    renderH = img.height * (w / img.width);
    x = 0;
    y = (h - renderH) / 2;
  }

  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, x, y, renderW, renderH);
};

const useCinematicFrameImages = (
  frameCount: number,
  frameUrlTemplate?: string,
  frameUrls?: string[]
) => {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadSignature = `${frameCount}:${frameUrlTemplate || ""}:${(frameUrls || []).join(",")}`;
  const [loadedSignature, setLoadedSignature] = useState<null | string>(null);

  useEffect(() => {
    const getFrameUrl = (index: number) => {
      if (frameUrls && frameUrls.length >= index) {
        return frameUrls[index - 1];
      }
      if (frameUrlTemplate) {
        return frameUrlTemplate.replace("%d", index.toString().padStart(3, "0"));
      }
      return "";
    };

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let cancelled = false;

    for (let i = 1; i <= frameCount; i++) {
      const img = new globalThis.Image();
      img.src = getFrameUrl(i);
      img.addEventListener("load", () => {
        if (cancelled) return;

        loadedCount++;
        if (loadedCount === frameCount) {
          setLoadedSignature(loadSignature);
        }
      });
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameUrlTemplate, frameUrls, loadSignature]);

  return { imagesLoaded: loadedSignature === loadSignature, imagesRef };
};
