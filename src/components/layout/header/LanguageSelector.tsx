"use client";

import { ChevronDown, Globe } from "lucide-react";
import { memo } from "react";

import { cn } from "@/lib";

const LANGUAGES = [
  { code: "EN", name: "English" },
  { code: "HI", name: "हिंदी" },
  { code: "AR", name: "العربية" },
  { code: "ZH", name: "中文" },
] as const;

export const LanguageSelector = memo(({ lightText }: { lightText: boolean }) => {
  return (
    <div className="group/lang relative">
      <button
        aria-haspopup="listbox"
        className={cn(
          "flex min-h-[44px] items-center gap-1.5 p-2 text-sm font-medium transition-colors",
          lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
        )}
        type="button"
      >
        <Globe className="size-4" />
        <span>EN</span>
        <ChevronDown className="size-3 transition-transform duration-200 group-hover/lang:rotate-180" />
      </button>

      <div className="pointer-events-none absolute top-full right-0 z-[200] pt-2 opacity-0 transition-all duration-200 ease-out group-hover/lang:pointer-events-auto group-hover/lang:opacity-100">
        <div
          className="min-w-[148px] translate-y-2 overflow-hidden rounded-xl border border-gray-100 bg-white py-1.5 shadow-xl transition-transform duration-200 ease-out group-hover/lang:translate-y-0"
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <button
              aria-selected={lang.code === "EN"}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-blue/5 hover:text-brand-blue focus:bg-brand-blue/5 focus:text-brand-blue focus:outline-none",
                lang.code === "EN" ? "font-semibold text-brand-blue" : "text-brand-charcoal"
              )}
              key={lang.code}
              role="option"
              type="button"
            >
              <span className="w-7 text-xs font-bold">{lang.code}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
LanguageSelector.displayName = "LanguageSelector";
