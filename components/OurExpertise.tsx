"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
}

// Axiogen's genuine core services
const services: ServiceItem[] = [
  {
    id: "ai-neural",
    title: "AI & NEURAL",
  },
  {
    id: "web-platforms",
    title: "WEB PLATFORMS",
  },
  {
    id: "mobile-apps",
    title: "MOBILE APPS",
  },
  {
    id: "cloud-devops",
    title: "CLOUD & DEVOPS",
  },
  {
    id: "data-architecture",
    title: "DATA ARCHITECTURE",
  },
  {
    id: "voice-engines",
    title: "VOICE ENGINES",
  },
  {
    id: "autonomous-agents",
    title: "AUTONOMOUS AGENTS",
  },
];

const springCursor = { stiffness: 500, damping: 28, mass: 0.4 };

/**
 * 100% GPU Compositor Driven Service Row.
 * Zero React state re-renders during scrolling — buttery smooth 120fps.
 */
function KineticServiceRow({
  service,
  idx,
  progress,
  onClick,
}: {
  service: ServiceItem;
  idx: number;
  progress: MotionValue<number>;
  onClick: () => void;
}) {
  // y position along 3D cylinder:
  // When progress < idx (below center): y is positive (+105, +210)
  // When progress = idx (at center): y = 0
  // When progress > idx (above center): y is negative (-105, -210)
  const y = useTransform(
    progress,
    [idx - 2, idx - 1, idx, idx + 1, idx + 2],
    [210, 105, 0, -105, -210]
  );

  // 3D cylindrical curvature tilt:
  // Bottom rows tilt forward (-28deg), center row is flat (0deg), top rows tilt back (+28deg)
  const rotateX = useTransform(
    progress,
    [idx - 2, idx - 1, idx, idx + 1, idx + 2],
    [-52, -28, 0, 28, 52]
  );

  // Scale: 1.0 at center, down to 0.76 at edges
  const scale = useTransform(
    progress,
    [idx - 2, idx - 1, idx, idx + 1, idx + 2],
    [0.74, 0.88, 1.0, 0.88, 0.74]
  );

  // Row container opacity: visible within ±1.8 range
  const containerOpacity = useTransform(
    progress,
    [idx - 2.2, idx - 1, idx, idx + 1, idx + 2.2],
    [0, 0.82, 1.0, 0.82, 0]
  );

  // Solid crisp white text opacity (active at center)
  const whiteOpacity = useTransform(
    progress,
    [idx - 0.48, idx, idx + 0.48],
    [0, 1, 0]
  );

  // Radiant amber/copper text opacity (active when off-center)
  const amberOpacity = useTransform(
    progress,
    [idx - 1.8, idx - 1, idx - 0.4, idx, idx + 0.4, idx + 1, idx + 1.8],
    [0.2, 1, 0.85, 0, 0.85, 1, 0.2]
  );

  // Elevation index
  const zIndex = useTransform(
    progress,
    [idx - 0.5, idx, idx + 0.5],
    [10, 30, 10]
  );

  return (
    <motion.div
      onClick={onClick}
      style={{
        y,
        rotateX,
        scale,
        opacity: containerOpacity,
        zIndex,
        transformOrigin: "center center",
      }}
      className="absolute flex items-center justify-center cursor-pointer select-none will-change-transform px-4"
    >
      <div className="relative flex items-center justify-center text-center">
        {/* Layer 1: Ambient Radiant Copper/Amber Text (Inactive) */}
        <motion.span
          style={{ opacity: amberOpacity }}
          className="whitespace-nowrap font-extrabold uppercase tracking-[-0.035em] text-[#FF5A28] drop-shadow-[0_2px_20px_rgba(255,90,40,0.4)] text-3xl sm:text-5xl lg:text-7xl xl:text-8xl"
        >
          {service.title}
        </motion.span>

        {/* Layer 2: Solid Crisp White Text (Active Center) */}
        <motion.span
          style={{ opacity: whiteOpacity }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-extrabold uppercase tracking-[-0.035em] text-white drop-shadow-[0_2px_36px_rgba(255,255,255,0.3)] text-3xl sm:text-5xl lg:text-7xl xl:text-8xl pointer-events-none"
        >
          {service.title}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function OurExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const drumRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const smoothX = useSpring(pointerX, springCursor);
  const smoothY = useSpring(pointerY, springCursor);

  const total = services.length;

  // Track scroll position through the tall sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct 1:1 GPU mapping with Lenis smooth scroll — zero lag, instantaneous response
  const progress = useTransform(scrollYProgress, [0, 1], [0, total - 1]);

  // Media query for fine pointer cursor follower
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
      if (drumRef.current) {
        const rect = drumRef.current.getBoundingClientRect();
        pointerX.set(e.clientX - rect.left);
        pointerY.set(e.clientY - rect.top);
      }
    };
    const el = drumRef.current;
    if (el) {
      el.addEventListener("pointermove", onPointerMove, { passive: true });
      return () => el.removeEventListener("pointermove", onPointerMove);
    }
  }, [isDesktop, pointerX, pointerY]);

  // Click on any visible row to smoothly scroll the page directly to it
  const handleItemClick = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const startY = window.scrollY + rect.top;
    const totalScrollDistance =
      containerRef.current.offsetHeight - window.innerHeight;
    const targetY = startY + (idx / (total - 1)) * totalScrollDistance;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full h-[320vh] bg-background text-foreground"
    >
      {/* Viewport-locked Sticky Frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0D] text-white border-y border-white/[0.04] px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 font-['Schibsted_Grotesk',sans-serif]">
        {/* Top Mission Statement */}
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto pt-2">
          <p className="font-normal text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400">
            We build brand systems that behave like software and websites that behave like objects, for teams who would rather be remembered than described.
          </p>

          {/* Mobile Eyebrows (shown on small screens) */}
          <div className="mt-4 flex w-full items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] md:hidden">
            <div className="flex items-center gap-2 text-[#FF6B42]">
              <span className="h-[1.5px] w-4 bg-[#FF6B42]" />
              <span>OUR CRAFT</span>
            </div>
            <div className="text-zinc-600">EST. 2024</div>
          </div>
        </div>

        {/* Center Zone: 3D Kinetic Drum Roller with Side Tags */}
        <div className="relative w-full my-auto flex items-center justify-between">
          {/* Left Eyebrow (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5 text-[#FF6B42] text-[11px] font-mono uppercase tracking-[0.22em] select-none pl-2">
            <span className="h-[1.5px] w-6 bg-[#FF6B42]" />
            <span>OUR CRAFT</span>
          </div>

          {/* 3D Drum Viewport */}
          <div
            ref={drumRef}
            className="relative h-[300px] sm:h-[360px] md:h-[420px] flex-1 max-w-[1100px] mx-auto flex items-center justify-center select-none overflow-hidden"
            style={{ perspective: 1200 }}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
          >
            {/* Floating Cursor Circle Follower */}
            {isDesktop && isHovered && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-50 -ml-7 -mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
                style={{ x: smoothX, y: smoothY }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <ArrowUpRight className="h-6 w-6 stroke-[2.5]" />
              </motion.div>
            )}

            {/* Continuous 3D Cylinder Reel (Zero Re-render GPU Accelerated) */}
            <div className="relative w-full h-full flex items-center justify-center">
              {services.map((service, idx) => (
                <KineticServiceRow
                  key={service.id}
                  service={service}
                  idx={idx}
                  progress={progress}
                  onClick={() => handleItemClick(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Year Tag (Desktop) */}
          <div className="hidden md:flex items-center text-zinc-600 text-[11px] font-mono uppercase tracking-[0.22em] select-none pr-2">
            <span>EST. 2024</span>
          </div>
        </div>

        {/* Bottom Zone: Grounded, Authentic Studio Status (No Fake Marketing Cards) */}
        <div className="w-full max-w-[1100px] mx-auto pb-2 sm:pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.07] pt-5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 gap-3">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B42]" />
              <span className="text-zinc-300">STUDIO STATUS: ACCEPTING SELECT CLIENT BUILDS</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-500">
              <span>END-TO-END ENGINEERING</span>
              <span className="text-zinc-700">•</span>
              <span>PRODUCTION GRADE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
