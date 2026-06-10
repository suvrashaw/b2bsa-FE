"use client";

import type { MotionValue } from "framer-motion";
import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";

import { CultureReasonCard } from "@/components/items/CultureReasonCard";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

// ─── ZoomParallax ────────────────────────────────────────────────────────────

interface ParallaxImage {
  alt?: string;
  src: string;
}

interface ParallaxItemProps {
  alt?: string;
  index: number;
  scale: MotionValue<number>;
  src: string;
}

const ParallaxItem = ({ alt, index, scale, src }: ParallaxItemProps) => {
  const motionStyle = useMemo(() => ({ scale }), [scale]);

  return (
    <motion.div
      className={`absolute top-0 flex h-full w-full items-center justify-center ${
        index === 1
          ? "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]"
          : ""
      } ${
        index === 2
          ? "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]"
          : ""
      } ${index === 3 ? "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]" : ""} ${
        index === 4
          ? "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]"
          : ""
      } ${
        index === 5
          ? "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]"
          : ""
      } ${
        index === 6
          ? "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]"
          : ""
      } `}
      style={motionStyle}
    >
      <div className="relative h-[25vh] w-[25vw]">
        <Image
          alt={alt || `Parallax image ${index + 1}`}
          className="object-cover"
          fill
          sizes="25vw"
          src={src || "/placeholder.svg"}
        />
      </div>
    </motion.div>
  );
};

const ZoomParallax = ({ centerText, images }: { centerText?: string; images: ParallaxImage[] }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: container,
  });

  const scale5_center = useTransform(scrollYProgress, [0, 0.8, 1], [1, 5, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 5, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 6, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 8, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 0.8, 1], [1, 9, 9]);

  const textOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

  const scales = [scale5_center, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div className="relative h-[300vh]" ref={container}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ alt, src }, index) => {
          const scale = scales[index % scales.length];

          return <ParallaxItem alt={alt} index={index} key={index} scale={scale} src={src} />;
        })}
        {centerText && (
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/70 px-4 md:px-12 lg:px-24"
            style={{ opacity: textOpacity }}
          >
            <p className="max-w-4xl text-center text-lg leading-relaxed text-white md:text-xl lg:text-2xl">
              {centerText}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// ─── Culture ─────────────────────────────────────────────────────────────────

const PARALLAX_IMAGES = [
  { alt: "Global reach", src: "/images/home/why-choose-us/global_reach.avif" },
  { alt: "Proven execution", src: "/images/home/why-choose-us/proven_execution.avif" },
  { alt: "Strategic creativity", src: "/images/home/why-choose-us/strategic_creativity.avif" },
  {
    alt: "Technology-led delivery",
    src: "/images/home/why-choose-us/technology_led_delivery.avif",
  },
  { alt: "B2B Sales Arrow culture", src: "/images/about/culture/culture-1.avif" },
  { alt: "B2B Sales Arrow team", src: "/images/about/culture/culture-4.avif" },
  { alt: "B2B Sales Arrow office", src: "/images/about/culture/culture-5.avif" },
];

export interface CultureData {
  centerImage?: string;
  centerText?: string;
  description: string;
  eyebrow: string;
  heading: ReactNode | string;
  headingHighlight?: string;
  reasons: { description: string; id: string; image: string; title: string }[];
}

export const Culture = ({ data }: { data: CultureData }) => {
  const parallaxImages = [
    ...(data.centerImage ? [{ alt: "Center Image", src: data.centerImage }] : []),
    ...data.reasons
      .map((r) => ({ alt: r.title, src: r.image }))
      .filter((img) => img.src !== data.centerImage),
    ...PARALLAX_IMAGES,
  ].slice(0, 7);

  return (
    <section className="relative w-full bg-brand-gray py-12 transition-colors duration-500">
      <div className="relative mb-12 flex min-h-[50vh] flex-col items-center justify-center px-8 text-center">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <div className="mb-6 inline-block rounded-full border border-brand-charcoal/10 bg-brand-charcoal/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-charcoal uppercase transition-colors duration-500">
          {data.eyebrow}
        </div>
        <Heading as="h2" className="mb-6" highlight={data.headingHighlight}>
          {typeof data.heading === "string" ? data.heading : "What We Believe In"}
        </Heading>
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/70 transition-colors duration-500 md:text-lg">
          {data.description}
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
          {data.reasons.map((reason) => (
            <CultureReasonCard key={reason.id} reason={reason} />
          ))}
        </div>
      </div>

      <ZoomParallax centerText={data.centerText} images={parallaxImages} />


    </section>
  );
};
