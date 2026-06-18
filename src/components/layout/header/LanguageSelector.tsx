"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { memo, useCallback, useState } from "react";

import { cn } from "@/lib";

const LANG_DROPDOWN_ANIMATE = { opacity: 1, y: 0 };
const LANG_DROPDOWN_EXIT = { opacity: 0, y: 8 };
const LANG_DROPDOWN_INITIAL = { opacity: 0, y: 8 };
const LANG_DROPDOWN_TRANSITION = { duration: 0.18, ease: "easeOut" } as const;

const LANGUAGES = [
  { code: "EN", name: "English" },
  { code: "HI", name: "हिंदी" },
  { code: "AR", name: "العربية" },
  { code: "ZH", name: "中文" },
] as const;

export const LanguageSelector = memo(({ lightText }: { lightText: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsOpen(false), []);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={cn(
          "flex items-center gap-1.5 p-2 min-h-[44px] text-sm font-medium transition-colors",
          lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
        )}
        type="button"
      >
        <Globe className="h-4 w-4" />
        <span>EN</span>
        <ChevronDown
          className={cn("h-3 w-3 transition-transform duration-200", isOpen ? "rotate-180" : "")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={LANG_DROPDOWN_ANIMATE}
            className="absolute top-full right-0 mt-2 min-w-[148px] overflow-hidden rounded-xl border border-gray-100 bg-white py-1.5 shadow-xl"
            exit={LANG_DROPDOWN_EXIT}
            initial={LANG_DROPDOWN_INITIAL}
            transition={LANG_DROPDOWN_TRANSITION}
          >
            {LANGUAGES.map((lang) => (
              <button
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-blue/5 hover:text-brand-blue",
                  lang.code === "EN" ? "font-semibold text-brand-blue" : "text-brand-charcoal"
                )}
                key={lang.code}
                type="button"
              >
                <span className="w-7 text-xs font-bold">{lang.code}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
LanguageSelector.displayName = "LanguageSelector";
