import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

import { type topNavigation } from "@/content/navigation";
import { cn } from "@/lib";

export const DesktopNavLink = ({
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
  const isServices = link.name === "Services";
  
  const handleMouseEnter = useCallback(() => onMouseEnter(link.name), [link.name, onMouseEnter]);

  const linkClassName = cn(
    "group relative flex items-center gap-1.5 whitespace-nowrap text-base font-semibold transition-colors lg:max-xl:gap-0.5 lg:max-xl:text-sm",
    lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
  );
  const underlineClassName = cn(
    "absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-hover/nav-item:w-full",
    isServices && activeDropdown === "services" ? "w-full" : ""
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
          {link.name}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 opacity-70 transition-transform duration-300",
              activeDropdown === "services" ? "rotate-180" : ""
            )}
          />
          <span className={underlineClassName} />
        </button>
      ) : (
        <Link className={linkClassName} href={link.href} onMouseEnter={handleMouseEnter}>
          {link.name}
          <span className={underlineClassName} />
        </Link>
      )}
    </div>
  );
};
