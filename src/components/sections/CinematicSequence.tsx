"use client";

import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  type CinematicSequenceContent,
  type CinematicStoryBeat,
  HOME_CINEMATIC_SEQUENCE_CONTENT,
} from "@/content/home";

export interface CinematicSequenceProps {
  beats?: CinematicSequenceContent["beats"];
  content?: CinematicSequenceContent;
  frameCount?: CinematicSequenceContent["frameCount"];
  frameUrls?: CinematicSequenceContent["frameUrls"];
  frameUrlTemplate?: CinematicSequenceContent["frameUrlTemplate"];
  loadingText?: CinematicSequenceContent["loadingText"];
}

export const CinematicSequence = ({
  content = HOME_CINEMATIC_SEQUENCE_CONTENT,
  beats = content.beats,
  frameCount = content.frameCount,
  frameUrls = content.frameUrls,
  frameUrlTemplate = content.frameUrlTemplate,
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

    // Map latest (0-1) to frame index (0-59)
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
      // Re-draw current frame based on scroll on resize
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount));
      if (ctx && imagesRef.current[frameIndex]) {
        drawCover(ctx, imagesRef.current[frameIndex], canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once

    return () => window.removeEventListener("resize", handleResize);
  }, [frameCount, imagesLoaded, imagesRef, scrollYProgress]);

  return (
    <section className="relative h-[400vh] bg-black" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Frame canvas */}
        <canvas className="absolute inset-0" ref={canvasRef} />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Loading Indicator (Optional but good UX) */}
        {!imagesLoaded && (
          <div className="absolute z-50 text-sm font-semibold tracking-widest text-white/50 uppercase">
            {loadingText}
          </div>
        )}

        {beats.map((beat) => (
          <CinematicBeatOverlay beat={beat} key={beat.id} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

const CinematicBeatOverlay = ({
  beat,
  progress,
}: {
  beat: CinematicStoryBeat;
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, beat.opacityInput, beat.opacityOutput);
  const y = useTransform(progress, beat.yInput, beat.yOutput);
  const pointerEvents = useTransform(opacity, (v) => (v > 0 ? "auto" : "none"));
  const beatStyle = useMemo(() => ({ opacity, pointerEvents, y }), [opacity, pointerEvents, y]);

  return (
    <motion.div className={beat.className} style={beatStyle}>
      {beat.eyebrow && <span className={beat.eyebrow.className}>{beat.eyebrow.text}</span>}
      <h2 className={beat.titleClassName}>{beat.title}</h2>
      {beat.description && <p className={beat.description.className}>{beat.description.text}</p>}
      {beat.cta && (
        <Link href="/contact">
          <Button size="lg" variant="primary">
            {beat.cta.label}
          </Button>
        </Link>
      )}
    </motion.div>
  );
}

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
}

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
        // Handle %d with padding
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
      // Important to push first to maintain exact order
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameUrlTemplate, frameUrls, loadSignature]);

  return { imagesLoaded: loadedSignature === loadSignature, imagesRef };
}
