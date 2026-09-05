"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlurLines from "./BlurLines";

interface Phrase {
  words: string[];
  color: string;
}

interface StageConfig {
  tone: "light" | "dark" | "accent";
  phrases: Phrase[];
}

interface ProjectItem {
  id: number;
  year: string;
  client: string;
  title: string;
  image: string;
  tags: string[];
  href: string;
  stage: StageConfig;
  bezelColor: string;
}

const customEase = [0.16, 1, 0.3, 1] as const;
const springCursor = { stiffness: 400, damping: 28, mass: 0.5 };

const projects: ProjectItem[] = [
  {
    id: 1,
    year: "2026",
    client: "AXIOGEN NEURAL ENGINE",
    title: "Core neural network training workspace powering predictive analytics & cognitive assistant agents",
    image: "/axiogen-neural.jpg",
    tags: ["Artificial Intelligence", "PyTorch", "FastAPI"],
    href: "/our-work",
    bezelColor: "#dcdcd9",
    stage: {
      tone: "light",
      phrases: [
        { words: ["Neural", "Intelligence"], color: "#111111" },
        { words: ["Predictive", "Analytics"], color: "#4F46E5" },
        { words: ["Cognitive", "Agents"], color: "#DB2777" },
        { words: ["Real-time", "Inference"], color: "#EA580C" },
      ],
    },
  },
  {
    id: 2,
    year: "2026",
    client: "RANSOMGUARD AI",
    title: "Real-time ransomware detection & response engine powered by watchdog traps & ML entropy analysis",
    image: "/axiogen-cyber.jpg",
    tags: ["Cybersecurity AI", "Entropy Watchdog", "XGBoost"],
    href: "/our-work",
    bezelColor: "#333333",
    stage: {
      tone: "dark",
      phrases: [
        { words: ["Zero-Day", "Defense"], color: "#F9A8D4" },
        { words: ["Entropy", "Analysis"], color: "#67E8F9" },
        { words: ["Watchdog", "Traps"], color: "#BEF264" },
        { words: ["Active", "Shield"], color: "#FFFFFF" },
      ],
    },
  },
  {
    id: 3,
    year: "2026",
    client: "SEOHUB PRO",
    title: "All-in-one enterprise SEO platform auditing, fixing & monitoring website search performance",
    image: "/axiogen-seo.jpg",
    tags: ["SEO Intelligence", "Gemini AI", "Next.js"],
    href: "https://seohubpro.vercel.app",
    bezelColor: "#d94e22",
    stage: {
      tone: "accent",
      phrases: [
        { words: ["Search", "Dominance"], color: "#0C2E22" },
        { words: ["Gemini AI", "Keywords"], color: "#141414" },
        { words: ["Core Web", "Vitals"], color: "#3B1002" },
        { words: ["Built", "to Rank"], color: "#141414" },
      ],
    },
  },
];

function KineticStage({
  phrases,
  tone,
  seed = 0,
}: {
  phrases: Phrase[];
  tone: string;
  seed?: number;
}) {
  const [activeIdx, setActiveIdx] = useState(seed % phrases.length);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsMd(media.matches);
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.1,
      rootMargin: "150px 0px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (phrases.length < 2) return;
    let timer: any;
    const timeout = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % phrases.length);
      }, 1400);
    }, (seed % 4) * 320);
    return () => {
      window.clearTimeout(timeout);
      if (timer) window.clearInterval(timer);
    };
  }, [phrases.length, seed]);

  const curr = phrases[activeIdx];
  const isLight = tone === "light" || tone === "accent";
  const blurAmount = isMd ? 14 : 0;
  const blurExit = isMd ? 12 : 0;

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center overflow-hidden px-6 sm:px-10 select-none"
      style={{
        backgroundColor: tone === "light" ? "#f1f1ef" : tone === "accent" ? "#FF6B42" : "#151515",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          className="relative max-w-[10ch] text-balance text-center"
          initial="hidden"
          animate="show"
          exit="out"
          variants={{
            show: { transition: { staggerChildren: 0.055 } },
            out: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
          }}
        >
          {curr.words.map((w) => (
            <motion.p
              key={w}
              className="block"
              style={{
                color: curr.color,
                fontSize: "clamp(2.75rem, 8.5vw, 6.5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.055em",
                fontWeight: 800,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "0.26em",
                  scale: 0.94,
                  filter: blurAmount > 0 ? `blur(${blurAmount}px)` : "none",
                },
                show: {
                  opacity: 1,
                  y: "0em",
                  scale: 1,
                  filter: "none",
                  transition: { duration: 0.38, ease: customEase },
                },
                out: {
                  opacity: 0,
                  y: "-0.2em",
                  scale: 1.04,
                  filter: blurExit > 0 ? `blur(${blurExit}px)` : "none",
                  transition: { duration: 0.22, ease: customEase },
                },
              }}
            >
              {w}
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Progress pill indicators */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-7">
        {phrases.map((x, idx) => (
          <span
            key={idx}
            className="h-[3px] rounded-full transition-all duration-300"
            style={{
              width: idx === activeIdx ? 24 : 16,
              backgroundColor:
                idx === activeIdx
                  ? curr.color
                  : isLight
                  ? "rgba(0,0,0,0.25)"
                  : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const dt = (e: number) => Math.round(e * 100) / 100;
const Un = (e: number, t: number, n: number, r: number) =>
  `A ${dt(e)} ${dt(e)} 0 0 ${t} ${dt(n)} ${dt(r)}`;

function xO(
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

function ProjectCard({
  project,
  index,
  className = "",
  style,
  column,
}: {
  project: ProjectItem;
  index: number;
  className?: string;
  style?: React.CSSProperties;
  column: "left" | "right";
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const [clipPath, setClipPath] = useState<string | null>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, springCursor);
  const springY = useSpring(mouseY, springCursor);

  useEffect(() => {
    const m = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    setHasFinePointer(m.matches);
    const handler = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    m.addEventListener("change", handler);
    return () => m.removeEventListener("change", handler);
  }, []);

  const updateCutout = useCallback(() => {
    const frame = frameRef.current;
    const tags = tagsRef.current;
    const meta = metaRef.current;
    if (!frame || !tags || !meta) return;

    const w = frame.clientWidth;
    const h = frame.clientHeight;
    if (w < 40 || h < 40) return;

    setDims({ w, h });
    const tagsDim = { w: tags.offsetWidth + 14, h: tags.offsetHeight + 10 };
    const metaDim = { w: meta.offsetWidth + 14, h: meta.offsetHeight + 10 };
    const radius = 28;
    const fillet = 16;

    setClipPath(xO(w, h, tagsDim, metaDim, radius, fillet));
  }, []);

  useEffect(() => {
    updateCutout();
    window.addEventListener("resize", updateCutout);
    return () => window.removeEventListener("resize", updateCutout);
  }, [updateCutout]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!frameRef.current || !hasFinePointer) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (e.pointerType !== "touch") {
      setHasFinePointer(true);
    }
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    springX.jump(x);
    springY.jump(y);
  };

  const xOffset = column === "right" ? 40 : -40;

  const isInternal = project.href.startsWith("/");
  const LinkComponent: any = isInternal ? Link : "a";
  const linkProps = isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <motion.article
      className={className}
      style={style}
      initial={{ opacity: 0, y: 36, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        opacity: { duration: 0.5, ease: customEase },
        x: { duration: 0.85, ease: customEase },
        y: { duration: 0.85, ease: customEase },
      }}
    >
      <LinkComponent href={project.href} {...linkProps} className="group block select-none">
        <div
          ref={frameRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setIsHovered(false)}
          className="relative mb-5 aspect-[4/3] w-full rounded-[28px] lg:cursor-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-[filter] duration-500"
        >
          {/* Top-Right Notch Tags */}
          <div
            ref={tagsRef}
            className="absolute right-0 top-0 z-30 flex items-center gap-2 pr-4 pt-3.5"
          >
            {project.tags.map((tag, tIdx) => (
              <motion.span
                key={tag}
                animate={
                  isHovered
                    ? { y: 4, opacity: 1, scale: 1.04 }
                    : { y: 0, opacity: 0.9, scale: 1 }
                }
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 26,
                  delay: isHovered ? tIdx * 0.05 : 0,
                }}
                className="whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black shadow-md border border-black/5"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Bottom-Left Notch Meta Info */}
          <div
            ref={metaRef}
            className="absolute bottom-0 left-0 z-30 flex items-center gap-2 pb-3.5 pl-5 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400"
          >
            <span>{project.year}</span>
            <span aria-hidden="true">•</span>
            <span className="whitespace-nowrap">{project.client}</span>
          </div>

          {/* Card Canvas with Notched ClipPath */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[28px] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            style={{
              clipPath: clipPath ? `path("${clipPath}")` : undefined,
              WebkitClipPath: clipPath ? `path("${clipPath}")` : undefined,
            }}
          >
            {/* Kinetic Typography Stage */}
            <KineticStage
              phrases={project.stage.phrases}
              tone={project.stage.tone}
              seed={index}
            />

            {/* Bezel Stroke SVG */}
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
                  stroke={project.bezelColor}
                  strokeWidth={8}
                />
              </svg>
            )}

            {/* Bottom Gradient Overlay on Hover */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
              }}
            />

            {/* "View project ↗" slides up on hover - High Contrast Capsule */}
            <div className="pointer-events-none absolute bottom-5 right-5 sm:bottom-6 sm:right-6 overflow-hidden z-20">
              <span className="flex translate-y-full items-center gap-2 text-xs sm:text-sm font-bold text-white px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 shadow-xl transition-transform duration-[450ms] ease-out group-hover:translate-y-0">
                View project
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </span>
            </div>
          </div>

          {/* Spring Floating Cursor Circle - Rendered ON TOP with z-50 */}
          <AnimatePresence>
            {hasFinePointer && isHovered && (
              <motion.div
                style={{ x: springX, y: springY }}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.6 },
                }}
                exit={{ scale: 0.2, opacity: 0, transition: { duration: 0.35, ease: customEase } }}
                className="pointer-events-none absolute left-0 top-0 z-50 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black font-bold shadow-[0_12px_35px_rgba(0,0,0,0.45)] border border-black/10"
              >
                <motion.span
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 0.3, ease: customEase, delay: 0.08 },
                  }}
                  exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.15, ease: customEase } }}
                >
                  <ArrowUpRight className="h-6 w-6 stroke-[2.5]" />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Title & Rolling Arrow below card */}
        <h3 className="mt-3 flex items-start justify-between gap-4">
          <span
            className="font-medium text-foreground transition-colors duration-300 group-hover:text-muted-foreground"
            style={{
              fontSize: "clamp(1.2rem, 1.8vw, 1.9rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            {project.title}
          </span>
          <span className="relative mt-1 block h-5 w-5 shrink-0 overflow-hidden text-foreground">
            <ArrowUpRight
              className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full"
              strokeWidth={2.5}
            />
            <ArrowUpRight
              className="absolute inset-0 h-full w-full -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
              strokeWidth={2.5}
            />
          </span>
        </h3>
      </LinkComponent>
    </motion.article>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="featured-projects-heading"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] text-foreground md:px-[clamp(32px,6vw,160px)]"
      style={{
        paddingTop: "clamp(64px, 8vw, 132px)",
        paddingBottom: "clamp(64px, 8vw, 132px)",
      }}
    >
      <div className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-32">
        {/* Header Block in Right Column */}
        <div className="lg:col-start-2 lg:row-start-1">
          <motion.div
            className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: customEase }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
            Selected work
          </motion.div>

          <a href="#work" className="group inline-block">
            <h2
              id="featured-projects-heading"
              className="text-foreground transition-colors duration-300 group-hover:text-muted-foreground"
              style={{
                fontSize: "clamp(2.1rem, 4vw, 4.5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              <BlurLines lines={["Design in the", "real world ↗"]} className="block" nowrapFromLg />
            </h2>
          </a>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: customEase, delay: 0.2 }}
          >
            Brand, AI systems, web and apps handled by one team — built so the work scales up as your business does, instead of being rebuilt.
          </motion.p>
        </div>

        {/* Card 1: Left Column, Rows 1-2 */}
        <ProjectCard
          project={projects[0]}
          index={0}
          column="left"
          className="lg:col-start-1 lg:row-start-1 lg:row-span-2"
        />

        {/* Card 2: Right Column, Row 2 with offset */}
        <ProjectCard
          project={projects[1]}
          index={1}
          column="right"
          className="lg:col-start-2 lg:row-start-2 lg:mt-28"
        />

        {/* Card 3: Left Column, Row 3 */}
        <ProjectCard
          project={projects[2]}
          index={2}
          column="left"
          className="lg:col-start-1 lg:row-start-3"
        />
      </div>
    </section>
  );
}
