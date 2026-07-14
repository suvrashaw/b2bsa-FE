"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib";

import { DesktopNav } from "./header/DesktopNav";
import { Megamenu } from "./header/Megamenu";
import { MobileNav } from "./header/MobileNav";

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
  const isLightText = true;
  const isHeaderLightText = true;

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
  const headerSurfaceClass = cn(
    isSolidHeader
      ? "bg-brand-primary-dark/95 shadow-sm backdrop-blur-md"
      : "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-brand-primary-dark)_80%,transparent)_55%,transparent_100%)]",
    isSolidHeader && !isMegamenuOpen && "border-b border-white/10"
  );

  const isMegamenuLightText = false;
  const megamenuSurfaceClass = "bg-white/85 shadow-[0_20px_50px_rgba(0,0,0,0.1)]";

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
              className={cn(
                "object-contain transition-opacity duration-300",
                isSolidHeader ? "opacity-0" : "opacity-100"
              )}
              fill
              priority
              sizes="160px"
              src="/media/logo/logo.svg"
            />
            <Image
              alt="B2B Sales Arrow"
              className={cn(
                "object-contain transition-opacity duration-300",
                isSolidHeader ? "opacity-100" : "opacity-0"
              )}
              fill
              priority
              sizes="160px"
              src="/media/logo/logo-white.svg"
            />
          </Link>
        </div>

        <DesktopNav
          activeDropdown={activeDropdown}
          lightText={isHeaderLightText}
          onMouseEnter={handleMouseEnterLink}
          onServicesClick={openServicesMegamenu}
        />

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
              <MobileNav
                onClose={closeMobileMenu}
                onServiceGroupToggle={toggleMobileServiceGroup}
                onToggle={toggleMobileNav}
                openMobileNav={openMobileNav}
                openServiceGroup={openMobileServiceGroup}
              />
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
              <Megamenu lightText={isMegamenuLightText} onClose={closeMegamenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
