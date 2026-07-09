"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = async () => {
  const mod = await import("framer-motion");
  return mod.domMax;
};

export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={loadFeatures}>
    {children}
  </LazyMotion>
);
