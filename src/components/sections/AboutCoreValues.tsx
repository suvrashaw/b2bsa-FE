"use client";

import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export interface AboutCoreValuesData {
  description: string;
  heading: string;
  values: string[];
}

const CORE_VALUE_DETAILS = [
  "Confidence in our craft, policies, and promises keeps every client engagement grounded.",
  "We show up with drive, resilience, and the will to finish what matters.",
  "Every touchpoint should feel sharper, more helpful, and more accountable than expected.",
  "We keep learning so our teams, systems, and client outcomes keep improving.",
  "We adapt quickly when markets, briefs, and buyer behavior move.",
  "We stay grounded, listen carefully, and let the work earn trust.",
  "We build lean systems that turn constraints into smarter execution.",
  "Clear communication keeps relationships open, honest, and commercially useful.",
  "We protect team harmony while building the emotional connection great work needs.",
  "We prove commitment through follow-through, quality, and measurable outcomes.",
];

const CoreValueCard = ({
  detail,
  index,
  value,
}: {
  detail: string | undefined;
  index: number;
  value: string;
}) => {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="relative flex aspect-square flex-col justify-center overflow-hidden rounded-md border border-brand-charcoal/10 bg-brand-white px-6 py-8 shadow-[0_10px_40px_rgba(14,22,31,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_40px_rgba(14,22,31,0.08)] md:px-8 md:py-9">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
      <div className="font-display absolute -top-4 right-4 text-[80px] leading-none font-black text-brand-charcoal/5 select-none">
        {num}
      </div>
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded border border-brand-cyan/20 bg-brand-cyan/10">
        <div className="h-4 w-4 rounded-sm bg-brand-cyan" />
      </div>
      <h3 className="font-display mb-3 text-xl leading-[1.2] font-bold text-brand-charcoal md:text-[clamp(20px,2.2vw,28px)]">
        {value}
      </h3>
      <p className="font-editorial text-[13px] leading-[1.65] text-brand-charcoal/60 md:text-[15px]">
        {detail}
      </p>
    </div>
  );
};

const HorizontalScrollTrack = ({ children }: { children: ReactNode }) => {
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const motionStyle = useMemo(() => ({ x }), [x]);

  return (
    <section className="relative hidden h-[400vh] bg-brand-gray md:block" ref={targetRef}>
      <div className="sticky top-0 flex h-[80vh] min-h-[500px] w-full items-stretch overflow-hidden">
        <motion.div
          className="flex h-full items-stretch will-change-transform"
          ref={trackRef}
          style={motionStyle}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export const AboutCoreValues = ({ data }: { data: AboutCoreValuesData }) => {
  return (
    <div id="core-values">
      {/* Mobile (<md): CSS horizontal snap scroll */}
      <section className="bg-brand-gray py-12 md:hidden">
        <div className="mb-8 px-4 sm:px-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-cyan" />
            <p className="font-accent text-[11px] font-bold tracking-[0.16em] text-brand-charcoal/60 uppercase">
              Our Core
            </p>
          </div>
          <SectionHeader as="h2" className="mb-4 text-brand-charcoal">
            {data.heading}
          </SectionHeader>
          <p className="text-sm leading-relaxed text-brand-charcoal/60">{data.description}</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [&::-webkit-scrollbar]:hidden">
          {data.values.map((value, index) => (
            <div className="w-[82vw] shrink-0 snap-start sm:w-[70vw]" key={index}>
              <CoreValueCard detail={CORE_VALUE_DETAILS[index]} index={index} value={value} />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 px-4">
          <div className="h-px w-12 bg-gradient-to-r from-brand-cyan to-transparent" />
          <p className="font-accent text-[10px] font-bold tracking-[0.1em] text-brand-charcoal/40 uppercase">
            Swipe to explore
          </p>
        </div>
      </section>

      {/* Desktop (md+): JS sticky horizontal scroll */}
      <HorizontalScrollTrack>
        {/* Intro Slide */}
        <div className="flex w-screen shrink-0 flex-col justify-center px-4 py-12 md:w-[60vw] md:py-20 md:pr-12 md:pl-[clamp(24px,6vw,120px)] lg:w-[50vw]">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-cyan" />
            <p className="font-accent text-[11px] font-bold tracking-[0.16em] text-brand-charcoal/60 uppercase">
              Our Core
            </p>
          </div>

          <SectionHeader
            as="h2"
            className="mb-5 max-w-[700px] text-[clamp(32px,5vw,64px)] leading-[1.1] font-black text-brand-charcoal"
          >
            {data.heading}
          </SectionHeader>

          <p className="mb-10 max-w-[560px] text-[18px] leading-[1.65] text-brand-charcoal/60">
            {data.description}
          </p>

          <div className="flex items-center gap-2.5">
            <div className="h-px w-12 bg-linear-to-r from-brand-cyan to-transparent" />
            <p className="font-accent text-[10px] font-bold tracking-[0.1em] text-brand-charcoal/40 uppercase">
              Scroll to explore
            </p>
          </div>
        </div>

        {/* Cards */}
        {data.values.map((value, index) => (
          <div
            className="flex w-[clamp(340px,38vw,500px)] shrink-0 flex-col justify-center border-l border-brand-charcoal/5 px-4 py-16 md:px-[clamp(20px,4vw,60px)] md:py-28 lg:py-32"
            key={index}
          >
            <CoreValueCard detail={CORE_VALUE_DETAILS[index]} index={index} value={value} />
          </div>
        ))}

        {/* End spacer */}
        <div className="w-[10vw] shrink-0" />
      </HorizontalScrollTrack>
    </div>
  );
};
