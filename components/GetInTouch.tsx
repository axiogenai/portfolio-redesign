"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const marqueePhrases = ["LET'S CONNECT", "LET'S EVOLVE", "LET'S BUILD"];

interface MarqueeRowProps {
  reverse?: boolean;
  outlined?: boolean;
  seconds: number;
}

function MarqueeRow({ reverse = false, outlined = false, seconds }: MarqueeRowProps) {
  return (
    <div aria-hidden="true" className="flex select-none overflow-hidden">
      <div
        className={`flex shrink-0 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        } motion-reduce:animate-none`}
        style={{ animationDuration: `${seconds}s` }}
      >
        {[0, 1].map((r) => (
          <div key={r} className="flex shrink-0 items-center">
            {marqueePhrases.map((phrase, s) => (
              <React.Fragment key={`${r}-${s}`}>
                <span
                  style={{
                    fontSize: "clamp(3.5rem, 11vw, 10.5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    fontWeight: 800,
                    color: outlined ? "transparent" : "hsl(var(--foreground) / 0.08)",
                    WebkitTextStroke: outlined
                      ? "1px hsl(var(--foreground) / 0.22)"
                      : "none",
                  }}
                  className={`whitespace-nowrap px-3 sm:px-6 select-none ${
                    outlined ? "text-transparent" : ""
                  }`}
                >
                  {phrase}
                </span>
                <span
                  style={{
                    fontSize: "clamp(2rem, 7vw, 6.5rem)",
                    lineHeight: 0.95,
                    color: outlined ? "transparent" : "hsl(var(--foreground) / 0.16)",
                    WebkitTextStroke: outlined
                      ? "1px hsl(var(--foreground) / 0.22)"
                      : "none",
                  }}
                  className="select-none px-3 sm:px-6 font-bold align-middle opacity-80"
                  aria-hidden="true"
                >
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GetInTouch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-4 pb-[clamp(40px,6vw,88px)] pt-[clamp(72px,11vw,168px)] sm:px-6 md:px-[clamp(32px,5vw,96px)] font-['Schibsted_Grotesk',sans-serif]"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Top-Left Tilted Orange Badge & Kinetic Headline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
        >
          <motion.span
            className="mb-4 inline-block rounded-[3px] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black sm:mb-5 sm:text-[11px] select-none"
            style={{ backgroundColor: "#FF6B42", rotate: -4 }}
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.92 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Get in touch
          </motion.span>

          {/* Giant Staggered Masked Headline */}
          <h2 className="text-[clamp(2.75rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-foreground">
            {["Tell us what", "you're building"].map((line) => (
              <motion.span
                key={line}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Animated Expanding Divider Line */}
        <motion.div
          className="mt-[clamp(32px,5vw,72px)] h-px origin-left bg-foreground/20"
          style={{ scaleX }}
        />
      </div>

      {/* Marquee Ticker with Centered Orange "LET'S CONNECT" Button matching media_1788572148703.png */}
      <div className="relative -mx-4 mt-[clamp(48px,7vw,112px)] sm:-mx-6 md:-mx-[clamp(32px,5vw,96px)]">
        {/* Infinite Outline & Solid Text Marquee in Background */}
        <div className="pointer-events-none select-none">
          <MarqueeRow seconds={26} />
          <MarqueeRow reverse outlined seconds={34} />
        </div>

        {/* Floating Centered Orange CTA Button matching media_1788572148703.png */}
        <div className="absolute inset-0 grid place-items-center px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-black/15 dark:border-white/25 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-black shadow-[0_12px_36px_-10px_rgba(255,107,66,0.35)] transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none sm:gap-4 sm:px-9 sm:py-5 sm:text-lg"
              style={{ backgroundColor: "#FF6B42" }}
            >
              <span>LET'S CONNECT</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none sm:h-11 sm:w-11">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
