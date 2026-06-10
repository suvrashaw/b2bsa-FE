"use client";

import type { CSSProperties, ReactElement, ReactNode } from "react";

import { useEffect, useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, useMapContext } from "react-simple-maps";

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
  const focusX = activeRoute ? (activeRoute.from.point[0] + activeRoute.to.point[0]) / 2 : MAP_WIDTH / 2;
  const focusY = activeRoute ? Math.min(activeRoute.from.point[1], activeRoute.to.point[1]) - 40 : MAP_HEIGHT / 3;

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
              className={isActive ? "footer-command-map-route-active" : "footer-command-map-route-idle"}
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

export const FooterCommandMap = () => {
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
    <div aria-hidden="true" className="footer-command-map-root pointer-events-none relative h-full w-full">
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
            linear-gradient(90deg, rgba(30, 96, 145, 0.1), transparent 22%, transparent 78%, rgba(30, 96, 145, 0.1));
          mix-blend-mode: screen;
        }

        .footer-command-map-root::after {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          content: "";
          background:
            linear-gradient(180deg, rgba(30, 96, 145, 0.18), transparent 22%, transparent 76%, rgba(30, 96, 145, 0.3)),
            radial-gradient(ellipse at center, transparent 46%, rgba(30, 96, 145, 0.24) 100%);
        }

        .footer-command-map-scan {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(180deg, transparent, rgba(198, 250, 255, 0.04) 50%, transparent);
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
