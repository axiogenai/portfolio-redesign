"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as topojson from "topojson-client";
import countriesTopology from "world-atlas/countries-110m.json";
import BlurLines from "./BlurLines";
import GlobeChoroplethChart from "./GlobeChoroplethChart";

// Pre-convert topology to GeoJSON feature collection synchronously so it is always immediately available
const geoData = topojson.feature(
  countriesTopology as any,
  (countriesTopology as any).objects.countries
) as any;

export default function LiveVisitors() {
  const [selectedCountryId, setSelectedCountryId] = useState<string>("356");

  return (
    <section
      id="live-visitors"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] md:px-[clamp(32px,6vw,160px)] flex flex-col items-center justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(36px, 5vw, 72px)",
        paddingBottom: "clamp(36px, 5vw, 72px)",
      }}
    >
      {/* Top Header with Tag and Headline (No Subtitle) */}
      <div className="mx-auto mb-6 sm:mb-8 flex max-w-2xl flex-col items-center text-center">
        {/* Top Tag Pill */}
        <motion.div
          className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Portfolio Visitors
        </motion.div>

        {/* Section Headline */}
        <h2
          className="text-foreground text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontWeight: 700,
          }}
        >
          <BlurLines lines={["Global reach &", "live visitors"]} className="block" />
        </h2>
      </div>

      {/* Standalone 3D Globe - Sized cleanly to fit both desktop and mobile screens */}
      <div
        className="flex items-center justify-center relative select-none"
        style={{
          width: "min(86vw, min(68vh, 500px))",
          height: "min(86vw, min(68vh, 500px))",
          maxWidth: "500px",
          maxHeight: "500px",
          aspectRatio: "1 / 1",
        }}
      >
        <GlobeChoroplethChart
          data={geoData}
          selectedCountryId={selectedCountryId}
          onSelectCountry={(country) => {
            if (country) setSelectedCountryId(country.id);
          }}
        />
      </div>
    </section>
  );
}
