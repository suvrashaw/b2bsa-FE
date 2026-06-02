"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { serviceNavigationGroups, topNavigation } from "@/content/navigation";
import { cn } from "@/lib";

const HEADER_ANIMATE = { y: 0 };
const HEADER_INITIAL = { y: -100 };
const HEADER_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };
const MOBILE_MENU_ANIMATE = { opacity: 1, y: 0 };
const MOBILE_MENU_INITIAL = { opacity: 0, y: -20 };
const MOBILE_MENU_EXIT = { opacity: 0, y: -20 };

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

const MEGAMENU_ANIMATE = { opacity: 1, y: 0 };
const MEGAMENU_INITIAL = { opacity: 0, y: 10 };
const MEGAMENU_EXIT = { opacity: 0, y: 10 };
const MEGAMENU_TRANSITION = { duration: 0.2, ease: "easeOut" } as const;

// Pure sub-component for Desktop nav links to satisfy react-perf / no-new-function rules
const DesktopNavLink = ({
  activeDropdown,
  lightText,
  link,
  onMouseEnter,
}: {
  activeDropdown: "services" | null;
  lightText: boolean;
  link: (typeof topNavigation)[number];
  onMouseEnter: (name: string) => void;
}) => {
  const handleMouseEnter = useCallback(() => {
    onMouseEnter(link.name);
  }, [link.name, onMouseEnter]);

  return (
    <div className="group/nav-item relative flex items-center py-4">
      <Link
        className={cn(
          "group relative text-sm font-medium transition-colors flex items-center gap-1.5",
          lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
        )}
        href={link.href}
        onMouseEnter={handleMouseEnter}
      >
        {link.name}
        {link.name === "Services" && (
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 opacity-70 transition-transform duration-300",
              activeDropdown === "services" ? "rotate-180" : ""
            )}
          />
        )}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-hover/nav-item:w-full",
            link.name === "Services" && activeDropdown === "services" ? "w-full" : ""
          )}
        />
      </Link>
    </div>
  );
};

// Pure sub-components for Megamenu to satisfy react-perf / no-new-function rules
const NOWRAP_NAMES = new Set(["Event Experience Video Production"]);

const MegamenuSubLink = ({
  onClose,
  sub,
}: {
  onClose: () => void;
  sub: (typeof serviceNavigationGroups)[number]["links"][number];
}) => {
  return (
    <Link
      className={cn(
        "block text-xs font-semibold text-gray-500 transition-colors hover:text-gray-900",
        NOWRAP_NAMES.has(sub.name) && "whitespace-nowrap"
      )}
      href={sub.href}
      onClick={onClose}
    >
      {sub.name}
    </Link>
  );
};

const MegamenuServiceGroup = ({
  group,
  noWrapTitle = false,
  onClose,
  twoColumnLinks = false,
}: {
  group: (typeof serviceNavigationGroups)[number];
  noWrapTitle?: boolean;
  onClose: () => void;
  twoColumnLinks?: boolean;
}) => {
  return (
    <div className="rounded-lg p-5 transition-all hover:bg-gray-50">
      <Link
        className={cn(
          "mb-4 block text-sm font-black text-brand-charcoal transition-colors hover:text-brand-blue",
          noWrapTitle && "whitespace-nowrap"
        )}
        href={group.href}
        onClick={onClose}
      >
        {group.name}
      </Link>
      <div className={twoColumnLinks ? "grid grid-cols-2 gap-x-4 gap-y-3" : "space-y-3"}>
        {group.links.map((sub) => (
          <MegamenuSubLink key={sub.name} onClose={onClose} sub={sub} />
        ))}
      </div>
    </div>
  );
};

const LanguageSelector = ({ lightText }: { lightText: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsOpen(false), []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium transition-colors",
          lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
        )}
        type="button"
      >
        <Globe className="h-4 w-4" />
        <span>EN</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
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
                  lang.code === "EN"
                    ? "font-semibold text-brand-blue"
                    : "text-brand-charcoal"
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
};

export const Header = ({
  darkBackground = false,
  forceLightMode = false,
}: { darkBackground?: boolean; forceLightMode?: boolean } = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | null>(null);

  const solidHeader = forceLightMode || scrolled;
  const lightText = darkBackground && !solidHeader;
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const handleMouseEnterLink = useCallback((name: string) => {
    if (name === "Services") {
      setActiveDropdown("services");
    } else {
      setActiveDropdown(null);
    }
  }, []);

  const handleCloseMegamenu = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const handleMouseEnterServicesMegamenu = useCallback(() => {
    setActiveDropdown("services");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let headerSurfaceClass = "bg-transparent";
  if (solidHeader) {
    headerSurfaceClass = "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100";
  } else if (lightText) {
    headerSurfaceClass =
      "border-b border-white/10 bg-brand-charcoal/30 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-md";
  }

  return (
    <motion.header
      animate={HEADER_ANIMATE}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
        headerSurfaceClass
      )}
      initial={HEADER_INITIAL}
      onMouseLeave={handleCloseMegamenu}
      transition={HEADER_TRANSITION}
    >
      <div className="flex items-center gap-2">
        <Link
          className="relative block h-14 w-52 transition-all duration-300 hover:opacity-80"
          href="/"
        >
          <Image
            alt="B2B Sales Arrow"
            className="object-contain"
            fill
            priority
            sizes="160px"
            src="/logo.png"
          />
        </Link>
      </div>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
        {topNavigation.map((link) => (
          <DesktopNavLink
            activeDropdown={activeDropdown}
            key={link.name}
            lightText={lightText}
            link={link}
            onMouseEnter={handleMouseEnterLink}
          />
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <LanguageSelector lightText={lightText} />

        <Link href="/contact">
          <Button size="sm" variant="primary">
            Let&apos;s Talk
          </Button>
        </Link>
        <div className="lg:hidden">
          <button
            className={cn(
              "rounded-full p-2 transition-colors hover:bg-brand-gray/5",
              lightText ? "text-white" : ""
            )}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Full-Bleed Megamenus */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            animate={MEGAMENU_ANIMATE}
            className="absolute top-full right-0 left-0 z-[100] w-full bg-white/95 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md"
            exit={MEGAMENU_EXIT}
            initial={MEGAMENU_INITIAL}
            onMouseEnter={handleMouseEnterServicesMegamenu}
            transition={MEGAMENU_TRANSITION}
          >
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-5 gap-6">
                {/* Global Event Solutions — spans 2 columns with 2-column link layout */}
                <div className="col-span-2">
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[0]}
                    onClose={handleCloseMegamenu}
                    twoColumnLinks
                  />
                </div>
                {/* Media Production */}
                <MegamenuServiceGroup
                  group={serviceNavigationGroups[1]}
                  onClose={handleCloseMegamenu}
                />
                {/* Performance Marketing */}
                <MegamenuServiceGroup
                  group={serviceNavigationGroups[2]}
                  onClose={handleCloseMegamenu}
                />
                {/* Market Research + Sales Qualified Lead Generation — stacked in one column */}
                <div>
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[4]}
                    onClose={handleCloseMegamenu}
                  />
                  <div className="mt-1">
                    <MegamenuServiceGroup
                      group={serviceNavigationGroups[3]}
                      noWrapTitle
                      onClose={handleCloseMegamenu}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            animate={MOBILE_MENU_ANIMATE}
            className="absolute top-full right-0 left-0 flex flex-col gap-6 border-b border-gray-100 bg-white p-8 shadow-2xl lg:hidden"
            exit={MOBILE_MENU_EXIT}
            initial={MOBILE_MENU_INITIAL}
          >
            {topNavigation.map((link) => (
              <div className="space-y-4" key={link.name}>
                <Link
                  className="block font-heading text-2xl  font-bold transition-colors hover:text-brand-blue"
                  href={link.href}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
                {link.name === "Services" && (
                  <div className="space-y-4 border-l-2 border-brand-blue/10 pl-4">
                    {serviceNavigationGroups.map((group) => (
                      <div className="space-y-2" key={group.name}>
                        <Link
                          className="block text-lg  font-bold transition-colors hover:text-brand-blue"
                          href={group.href}
                          onClick={closeMobileMenu}
                        >
                          {group.name}
                        </Link>
                        {group.links.map((sub) => (
                          <Link
                            className="block pl-4 text-base font-medium text-gray-500 transition-colors hover:text-brand-blue"
                            href={sub.href}
                            key={sub.name}
                            onClick={closeMobileMenu}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button className="mt-4 w-full" variant="primary">
                Let&apos;s Talk
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
