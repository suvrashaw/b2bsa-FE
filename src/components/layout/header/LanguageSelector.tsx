"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
  const [open, setOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setOpen(true), []);
  const handleMouseLeave = useCallback(() => setOpen(false), []);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownMenu.Root onOpenChange={setOpen} open={open}>
        <DropdownMenu.Trigger asChild>
          <button
            className={cn(
              "flex min-h-[44px] items-center gap-1.5 p-2 text-sm font-medium transition-colors",
              lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue",
            )}
            type="button"
          >
            <Globe className="size-4" />
            <span>EN</span>
            <ChevronDown
              className={cn(
                "size-3 transition-transform duration-200",
                open ? "rotate-180" : "",
              )}
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content align="end" className="z-[200]" forceMount sideOffset={8}>
            <AnimatePresence>
              {open && (
                <motion.div
                  animate={LANG_DROPDOWN_ANIMATE}
                  className="min-w-[148px] overflow-hidden rounded-xl border border-gray-100 bg-white py-1.5 shadow-xl"
                  exit={LANG_DROPDOWN_EXIT}
                  initial={LANG_DROPDOWN_INITIAL}
                  transition={LANG_DROPDOWN_TRANSITION}
                >
                  {LANGUAGES.map((lang) => (
                    <DropdownMenu.Item asChild key={lang.code}>
                      <button
                        className={cn(
                          "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-blue/5 hover:text-brand-blue focus:bg-brand-blue/5 focus:text-brand-blue focus:outline-none",
                          lang.code === "EN"
                            ? "font-semibold text-brand-blue"
                            : "text-brand-charcoal",
                        )}
                        type="button"
                      >
                        <span className="w-7 text-xs font-bold">{lang.code}</span>
                        <span>{lang.name}</span>
                      </button>
                    </DropdownMenu.Item>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
});
LanguageSelector.displayName = "LanguageSelector";
