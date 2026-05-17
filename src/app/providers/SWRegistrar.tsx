"use client";
/* eslint-disable n/no-unsupported-features/node-builtins */
import { useEffect } from "react";

export const SWRegistrar = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("SW registered", reg))
        .catch((error) => console.log("SW failed", error));
    }
  }, []);

  return null;
};
