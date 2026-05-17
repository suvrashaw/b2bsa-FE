"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import { PointerHighlight } from "./PointerHighlight";

// Make sure to register plugin client-side only
if (globalThis.window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

const wordStyle = { perspective: "1000px", position: "relative" as const };
const containerStyle = { overflow: "visible" as const };

interface WhisperTextProps {
  className?: string;
  delay?: number;
  duration?: number;
  highlightColor?: "blue" | "red";
  highlights?: string[];
  text: string;
  triggerStart?: string;
  x?: number;
  y?: number;
}

export const WhisperText: React.FC<WhisperTextProps> = ({
  className = "",
  delay = 50,
  duration = 0.8,
  highlightColor = "blue",
  highlights = [],
  text,
  triggerStart = "top 85%",
  x = 0,
  y = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-word]");

      gsap.set(targets, { opacity: 0, rotateX: -45, transformOrigin: "0% 50% -50", y: y });

      gsap.to(targets, {
        duration,
        ease: "power3.out",
        opacity: 1,
        rotateX: 0,
        scrollTrigger: {
          once: true,
          start: triggerStart,
          toggleActions: "play none none none",
          trigger: containerRef.current,
        },
        stagger: delay / 1000,
        y: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, duration, x, y, triggerStart]);

  const renderWords = () =>
    text.split(" ").map((word, i) => {
      if (word === String.raw`\n`) {
        return <div className="h-0 basis-full" key={i} />;
      }
      const cleanWord = word.replaceAll(/[.,]/g, "");
      const isHighlighted = highlights?.includes(cleanWord);

      const content = isHighlighted ? (
        <PointerHighlight color={highlightColor}>
          <span>{word}</span>
        </PointerHighlight>
      ) : (
        word
      );

      return (
        <span className="inline-block whitespace-nowrap" data-word key={i} style={wordStyle}>
          {content}
        </span>
      );
    });

  return (
    <div
      className={`relative inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}
      ref={containerRef}
      style={containerStyle}
    >
      {renderWords()}
    </div>
  );
};
