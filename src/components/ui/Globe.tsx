"use client";

import type { GlobeMethods } from "react-globe.gl";

import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useRef, useState } from "react";

// Dynamically import react-globe.gl to prevent SSR issues with WebGL/Canvas
const GlobeGL = dynamic(() => import("react-globe.gl"), {
  loading: () => (
    <div className="flex h-[600px] w-[600px] animate-pulse items-center justify-center rounded-full border border-white/5 bg-white/[0.02]">
      <span className="text-sm tracking-widest text-white/20 uppercase">Initializing Globe...</span>
    </div>
  ),
  ssr: false,
});

interface ArcData {
  color: [string, string];
  dashInitialGap: number;
  endLat: number;
  endLng: number;
  startLat: number;
  startLng: number;
}

const arcsData: ArcData[] = [
  {
    color: ["#4BC0D9", "#ffffff"],
    dashInitialGap: 0.4,
    endLat: 25.2048,
    endLng: 55.2708,
    startLat: 40.7128,
    startLng: -74.006,
  },
  {
    color: ["#ffffff", "#B23A48"],
    dashInitialGap: 1.1,
    endLat: 1.3521,
    endLng: 103.8198,
    startLat: 51.5074,
    startLng: -0.1278,
  },
  {
    color: ["#4BC0D9", "#B23A48"],
    dashInitialGap: 1.8,
    endLat: -33.8688,
    endLng: 151.2093,
    startLat: 43.6532,
    startLng: -79.3832,
  },
  {
    color: ["#ffffff", "#ffffff"],
    dashInitialGap: 2.2,
    endLat: 51.5074,
    endLng: -0.1278,
    startLat: 25.2048,
    startLng: 55.2708,
  },
  {
    color: ["#B23A48", "#ffffff"],
    dashInitialGap: 2.9,
    endLat: 40.7128,
    endLng: -74.006,
    startLat: 1.3521,
    startLng: 103.8198,
  },
  {
    color: ["#4BC0D9", "#ffffff"],
    dashInitialGap: 3.5,
    endLat: 25.2048,
    endLng: 55.2708,
    startLat: -33.8688,
    startLng: 151.2093,
  },
  {
    color: ["#ffffff", "#4BC0D9"],
    dashInitialGap: 4.1,
    endLat: 43.6532,
    endLng: -79.3832,
    startLat: 51.5074,
    startLng: -0.1278,
  },
  {
    color: ["#B23A48", "#4BC0D9"],
    dashInitialGap: 4.6,
    endLat: 1.3521,
    endLng: 103.8198,
    startLat: 40.7128,
    startLng: -74.006,
  },
  {
    color: ["#ffffff", "#B23A48"],
    dashInitialGap: 0.9,
    endLat: 25.2048,
    endLng: 55.2708,
    startLat: 43.6532,
    startLng: -79.3832,
  },
  {
    color: ["#4BC0D9", "#ffffff"],
    dashInitialGap: 3,
    endLat: 51.5074,
    endLng: -0.1278,
    startLat: -33.8688,
    startLng: 151.2093,
  },
];

interface GlobeMarker {
  lat: number;
  lng: number;
  name: string;
}

const MARKERS = [
  { lat: 40.7128, lng: -74.006, name: "New York" },
  { lat: 51.5074, lng: -0.1278, name: "London" },
  { lat: 25.2048, lng: 55.2708, name: "Dubai" },
  { lat: 1.3521, lng: 103.8198, name: "Singapore" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney" },
  { lat: 43.6532, lng: -79.3832, name: "Toronto" },
];

export const Globe = () => {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ height: 800, width: 800 });

  useEffect(() => {
    // Configure auto-rotation and initial position
    if (globeRef.current) {
      const controls = globeRef.current.controls() as Record<string, unknown>;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5; // Slow, premium rotation
      controls.enableZoom = false; // Disable zoom to keep it looking like a UI element

      // Point camera at a good starting angle
      globeRef.current.pointOfView({ altitude: 2.2, lat: 20, lng: 0 }, 1000);
    }
  }, []);

  const getArcDashInitialGap = useCallback((arc: object) => (arc as ArcData).dashInitialGap, []);
  const getLabelColor = useCallback(() => "rgba(255, 255, 255, 0.9)", []);
  const getLabelLat = useCallback((d: unknown) => (d as GlobeMarker).lat, []);
  const getLabelLng = useCallback((d: unknown) => (d as GlobeMarker).lng, []);
  const getLabelText = useCallback((d: unknown) => (d as GlobeMarker).name, []);
  const getPointColor = useCallback(() => "#ffffff", []);

  // Handle resizing so the globe fits nicely on mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      const size = Math.min(globalThis.innerWidth - 40, globalThis.innerHeight * 0.62, 800);
      setDimensions({ height: size, width: size });
    };

    globalThis.addEventListener("resize", handleResize);
    handleResize();
    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex w-full cursor-grab items-center justify-center active:cursor-grabbing">
      <GlobeGL
        arcColor="color"
        arcDashAnimateTime={4000}
        arcDashGap={4}
        arcDashInitialGap={getArcDashInitialGap}
        arcDashLength={0.4}
        // Arcs
        arcsData={arcsData}
        arcStroke={0.5} // Thin, luxurious lines
        atmosphereAltitude={0.15}
        atmosphereColor="#4BC0D9"
        backgroundColor="rgba(0,0,0,0)" // Transparent to blend with footer
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
        height={dimensions.height}
        labelColor={getLabelColor}
        labelDotRadius={0.3}
        labelIncludeDot={true}
        labelLat={getLabelLat}
        labelLng={getLabelLng}
        labelResolution={2}
        // Labels for points
        labelsData={MARKERS}
        labelSize={1.5}
        labelText={getLabelText}
        pointAltitude={0.05}
        pointColor={getPointColor}
        pointRadius={0.5}
        // Custom Points (Locations)
        pointsData={MARKERS}
        pointsMerge={true}
        ref={globeRef}
        // Styling the globe to be dark/charcoal
        showAtmosphere={true}
        width={dimensions.width}
      />
    </div>
  );
}
