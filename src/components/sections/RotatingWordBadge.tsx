"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ANIMATE = { opacity: 1, y: 0 };
const EXIT = { opacity: 0, y: -14 };
const INITIAL = { opacity: 0, y: 14 };
const TRANSITION = { duration: 0.38 } as const;

const useRotatingWord = (words: string[], interval = 2500) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return { key: index, word: words[index] };
};

interface RotatingWordBadgeProps {
  className?: string;
  interval?: number;
  words: string[];
}

export const RotatingWordBadge = ({ className, interval, words }: RotatingWordBadgeProps) => {
  const { key: wordKey, word } = useRotatingWord(words, interval);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        animate={ANIMATE}
        className={className}
        exit={EXIT}
        initial={INITIAL}
        key={wordKey}
        transition={TRANSITION}
      >
        {word}
      </motion.span>
    </AnimatePresence>
  );
};
