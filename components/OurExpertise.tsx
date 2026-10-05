"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Star, ChevronUp, ChevronDown } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "ai",
    title: "AI & Neural Systems",
    blurb: "Custom LLMs, autonomous agents, neural models and real-time edge inference.",
    href: "#contact",
    image: "/axiogen-neural.jpg",
  },
  {
    id: "web",
    title: "Web Platforms",
    blurb: "High-performance digital platforms engineered for ultra-low latency & scale.",
    href: "#contact",
    image: "/project-nth.webp",
  },
  {
    id: "app",
    title: "App Development",
    blurb: "Native and cross-platform iOS and Android mobile applications.",
    href: "#contact",
    image: "/video-gear.webp",
  },
  {
    id: "cloud",
    title: "Cybersecurity & Cloud",
    blurb: "Zero-trust architectures, cryptographic vaults and hardened cloud infrastructure.",
    href: "#contact",
    image: "/axiogen-cyber.jpg",
  },
  {
    id: "automation",
    title: "Business Automation",
    blurb: "Autonomous workflow pipelines, intelligent WhatsApp bots and telemetry.",
    href: "#contact",
    image: "/team-collab.webp",
  },
  {
    id: "brand",
    title: "Brand & Digital Identity",
    blurb: "Coherent mathematical design systems, product UX and brand presence.",
    href: "#contact",
    image: "/creative-office.webp",
  },
];

const bentoMetrics = [
  { label: "Systems Shipped", value: "46+", detail: "Enterprise Grade" },
  { label: "Inference Events", value: "210M+", detail: "Sub-50ms Latency" },
  { label: "Platforms Scaled", value: "83", detail: "Global Deployments" },
  { label: "Client Rating", value: "4.9", isRating: true, detail: "Verified Reviews" },
];

const customEase = [0.16, 1, 0.3, 1] as const;
const springCursor = { stiffness: 450, damping: 28, mass: 0.5 };

export default function OurExpertise() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isWheelLocked, setIsWheelLocked] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const smoothX = useSpring(pointerX, springCursor);
  const smoothY = useSpring(pointerY, springCursor);

  const total = services.length;
  const prevIdx = (activeIdx - 1 + total) % total;
  const nextIdx = (activeIdx + 1) % total;

  // Media query for fine pointer
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const updateMedia = () => setIsDesktop(media.matches);
    updateMedia();
    media.addEventListener("change", updateMedia);
    return () => media.removeEventListener("change", updateMedia);
  }, []);

  // Track mouse coordinates for floating circle cursor
  useEffect(() => {
    if (!isDesktop) return;
    const onPointerMove = (e: PointerEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        pointerX.set(e.clientX - rect.left);
        pointerY.set(e.clientY - rect.top);
      }
    };
    const el = containerRef.current;
    if (el) {
      el.addEventListener("pointermove", onPointerMove, { passive: true });
      return () => el.removeEventListener("pointermove", onPointerMove);
    }
  }, [isDesktop, pointerX, pointerY]);

  // Auto-advance timer (pauses when hovered)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, 3400);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  // Handle smooth scroll wheel navigation
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (Math.abs(e.deltaY) < 25 || isWheelLocked) return;

      setIsWheelLocked(true);
      if (e.deltaY > 0) {
        setActiveIdx((prev) => (prev + 1) % total);
      } else {
        setActiveIdx((prev) => (prev - 1 + total) % total);
      }

      setTimeout(() => {
        setIsWheelLocked(false);
      }, 280);
    },
    [isWheelLocked, total]
  );

  return (
    <div id="expertise" className="w-full bg-background px-3 sm:px-5 md:px-6">
      <section className="relative w-full overflow-hidden rounded-[24px] bg-[#08080A] font-['Schibsted_Grotesk',sans-serif] text-white border border-white/[0.04] md:rounded-[36px]">
        {/* Subtle atmospheric ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#FF6B42]/[0.025] blur-[120px]"
        />

        <div className="relative z-10 px-5 pt-16 pb-12 sm:px-8 md:px-12 lg:px-16 lg:pt-24 lg:pb-16 max-w-7xl mx-auto">
          {/* Top Bar: Eyebrow + Quote + Year */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start text-center md:text-left">
            {/* Left Tag */}
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#FF6B42]">
              <span className="h-[2px] w-4 bg-[#FF6B42]" />
              <span>Our Expertise</span>
            </div>

            {/* Center Mission Statement */}
            <p className="max-w-xl text-center font-normal text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400">
              We engineer intelligent software systems that behave like thinking architectures and digital platforms that scale with mathematical precision.
            </p>

            {/* Right Tag */}
            <div className="hidden font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-zinc-500 md:block">
              EST. 2024
            </div>
          </div>

          {/* Interactive 3D Kinetic Rolling Drum Viewport */}
          <div
            ref={containerRef}
            onWheel={handleWheel}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            className="relative my-10 sm:my-14 lg:my-16 h-[340px] sm:h-[400px] lg:h-[440px] w-full flex flex-col items-center justify-center select-none overflow-hidden"
            style={{ perspective: 1200 }}
          >
            {/* Floating Cursor Circle Follower (Shown in Desktop Reference) */}
            {isDesktop && isHovered && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-50 -ml-7 -mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
                style={{
                  x: smoothX,
                  y: smoothY,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-6 w-6 stroke-[2.5]" />
              </motion.div>
            )}

            {/* Vertical Drum Wheel Stage */}
            <div className="relative w-full flex flex-col items-center justify-center">
              {/* Previous Row (Top Row - angled back, blurred, warm copper/gradient text) */}
              <button
                type="button"
                onClick={() => setActiveIdx(prevIdx)}
                className="group absolute -top-24 sm:-top-28 lg:-top-32 flex items-center justify-center gap-3 sm:gap-4 transition-all duration-500 cursor-pointer opacity-35 hover:opacity-75 focus:outline-none"
                style={{
                  transform: "rotateX(26deg) scale(0.82) translateZ(-40px)",
                  filter: "blur(1.5px)",
                }}
                aria-label={`Select ${services[prevIdx].title}`}
              >
                <span className="relative block h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-900/80 shadow-md">
                  <img
                    src={services[prevIdx].image}
                    alt=""
                    className="h-full w-full object-cover grayscale brightness-75 transition-all duration-300 group-hover:grayscale-0"
                  />
                </span>
                <span className="whitespace-nowrap font-extrabold uppercase tracking-[-0.03em] text-amber-500/80 bg-gradient-to-r from-amber-600 via-[#FF6B42] to-amber-500 bg-clip-text text-transparent text-2xl sm:text-4xl lg:text-5xl">
                  {services[prevIdx].title}
                </span>
              </button>

              {/* Active Focused Row (Center Row - Large, High-Contrast White, 3D Squircle Icon) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeIdx].id}
                  initial={{ opacity: 0, y: 28, scale: 0.92, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: -28, scale: 0.92, rotateX: 15 }}
                  transition={{ duration: 0.45, ease: customEase }}
                  className="z-20 flex flex-col items-center"
                >
                  <a
                    href={services[activeIdx].href}
                    className="group flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 focus:outline-none cursor-pointer"
                  >
                    {/* 3D Glossy Squircle Badge */}
                    <div className="relative h-14 w-14 sm:h-18 sm:w-18 lg:h-20 lg:w-20 shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] border border-white/20 bg-zinc-900 shadow-[0_12px_28px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={services[activeIdx].image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      {/* Glossy inner rim */}
                      <div className="pointer-events-none absolute inset-0 rounded-[18px] sm:rounded-[22px] ring-1 ring-inset ring-white/25" />
                    </div>

                    {/* Massive Bold Center Typography */}
                    <h3
                      className="whitespace-nowrap font-extrabold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-zinc-200"
                      style={{
                        fontSize: "clamp(2.3rem, 6.2vw, 6.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      {services[activeIdx].title}
                    </h3>
                  </a>

                  {/* Active Service Blurb Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="mt-5 max-w-lg text-center text-xs sm:text-sm font-mono tracking-wide text-zinc-400 px-4"
                  >
                    {services[activeIdx].blurb}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Next Row (Bottom Row - angled forward, blurred, warm copper/gradient text) */}
              <button
                type="button"
                onClick={() => setActiveIdx(nextIdx)}
                className="group absolute -bottom-24 sm:-bottom-28 lg:-bottom-32 flex items-center justify-center gap-3 sm:gap-4 transition-all duration-500 cursor-pointer opacity-35 hover:opacity-75 focus:outline-none"
                style={{
                  transform: "rotateX(-26deg) scale(0.82) translateZ(-40px)",
                  filter: "blur(1.5px)",
                }}
                aria-label={`Select ${services[nextIdx].title}`}
              >
                <span className="relative block h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-900/80 shadow-md">
                  <img
                    src={services[nextIdx].image}
                    alt=""
                    className="h-full w-full object-cover grayscale brightness-75 transition-all duration-300 group-hover:grayscale-0"
                  />
                </span>
                <span className="whitespace-nowrap font-extrabold uppercase tracking-[-0.03em] text-amber-500/80 bg-gradient-to-r from-amber-600 via-[#FF6B42] to-amber-500 bg-clip-text text-transparent text-2xl sm:text-4xl lg:text-5xl">
                  {services[nextIdx].title}
                </span>
              </button>
            </div>

            {/* Quick Wheel Navigation Controls & Indicators */}
            <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev - 1 + total) % total)}
                aria-label="Previous service"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev + 1) % total)}
                aria-label="Next service"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Step Position Indicator Pills */}
            <div className="absolute bottom-2 flex items-center gap-1.5 z-30">
              {services.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Jump to ${item.title}`}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: idx === activeIdx ? 24 : 8,
                    backgroundColor:
                      idx === activeIdx ? "#FF6B42" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row: 4 Bento Cards (Matching ThreeUI Reference Video Exactly) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 w-full">
            {bentoMetrics.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/40 p-4 sm:p-5 lg:p-6 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-zinc-900/60"
              >
                {/* Eyebrow & Corner Dots */}
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-400">
                  <span className="truncate pr-2">{item.label}</span>
                  <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-zinc-400" aria-hidden="true">
                    •••
                  </span>
                </div>

                {/* Main Big Number */}
                <div className="mt-3 sm:mt-4 flex items-baseline gap-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  <span>{item.value}</span>
                  {item.isRating && (
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-[#FF6B42] text-[#FF6B42] inline-block ml-0.5" />
                  )}
                </div>

                {/* Subtext */}
                <div className="mt-2 text-[10px] sm:text-[11px] font-mono text-zinc-500">
                  {item.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
