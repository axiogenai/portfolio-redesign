"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { geoOrthographic, geoPath, geoGraticule, geoCentroid, geoContains } from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
import { COUNTRY_DATA, type CountryMetric } from "@/data/countries";

// Exact palette matching demo
export const MAP_THEME_COLORS = {
  background: "transparent",
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
  highlightGlow: "rgba(255, 255, 255, 0.6)",
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [badgeState, setBadgeState] = useState<{
    visible: boolean;
    x: number;
    y: number;
    country: CountryMetric | null;
  }>({
    visible: true,
    x: 0,
    y: 0,
    country: COUNTRY_DATA["356"] || null,
  });

  const activeCountryIdRef = useRef<string>("356");
  const rotationRef = useRef<[number, number, number]>([-78, -20, 0]);
  const baseRotationRef = useRef<[number, number, number]>([-78, -20, 0]);
  const isDraggingRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const dragStartRef = useRef<{ x: number; y: number; rotation: [number, number, number] }>({
    x: 0,
    y: 0,
    rotation: [-78, -20, 0],
  });

  const gyroRef = useRef<{ current: [number, number]; target: [number, number] }>({
    current: [0, 0],
    target: [0, 0],
  });

  const getFillColor = useCallback((id: string) => {
    const metric = COUNTRY_DATA[id];
    if (!metric) return MAP_THEME_COLORS.countryBase;
    const users = metric.activeUsers;
    if (users > 5000000) return MAP_THEME_COLORS.scales[4];
    if (users > 2500000) return MAP_THEME_COLORS.scales[3];
    if (users > 1200000) return MAP_THEME_COLORS.scales[2];
    if (users > 500000) return MAP_THEME_COLORS.scales[1];
    return MAP_THEME_COLORS.scales[0];
  }, []);

  useEffect(() => {
    if (externalSelectedId) {
      activeCountryIdRef.current = externalSelectedId;
    }
  }, [externalSelectedId]);

  // Mobile DeviceOrientation Gyro Sensor
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      const gamma = Math.max(-35, Math.min(35, e.gamma));
      const beta = Math.max(-35, Math.min(35, e.beta - 40));
      gyroRef.current.target = [gamma * 0.3, -beta * 0.25];
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  // Desktop Mouse Parallax
  const handleMouseMoveGyro = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPointerDownRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    gyroRef.current.target = [nx * 12, -ny * 8];
  };

  const handleMouseLeaveGyro = () => {
    gyroRef.current.target = [0, 0];
  };

  // High-performance 60fps Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data?.features) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const graticule = geoGraticule().step([15, 15])();
    let animId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      const g = gyroRef.current;
      g.current[0] += (g.target[0] - g.current[0]) * 0.08;
      g.current[1] += (g.target[1] - g.current[1]) * 0.08;

      if (!isPointerDownRef.current && !isDraggingRef.current) {
        const delta = (dt / 1000) * 2.2;
        baseRotationRef.current[0] = (baseRotationRef.current[0] + delta) % 360;
      }

      const effectiveYaw = (baseRotationRef.current[0] + g.current[0]) % 360;
      const effectivePitch = Math.max(-85, Math.min(85, baseRotationRef.current[1] + g.current[1]));
      rotationRef.current = [effectiveYaw, effectivePitch, 0];

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const size = Math.min(width, height);
      const radius = size / 2 - 10;

      const projection = geoOrthographic()
        .scale(Math.max(radius, 30))
        .translate([width / 2, height / 2])
        .rotate(rotationRef.current)
        .clipAngle(90);

      const path = geoPath(projection, ctx);

      // 1. Ocean Sphere
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.fillStyle = MAP_THEME_COLORS.sphere;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = MAP_THEME_COLORS.sphereStroke;
      ctx.stroke();

      // 2. Graticules
      ctx.beginPath();
      path(graticule);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = MAP_THEME_COLORS.graticule;
      ctx.stroke();

      // 3. Countries
      let activeFeature: any = null;
      for (let i = 0; i < data.features.length; i++) {
        const feature = data.features[i];
        const countryId = String(feature.id || feature.properties?.id || i).padStart(3, "0");
        const isCurrentActive = countryId === activeCountryIdRef.current;

        if (isCurrentActive) {
          activeFeature = feature;
        }

        ctx.beginPath();
        path(feature);
        ctx.fillStyle = getFillColor(countryId);
        ctx.fill();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = MAP_THEME_COLORS.countryStroke;
        ctx.stroke();
      }

      // 4. Highlighted Country
      if (activeFeature) {
        ctx.save();
        ctx.beginPath();
        path(activeFeature);
        ctx.fillStyle = getFillColor(activeCountryIdRef.current);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = MAP_THEME_COLORS.highlightStroke;
        ctx.shadowColor = MAP_THEME_COLORS.highlightGlow;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.restore();

        try {
          const center = geoCentroid(activeFeature);
          const centerLon = -rotationRef.current[0];
          const centerLat = -rotationRef.current[1];
          const rad = Math.PI / 180;
          const dLon = (center[0] - centerLon) * rad;
          const lat1 = centerLat * rad;
          const lat2 = center[1] * rad;
          const cosD = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon);

          if (cosD > 0.1) {
            const bounds = path.bounds(activeFeature);
            let posX = 0;
            let posY = 0;

            if (bounds && !isNaN(bounds[0][0]) && !isNaN(bounds[0][1]) && !isNaN(bounds[1][0]) && !isNaN(bounds[1][1])) {
              posX = (bounds[0][0] + bounds[1][0]) / 2;
              posY = bounds[0][1] - 8; // Float cleanly ABOVE the northern edge of the country
            } else {
              const projected = projection(center);
              if (projected && !isNaN(projected[0]) && !isNaN(projected[1])) {
                posX = projected[0];
                posY = projected[1] - 36;
              }
            }

            if (posX && posY) {
              setBadgeState({
                visible: true,
                x: posX,
                y: posY,
                country: COUNTRY_DATA[activeCountryIdRef.current] || null,
              });
            }
          } else {
            setBadgeState((prev) => (prev.visible ? { ...prev, visible: false } : prev));
          }
        } catch {}
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [data, getFillColor]);

  // Pointer drag & hover
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
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

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !data?.features) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isPointerDownRef.current) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;

      if (!hasDraggedRef.current && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
        hasDraggedRef.current = true;
        isDraggingRef.current = true;
      }

      if (hasDraggedRef.current) {
        const sensitivity = 0.35;
        const newYaw = (dragStartRef.current.rotation[0] + dx * sensitivity) % 360;
        const newPitch = Math.max(-85, Math.min(85, dragStartRef.current.rotation[1] - dy * sensitivity));
        baseRotationRef.current = [newYaw, newPitch, 0];
      }
    } else {
      const size = Math.min(rect.width, rect.height);
      const radius = size / 2 - 10;
      const dx = x - rect.width / 2;
      const dy = y - rect.height / 2;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= radius) {
        const proj = geoOrthographic()
          .scale(Math.max(radius, 30))
          .translate([rect.width / 2, rect.height / 2])
          .rotate(rotationRef.current)
          .clipAngle(90);

        try {
          const coords = proj.invert?.([x, y]);
          if (coords && !isNaN(coords[0]) && !isNaN(coords[1])) {
            for (let i = 0; i < data.features.length; i++) {
              const feat = data.features[i];
              if (geoContains(feat, coords)) {
                const cId = String(feat.id || feat.properties?.id || i).padStart(3, "0");
                if (cId !== activeCountryIdRef.current) {
                  activeCountryIdRef.current = cId;
                  if (COUNTRY_DATA[cId]) {
                    onSelectCountry?.(COUNTRY_DATA[cId]);
                  }
                }
                break;
              }
            }
          }
        } catch {}
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    isDraggingRef.current = false;
    try {
      (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
    } catch {}
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMoveGyro}
      onMouseLeave={handleMouseLeaveGyro}
      className={`relative w-full h-full select-none overflow-hidden touch-none flex items-center justify-center bg-transparent ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      {/* Synchronized Floating Pill Badge */}
      {badgeState.visible && badgeState.country && (
        <div
          className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-full mb-2 flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white shadow-[0_12px_36px_rgba(0,0,0,0.95)] whitespace-nowrap will-change-transform select-none"
          style={{
            left: `${badgeState.x}px`,
            top: `${badgeState.y}px`,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Purple Map Location Pin */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
            style={{ filter: "drop-shadow(0 0 6px rgba(168, 85, 247, 0.75))" }}
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="font-bold text-white tracking-tight">{badgeState.country.name}</span>
          <span className="text-white/30 font-light mx-0.5">|</span>
          <span className="text-slate-200 font-medium">
            {badgeState.country.verifiedVisits || `${Math.round(badgeState.country.activeUsers / 6200)} verified visits`}
          </span>
        </div>
      )}
    </div>
  );
}
