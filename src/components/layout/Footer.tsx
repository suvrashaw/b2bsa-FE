"use client";

import type { CSSProperties, ReactElement, ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ComposableMap, Geographies, Geography, useMapContext } from "react-simple-maps";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import {
  footerNavigation,
  type NavLink,
  type ServiceNavGroup,
  serviceNavigationGroups,
  type ServiceSubGroup,
} from "@/content/navigation";
import { cn } from "@/lib";

// ─── FooterCommandMap ────────────────────────────────────────────────────────

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MAP_WIDTH = 1200;
const MAP_HEIGHT = 720;

type CityNode = {
  coordinates: [number, number];
  id: string;
};

type GeographiesRenderArgs = {
  geographies: MapGeography[];
};

type MapGeography = {
  rsmKey: string;
};

type ProjectedCityNode = {
  point: [number, number];
} & CityNode;

type RouteNode = {
  d: string;
  from: ProjectedCityNode;
  id: string;
  to: ProjectedCityNode;
};

const COMPOSABLE_MAP_STYLE = {
  display: "block",
  height: "100%",
  width: "100%",
} satisfies CSSProperties;

const FOCUS_ELLIPSE_STYLE = {
  transition: "cx 600ms ease, cy 600ms ease",
} satisfies CSSProperties;

const GEOGRAPHY_STYLE = {
  default: { outline: "none" },
  hover: { fill: "rgba(17, 69, 93, 0.74)", outline: "none" },
  pressed: { outline: "none" },
};

const MAP_PROJECTION_CONFIG = {
  center: [0, 5] as [number, number],
  scale: 175,
};

const FooterGeographies = Geographies as unknown as (props: {
  children: (args: GeographiesRenderArgs) => ReactNode;
  geography: string;
}) => ReactElement;

const CITIES: CityNode[] = [
  { coordinates: [-74, 40.71], id: "new-york" },
  { coordinates: [-9.14, 38.72], id: "lisbon" },
  { coordinates: [-0.12, 51.51], id: "london" },
  { coordinates: [4.9, 52.37], id: "amsterdam" },
  { coordinates: [77.59, 12.97], id: "bengaluru" },
  { coordinates: [103.82, 1.35], id: "singapore" },
];

const arcPath = (from: [number, number], to: [number, number]) => {
  const [fromX, fromY] = from;
  const [toX, toY] = to;
  const middleX = (fromX + toX) / 2;
  const lift = Math.max(52, Math.abs(fromX - toX) * 0.2);
  return `M ${fromX} ${fromY} Q ${middleX} ${Math.min(fromY, toY) - lift} ${toX} ${toY}`;
};

const FooterMapOverlay = ({ activeRouteIndex }: { activeRouteIndex: number }) => {
  const { projection } = useMapContext();

  const points = useMemo<ProjectedCityNode[]>(
    () =>
      CITIES.map((city) => ({
        ...city,
        point: projection(city.coordinates) ?? ([0, 0] as [number, number]),
      })),
    [projection]
  );

  const routes = useMemo<RouteNode[]>(
    () =>
      points.slice(0, -1).map((point, index) => ({
        d: arcPath(point.point, points[index + 1].point),
        from: point,
        id: `footer-route-${point.id}`,
        to: points[index + 1],
      })),
    [points]
  );

  const activeRoute = routes[activeRouteIndex % Math.max(routes.length, 1)];
  const focusX = activeRoute
    ? (activeRoute.from.point[0] + activeRoute.to.point[0]) / 2
    : MAP_WIDTH / 2;
  const focusY = activeRoute
    ? Math.min(activeRoute.from.point[1], activeRoute.to.point[1]) - 40
    : MAP_HEIGHT / 3;

  return (
    <g pointerEvents="none">
      <defs>
        <radialGradient cx="50%" cy="50%" id="footer-map-focus" r="50%">
          <stop offset="0%" stopColor="rgba(198, 250, 255, 0.3)" />
          <stop offset="52%" stopColor="rgba(75, 192, 217, 0.1)" />
          <stop offset="100%" stopColor="rgba(75, 192, 217, 0)" />
        </radialGradient>
        <linearGradient id="footer-map-route" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#5bc8dd" />
          <stop offset="44%" stopColor="#e7fdff" />
          <stop offset="100%" stopColor="#8df2ff" />
        </linearGradient>
        <filter height="200%" id="footer-map-glow" width="200%" x="-50%" y="-50%">
          <feGaussianBlur result="blurred" stdDeviation="2.5" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter height="260%" id="footer-map-glow-strong" width="260%" x="-80%" y="-80%">
          <feGaussianBlur result="blurred" stdDeviation="5.5" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse
        cx={focusX}
        cy={focusY}
        fill="url(#footer-map-focus)"
        opacity={0.72}
        rx={190}
        ry={98}
        style={FOCUS_ELLIPSE_STYLE}
      />

      {routes.map((route) => {
        const isActive = route === activeRoute;
        return (
          <g key={route.id}>
            <path
              d={route.d}
              fill="none"
              filter={isActive ? "url(#footer-map-glow)" : undefined}
              stroke={isActive ? "rgba(191, 248, 255, 0.12)" : "rgba(143, 232, 255, 0.05)"}
              strokeLinecap="round"
              strokeWidth={isActive ? 8 : 2.5}
            />
            <path
              className={
                isActive ? "footer-command-map-route-active" : "footer-command-map-route-idle"
              }
              d={route.d}
              fill="none"
              stroke={isActive ? "url(#footer-map-route)" : "rgba(143, 232, 255, 0.28)"}
              strokeDasharray={isActive ? "16 13" : "6 13"}
              strokeLinecap="round"
              strokeWidth={isActive ? 3.2 : 1.25}
            />
          </g>
        );
      })}

      {activeRoute ? (
        <circle fill="#f0feff" filter="url(#footer-map-glow)" r={4.75}>
          <animateMotion dur="3.8s" path={activeRoute.d} repeatCount="indefinite" />
        </circle>
      ) : null}

      {points.map((point) => {
        const [x, y] = point.point;
        const isRouteNode =
          activeRoute && (point.id === activeRoute.from.id || point.id === activeRoute.to.id);
        return (
          <g key={point.id}>
            <circle
              cx={x}
              cy={y}
              fill={isRouteNode ? "rgba(198, 250, 255, 0.1)" : "rgba(75, 192, 217, 0.05)"}
              r={isRouteNode ? 22 : 12}
            />
            <circle
              className={isRouteNode ? "footer-command-map-ring-active" : undefined}
              cx={x}
              cy={y}
              fill="none"
              filter={isRouteNode ? "url(#footer-map-glow-strong)" : undefined}
              r={isRouteNode ? 9 : 5}
              stroke={isRouteNode ? "rgba(225, 253, 255, 0.58)" : "rgba(143, 232, 255, 0.28)"}
              strokeWidth={isRouteNode ? 2 : 1.5}
            />
            <circle
              cx={x}
              cy={y}
              fill={isRouteNode ? "#ffffff" : "rgba(198, 250, 255, 0.58)"}
              filter={isRouteNode ? "url(#footer-map-glow-strong)" : undefined}
              r={isRouteNode ? 4.75 : 2.75}
            />
          </g>
        );
      })}
    </g>
  );
};

const FooterCommandMap = () => {
  const routeCount = Math.max(CITIES.length - 1, 1);
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  useEffect(() => {
    const interval = globalThis.setInterval(
      () => setActiveRouteIndex((index) => (index + 1) % routeCount),
      3800
    );
    return () => globalThis.clearInterval(interval);
  }, [routeCount]);

  return (
    <div
      aria-hidden="true"
      className="footer-command-map-root pointer-events-none relative h-full w-full"
    >
      <div className="footer-command-map-scan" />
      <ComposableMap
        height={MAP_HEIGHT}
        preserveAspectRatio="xMidYMid meet"
        projection="geoEqualEarth"
        projectionConfig={MAP_PROJECTION_CONFIG}
        style={COMPOSABLE_MAP_STYLE}
        width={MAP_WIDTH}
      >
        <FooterGeographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geography) => (
              <Geography
                fill="rgba(17, 69, 93, 0.74)"
                geography={geography}
                key={geography.rsmKey}
                stroke="rgba(143, 232, 255, 0.18)"
                strokeWidth={0.45}
                style={GEOGRAPHY_STYLE}
              />
            ))
          }
        </FooterGeographies>
        <FooterMapOverlay activeRouteIndex={activeRouteIndex} />
      </ComposableMap>

      <style global jsx>{`
        .footer-command-map-root {
          filter: saturate(1.1) contrast(1.06);
          opacity: 0.9;
        }

        .footer-command-map-root::before {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          content: "";
          background:
            radial-gradient(ellipse 56% 42% at 51% 43%, rgba(155, 243, 255, 0.07), transparent 70%),
            linear-gradient(
              90deg,
              rgba(30, 96, 145, 0.1),
              transparent 22%,
              transparent 78%,
              rgba(30, 96, 145, 0.1)
            );
          mix-blend-mode: screen;
        }

        .footer-command-map-root::after {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          content: "";
          background:
            linear-gradient(
              180deg,
              rgba(30, 96, 145, 0.18),
              transparent 22%,
              transparent 76%,
              rgba(30, 96, 145, 0.3)
            ),
            radial-gradient(ellipse at center, transparent 46%, rgba(30, 96, 145, 0.24) 100%);
        }

        .footer-command-map-scan {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(198, 250, 255, 0.04) 50%,
            transparent
          );
          mix-blend-mode: screen;
          animation: footerCommandMapSweep 12s linear infinite;
        }

        .footer-command-map-route-active {
          animation: footerCommandMapDrift 4.6s linear infinite;
        }

        .footer-command-map-route-idle {
          opacity: 0.62;
        }

        .footer-command-map-ring-active {
          animation: footerCommandMapPulse 2.8s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes footerCommandMapSweep {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          14% {
            opacity: 0.36;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes footerCommandMapDrift {
          to {
            stroke-dashoffset: -56;
          }
        }

        @keyframes footerCommandMapPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.34;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.76;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-command-map-scan,
          .footer-command-map-route-active,
          .footer-command-map-ring-active {
            animation: none;
          }

          .footer-command-map-root circle animateMotion {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

// ─── Footer ──────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    colorClass: "text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]",
    href: "https://www.linkedin.com/company/b2b-sales-arrow/",
    icon: FaLinkedinIn,
    name: "LinkedIn",
  },
  {
    colorClass: "text-[#000000] hover:border-[#000000] hover:bg-[#000000]",
    icon: FaXTwitter,
    name: "X",
  },
  {
    colorClass: "text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]",
    icon: FaInstagram,
    name: "Instagram",
  },
];

const EMPTY_NAV_LINKS: NavLink[] = [];

const FooterSitemapLinks = ({ links }: { links: NavLink[] }) => (
  <ul className="space-y-1.5 border-l border-white/30 pl-3">
    {links.map((item) => (
      <li key={item.name}>
        <Link
          className="text-xs leading-5 text-white/85 transition-colors hover:text-white hover:underline"
          href={item.href}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterServiceSubGroup = ({ group }: { group: ServiceSubGroup }) => (
  <div>
    <span className="mb-2 block text-xs font-semibold tracking-wider text-white/60 uppercase">
      {group.name}
    </span>
    <FooterSitemapLinks links={group.links} />
  </div>
);

const FooterServiceGroup = ({
  group,
  noWrapTitle = false,
}: {
  group: ServiceNavGroup;
  noWrapTitle?: boolean;
}) => {
  let childLinks = null;
  const flatLinks = group.links ?? EMPTY_NAV_LINKS;

  if (group.groups) {
    childLinks = (
      <div className="grid gap-5 sm:grid-cols-2">
        {group.groups.map((subGroup) => (
          <FooterServiceSubGroup group={subGroup} key={subGroup.name} />
        ))}
      </div>
    );
  } else if (flatLinks.length > 0) {
    childLinks = <FooterSitemapLinks links={flatLinks} />;
  }

  return (
    <div>
      <Link
        className={cn(
          "mb-3 block text-sm font-semibold text-white transition-colors hover:text-white hover:underline",
          noWrapTitle ? "whitespace-nowrap" : ""
        )}
        href={group.href}
      >
        {group.name}
      </Link>
      {childLinks}
    </div>
  );
};

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="relative overflow-hidden bg-brand-blue" ref={containerRef}>
      {/* Map as static background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-75">
        {footerInView && <FooterCommandMap />}
      </div>
      {/* Gradient overlay for content readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-blue/95 via-brand-blue/75 to-brand-blue/40" />

      <div className="relative z-10 container mx-auto px-8 pt-6 pb-4">
        {/* Row 1: Services sitemap */}
        <div className="mb-6 grid gap-7 border-b border-white/10 pb-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <FooterServiceGroup group={serviceNavigationGroups[0]} />
          </div>
          <FooterServiceGroup group={serviceNavigationGroups[1]} />
          <FooterServiceGroup group={serviceNavigationGroups[3]} />
          <div className="space-y-6">
            <FooterServiceGroup group={serviceNavigationGroups[2]} noWrapTitle />
            <FooterServiceGroup group={serviceNavigationGroups[4]} />
            <FooterServiceGroup group={serviceNavigationGroups[5]} />
          </div>
        </div>

        {/* Row 2: Brand / Contact / Navigation / Newsletter */}
        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.7fr_1.25fr] lg:gap-10">
          <div>
            <Link
              className="relative mb-6 block h-12 w-48 transition-opacity hover:opacity-90"
              href="/"
            >
              <Image
                alt="B2B Sales Arrow"
                className="rounded-md bg-transparent object-contain object-left"
                fill
                sizes="192px"
                src="/images/logo_white.svg"
              />
            </Link>
            <Heading as="h2" className="mb-3 text-lg font-bold text-white!" preserveClassName>
              Turn Your Next Trade Show into a Revenue Engine
            </Heading>
            <p className="max-w-sm text-sm leading-relaxed text-white/90">
              We deliver premier global event solutions that turn your corporate presence into a
              measurable revenue engine. Let&apos;s build your pipeline together.
            </p>
            <p className="mt-3 max-w-sm text-sm font-medium text-white/80">
              Mission: To transform your global event presence into measurable, high-impact
              commercial outcomes.
            </p>
          </div>

          <div>
            <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
              Contact
            </span>
            <div className="mb-5 space-y-1.5 text-sm text-white/90">
              <p>
                <a
                  className="transition-colors hover:text-white hover:underline"
                  href="mailto:info@b2bsalesarrow.com"
                >
                  info@b2bsalesarrow.com
                </a>
              </p>
              <p>New York, USA</p>
              <p>Bengaluru, India</p>
              <p className="text-white/85">Serving 30+ Countries</p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                const baseClass =
                  "flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-brand-gray transition-all duration-300";

                if (item.href) {
                  return (
                    <a
                      aria-label={`Visit B2B Sales Arrow on ${item.name}`}
                      className={cn(baseClass, "hover:text-white", item.colorClass)}
                      href={item.href}
                      key={item.name}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                }

                return (
                  <button
                    aria-label={`${item.name} profile coming soon`}
                    className={cn(
                      baseClass,
                      item.colorClass.split(" ", 1)[0],
                      "cursor-not-allowed opacity-60 hover:bg-brand-gray"
                    )}
                    disabled
                    key={item.name}
                    type="button"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
              Navigation
            </span>
            <ul className="space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-sm font-medium text-white/90 transition-colors hover:text-white hover:underline"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="mb-4 block text-xs font-semibold tracking-widest text-white uppercase">
              Stay Ahead
            </span>
            <p className="mb-4 text-sm text-white/90">
              Subscribe to our enterprise growth newsletter.
            </p>
            <div className="pointer-events-auto flex min-w-0 items-center rounded-[4px] border border-white/35 bg-white/10 p-1 text-white transition-colors focus-within:border-white">
              <input
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white transition-colors placeholder:text-white/85 focus:outline-none"
                placeholder="Work Email"
                type="email"
              />
              <Button
                aria-label="Subscribe"
                className="h-10 border-white/30 text-white hover:border-white hover:bg-white/10"
                size="sm"
                variant="secondary"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto flex flex-col items-center justify-between gap-4 border-t border-white/25 pt-6 md:flex-row">
          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} B2B Sales Arrow. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/80">
            <Link
              className="transition-colors hover:text-white hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition-colors hover:text-white hover:underline"
              href="/terms-and-conditions"
            >
              Terms of Service
            </Link>
            <Link
              className="transition-colors hover:text-white hover:underline"
              href="/cookie-policy"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
