"use client";

import React, { useState, useEffect } from "react";
import * as topojson from "topojson-client";
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
      className="w-full bg-[#05060a] flex items-center justify-center overflow-hidden py-8 sm:py-12"
    >
      {/* Pure 3D Globe sized matching reference image 3 */}
      <div
        className="flex items-center justify-center relative select-none max-w-[90vw]"
        style={{
          width: "min(78vh, 560px)",
          height: "min(78vh, 560px)",
        }}
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
