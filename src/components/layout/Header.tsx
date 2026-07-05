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

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | null>(null);
  const [openMobileNav, setOpenMobileNav] = useState<null | string>(null);
  const [openMobileServiceGroup, setOpenMobileServiceGroup] = useState<null | string>(null);

  const isSolidHeader = scrolled;
  const isLightText = !isSolidHeader;
  const isHeaderLightText = !isSolidHeader;

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

  const isMegamenuOpen = activeDropdown === "services";
  let headerSurfaceClass = "bg-transparent";
  if (isSolidHeader) {
    headerSurfaceClass = cn(
      "bg-white/85 shadow-sm backdrop-blur-md",
      !isMegamenuOpen && "border-b border-gray-100"
    );
  } else if (isLightText) {
    headerSurfaceClass = cn(
      "bg-brand-charcoal/35 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-md",
      !isMegamenuOpen && "border-b border-white/10"
    );
  }

  const isMegamenuLightText = isLightText && !isSolidHeader;
  const megamenuSurfaceClass = isMegamenuLightText
    ? "bg-brand-charcoal/35 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    : "bg-white/85 shadow-[0_20px_50px_rgba(0,0,0,0.1)]";

  return (
    <div className="fixed inset-x-0 top-0 z-50" onMouseLeave={closeMegamenu}>
      <motion.header
        animate={HEADER_ANIMATE}
        className={cn(
          "flex items-center justify-between px-2 py-3 pt-[max(1rem,env(safe-area-inset-top))] transition-all duration-300 sm:px-8 sm:py-4",
          headerSurfaceClass
        )}
        initial={HEADER_INITIAL}
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
              lightText={isHeaderLightText}
              link={link}
              onMouseEnter={handleMouseEnterLink}
              onServicesClick={openServicesMegamenu}
            />
          ))}
        </nav>

        <div className="flex items-center gap-1.5 xl:gap-6">
          <Button
            asChild
            className="btn-schedule schedule-shake min-h-[28px] rounded-full px-2 py-1 text-[10px] font-semibold whitespace-nowrap normal-case sm:text-xs xl:min-h-[44px] xl:px-8 xl:py-3.5 xl:text-base"
            variant="primary"
          >
            <Link href="/contact-us">Let&apos;s Talk</Link>
          </Button>
          <div className="xl:hidden">
            <button
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              className={cn(
                "flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full p-2 transition-colors hover:bg-brand-gray/5 xl:min-h-[48px] xl:min-w-[48px] xl:p-3",
                isLightText ? "text-white" : ""
              )}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              animate={MOBILE_MENU_ANIMATE}
              className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-gray-100 bg-white shadow-2xl xl:hidden"
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

      {/* Desktop Megamenus — outside motion.header to avoid transform stacking context blocking backdrop-filter */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            animate={MEGAMENU_ANIMATE}
            className={cn("w-full py-5 backdrop-blur-md xl:py-8", megamenuSurfaceClass)}
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
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                  <MegamenuServiceGroup
                    className="pt-1 pb-3 xl:pt-2 xl:pb-5"
                    group={serviceNavigationGroups[5]}
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                </div>
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[1]}
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                </div>
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[2]}
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                </div>
                <div className="min-w-0">
                  <MegamenuServiceGroup
                    className="pt-3 pb-1 xl:pt-5 xl:pb-2"
                    group={serviceNavigationGroups[3]}
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                  <MegamenuServiceGroup
                    className="py-1 xl:py-2"
                    group={serviceNavigationGroups[4]}
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                  <MegamenuServiceGroup
                    className="pt-1 pb-3 xl:pt-2 xl:pb-5"
                    group={serviceNavigationGroups[6]}
                    lightText={isMegamenuLightText}
                    onClose={closeMegamenu}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
