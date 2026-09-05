"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlurLines from "./BlurLines";

const customEase = [0.16, 1, 0.3, 1] as const;
const springCursor = { stiffness: 500, damping: 28, mass: 0.5 };
const rowSpring = { type: "spring", stiffness: 200, damping: 25, mass: 0.8 } as const;

const xS = "clamp(220px, 24vw, 320px)";

const services = [
  {
    title: "AI & Neural Systems",
    blurb: "Custom LLMs, autonomous agents, neural models and real-time inference.",
    href: "#contact",
    image: "/axiogen-neural.jpg",
  },
  {
    title: "Web Platforms",
    blurb: "Fast, responsive web applications engineered to scale.",
    href: "#contact",
    image: "/project-nth.webp",
  },
  {
    title: "App Development",
    blurb: "High-performance iOS, Android and cross-platform mobile apps.",
    href: "#contact",
    image: "/axiogen-cyber.jpg",
  },
  {
    title: "Cybersecurity & Cloud",
    blurb: "Zero-trust architecture, hardened infrastructure and telemetry.",
    href: "#contact",
    image: "/axiogen-seo.jpg",
  },
  {
    title: "Brand & Digital Identity",
    blurb: "Coherent design systems, product UX and brand presence.",
    href: "#contact",
    image: "/creative-office.webp",
  },
];

export default function OurExpertise() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHoveringList, setIsHoveringList] = useState(false);

  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const smoothX = useSpring(pointerX, springCursor);
  const smoothY = useSpring(pointerY, springCursor);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const updateMedia = () => {
      setIsDesktop(media.matches);
      if (!media.matches) {
        setHoveredIdx(null);
        setIsHoveringList(false);
      }
    };
    updateMedia();
    media.addEventListener("change", updateMedia);
    return () => media.removeEventListener("change", updateMedia);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const onPointerMove = (e: PointerEvent) => {
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [isDesktop, pointerX, pointerY]);

  const hasHover = hoveredIdx !== null;
  const thumbSize = 130;
  const textOffset = thumbSize + 24;

  return (
    <div id="expertise" className="w-full bg-background px-3 sm:px-5 md:px-6">
      <section className="w-full overflow-hidden rounded-[24px] bg-[#0A0A0C] font-['Schibsted_Grotesk',sans-serif] text-white md:rounded-[36px]">
        {/* Floating cursor follower on desktop */}
        {isDesktop && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[100] flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={false}
            animate={{
              scale: hasHover ? 1 : 0.2,
              opacity: isHoveringList ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.6 }}
          >
            <motion.span
              className="flex items-center justify-center text-black"
              initial={false}
              animate={{ opacity: hasHover ? 1 : 0, scale: hasHover ? 1 : 0.4 }}
              transition={{ duration: 0.25, ease: customEase }}
            >
              <ArrowUpRight className="h-8 w-8 stroke-[2.5]" />
            </motion.span>
          </motion.div>
        )}

        <div
          style={{
            paddingTop: "clamp(84px, 9vw, 176px)",
            paddingBottom: `calc(clamp(84px, 9vw, 176px) + ${xS})`,
          }}
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 gap-y-8 px-5 md:px-[clamp(28px,5vw,120px)] lg:grid-cols-12 lg:gap-x-10 items-start">
            {/* Top Left Tag */}
            <div className="flex items-start gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 lg:col-span-3 lg:pt-3">
              <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-white/60" />
              Our Expertise
            </div>

            {/* Center Heading */}
            <div className="lg:col-span-6 lg:text-center">
              <h2
                style={{
                  fontSize: "clamp(2.15rem, 3.9vw, 6.25rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  fontWeight: 500,
                }}
                className="text-white"
              >
                <BlurLines
                  lines={["How we take your", "business to the next level"]}
                  className="block"
                />
              </h2>
            </div>

            {/* Right Blurb & CTA */}
            <motion.div
              className="lg:col-span-3 lg:pt-2"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
            >
              <p className="hidden max-w-sm text-[13px] leading-relaxed text-white/55 sm:block lg:text-sm">
                Professional creative services to elevate your brand and grow your business.
              </p>
              <a
                href="#contact"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-white/85"
              >
                <span>See all services</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3 w-3 stroke-[3]" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Service Interactive List */}
          <div
            className="mt-14 grid grid-cols-1 gap-y-10 px-5 md:px-[clamp(28px,5vw,120px)] lg:mt-24 lg:cursor-none lg:grid-cols-12 lg:gap-x-10"
            onPointerEnter={() => isDesktop && setIsHoveringList(true)}
            onPointerLeave={() => {
              setHoveredIdx(null);
              setIsHoveringList(false);
            }}
          >
            <ul className="lg:col-span-12">
              {services.map((item, idx) => {
                const isItemHovered = isDesktop && hoveredIdx === idx;
                const isOtherHovered = isDesktop && hasHover && hoveredIdx !== idx;

                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: customEase, delay: idx * 0.05 }}
                    className="border-b border-zinc-800"
                  >
                    <motion.div
                      animate={{ opacity: isOtherHovered ? 0.28 : 1 }}
                      transition={{ duration: 0.45, ease: customEase }}
                    >
                      <a
                        href={item.href}
                        onPointerEnter={() => isDesktop && setHoveredIdx(idx)}
                        onFocus={() => isDesktop && setHoveredIdx(idx)}
                        onBlur={() => setHoveredIdx(null)}
                        className="relative flex items-center gap-4 py-5 outline-none lg:block lg:cursor-none lg:py-[0.12em]"
                        style={{
                          fontSize: "clamp(2.1rem, 7vw, 10.5rem)",
                          lineHeight: 1.04,
                          letterSpacing: "-0.04em",
                          fontWeight: 500,
                        }}
                      >
                        {isDesktop ? (
                          <>
                            {/* Expanding image thumbnail */}
                            <motion.span
                              aria-hidden="true"
                              className="absolute left-0 top-1/2 block overflow-hidden rounded-2xl bg-white/5"
                              style={{
                                width: thumbSize,
                                height: thumbSize,
                                originX: 0,
                                originY: 0.5,
                              }}
                              initial={false}
                              animate={{
                                scale: isItemHovered ? 1 : 0.8,
                                opacity: isItemHovered ? 1 : 0,
                                y: "-50%",
                              }}
                              transition={rowSpring}
                            >
                              <img
                                src={item.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                              />
                            </motion.span>

                            {/* Title translating to right on hover */}
                            <motion.span
                              className="block whitespace-nowrap"
                              initial={false}
                              animate={{ x: isItemHovered ? textOffset : 0 }}
                              transition={rowSpring}
                            >
                              {item.title}
                            </motion.span>
                          </>
                        ) : (
                          <>
                            {/* Mobile / Tablet layout */}
                            <span
                              aria-hidden="true"
                              className="block h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/5 sm:h-20 sm:w-20"
                            >
                              <img
                                src={item.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                              />
                            </span>

                            <span className="min-w-0 flex-1">
                              <span className="block">{item.title}</span>
                              <span className="mt-1.5 block text-[13px] font-normal leading-relaxed tracking-normal text-white/50">
                                {item.blurb}
                              </span>
                            </span>

                            <span className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white sm:flex">
                              <ArrowUpRight className="h-4 w-4 text-black" strokeWidth={2.5} />
                            </span>
                          </>
                        )}
                      </a>
                    </motion.div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
