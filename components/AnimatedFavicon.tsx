"use client";

import { useEffect } from "react";
import ORB_POINTS from "@/lib/orbPoints.json";

export default function AnimatedFavicon() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Get the primary favicon link element from <head>
    let link = document.getElementById("app-favicon") as HTMLLinkElement | null;
    if (!link) {
      link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    }
    if (!link) {
      link = document.createElement("link");
      link.id = "app-favicon";
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }

    // 64x64 canvas for crisp high-DPI rendering
    const S = 64;
    const canvas = document.createElement("canvas");
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    const C = [
      [255, 120, 80],
      [225, 60, 50],
      [165, 25, 35],
    ];

    const gc = (m: number) => {
      m = m < 0 ? 0 : m > 1 ? 1 : m;
      const a = m < 0.5 ? C[0] : C[1];
      const b = m < 0.5 ? C[1] : C[2];
      const f = m < 0.5 ? m * 2 : m * 2 - 1;
      return [
        a[0] + (b[0] - a[0]) * f,
        a[1] + (b[1] - a[1]) * f,
        a[2] + (b[2] - a[2]) * f,
      ];
    };

    const cx = S / 2;
    const R = (S / 2) * 0.90;
    const rs = Math.max(1.8, Math.pow(S / 300, 0.6) * 2.2);
    const TAU = Math.PI * 2;
    const cl = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

    const renderFrame = (t: number) => {
      try {
        // Completely transparent background - NO black box
        ctx.clearRect(0, 0, S, S);

        const yaw = 0.28 * Math.sin(t * 0.8);
        const tilt = 0.16 * Math.sin(t * 0.5);
        const sy = Math.sin(yaw);
        const cw = Math.cos(yaw);
        const st = Math.sin(tilt);
        const ct = Math.cos(tilt);
        const wave = (((t * 0.6) % 1 + 1) % 1) * 2.6 - 1.3;

        const D = [];
        for (const [gx, gy, e] of ORB_POINTS) {
          const pz = -gx * sy;
          const py = -gy * ct - pz * st;
          const z = -gy * st + pz * ct;
          const dep = (z + 1) / 2;
          const cr = Math.exp(-Math.pow(gx * 0.5 + gy * 0.87 - wave, 2) / 0.05);
          D.push({
            x: cx + gx * cw * R,
            y: cx - py * R,
            z,
            r: Math.max(1.2, (0.75 + 0.75 * dep + (e ? 0.25 : 0) + 0.5 * cr) * rs),
            v: cl((e ? 0.65 : 0.5) + 0.16 * dep + 0.35 * cr),
            c: gc((gy + 1) / 2),
          });
        }
        D.sort((a, b) => a.z - b.z);

        for (const d of D) {
          const g = d.v * 255;
          const l = Math.min(1, d.v * 1.25);
          const k = 0.92;
          let rgb = [
            g * (1 - k) + d.c[0] * l * k,
            g * (1 - k) + d.c[1] * l * k,
            g * (1 - k) + d.c[2] * l * k,
          ];
          if (d.v > 0.8) {
            const w = ((d.v - 0.8) / 0.2) * 0.5;
            rgb = [
              rgb[0] + (255 - rgb[0]) * w,
              rgb[1] + (255 - rgb[1]) * w,
              rgb[2] + (255 - rgb[2]) * w,
            ];
          }
          ctx.fillStyle = `rgb(${rgb[0] | 0},${rgb[1] | 0},${rgb[2] | 0})`;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, TAU);
          ctx.fill();
        }

        // Update the existing link's href directly without destroying/creating DOM nodes
        if (link) {
          link.href = canvas.toDataURL("image/png");
        }
      } catch (err) {
        // Silently catch to prevent loop termination
      }
    };

    // Render initial static frame
    renderFrame(1.0);

    // Stop if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Smooth continuous loop using requestAnimationFrame with 70ms throttle (~14 FPS)
    let animId: number;
    let lastTime = 0;
    const interval = 70; // 70ms gives ~14 FPS: fluid, continuous, never throttled by Chrome

    const loop = (currentTime: number) => {
      animId = requestAnimationFrame(loop);

      // Only skip if user is on a different tab
      if (document.hidden) return;

      const delta = currentTime - lastTime;
      if (delta >= interval) {
        lastTime = currentTime - (delta % interval);
        renderFrame(currentTime / 1000);
      }
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return null;
}
