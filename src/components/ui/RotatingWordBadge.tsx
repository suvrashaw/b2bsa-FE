"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ANIMATE = { opacity: 1, y: 0 };
const EXIT = { opacity: 0, y: -14 };
const INITIAL = { opacity: 0, y: 14 };
const TRANSITION = { duration: 0.38 } as const;

const useRotatingWord = (words: string[], interval = 2500) => {
  const [index, setIndex] = useState(0);
  const [hasRotated, setHasRotated] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setHasRotated(true);
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return { isFirst: !hasRotated, key: index, word: words[index] };
};

interface RotatingWordBadgeProps {
  className?: string;
  interval?: number;
  words: string[];
}

export const RotatingWordBadge = ({ className, interval, words }: RotatingWordBadgeProps) => {
  const { isFirst, key: wordKey, word } = useRotatingWord(words, interval);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        animate={ANIMATE}
        className={className}
        exit={EXIT}
        initial={isFirst ? false : INITIAL}
        key={wordKey}
        transition={TRANSITION}
      >
        {word}
      </motion.span>
    </AnimatePresence>
  );
};
