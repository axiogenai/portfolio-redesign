"use client";

import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { usePageIntro } from "./PageTransitionProvider";

interface BlurLinesProps {
  lines: (string | { text: string; style?: React.CSSProperties; className?: string })[];
  className?: string;
  lineClassName?: string;
  duration?: number;
  stagger?: number;
  baseDelay?: number;
  delayOffset?: number;
  staggerDelay?: number;
  nowrapFromLg?: boolean;
  alignFirstLineRightEdge?: boolean;
  active?: boolean;
}

const customEase = [0.16, 1, 0.3, 1] as const;
const ty = "0.16em";
const lO = "115%";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function BlurLines({
  lines,
  className = "",
  lineClassName = "",
  duration = 0.9,
  stagger = 0.09,
  baseDelay = 0.05,
  delayOffset,
  staggerDelay,
  nowrapFromLg = false,
  alignFirstLineRightEdge = false,
  active,
}: BlurLinesProps) {
  const intro = usePageIntro();
  const isRevealed = active !== undefined ? active : intro?.revealed ?? true;

  const effectiveBaseDelay = delayOffset !== undefined ? delayOffset : baseDelay;
  const effectiveStagger = staggerDelay !== undefined ? staggerDelay : stagger;
  const containerRef = useRef<HTMLSpanElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lineItems = lines.map((m) => (typeof m === "string" ? { text: m } : m));
  const [indentEm, setIndentEm] = useState(0);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    if (!alignFirstLineRightEdge) return;
    const media = window.matchMedia("(min-width: 1024px)");
    setIsLg(media.matches);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [alignFirstLineRightEdge]);

  const measureAlign = useCallback(() => {
    if (!alignFirstLineRightEdge) return;
    const container = containerRef.current;
    const items = lineRefs.current.slice(0, lines.length);
    if (!container || items.length !== lines.length || items.some((item) => !item)) return;
    const fontSize = parseFloat(window.getComputedStyle(container).fontSize);
    if (!fontSize) return;
    const widths = items.map((el) => el!.getBoundingClientRect().width);
    const maxWidth = Math.max(...widths);
    setIndentEm(Math.max(0, (maxWidth - widths[0]) / fontSize));
  }, [alignFirstLineRightEdge, lines.length]);

  useIsomorphicLayoutEffect(() => {
    if (!alignFirstLineRightEdge || !isLg) return;
    measureAlign();
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => measureAlign());
    ro.observe(container);
    return () => ro.disconnect();
  }, [alignFirstLineRightEdge, isLg, measureAlign]);

  useEffect(() => {
    if (!alignFirstLineRightEdge || !isLg || typeof document === "undefined" || !("fonts" in document)) return;
    let isActive = true;
    (document as any).fonts.ready.then(() => {
      if (isActive) measureAlign();
    });
    return () => {
      isActive = false;
    };
  }, [alignFirstLineRightEdge, isLg, measureAlign]);

  const leftPad = alignFirstLineRightEdge && isLg ? `${indentEm}em` : undefined;

  return (
    <motion.span
      ref={containerRef}
      className={`block ${className}`}
      initial="hidden"
      animate={isRevealed ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: effectiveStagger, delayChildren: effectiveBaseDelay } },
      }}
      style={{ display: "block" }}
    >
      <span className="sr-only">{lineItems.map((m) => m.text).join(" ")}</span>
      {lineItems.map((item, idx) => (
        <span
          key={idx}
          aria-hidden="true"
          className={`block overflow-hidden ${nowrapFromLg ? "lg:whitespace-nowrap" : ""} ${item.className || ""} ${lineClassName}`}
          style={{
            ...item.style,
            paddingBottom: ty,
            marginBottom: idx === lineItems.length - 1 ? 0 : `-${ty}`,
            paddingLeft: idx === 0 ? leftPad : undefined,
          }}
        >
          <motion.span
            ref={(el) => {
              lineRefs.current[idx] = el;
            }}
            className="inline-block"
            variants={{
              hidden: { y: lO, filter: "blur(14px)", opacity: 0 },
              show: { y: "0%", filter: "blur(0px)", opacity: 1 },
            }}
            transition={{
              duration,
              ease: customEase,
              delay: effectiveBaseDelay + idx * effectiveStagger,
            }}
            style={{ willChange: "transform, filter, opacity" }}
          >
            {item.text}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function BlurLine({
  children,
  delay = 0,
  last = false,
}: {
  children: React.ReactNode;
  delay?: number;
  last?: boolean;
}) {
  return (
    <span
      className="block overflow-hidden"
      style={{ paddingBottom: ty, marginBottom: last ? 0 : `-${ty}` }}
    >
      <motion.span
        className="block"
        variants={{
          hidden: { y: "115%", filter: "blur(14px)", opacity: 0 },
          show: { y: "0%", filter: "blur(0px)", opacity: 1 },
        }}
        transition={{ duration: 0.9, ease: customEase, delay }}
        style={{ willChange: "transform, filter, opacity" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function BlurLinesContainer({
  children,
  className = "",
  style,
  amount = 0.2,
  active,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  amount?: number;
  active?: boolean;
}) {
  return (
    <motion.span
      className={className}
      style={style}
      initial="hidden"
      {...(active === undefined
        ? { whileInView: "show", viewport: { once: true, amount } }
        : { animate: active ? "show" : "hidden" })}
    >
      {children}
    </motion.span>
  );
}

