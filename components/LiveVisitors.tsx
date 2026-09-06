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
      className="w-full bg-[#05060a] flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: "clamp(36px, 6vw, 96px)",
        paddingBottom: "clamp(36px, 6vw, 96px)",
      }}
    >
      <div className="w-full max-w-[1000px] h-[78vh] min-h-[380px] max-h-[700px] flex items-center justify-center relative px-4">
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
