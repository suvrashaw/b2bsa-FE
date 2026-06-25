import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { memo, useCallback } from "react";

import { type topNavigation } from "@/content/navigation";
import { cn, toTitleCase } from "@/lib";

export const DesktopNavLink = memo(
  ({
    activeDropdown,
    lightText,
    link,
    onMouseEnter,
    onServicesClick,
  }: {
    activeDropdown: "services" | null;
    lightText: boolean;
    link: (typeof topNavigation)[number];
    onMouseEnter: (name: string) => void;
    onServicesClick: () => void;
  }) => {
    const isServices = link.name.toLowerCase() === "services";
    const label = toTitleCase(link.name);

    const handleMouseEnter = useCallback(
      () => onMouseEnter(link.name),
      [link.name, onMouseEnter],
    );

    const linkClassName = cn(
      "group relative flex items-center gap-1.5 text-base font-semibold whitespace-nowrap transition-colors lg:max-xl:gap-0.5 lg:max-xl:text-sm",
      lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue",
    );
    const underlineClassName = cn(
      "absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-hover/nav-item:w-full",
      isServices && activeDropdown === "services" ? "w-full" : "",
    );

    return (
      <div className="group/nav-item relative flex items-center py-4">
        {isServices ? (
          <button
            aria-expanded={activeDropdown === "services"}
            aria-haspopup="true"
            className={cn(linkClassName, "appearance-none bg-transparent p-0")}
            onClick={onServicesClick}
            onMouseEnter={handleMouseEnter}
            type="button"
          >
            {label}
            <ChevronDown
              className={cn(
                "size-3.5 opacity-70 transition-transform duration-300",
                activeDropdown === "services" ? "rotate-180" : "",
              )}
            />
            <span className={underlineClassName} />
          </button>
        ) : (
          <Link
            className={linkClassName}
            href={link.href}
            onMouseEnter={handleMouseEnter}
          >
            {label}
            <span className={underlineClassName} />
          </Link>
        )}
      </div>
    );
  },
);
DesktopNavLink.displayName = "DesktopNavLink";
