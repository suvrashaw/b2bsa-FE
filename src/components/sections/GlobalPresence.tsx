"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const LEFT_INITIAL = { opacity: 0, x: -30 };
const LEFT_TRANSITION = { duration: 0.8, ease: "easeOut" as const };
const RIGHT_INITIAL = { opacity: 0, scale: 0.9 };
const RIGHT_TRANSITION = { delay: 0.2, duration: 1 };
const LEFT_ANIMATE_IN = { opacity: 1, x: 0 };
const RIGHT_ANIMATE_IN = { opacity: 1, scale: 1 };
const ANIMATE_EMPTY = {};

export interface GlobalPresenceData {
  cities: LocationItem[];
  description: string;
  title: string;
}

type LocationItem = {
  color: string;
  lat?: number;
  lng?: number;
  name: string;
  size: number;
};

export const GlobalPresence = ({ data }: { data: GlobalPresenceData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px", once: true });
  const [globeReady, setGlobeReady] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.5;
      globeRef.current.controls().enableZoom = false;
    }
  }, [globeReady]);

  const handleGlobeReady = useCallback(() => setGlobeReady(true), []);
  const getHtmlElement = useCallback((d: object) => {
    const item = d as LocationItem;
    const el = document.createElement("div");
    el.innerHTML = `
      <div class="flex items-center gap-2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div class="w-2 h-2 rounded-full bg-[${item.color}] shadow-[0_0_10px_${item.color}] animate-pulse"></div>
        <span class="text-xs font-bold text-white whitespace-nowrap bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">${item.name}</span>
      </div>
    `;
    return el;
  }, []);

  const leftAnimate = isInView ? LEFT_ANIMATE_IN : ANIMATE_EMPTY;
  const rightAnimate = isInView ? RIGHT_ANIMATE_IN : ANIMATE_EMPTY;

  const validCities = data.cities.filter((c) => c.lat != null && c.lng != null);

  return (
    <section
      className="relative overflow-hidden bg-brand-gray py-12 transition-colors duration-500"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,192,217,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 container mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          animate={leftAnimate}
          className="flex max-w-2xl flex-col items-start text-left"
          initial={LEFT_INITIAL}
          transition={LEFT_TRANSITION}
        >
          <Heading as="h2" className="mb-8">
            {data.title}
          </Heading>

          <p className="mb-10 text-base leading-relaxed transition-colors duration-500 md:text-lg">
            {data.description}
          </p>
        </motion.div>

        <motion.div
          animate={rightAnimate}
          className="relative flex h-[280px] w-full cursor-move items-center justify-center sm:h-[380px] md:h-[450px] lg:h-[850px] lg:-translate-x-48"
          initial={RIGHT_INITIAL}
          transition={RIGHT_TRANSITION}
        >
          <div className="absolute inset-0 h-full w-full">
            <Globe
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="/images/globe-earth-night.jpg"
              htmlElement={getHtmlElement}
              htmlElementsData={validCities}
              onGlobeReady={handleGlobeReady}
              pointAltitude="size"
              pointColor="color"
              pointLat="lat"
              pointLng="lng"
              pointRadius={0.5}
              pointsData={validCities}
              pointsMerge={true}
              ref={globeRef}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
