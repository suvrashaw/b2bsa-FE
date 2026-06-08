"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";
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
}

const HERO_PRIMARY_CTA_STYLE = {
  background:
    "linear-gradient(135deg, rgba(116,219,243,0.96) 0%, rgba(52,144,181,0.98) 38%, rgba(30,96,145,1) 100%)",
  border: "1px solid rgba(201,244,255,0.68)",
  borderRadius: "4px",
  boxShadow:
    "0 22px 44px rgba(8,26,41,0.28), 0 8px 18px rgba(52,144,181,0.26), inset 0 1px 0 rgba(255,255,255,0.34)",
};
const HERO_SECONDARY_CTA_STYLE = {
  backdropFilter: "blur(12px)",
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.3) 100%)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  borderRadius: "4px",
  boxShadow: "0 18px 38px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
  WebkitBackdropFilter: "blur(12px)",
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
}: CinematicSequenceProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { firstFrameLoaded, imagesRef } = useCinematicFrameImages(
    frameCount,
    frameUrlTemplate,
    frameUrls
  );

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: containerRef,
  });

  const getNearestFrame = (index: number) => {
    const images = imagesRef.current;
    if (images[index]) return images[index];
    for (let offset = 1; offset < frameCount; offset++) {
      if (index - offset >= 0 && images[index - offset]) return images[index - offset];
      if (index + offset < frameCount && images[index + offset]) return images[index + offset];
    }
    return null;
  };

  // Track progress and draw the corresponding frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!firstFrameLoaded || !canvasRef.current) return;

    const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = getNearestFrame(frameIndex);

    if (ctx && img) {
      drawCover(ctx, img, canvas.width, canvas.height);
    }
  });

  // Initial draw and handle resize
  useEffect(() => {
    if (!firstFrameLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount));
      const img = getNearestFrame(frameIndex);
      if (ctx && img) {
        drawCover(ctx, img, canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount, firstFrameLoaded, scrollYProgress]);

  return (
    <section className="relative h-[400vh] bg-black" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Frame canvas */}
        <canvas className="absolute inset-0" ref={canvasRef} />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/[0.56]" />

        {/* Persistent hero content, visible throughout the scroll */}
        {heroOverlay && (
          <div className="absolute bottom-0 left-0 z-20 max-w-3xl px-8 pb-16 md:px-16 md:pb-20">
            {heroOverlay.eyebrow && (
              <p className="mb-4 text-sm font-bold tracking-[0.3em] text-brand-cyan uppercase drop-shadow-md">
                {heroOverlay.eyebrow}
              </p>
            )}
            <Heading
              as="h1"
              className="mb-6"
              style={HERO_H1_STYLE}
            >
              {heroOverlay.title}
            </Heading>
            <p
              className="mb-10 max-w-xl text-base leading-relaxed font-semibold"
              style={HERO_DESC_STYLE}
            >
              {heroOverlay.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                className="hero-primary-cta flex min-h-[52px] items-center justify-center rounded-[4px] px-8 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105"
                href={heroOverlay.primaryCta.href}
                style={HERO_PRIMARY_CTA_STYLE}
              >
                {heroOverlay.primaryCta.label}
              </Link>
              <Link
                className="hero-secondary-cta flex min-h-[52px] items-center justify-center rounded-[4px] px-8 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105"
                href={heroOverlay.secondaryCta.href}
                style={HERO_SECONDARY_CTA_STYLE}
              >
                {heroOverlay.secondaryCta.label}
              </Link>
            </div>
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

const LOAD_CONCURRENCY = 8;

const createEmptyFrames = (frameCount: number) =>
  Array.from({ length: frameCount }, (): HTMLImageElement | null => null);

const getCinematicFrameUrl = (
  index: number,
  frameUrlTemplate?: string,
  frameUrls?: string[]
) => {
  if (frameUrls && frameUrls.length >= index) return frameUrls[index - 1];
  if (frameUrlTemplate) return frameUrlTemplate.replace("%d", index.toString().padStart(3, "0"));
  return "";
};

const loadCinematicFrame = (
  frameNumber: number,
  getFrameUrl: (index: number) => string,
  onFrameLoad: (frameNumber: number, image: HTMLImageElement) => void
): Promise<void> =>
  new Promise((resolve) => {
    const image = new globalThis.Image();
    const handleLoad = () => {
      onFrameLoad(frameNumber, image);
      resolve();
    };
    const handleError = () => resolve();

    image.addEventListener("load", handleLoad, { once: true });
    image.addEventListener("error", handleError, { once: true });
    image.src = getFrameUrl(frameNumber);
  });

const loadCinematicFrames = async (
  frameCount: number,
  loadFrame: (frameNumber: number) => Promise<void>
) => {
  let nextFrameNumber = 1;

  const loadNextFrame = async () => {
    while (nextFrameNumber <= frameCount) {
      const frameNumber = nextFrameNumber;
      nextFrameNumber++;
      await loadFrame(frameNumber);
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(LOAD_CONCURRENCY, frameCount) }, () => loadNextFrame())
  );
};

const useCinematicFrameImages = (
  frameCount: number,
  frameUrlTemplate?: string,
  frameUrls?: string[]
) => {
  const imagesRef = useRef<(HTMLImageElement | null)[]>(createEmptyFrames(frameCount));
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const loadSignature = `${frameCount}:${frameUrlTemplate || ""}:${(frameUrls || []).join(",")}`;

  useEffect(() => {
    let cancelled = false;
    imagesRef.current = createEmptyFrames(frameCount);

    const getFrameUrl = (index: number) => {
      return getCinematicFrameUrl(index, frameUrlTemplate, frameUrls);
    };

    const handleFrameLoad = (frameNumber: number, image: HTMLImageElement) => {
      if (cancelled) return;

      imagesRef.current[frameNumber - 1] = image;
      if (frameNumber === 1) {
        setFirstFrameLoaded(true);
      }
    };

    queueMicrotask(() => {
      if (!cancelled) setFirstFrameLoaded(false);
    });

    loadCinematicFrames(frameCount, (frameNumber) =>
      loadCinematicFrame(frameNumber, getFrameUrl, handleFrameLoad)
    ).catch(() => {});

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSignature]);

  return { firstFrameLoaded, imagesRef };
};
