"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlurLinesContainer, BlurLine } from "./BlurLines";
import { usePageIntro } from "./PageTransitionProvider";

const customEase = [0.16, 1, 0.3, 1] as const;

export default function PageHeader({
  eyebrow,
  lines,
  support,
  children,
  fontSize = "clamp(2.25rem, 8vw, 8.5rem)",
  active,
  className = "",
}: {
  eyebrow?: string;
  lines: string[];
  support?: string;
  children?: React.ReactNode;
  fontSize?: string;
  active?: boolean;
  className?: string;
}) {
  const intro = usePageIntro();
  const isRevealed = active !== undefined ? active : intro?.revealed ?? true;

  return (
    <header className={`mb-12 lg:mb-20 ${className}`}>
      {/* Mobile Eyebrow */}
      {eyebrow && (
        <motion.div
          className="mb-4 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:hidden"
          initial="hidden"
          animate={isRevealed ? "show" : "hidden"}
          variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.55, ease: customEase }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
          {eyebrow}
        </motion.div>
      )}

      {/* Giant Kinetic Headline */}
      <h1>
        <BlurLinesContainer
          active={isRevealed}
          className="block text-foreground"
          style={{
            fontSize,
            lineHeight: 0.94,
            letterSpacing: "-0.05em",
            fontWeight: 700,
          }}
        >
          {lines.map((line, idx) => (
            <BlurLine
              key={`${idx}-${line}`}
              delay={0.05 + idx * 0.09}
              last={idx === lines.length - 1}
            >
              {idx === 0 && eyebrow ? (
                <span className="flex items-start gap-3 sm:gap-5">
                  <span
                    className="hidden shrink-0 sm:block"
                    style={{ marginTop: "0.42em", lineHeight: 0 }}
                  >
                    <span className="flex items-center gap-2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:text-xs">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      {eyebrow}
                    </span>
                  </span>
                  <span>{line}</span>
                </span>
              ) : (
                line
              )}
            </BlurLine>
          ))}
        </BlurLinesContainer>
      </h1>

      {/* Support text in 12-column grid */}
      {(support || children) && (
        <div className="mt-8 grid grid-cols-1 lg:mt-14 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial="hidden"
            animate={isRevealed ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.7, ease: customEase, delay: 0.26 }}
          >
            {support && (
              <p className="max-w-[46ch] text-lg font-medium leading-[1.45] tracking-[-0.02em] text-foreground sm:text-xl md:text-2xl">
                {support}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </header>
  );
}

