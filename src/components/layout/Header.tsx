"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { type NavLink, type ServiceNavGroup, serviceNavigationGroups, topNavigation } from "@/content/navigation";
import { cn } from "@/lib";

const HEADER_ANIMATE = { y: 0 };
const HEADER_INITIAL = { y: -100 };
const HEADER_TRANSITION = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };
const MOBILE_MENU_ANIMATE = { opacity: 1, y: 0 };
const MOBILE_MENU_INITIAL = { opacity: 0, y: -20 };
const MOBILE_MENU_EXIT = { opacity: 0, y: -20 };
const MOBILE_SUBMENU_ANIMATE = { height: "auto", opacity: 1 };
const MOBILE_SUBMENU_COLLAPSED = { height: 0, opacity: 0 };
const MOBILE_NAV_TRANSITION = { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const };
const MOBILE_GROUP_TRANSITION = { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const };

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
          "group relative whitespace-nowrap text-base lg:max-xl:text-sm font-semibold [text-shadow:0_1px_4px_rgba(0,0,0,0.12)] transition-colors flex items-center gap-1.5 lg:max-xl:gap-0.5",
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

// Pure sub-components for Megamenu and Mobile menu to satisfy react-perf / sonarjs rules
const NOWRAP_NAMES = new Set(["Event Experience Video Production", "Event Live Streaming Services"]);
type ServiceNavSubGroup = NonNullable<ServiceNavGroup["groups"]>[number];

const MobileSubGroupLinks = ({
  links,
  onClose,
}: {
  links: NavLink[];
  onClose: () => void;
}) => (
  <>
    {links.map((sub) => (
      <Link
        className="block pl-8 text-base font-medium text-gray-500 transition-colors hover:text-brand-blue"
        href={sub.href}
        key={sub.name}
        onClick={onClose}
      >
        {sub.name}
      </Link>
    ))}
  </>
);

const MobileNestedServiceGroup = ({
  onClose,
  subGroup,
}: {
  onClose: () => void;
  subGroup: ServiceNavSubGroup;
}) => (
  <div>
    <p className="px-4 pt-2 pb-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">
      {subGroup.name}
    </p>
    <MobileSubGroupLinks links={subGroup.links} onClose={onClose} />
  </div>
);

const MobileServiceGroup = ({
  group,
  isOpen,
  onClose,
  onToggle,
}: {
  group: ServiceNavGroup;
  isOpen: boolean;
  onClose: () => void;
  onToggle: (name: string) => void;
}) => {
  const handleToggle = useCallback(() => {
    onToggle(group.name);
  }, [group.name, onToggle]);
  const hasSubContent = (group.groups?.length ?? 0) > 0 || (group.links?.length ?? 0) > 0;

  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-6 py-3 text-left text-base font-bold text-brand-charcoal transition-colors hover:text-brand-blue"
        onClick={handleToggle}
        type="button"
      >
        <span>{group.name}</span>
        {hasSubContent && (
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={MOBILE_SUBMENU_ANIMATE}
            className="overflow-hidden"
            exit={MOBILE_SUBMENU_COLLAPSED}
            initial={MOBILE_SUBMENU_COLLAPSED}
            transition={MOBILE_GROUP_TRANSITION}
          >
            <div className="pb-3 pl-4">
              {group.groups?.map((subGroup) => (
                <MobileNestedServiceGroup
                  key={subGroup.name}
                  onClose={onClose}
                  subGroup={subGroup}
                />
              ))}
              {group.links && <MobileSubGroupLinks links={group.links} onClose={onClose} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({
  isOpen,
  link,
  onClose,
  onServiceGroupToggle,
  onToggle,
  openServiceGroup,
}: {
  isOpen: boolean;
  link: (typeof topNavigation)[number];
  onClose: () => void;
  onServiceGroupToggle: (name: string) => void;
  onToggle: (name: string) => void;
  openServiceGroup: null | string;
}) => {
  const hasChildren = link.name === "Services";
  const handleToggle = useCallback(() => {
    onToggle(link.name);
  }, [link.name, onToggle]);

  return (
    <div className="border-b border-gray-50 last:border-0">
      {hasChildren ? (
        <button
          className="flex w-full items-center justify-between px-6 py-4 font-heading text-xl font-bold transition-colors hover:text-brand-blue"
          onClick={handleToggle}
          type="button"
        >
          <span>{link.name}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-gray-400 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>
      ) : (
        <Link
          className="flex w-full items-center px-6 py-4 font-heading text-xl font-bold transition-colors hover:text-brand-blue"
          href={link.href}
          onClick={onClose}
        >
          {link.name}
        </Link>
      )}

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            animate={MOBILE_SUBMENU_ANIMATE}
            className="overflow-hidden"
            exit={MOBILE_SUBMENU_COLLAPSED}
            initial={MOBILE_SUBMENU_COLLAPSED}
            transition={MOBILE_NAV_TRANSITION}
          >
            <div className="pb-4">
              {serviceNavigationGroups.map((group) => (
                <MobileServiceGroup
                  group={group}
                  isOpen={openServiceGroup === group.name}
                  key={group.name}
                  onClose={onClose}
                  onToggle={onServiceGroupToggle}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MegamenuSubLink = ({
  onClose,
  sub,
}: {
  onClose: () => void;
  sub: NavLink;
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
}: {
  group: ServiceNavGroup;
  noWrapTitle?: boolean;
  onClose: () => void;
}) => {
  const flatLinks = group.links ?? [];
  const subGroups = group.groups ?? [];

  return (
    <div className="p-5">
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
      {subGroups.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4">
          {subGroups.map((sg) => (
            <div key={sg.name}>
              <p className="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase">
                {sg.name}
              </p>
              <div className="space-y-3">
                {sg.links.map((sub) => (
                  <MegamenuSubLink key={sub.name} onClose={onClose} sub={sub} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {flatLinks.map((sub) => (
            <MegamenuSubLink key={sub.name} onClose={onClose} sub={sub} />
          ))}
        </div>
      )}
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
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:max-xl:px-4 py-4 transition-all duration-300",
        headerSurfaceClass
      )}
      initial={HEADER_INITIAL}
      onMouseLeave={handleCloseMegamenu}
      transition={HEADER_TRANSITION}
    >
      <div className="flex items-center gap-2">
        <Link
          className="relative block h-9 w-32 transition-all duration-300 hover:opacity-80 lg:max-xl:h-8 lg:max-xl:w-28 xl:h-14 xl:w-52"
          href="/"
        >
          <Image
            alt="B2B Sales Arrow"
            className="object-contain"
            fill
            priority
            sizes="160px"
            src="/logos/logo_primary.svg"
          />
        </Link>
      </div>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex lg:max-xl:left-[46%] lg:max-xl:gap-4">
        {topNavigation.map((link) => (
          <DesktopNavLink
            activeDropdown={activeDropdown}
            key={link.name}
            lightText={headerLightText}
            link={link}
            onMouseEnter={handleMouseEnterLink}
          />
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <LanguageSelector lightText={headerLightText} />

        <Link className="hidden lg:block" href="/contact">
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
                {/* Global Event Solutions — spans 2 columns, internally 2-column sub-groups */}
                <div className="col-span-2">
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[0]}
                    onClose={handleCloseMegamenu}
                  />
                </div>
                {/* Media Production */}
                <MegamenuServiceGroup
                  group={serviceNavigationGroups[1]}
                  onClose={handleCloseMegamenu}
                />
                {/* Performance Marketing */}
                <MegamenuServiceGroup
                  group={serviceNavigationGroups[3]}
                  onClose={handleCloseMegamenu}
                />
                {/* Sales Qualified Lead Generation + Market Research + HPMI — stacked */}
                <div>
                  <MegamenuServiceGroup
                    group={serviceNavigationGroups[2]}
                    noWrapTitle
                    onClose={handleCloseMegamenu}
                  />
                  <div className="mt-1">
                    <MegamenuServiceGroup
                      group={serviceNavigationGroups[4]}
                      onClose={handleCloseMegamenu}
                    />
                  </div>
                  <div className="mt-1">
                    <MegamenuServiceGroup
                      group={serviceNavigationGroups[5]}
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
            className="absolute top-full right-0 left-0 max-h-[80vh] overflow-y-auto border-b border-gray-100 bg-white shadow-2xl lg:hidden"
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

            <div className="p-6">
              <Link href="/contact" onClick={closeMobileMenu}>
                <Button className="w-full" variant="primary">
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
