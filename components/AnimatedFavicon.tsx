"use client";

import { useEffect } from "react";
import ORB_POINTS from "@/lib/orbPoints.json";

export default function AnimatedFavicon() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Remove all static icon link tags so Chrome gives 100% priority to the animated one
    const staticIcons = document.querySelectorAll("link[rel*='icon']");
    staticIcons.forEach((el) => {
      if (el.id !== "animated-favicon") {
        el.remove();
      }
    });

    // 64x64 canvas for crisp rendering on both standard and Retina displays
    const S = 64;
    const canvas = document.createElement("canvas");
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext("2d");
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
      // 100% TRANSPARENT background (NO black box!)
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

      const dataUrl = canvas.toDataURL("image/png");

      // Replace link tag in <head> to force Chrome to immediately redraw the tab favicon
      const oldLink = document.getElementById("animated-favicon");
      const newLink = document.createElement("link");
      newLink.id = "animated-favicon";
      newLink.rel = "icon";
      newLink.type = "image/png";
      newLink.href = dataUrl;

      if (oldLink && oldLink.parentNode) {
        oldLink.parentNode.replaceChild(newLink, oldLink);
      } else {
        document.head.appendChild(newLink);
      }
    };

    // Initial render
    renderFrame(1.0);

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // ~20 FPS animation loop, automatically paused when tab is in background
    let isHidden = document.hidden;
    const onVisibilityChange = () => {
      isHidden = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const intervalId = setInterval(() => {
      if (isHidden) return;
      renderFrame(performance.now() / 1000);
    }, 50);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
