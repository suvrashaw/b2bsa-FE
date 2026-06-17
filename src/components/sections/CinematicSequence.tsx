"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  type CinematicSequenceContent,
  HOME_CINEMATIC_SEQUENCE_CONTENT,
} from "@/content/home/content";

export interface CinematicSequenceProps {
  content?: CinematicSequenceContent;
  frameCount?: CinematicSequenceContent["frameCount"];
  frameUrls?: CinematicSequenceContent["frameUrls"];
  frameUrlTemplate?: CinematicSequenceContent["frameUrlTemplate"];
}

export const CinematicSequence = ({
  content = HOME_CINEMATIC_SEQUENCE_CONTENT,
  frameCount = content.frameCount,
  frameUrls = content.frameUrls,
  frameUrlTemplate = content.frameUrlTemplate,
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

  const getNearestFrame = useCallback(
    (index: number) => {
      const images = imagesRef.current;
      if (images[index]) return images[index];
      for (let offset = 1; offset < frameCount; offset++) {
        if (index - offset >= 0 && images[index - offset]) return images[index - offset];
        if (index + offset < frameCount && images[index + offset]) return images[index + offset];
      }
      return null;
    },
    [frameCount, imagesRef]
  );

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
  }, [frameCount, firstFrameLoaded, getNearestFrame, scrollYProgress]);

  return (
    <section className="relative h-[400vh] bg-black" ref={containerRef}>
      <div className="sticky top-0 flex h-dvh w-full items-center justify-center overflow-hidden">
        {/* Frame canvas */}
        <canvas className="absolute inset-0" ref={canvasRef} />

        <div className="absolute inset-0 bg-black/[0.56]" />
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

const getCinematicFrameUrl = (index: number, frameUrlTemplate?: string, frameUrls?: string[]) => {
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

    // eslint-disable-next-line compat/compat
    queueMicrotask(() => {
      if (!cancelled) setFirstFrameLoaded(false);
    });

    loadCinematicFrames(frameCount, (frameNumber) =>
      loadCinematicFrame(frameNumber, getFrameUrl, handleFrameLoad)
    ).catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameUrlTemplate, frameUrls]);

  return { firstFrameLoaded, imagesRef };
};
