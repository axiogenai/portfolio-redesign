"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Invisible background visitor analytics tracker for Axiogen Portfolio.
 * Zero DOM footprint (returns null). Does not modify or impact UI/layout in any way.
 */
export default function VisitorTracker() {
  const pathname = usePathname();
  const trackedRef = useRef<string | null>(null);

  useEffect(() => {
    // Only track once per distinct pathname navigation
    if (trackedRef.current === pathname) return;
    trackedRef.current = pathname;

    try {
      const deviceData = {
        screen_width: window.screen ? window.screen.width : null,
        screen_height: window.screen ? window.screen.height : null,
        language: navigator.language || "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
        platform:
          (navigator as unknown as { userAgentData?: { platform?: string } })
            .userAgentData?.platform ||
          navigator.platform ||
          "",
        connection_type:
          (navigator as unknown as { connection?: { effectiveType?: string } })
            .connection?.effectiveType || "",
      };

      const sendTrack = (
        lat?: number,
        lon?: number,
        accuracy?: number,
        locationSource?: string
      ) => {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: pathname || "/",
            ...deviceData,
            ...(lat !== undefined && lon !== undefined
              ? { latitude: lat, longitude: lon }
              : {}),
            ...(accuracy !== undefined ? { gps_accuracy: accuracy } : {}),
            location_source: locationSource || "ip",
          }),
        }).catch(() => {});
      };

      // Try browser geolocation if available without blocking
      if (typeof navigator !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const acc = pos.coords.accuracy;
            const source = acc && acc > 3000 ? "gps_coarse" : "gps";
            sendTrack(pos.coords.latitude, pos.coords.longitude, acc, source);
          },
          () => {
            // Permission denied or unavailable - fallback to IP-based tracking
            sendTrack(undefined, undefined, undefined, "ip");
          },
          { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
        );
      } else {
        sendTrack(undefined, undefined, undefined, "ip");
      }
    } catch {
      // Non-critical tracking failure is swallowed silently
    }
  }, [pathname]);

  return null;
}
