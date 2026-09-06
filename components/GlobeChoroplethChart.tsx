"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { geoOrthographic, geoPath, geoGraticule, geoCentroid } from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
import { MapPin } from "lucide-react";
import { COUNTRY_DATA, type CountryMetric } from "@/data/countries";

// Exact palette matching C:\Users\aditya\.gemini\antigravity\scratch\globe-choropleth-demo
export const MAP_THEME_COLORS = {
  background: "#05060a",
  sphere: "#0e1017",
  sphereStroke: "#1a1d29",
  graticule: "rgba(255, 255, 255, 0.04)",
  countryBase: "#181b26",
  countryStroke: "#0d0f17",
  scales: [
    "#222636", // 01 lowest
    "#383e52", // 02
    "#596179", // 03
    "#8a93ac", // 04
    "#d2d7e8", // 05 highest (silver/white)
  ],
  highlightStroke: "#ffffff",
};

export interface GlobeChoroplethProps {
  data: FeatureCollection<Geometry, any> | null;
  selectedCountryId?: string | null;
  className?: string;
  onSelectCountry?: (country: CountryMetric | null) => void;
}

export default function GlobeChoroplethChart({
  data,
  selectedCountryId: externalSelectedId,
  className = "",
  onSelectCountry,
}: GlobeChoroplethProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 600 });
  const [rotation, setRotation] = useState<[number, number, number]>([-78, -20, 0]); // Start angled on India
  const [isDragging, setIsDragging] = useState(false);
  const [activeCountryId, setActiveCountryId] = useState<string | null>(externalSelectedId || "356");

  const isPointerDownRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const baseRotationRef = useRef<[number, number, number]>([-78, -20, 0]);
  const dragStartRef = useRef<{ x: number; y: number; rotation: [number, number, number] }>({
    x: 0,
    y: 0,
    rotation: [-78, -20, 0],
  });

  // Gyroscope tracking (Desktop cursor parallax + Mobile DeviceOrientation)
  const gyroRef = useRef<{ current: [number, number]; target: [number, number] }>({
    current: [0, 0],
    target: [0, 0],
  });

  useEffect(() => {
    if (externalSelectedId !== undefined) {
      setActiveCountryId(externalSelectedId);
    }
  }, [externalSelectedId]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setDimensions({
          width: Math.max(entry.contentRect.width, 260),
          height: Math.max(entry.contentRect.height, 260),
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Mobile DeviceOrientation Gyro Sensor Listener
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      const gamma = Math.max(-45, Math.min(45, e.gamma));
      const beta = Math.max(-45, Math.min(45, e.beta - 40));
      gyroRef.current.target = [gamma * 0.35, -beta * 0.3];
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  // Animation Loop: Ambient Drift + Gyroscope Spring Interpolation
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      // Smoothly interpolate (lerp) gyro tilt with spring damping
      const g = gyroRef.current;
      g.current[0] += (g.target[0] - g.current[0]) * 0.08;
      g.current[1] += (g.target[1] - g.current[1]) * 0.08;

      // Ambient drift when idle
      if (!isPointerDownRef.current && !isDragging) {
        const delta = (dt / 1000) * 2.2;
        baseRotationRef.current[0] = (baseRotationRef.current[0] + delta) % 360;
      }

      // Compute total effective rotation: base + gyro tilt
      const effectiveYaw = (baseRotationRef.current[0] + g.current[0]) % 360;
      const effectivePitch = Math.max(-85, Math.min(85, baseRotationRef.current[1] + g.current[1]));

      setRotation([effectiveYaw, effectivePitch, 0]);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  // Desktop Mouse Gyro Parallax Handler
  const handleMouseMoveGyro = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPointerDownRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // Smooth gyro tilt offset: ±14° yaw, ±9° pitch
    gyroRef.current.target = [nx * 14, -ny * 9];
  };

  const handleMouseLeaveGyro = () => {
    gyroRef.current.target = [0, 0];
  };

  // Compute projection and path generator
  const { projection, pathGenerator } = useMemo(() => {
    const size = Math.min(dimensions.width, dimensions.height);
    const radius = size / 2 - 12;

    const proj = geoOrthographic()
      .scale(Math.max(radius, 30))
      .translate([dimensions.width / 2, dimensions.height / 2])
      .rotate(rotation)
      .clipAngle(90);

    return {
      projection: proj,
      pathGenerator: geoPath(proj),
    };
  }, [dimensions, rotation]);

  // Smooth pointer drag rotation handlers
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    isPointerDownRef.current = true;
    hasDraggedRef.current = false;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotation: [...baseRotationRef.current],
    };
    gyroRef.current.target = [0, 0];
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isPointerDownRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (!hasDraggedRef.current && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      hasDraggedRef.current = true;
      setIsDragging(true);
    }

    if (hasDraggedRef.current) {
      const sensitivity = 0.35;
      const newYaw = (dragStartRef.current.rotation[0] + dx * sensitivity) % 360;
      const newPitch = Math.max(-85, Math.min(85, dragStartRef.current.rotation[1] - dy * sensitivity));
      baseRotationRef.current = [newYaw, newPitch, 0];
    }
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);
    try {
      (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
    } catch {}
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  // Country Fill logic based on traffic metrics
  const getFill = useCallback((id: string) => {
    const metric = COUNTRY_DATA[id];
    if (!metric) return MAP_THEME_COLORS.countryBase;

    const users = metric.activeUsers;
    if (users > 5000000) return MAP_THEME_COLORS.scales[4];
    if (users > 2500000) return MAP_THEME_COLORS.scales[3];
    if (users > 1200000) return MAP_THEME_COLORS.scales[2];
    if (users > 500000) return MAP_THEME_COLORS.scales[1];
    return MAP_THEME_COLORS.scales[0];
  }, []);

  const activeCountry = activeCountryId ? COUNTRY_DATA[activeCountryId] : null;

  // Find active feature
  const activeFeature = useMemo(() => {
    if (!activeCountryId || !data?.features) return null;
    return (
      data.features.find((f: any) => {
        const id = String(f.id || f.properties?.id).padStart(3, "0");
        return id === activeCountryId;
      }) || null
    );
  }, [data, activeCountryId]);

  // Compute active path
  const activePath = useMemo(() => {
    if (!activeFeature) return null;
    return pathGenerator(activeFeature);
  }, [activeFeature, pathGenerator]);

  // Synchronous Badge position calculation (zero frame lag, hemisphere-aware)
  const badgePos = useMemo(() => {
    if (!activeFeature) return null;
    try {
      const center = geoCentroid(activeFeature);
      const centerLon = -rotation[0];
      const centerLat = -rotation[1];
      const rad = Math.PI / 180;
      const dLon = (center[0] - centerLon) * rad;
      const lat1 = centerLat * rad;
      const lat2 = center[1] * rad;
      const cosD = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon);
      // If center is on the back hemisphere or too close to horizon edge, hide badge
      if (cosD <= 0.1) return null;
      const projected = projection(center);
      if (!projected || isNaN(projected[0]) || isNaN(projected[1])) return null;
      return { x: projected[0], y: projected[1] };
    } catch {
      return null;
    }
  }, [activeFeature, projection, rotation]);

  const graticuleLines = useMemo(() => {
    return pathGenerator(geoGraticule().step([15, 15])());
  }, [pathGenerator]);

  const handleCountryInteraction = (countryId: string) => {
    if (isPointerDownRef.current || hasDraggedRef.current) return;
    setActiveCountryId(countryId);
    if (COUNTRY_DATA[countryId]) {
      onSelectCountry?.(COUNTRY_DATA[countryId]);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMoveGyro}
      onMouseLeave={handleMouseLeaveGyro}
      className={`relative w-full h-full select-none overflow-hidden touch-none flex items-center justify-center bg-transparent ${className}`}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className={`w-full h-full select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Globe Base Ocean / Sphere */}
        <path
          d={pathGenerator({ type: "Sphere" }) || ""}
          fill={MAP_THEME_COLORS.sphere}
          stroke={MAP_THEME_COLORS.sphereStroke}
          strokeWidth={1}
        />

        {/* Graticule Grid Lines */}
        {graticuleLines && (
          <path
            d={graticuleLines}
            fill="none"
            stroke={MAP_THEME_COLORS.graticule}
            strokeWidth={0.5}
            className="pointer-events-none"
          />
        )}

        {/* Base Countries Mesh */}
        <g className="globe-countries">
          {data?.features?.map((feature, idx) => {
            const countryId = String(feature.id || feature.properties?.id || idx).padStart(3, "0");
            const path = pathGenerator(feature);
            if (!path) return null;

            return (
              <path
                key={countryId}
                d={path}
                fill={getFill(countryId)}
                stroke={MAP_THEME_COLORS.countryStroke}
                strokeWidth={0.5}
                className="cursor-pointer transition-[fill] duration-150 hover:brightness-125"
                onMouseEnter={() => handleCountryInteraction(countryId)}
                onClick={() => handleCountryInteraction(countryId)}
              />
            );
          })}
        </g>

        {/* Selected / Highlighted Country Layer (Crisp White Outline on top) */}
        {activePath && (
          <path
            d={activePath}
            fill={getFill(activeCountryId!)}
            stroke={MAP_THEME_COLORS.highlightStroke}
            strokeWidth={1.8}
            strokeLinejoin="round"
            strokeLinecap="round"
            className="pointer-events-none drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
          />
        )}
      </svg>

      {/* Synchronized Floating Pill Badge matching user reference media_1788692601270.png */}
      {badgePos && activeCountry && (
        <div
          className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-full mb-2 flex items-center gap-1.5 rounded-full border border-[#2b3047] bg-[#121522]/95 px-3 py-1 text-xs text-white shadow-2xl backdrop-blur-md whitespace-nowrap will-change-transform select-none"
          style={{
            left: `${badgePos.x}px`,
            top: `${badgePos.y - 8}px`,
          }}
        >
          <MapPin className="w-3.5 h-3.5 text-purple-400 fill-purple-400/20 shrink-0" />
          <span className="font-semibold text-slate-100">{activeCountry.name}</span>
          <span className="text-slate-600 font-light mx-0.5">|</span>
          <span className="text-slate-300 font-medium">{activeCountry.tier || "Global Node"}</span>
        </div>
      )}
    </div>
  );
}
