"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Globe,
  ShieldCheck,
  Zap,
  Terminal,
  Database,
  Search,
  Server,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import BlurLines from "./BlurLines";

const introLines = [
  "An independent studio",
  "in India engineering AI systems,",
  "web platforms, software and",
  "brands built to grow.",
];

const capabilitiesStrip = [
  { label: "AI Neural Systems", Icon: Cpu },
  { label: "Cybersecurity AI", Icon: ShieldCheck },
  { label: "Cloud Architecture", Icon: Server },
  { label: "APIs & Microservices", Icon: Terminal },
  { label: "Web Development", Icon: Globe },
  { label: "App Development", Icon: Layers },
  { label: "Brand Identity & UX", Icon: Search },
  { label: "Performance Systems", Icon: Zap },
];

export default function WhoWeAre() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(target, { offset: -20, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-background font-['Schibsted_Grotesk',sans-serif]"
      style={{
        paddingTop: "clamp(64px, 8vw, 140px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
    >
      <div className="relative px-4 md:px-[clamp(32px,6vw,160px)]">
        {/* Top Tag Pill */}
        <motion.div
          className="mb-7 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:absolute lg:left-6 lg:top-2 lg:mb-0 lg:text-sm"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
          Who are we?
        </motion.div>

        {/* Big Editorial Headline */}
        <div className="lg:mx-auto lg:w-fit lg:max-w-full">
          <h2 className="text-left text-foreground" style={{ fontWeight: 500 }}>
            <span
              className="block"
              style={{
                fontSize: "clamp(2.3rem, 5vw, 6.25rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
              }}
            >
              <BlurLines
                lines={introLines}
                className="block"
                nowrapFromLg
                alignFirstLineRightEdge
              />
            </span>
          </h2>

          {/* Action Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Link
              href="/about-us"
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-[opacity,transform] duration-300 ease-out hover:opacity-85 active:scale-[0.98] motion-reduce:transform-none"
            >
              <span>About Team Axiogen</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/15 transition-[background-color,transform] duration-300 ease-out group-hover:scale-110 group-hover:bg-background/25 motion-reduce:transform-none">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-foreground/25 px-6 py-3 text-sm font-semibold text-foreground transition-[background-color,border-color,color,transform] duration-300 ease-out hover:border-foreground hover:bg-foreground hover:text-background active:scale-[0.98] motion-reduce:transform-none"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Infinite Rolling Capabilities Marquee Strip */}
      <div className="mt-12 md:mt-20 md:py-4 lg:mt-28 lg:py-8 w-full max-w-full overflow-hidden">
        <div
          className="relative flex select-none overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
          aria-hidden="true"
        >
          {[0, 1].map((r) => (
            <div
              key={r}
              className="flex shrink-0 items-center animate-marquee-strip will-change-transform"
            >
              {capabilitiesStrip.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="flex shrink-0 items-center gap-2.5 pr-8 text-foreground sm:gap-4 sm:pr-20 lg:pr-24"
                >
                  <Icon
                    className="h-[18px] w-[18px] shrink-0 sm:h-6 sm:w-6 text-[#FF6B42]"
                    strokeWidth={2.25}
                  />
                  <span className="whitespace-nowrap text-[17px] font-bold tracking-[-0.03em] sm:text-2xl lg:text-[30px]">
                    {label}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
