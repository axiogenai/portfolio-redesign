"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as topojson from "topojson-client";
import BlurLines from "./BlurLines";
import GlobeChoroplethChart from "./GlobeChoroplethChart";

export default function LiveVisitors() {
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/countries-110m.json")
      .then((res) => {
        if (!res.ok) throw new Error("Local fetch failed");
        return res.json();
      })
      .then((topology) => {
        const geojson = topojson.feature(topology, topology.objects.countries);
        setGeoData(geojson);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Falling back to CDN for GeoJSON mesh:", err);
        fetch("https://unpkg.com/world-atlas@2.0.2/countries-110m.json")
          .then((r) => r.json())
          .then((topology) => {
            const geojson = topojson.feature(topology, topology.objects.countries);
            setGeoData(geojson);
            setLoading(false);
          })
          .catch((cdnErr) => {
            console.error("GeoJSON CDN load failed:", cdnErr);
            setLoading(false);
          });
      });
  }, []);

  return (
    <section
      id="live-visitors"
      className="w-full bg-[#05060a] px-4 font-['Schibsted_Grotesk',sans-serif] md:px-[clamp(32px,6vw,160px)] flex flex-col items-center justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(24px, 3vw, 44px)",
        paddingBottom: "clamp(24px, 3vw, 44px)",
      }}
    >
      {/* Top Header with Tag, Headline, and Subtitle */}
      <div className="mx-auto mb-4 flex max-w-xl flex-col items-center text-center">
        {/* Top Tag Pill */}
        <motion.div
          className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Portfolio Visitors
        </motion.div>

        {/* Section Headline */}
        <h2
          className="text-white text-center"
          style={{
            fontSize: "clamp(1.65rem, 3.2vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 700,
          }}
        >
          <BlurLines lines={["Global reach &", "live visitors"]} className="block" />
        </h2>

        {/* Subtitle */}
        <motion.p
          className="mt-2 max-w-sm text-xs text-slate-400 text-center"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        >
          Drag to rotate • Hover or click to highlight global nodes
        </motion.p>
      </div>

      {/* Standalone Compact 5cm Radius 3D Globe */}
      <div
        className="flex items-center justify-center relative select-none"
        style={{ width: "220px", height: "220px" }}
      >
        {loading ? (
          <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Loading Geographic Mesh...
          </div>
        ) : (
          <GlobeChoroplethChart data={geoData} selectedCountryId="356" />
        )}
      </div>
    </section>
  );
}
