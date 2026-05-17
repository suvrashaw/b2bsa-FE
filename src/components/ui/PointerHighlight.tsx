"use client";
import React, { useCallback, useState } from "react";

import { cn } from "@/lib";

export const PointerHighlight = ({
  children,
  className,
  color = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "blue" | "cyan" | "red";
}) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  const colors = {
    blue: {
      bg: hovered ? "bg-brand-blue/30" : "bg-brand-blue/15",
      border: "border-brand-blue/30",
      text: hovered ? "text-brand-cyan" : "text-brand-blue",
    },
    cyan: {
      bg: hovered ? "bg-brand-cyan/30" : "bg-brand-cyan/15",
      border: "border-brand-cyan/30",
      text: hovered ? "text-brand-blue" : "text-brand-cyan",
    },
    red: {
      bg: hovered ? "bg-brand-primary/30" : "bg-brand-primary/15",
      border: "border-brand-primary/30",
      text: hovered ? "text-brand-primary-dark" : "text-brand-primary",
    },
  };

  const active = colors[color];

  return (
    <span
      className={cn(
        "relative inline-block px-1.5 py-0.5 mx-[2px] rounded-md transition-all duration-300 border",
        active.bg,
        active.border,
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={cn(
          "relative z-10 transition-colors duration-300 font-bold tracking-tight",
          active.text
        )}
      >
        {children}
      </span>
    </span>
  );
};
