"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { serviceNavigationGroups, topNavigation } from "@/content/navigation";
import { cn } from "@/lib";

import { DesktopNavLink } from "./header/DesktopNav";
import { LanguageSelector } from "./header/LanguageSelector";
import { MegamenuServiceGroup } from "./header/Megamenu";
import { MobileNavItem } from "./header/MobileNav";

const HEADER_ANIMATE = { y: 0 };
const HEADER_INITIAL = { y: -100 };
const HEADER_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };
const MOBILE_MENU_ANIMATE = { opacity: 1, y: 0 };
const MOBILE_MENU_INITIAL = { opacity: 0, y: -20 };
const MOBILE_MENU_EXIT = { opacity: 0, y: -20 };
const MEGAMENU_ANIMATE = { opacity: 1, y: 0 };
const MEGAMENU_INITIAL = { opacity: 0, y: 10 };
const MEGAMENU_EXIT = { opacity: 0, y: 10 };
const MEGAMENU_TRANSITION = { duration: 0.2, ease: "easeOut" } as const;

export const Header = ({
  darkBackground = false,
  forceLightMode = false,
  lightHeaderText = false,
}: { darkBackground?: boolean; forceLightMode?: boolean; lightHeaderText?: boolean } = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | null>(null);
  const [openMobileNav, setOpenMobileNav] = useState<null | string>(null);
  const [openMobileServiceGroup, setOpenMobileServiceGroup] = useState<null | string>(null);

  const solidHeader = forceLightMode || scrolled;
  const lightText = darkBackground && !solidHeader;
  const headerLightText = (darkBackground || lightHeaderText) && !solidHeader;

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileNav(null);
    setOpenMobileServiceGroup(null);
  }, []);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const toggleMobileNav = useCallback((name: string) => {
    setOpenMobileNav((prev) => (prev === name ? null : name));
    setOpenMobileServiceGroup(null);
  }, []);

  const toggleMobileServiceGroup = useCallback((name: string) => {
    setOpenMobileServiceGroup((prev) => (prev === name ? null : name));
  }, []);

  const handleMouseEnterLink = useCallback((name: string) => {
    if (name.toLowerCase() === "services") {
      setActiveDropdown("services");
    } else {
      setActiveDropdown(null);
    }
  }, []);

  const closeMegamenu = useCallback(() => setActiveDropdown(null), []);
  const openServicesMegamenu = useCallback(() => setActiveDropdown("services"), []);

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
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-2 sm:px-8 py-3 sm:py-4 pt-[max(1rem,env(safe-area-inset-top))] transition-all duration-300",
        headerSurfaceClass
      )}
      initial={HEADER_INITIAL}
      onMouseLeave={closeMegamenu}
      transition={HEADER_TRANSITION}
    >
      <div className="flex items-center gap-2">
        <Link
          className="relative block h-6 w-[88px] transition-all duration-300 hover:opacity-80 xl:h-[37px] xl:w-[134px]"
          href="/"
        >
          <Image
            alt="B2B Sales Arrow"
            className="object-contain"
            fill
            priority
            sizes="160px"
            src="/media/logo/logo-primary.svg"
          />
        </Link>
      </div>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex">
        {topNavigation.map((link) => (
          <DesktopNavLink
            activeDropdown={activeDropdown}
            key={link.name}
            lightText={headerLightText}
            link={link}
            onMouseEnter={handleMouseEnterLink}
            onServicesClick={openServicesMegamenu}
          />
        ))}
      </nav>

      <div className="flex items-center gap-1.5 xl:gap-6">
        <LanguageSelector lightText={headerLightText} />

        <Button
          asChild
          className="btn-schedule schedule-shake min-h-[28px] px-2 py-1 xl:min-h-[44px] xl:px-8 xl:py-3.5 rounded-full font-semibold normal-case text-[10px] sm:text-xs xl:text-base whitespace-nowrap"
          variant="primary"
        >
          <Link href="/contact-us">
            Startup Special Sale
          </Link>
        </Button>
        <div className="xl:hidden">
          <button
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            className={cn(
              "rounded-full p-2 min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors hover:bg-brand-gray/5 xl:p-3 xl:min-h-[48px] xl:min-w-[48px]",
              lightText ? "text-white" : ""
            )}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Megamenus */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            animate={MEGAMENU_ANIMATE}
            className="absolute inset-x-0 top-full z-[100] bg-white/95 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md xl:py-8"
            exit={MEGAMENU_EXIT}
            initial={MEGAMENU_INITIAL}
            onMouseEnter={openServicesMegamenu}
            transition={MEGAMENU_TRANSITION}
          >
            <div className="mx-auto w-full max-w-7xl px-8 xl:px-12">
              <div className="flex justify-between gap-4 xl:gap-8">
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    className="pt-3 pb-1 xl:pt-5 xl:pb-2"
                    group={serviceNavigationGroups[0]}
                    onClose={closeMegamenu}
                  />
                  <MegamenuServiceGroup
                    className="pt-1 pb-3 xl:pt-2 xl:pb-5"
                    group={serviceNavigationGroups[5]}
                    onClose={closeMegamenu}
                  />
                </div>
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[1]}
                    onClose={closeMegamenu}
                  />
                </div>
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[2]}
                    onClose={closeMegamenu}
                  />
                </div>
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    className="pt-3 pb-1 xl:pt-5 xl:pb-2"
                    group={serviceNavigationGroups[3]}
                    onClose={closeMegamenu}
                  />
                  <MegamenuServiceGroup
                    className="py-1 xl:py-2"
                    group={serviceNavigationGroups[4]}
                    onClose={closeMegamenu}
                  />
                  <MegamenuServiceGroup
                    className="pt-1 pb-3 xl:pt-2 xl:pb-5"
                    group={serviceNavigationGroups[6]}
                    onClose={closeMegamenu}
                  />
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
            className="absolute top-full right-0 left-0 max-h-[80vh] overflow-y-auto border-b border-gray-100 bg-white shadow-2xl xl:hidden"
            exit={MOBILE_MENU_EXIT}
            initial={MOBILE_MENU_INITIAL}
          >
            {topNavigation.map((link) => (
              <MobileNavItem
                isOpen={openMobileNav === link.name}
                key={link.name}
                link={link}
                onClose={closeMobileMenu}
                onServiceGroupToggle={toggleMobileServiceGroup}
                onToggle={toggleMobileNav}
                openServiceGroup={openMobileServiceGroup}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
