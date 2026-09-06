"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const cardColors = [
  "#FF6B42", // 01 AI / ML - Vibrant Coral
  "#9B8AFF", // 02 Web Dev - Lavender Purple
  "#38BDF8", // 03 Mobile Apps - Sky Cyan
  "#4FD16B", // 04 Cloud Solutions - Vivid Mint Green
  "#FFB43D", // 05 Database Design - Warm Amber
  "#EC4899", // 06 Voice Synthesis - Neon Pink
  "#8B5CF6", // 07 Document Intelligence - Violet
  "#10B981", // 08 Deep Research - Emerald Green
  "#F97316", // 09 Meta & Google Ads - Bold Tangerine
];

export interface ServiceItem {
  slug: string;
  display: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
}

/* -------------------------------------------------------------
 * EXACT WHYCREATIVES CARD ANIMATION MATH (Strictly [0, 1] offsets)
 * ------------------------------------------------------------- */
const clampVal = (t: number, n: number, s: number) => Math.min(Math.max(t, n), s);
const stepF = 0.5;

// Desktop stack parameters
const desktopConfig = {
  peek: 0.05,
  scaleStep: 0.028,
  exitShrink: 0.05,
  maxDepth: 2,
};

// Mobile stack parameters
const mobileConfig = {
  peek: 0.038,
  scaleStep: 0,
  exitShrink: 0,
  maxDepth: 1,
};

const exitDistanceH = 1.45; // exit -145%

const calcShiftS = (t: number, n: number) => clampVal((t - n) / stepF, 0, 1);

const calcElevationE = (t: number, n: number, s: number) => {
  const r = n - Math.max(t, 0);
  if (r <= 0) return 0;
  const i = Math.floor(r);
  const m = r - i;
  return Math.min(i + clampVal((m - (1 - stepF)) / stepF, 0, 1), s);
};

const calcOpacityU = (t: number, n: number, s: number) => clampVal(s + 1 - (n - Math.max(t, 0)), 0, 1);

const generateSafeKeyframes = (
  t: number,
  n: number,
  cfg: typeof desktopConfig
) => {
  const { peek: r, scaleStep: i, exitShrink: m, maxDepth: l } = cfg;
  
  // Sample progress strictly within [0.0, 1.0]
  const points: { p: number; y: string; scale: number; opacity: number }[] = [];
  const count = 100;
  for (let step = 0; step <= count; step++) {
    const p = step / count;
    const a = p * n - 1;
    const yVal = `${((calcElevationE(a, t, l) * r - calcShiftS(a, t) * exitDistanceH) * 100).toFixed(3)}%`;
    const scaleVal = Number((1 - calcElevationE(a, t, l) * i - calcShiftS(a, t) * m).toFixed(4));
    const opacityVal = Number(calcOpacityU(a, t, l).toFixed(4));
    points.push({ p, y: yVal, scale: scaleVal, opacity: opacityVal });
  }

  // Deduplicate consecutive identical points
  const filtered = [points[0]];
  for (let idx = 1; idx < points.length - 1; idx++) {
    const prev = filtered[filtered.length - 1];
    const curr = points[idx];
    const next = points[idx + 1];
    if (
      curr.y !== prev.y || curr.scale !== prev.scale || curr.opacity !== prev.opacity ||
      curr.y !== next.y || curr.scale !== next.scale || curr.opacity !== next.opacity
    ) {
      filtered.push(curr);
    }
  }
  filtered.push(points[points.length - 1]);

  return {
    progress: filtered.map((pt) => pt.p),
    y: filtered.map((pt) => pt.y),
    scale: filtered.map((pt) => pt.scale),
    opacity: filtered.map((pt) => pt.opacity),
  };
};

function DeckCardItem({
  service,
  index,
  total,
  progress,
  keyframes,
  active,
}: {
  service: ServiceItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  keyframes: ReturnType<typeof generateSafeKeyframes>;
  active: boolean;
}) {
  const y = useTransform(progress, keyframes.progress, keyframes.y);
  const scale = useTransform(progress, keyframes.progress, keyframes.scale);
  const opacity = useTransform(progress, keyframes.progress, keyframes.opacity);

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center px-4 py-[76px] sm:px-8 md:py-[92px] lg:px-12"
      style={{ zIndex: total - index }}
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1280px] flex-col rounded-[18px] border border-black/10 px-5 py-6 text-black min-h-[56svh] md:rounded-[26px] md:px-8 md:py-8 md:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.28)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_0_50%,rgba(255,255,255,0)_50%)] lg:px-10"
        style={{
          backgroundColor: cardColors[index % cardColors.length],
          y,
          scale,
          opacity,
          pointerEvents: active ? "auto" : "none",
        }}
      >
        {/* Card Header Rail */}
        <div className="flex items-baseline justify-between gap-4 border-b border-black/20 pb-3 font-mono text-[10px] tracking-[0.16em] uppercase sm:text-[11px] text-black/70">
          <div className="flex items-center gap-2">
            <span>{service.num}</span>
            <span aria-hidden="true" className="text-black/40">/</span>
            <span>{service.display}</span>
          </div>
          <span className="tabular-nums" aria-hidden="true">
            {service.num} — {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Card Content Grid */}
        <div className="flex flex-1 flex-col justify-center py-6 md:py-8">
          <div className="grid gap-7 lg:grid-cols-12 lg:gap-x-10">
            {/* Left Column: Title, Subtitle, Outcomes */}
            <div className="lg:col-span-6">
              <h3 className="text-[clamp(1.5rem,2.9vw,2.75rem)] font-bold uppercase leading-[1.04] tracking-[-0.035em] text-black">
                {service.title}
              </h3>
              <p className="mt-4 max-w-[42ch] text-black/80 text-[clamp(1rem,1.15vw,1.375rem)] leading-[1.45] tracking-[-0.01em] lg:mt-5">
                {service.subtitle}
              </p>

              {/* Outcomes: Shown on desktop/tall screens */}
              <div className="mt-7 hidden lg:block">
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase sm:text-[11px] text-black/70">
                  What changes
                </p>
                <ul className="mt-3 space-y-2">
                  {service.outcomes.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-3 text-black/80 text-[clamp(0.9375rem,0.9vw,1rem)] leading-[1.35]"
                    >
                      <span className="mt-[0.66em] h-px w-3 shrink-0 bg-black/45" aria-hidden="true" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Deliverables (What you get) */}
            <div className="lg:col-span-6 lg:col-start-7 xl:border-l xl:border-black/15 xl:pl-10">
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase sm:text-[11px] text-black/70">
                What you get
              </p>
              <ul className="mt-3 lg:mt-4">
                {service.deliverables.map((a, o) => (
                  <li
                    key={a}
                    className="flex items-baseline gap-3.5 border-b border-black/15 py-2.5 text-black/90 text-[clamp(0.9375rem,0.9vw,1rem)] leading-[1.35]"
                  >
                    <span
                      className="font-mono text-[10px] tabular-nums text-black/70 font-semibold"
                      aria-hidden="true"
                    >
                      {String(o + 1).padStart(2, "0")}
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="lg:col-span-6 lg:col-start-1">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border-2 border-black px-5 py-3 text-[13px] font-bold text-black transition-colors duration-300 ease-out hover:bg-black hover:text-white"
              >
                <span>View more details</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 transition-[transform,background-color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white/20 motion-reduce:transform-none">
                  <ArrowUpRight className="h-3 w-3 stroke-[3]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesDeck({ items }: { items: ServiceItem[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const total = items.length;

  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const config = isDesktop ? desktopConfig : mobileConfig;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const keyframes = useMemo(
    () => items.map((_, idx) => generateSafeKeyframes(idx, total, config)),
    [items, total, config]
  );

  const [activeCard, setActiveCard] = useState(0);
  const activeRef = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    const next = clampVal(Math.round(val * total - 1), 0, total - 1);
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActiveCard(next);
    }
  });

  return (
    <article
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${total * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh]">
        {items.map((item, index) => (
          <DeckCardItem
            key={item.slug}
            service={item}
            index={index}
            total={total}
            progress={scrollYProgress}
            keyframes={keyframes[index]}
            active={activeCard === index}
          />
        ))}
      </div>
    </article>
  );
}
