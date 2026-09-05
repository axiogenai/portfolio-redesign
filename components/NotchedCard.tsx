"use client";

import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from "react";

const round2 = (e: number) => Math.round(e * 100) / 100;
const arc = (radius: number, sweep: number, x: number, y: number) =>
  `A ${round2(radius)} ${round2(radius)} 0 0 ${sweep} ${round2(x)} ${round2(y)}`;

/**
 * Generates the SVG path string for a card with:
 * - Rounded top-left corner (cornerRadius)
 * - Top-right inverted notch with fillets for category badge (tags)
 * - Rounded bottom-right corner (cornerRadius)
 * - Bottom-left inverted notch with fillets for year/meta (meta)
 */
export function generateCardNotchPath(
  width: number,
  height: number,
  tags: { w: number; h: number },
  meta: { w: number; h: number },
  cornerRadius: number,
  filletRadius: number
): string {
  return [
    `M ${round2(cornerRadius)} 0`,
    `H ${round2(width - tags.w - filletRadius)}`,
    arc(filletRadius, 1, width - tags.w, filletRadius),
    `V ${round2(tags.h - filletRadius)}`,
    arc(filletRadius, 0, width - tags.w + filletRadius, tags.h),
    `H ${round2(width - filletRadius)}`,
    arc(filletRadius, 1, width, tags.h + filletRadius),
    `V ${round2(height - cornerRadius)}`,
    arc(cornerRadius, 1, width - cornerRadius, height),
    `H ${round2(meta.w + filletRadius)}`,
    arc(filletRadius, 1, meta.w, height - filletRadius),
    `V ${round2(height - meta.h + filletRadius)}`,
    arc(filletRadius, 0, meta.w - filletRadius, height - meta.h),
    `H ${round2(filletRadius)}`,
    arc(filletRadius, 1, 0, height - meta.h - filletRadius),
    `V ${round2(cornerRadius)}`,
    arc(cornerRadius, 1, cornerRadius, 0),
    "Z",
  ].join(" ");
}

interface NotchedCardProps {
  tags?: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  radiusClassName?: string;
  surfaceClassName?: string;
  shadowClassName?: string;
  bezelWidth?: number;
  bezelColor?: string;
  onMouseEnter?: () => void;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
  frameRef?: React.RefObject<HTMLDivElement | null>;
}

export default function NotchedCard({
  tags,
  meta,
  children,
  className = "",
  radiusClassName = "rounded-[20px] md:rounded-[34px]",
  surfaceClassName = "bg-secondary",
  shadowClassName = "[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.06))_drop-shadow(0_18px_36px_rgba(0,0,0,0.13))] group-hover:[filter:drop-shadow(0_3px_6px_rgba(0,0,0,0.08))_drop-shadow(0_30px_56px_rgba(0,0,0,0.2))] dark:[filter:drop-shadow(0_2px_5px_rgba(0,0,0,0.5))_drop-shadow(0_22px_44px_rgba(0,0,0,0.65))] dark:group-hover:[filter:drop-shadow(0_3px_8px_rgba(0,0,0,0.6))_drop-shadow(0_34px_64px_rgba(0,0,0,0.8))]",
  bezelWidth = 0,
  bezelColor = "#141414",
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  frameRef,
}: NotchedCardProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const containerRef = frameRef ?? localRef;
  const tagsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const [clipPath, setClipPath] = useState<string | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  const calculatePath = useCallback(() => {
    const container = containerRef.current;
    const tagsEl = tagsRef.current;
    const metaEl = metaRef.current;

    if (!container || !tagsEl || !metaEl) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const tagsSize = { w: tagsEl.offsetWidth, h: tagsEl.offsetHeight };
    const metaSize = { w: metaEl.offsetWidth, h: metaEl.offsetHeight };

    const computedRadius =
      parseFloat(window.getComputedStyle(container).borderTopLeftRadius) || 24;

    setSize({ w: width, h: height });

    if (
      width < 2 ||
      height < 2 ||
      tagsSize.w < 2 ||
      tagsSize.h < 2 ||
      metaSize.w < 2 ||
      metaSize.h < 2
    ) {
      setClipPath(null);
      return;
    }

    const fillet = Math.max(
      4,
      Math.min(computedRadius, 20, tagsSize.w / 2, tagsSize.h / 2, metaSize.w / 2, metaSize.h / 2)
    );

    if (
      !(
        tagsSize.w + fillet + computedRadius <= width &&
        metaSize.w + fillet + computedRadius <= width &&
        tagsSize.h + fillet + computedRadius <= height &&
        metaSize.h + fillet + computedRadius <= height &&
        tagsSize.h + metaSize.h + 2 * fillet < height
      )
    ) {
      setClipPath(null);
      return;
    }

    const path = generateCardNotchPath(
      width,
      height,
      tagsSize,
      metaSize,
      computedRadius,
      fillet
    );
    setClipPath(path);
  }, [containerRef]);

  useLayoutEffect(() => {
    calculatePath();
    const container = containerRef.current;
    const tagsEl = tagsRef.current;
    const metaEl = metaRef.current;

    if (!container || !tagsEl || !metaEl) return;

    const ro = new ResizeObserver(() => calculatePath());
    ro.observe(container);
    ro.observe(tagsEl);
    ro.observe(metaEl);

    return () => ro.disconnect();
  }, [calculatePath, containerRef]);

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) return;
    let active = true;
    document.fonts.ready.then(() => {
      if (active) calculatePath();
    });
    return () => {
      active = false;
    };
  }, [calculatePath]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative w-full ${radiusClassName} ${className}`}
    >
      {/* Top-Right Tags Cutout container */}
      <div
        ref={tagsRef}
        className={`absolute right-0 top-0 z-20 flex items-center gap-2 ${
          clipPath ? "pb-4 pl-5" : "rounded-bl-2xl bg-background/95 p-3"
        }`}
      >
        {tags}
      </div>

      {/* Bottom-Left Meta Cutout container */}
      <div
        ref={metaRef}
        className={`absolute bottom-0 left-0 z-20 flex items-center gap-2 ${
          clipPath ? "pr-5 pt-4" : "rounded-tr-2xl bg-background/95 p-3"
        }`}
      >
        {meta}
      </div>

      {/* Drop Shadow Base with dynamic clipPath */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-[filter] duration-500 ease-out ${shadowClassName}`}
      >
        <div
          className={`h-full w-full ${radiusClassName} ${surfaceClassName}`}
          style={{
            clipPath: clipPath ? `path("${clipPath}")` : undefined,
            WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
          }}
        />
      </div>

      {/* Main Content & Image Container clipped along the notch boundary */}
      <div className="absolute inset-0">
        <div
          className={`relative h-full w-full overflow-hidden ${radiusClassName} ${surfaceClassName}`}
          style={{
            clipPath: clipPath ? `path("${clipPath}")` : undefined,
            WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
            boxShadow:
              bezelWidth && !clipPath ? `inset 0 0 0 ${bezelWidth}px ${bezelColor}` : undefined,
          }}
        >
          {children}

          {bezelWidth > 0 && clipPath && size && (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              width={size.w}
              height={size.h}
              viewBox={`0 0 ${size.w} ${size.h}`}
            >
              <path
                d={clipPath}
                fill="none"
                stroke={bezelColor}
                strokeWidth={bezelWidth * 2}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
