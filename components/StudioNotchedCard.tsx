"use client";

import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";

const dt = (e: number) => Math.round(e * 100) / 100;
const Un = (e: number, t: number, n: number, r: number) =>
  `A ${dt(e)} ${dt(e)} 0 0 ${t} ${dt(n)} ${dt(r)}`;

function buildNotchPath(
  w: number,
  h: number,
  tags: { w: number; h: number },
  meta: { w: number; h: number },
  r: number,
  f: number
) {
  return [
    `M ${dt(r)} 0`,
    `H ${dt(w - tags.w - f)}`,
    Un(f, 1, w - tags.w, f),
    `V ${dt(tags.h - f)}`,
    Un(f, 0, w - tags.w + f, tags.h),
    `H ${dt(w - f)}`,
    Un(f, 1, w, tags.h + f),
    `V ${dt(h - r)}`,
    Un(r, 1, w - r, h),
    `H ${dt(meta.w + f)}`,
    Un(f, 1, meta.w, h - f),
    `V ${dt(h - meta.h + f)}`,
    Un(f, 0, meta.w - f, h - meta.h),
    `H ${dt(f)}`,
    Un(f, 1, 0, h - meta.h - f),
    `V ${dt(r)}`,
    Un(r, 1, r, 0),
    "Z",
  ].join(" ");
}

interface StudioNotchedCardProps {
  tags?: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  surfaceClassName?: string;
  bezelColor?: string;
  bezelWidth?: number;
}

export default function StudioNotchedCard({
  tags,
  meta,
  children,
  className = "",
  surfaceClassName = "bg-card",
  bezelColor,
  bezelWidth = 1.5,
}: StudioNotchedCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const [clipPath, setClipPath] = useState<string | null>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  const updateCutout = useCallback(() => {
    const frame = frameRef.current;
    const tagsEl = tagsRef.current;
    const metaEl = metaRef.current;
    if (!frame) return;

    const w = frame.clientWidth;
    const h = frame.clientHeight;
    if (w < 40 || h < 40) return;

    setDims({ w, h });

    const isMobile = w < 768;
    const radius = isMobile ? 22 : 28;
    const fillet = isMobile ? 14 : 16;

    let tagW = tagsEl ? tagsEl.offsetWidth + 12 : 0;
    let tagH = tagsEl ? tagsEl.offsetHeight + 10 : 0;
    let metaW = metaEl ? metaEl.offsetWidth + 12 : 0;
    let metaH = metaEl ? metaEl.offsetHeight + 10 : 0;

    // Safety horizontal constraint
    const maxAvailable = w - fillet * 2 - 40;
    if (tagW + metaW > maxAvailable && maxAvailable > 80) {
      const ratio = maxAvailable / (tagW + metaW);
      tagW = Math.floor(tagW * ratio);
      metaW = Math.floor(metaW * ratio);
    }

    if (tagW > 0 && metaW > 0 && h > tagH + metaH + fillet * 2) {
      setClipPath(
        buildNotchPath(
          w,
          h,
          { w: tagW, h: tagH },
          { w: metaW, h: metaH },
          radius,
          fillet
        )
      );
    } else {
      setClipPath(null);
    }
  }, []);

  useLayoutEffect(() => {
    updateCutout();
    const frame = frameRef.current;
    if (!frame) return;
    const ro = new ResizeObserver(() => updateCutout());
    ro.observe(frame);
    if (tagsRef.current) ro.observe(tagsRef.current);
    if (metaRef.current) ro.observe(metaRef.current);
    return () => ro.disconnect();
  }, [updateCutout]);

  useEffect(() => {
    updateCutout();
    window.addEventListener("resize", updateCutout);
    return () => window.removeEventListener("resize", updateCutout);
  }, [updateCutout]);

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) return;
    let active = true;
    document.fonts.ready.then(() => {
      if (active) updateCutout();
    });
    return () => {
      active = false;
    };
  }, [updateCutout]);

  return (
    <div
      ref={frameRef}
      className={`relative w-full rounded-[22px] sm:rounded-[28px] transition-[filter] duration-500 ${className}`}
    >
      {/* Top-Right Notch Tags */}
      {tags && (
        <div
          ref={tagsRef}
          className="absolute right-0 top-0 z-30 flex items-center gap-1.5 sm:gap-2 pr-3.5 pt-3 sm:pr-4 sm:pt-3.5"
        >
          {tags}
        </div>
      )}

      {/* Bottom-Left Notch Meta Info */}
      {meta && (
        <div
          ref={metaRef}
          className="absolute bottom-0 left-0 z-30 flex items-center gap-2 pb-3 pl-3.5 sm:pb-3.5 sm:pl-5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
        >
          {meta}
        </div>
      )}

      {/* Card Surface with Notched ClipPath */}
      <div
        className={`relative h-full w-full overflow-hidden rounded-[22px] sm:rounded-[28px] ${surfaceClassName} transition-all duration-300`}
        style={{
          clipPath: clipPath ? `path("${clipPath}")` : undefined,
          WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
        }}
      >
        {children}

        {/* Bezel Stroke SVG following exact notch path */}
        {clipPath && dims && (
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            width={dims.w}
            height={dims.h}
            viewBox={`0 0 ${dims.w} ${dims.h}`}
          >
            <path
              d={clipPath}
              fill="none"
              stroke={bezelColor || "currentColor"}
              className={bezelColor ? undefined : "text-border"}
              strokeWidth={bezelWidth * 2}
            />
          </svg>
        )}
      </div>
    </div>
  );
}
