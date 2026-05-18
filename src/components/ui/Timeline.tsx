"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { WhisperText } from "@/components/ui/WhisperText";

interface TimelineEntry {
  content: React.ReactNode;
  title: string;
}

export const Timeline = ({
  data,
  description,
  heading,
}: {
  data: TimelineEntry[];
  description: string;
  heading: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    offset: ["start 10%", "end 50%"],
    target: containerRef,
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const headingHighlights = useMemo(() => [heading.split(" ").pop() || ""], [heading]);
  const trackStyle = useMemo(() => ({ height: height + "px" }), [height]);
  const progressStyle = useMemo(
    () => ({ height: heightTransform, opacity: opacityTransform }),
    [heightTransform, opacityTransform]
  );

  return (
    <div className="w-full font-sans transition-colors duration-500 md:px-10" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <WhisperText
          className="mb-4 max-w-4xl font-heading text-2xl  font-bold transition-colors duration-500 md:text-3xl lg:text-2xl"
          highlightColor="blue"
          highlights={headingHighlights}
          text={heading}
        />
        <p className="/70 max-w-sm text-sm transition-colors duration-500 md:text-base">
          {description}
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl pb-20" ref={ref}>
        {data.map((item, index) => (
          <div className="flex justify-start pt-10 md:gap-10 md:pt-20" key={index}>
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-brand-charcoal/10 bg-brand-white shadow-sm transition-all duration-500 md:left-3">
                <div className="h-4 w-4 rounded-full border border-white/20 bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500" />
              </div>
              <h3 className="hidden text-2xl font-bold transition-colors duration-500 md:block  md:pl-20 md:text-3xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pr-4 pl-20 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold transition-colors  duration-500 md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-brand-charcoal/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 "
          style={trackStyle}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-brand-blue from-[0%] via-brand-cyan via-[10%] to-transparent"
            style={progressStyle}
          />
        </div>
      </div>
    </div>
  );
};
