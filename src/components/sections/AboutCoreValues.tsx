"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";

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

export const AboutCoreValues = ({ data }: { data: AboutCoreValuesData }) => {
  const targetRef = useRef<HTMLDivElement>(null);
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
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Interpolate from 0 to negative scrollRange
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section 
      className="relative h-[400vh] bg-brand-gray" 
      id="core-values"
      ref={targetRef}
    >
      <div className="sticky top-0 flex h-[80vh] min-h-[500px] w-full items-stretch overflow-hidden">
        <motion.div 
          className="flex h-full items-stretch will-change-transform"
          ref={trackRef}
          style={{ x }}
        >
          {/* Intro Slide */}
          <div className="flex w-screen shrink-0 flex-col justify-center px-8 py-20 md:w-[60vw] md:pl-[clamp(24px,6vw,120px)] md:pr-12 lg:w-[50vw]">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-cyan" />
              <p className="font-accent text-[11px] font-bold uppercase tracking-[0.16em] text-brand-charcoal/60">
                Our Core
              </p>
            </div>
            
            <Heading 
              as="h2" 
              className="mb-5 max-w-[700px] text-[clamp(32px,5vw,64px)] font-black leading-[1.1] text-brand-charcoal" 
             
            >
              {data.heading}
            </Heading>
            
            <p className="mb-10 max-w-[560px] text-[18px] leading-[1.65] text-brand-charcoal/60">
              {data.description}
            </p>
            
            <div className="flex items-center gap-2.5">
              <div className="h-px w-12 bg-linear-to-r from-brand-cyan to-transparent" />
              <p className="font-accent text-[10px] font-bold uppercase tracking-[0.1em] text-brand-charcoal/40">
                Scroll to explore
              </p>
            </div>
          </div>

          {/* Cards */}
          {data.values.map((value, index) => {
            const num = String(index + 1).padStart(2, "0");
            const detail = CORE_VALUE_DETAILS[index];
            
            return (
              <div 
                className="flex w-[clamp(340px,38vw,500px)] shrink-0 flex-col justify-center border-l border-brand-charcoal/5 px-[clamp(20px,4vw,60px)] py-20 md:py-28 lg:py-32"
                key={index} 
              >
                <div className="relative flex aspect-square flex-col justify-center overflow-hidden rounded-md border border-brand-charcoal/10 bg-brand-white px-8 py-9 shadow-[0_10px_40px_rgba(14,22,31,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_40px_rgba(14,22,31,0.08)]">
                  {/* Top Gradient Border */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
                  
                  {/* Big Number Background */}
                  <div className="absolute -top-4 right-4 select-none font-display text-[80px] font-black leading-none text-brand-charcoal/5">
                    {num}
                  </div>
                  
                  {/* Icon Block */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded border border-brand-cyan/20 bg-brand-cyan/10">
                    <div className="h-4 w-4 rounded-sm bg-brand-cyan" />
                  </div>
                  
                  <h3 className="mb-3 font-display text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.2] text-brand-charcoal">
                    {value}
                  </h3>
                  
                  <p className="font-editorial text-[15px] leading-[1.65] text-brand-charcoal/60">
                    {detail}
                  </p>
                </div>
              </div>
            );
          })}
          
          {/* Spacer to give a little padding at the end of the scroll track */}
          <div className="w-[10vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};
