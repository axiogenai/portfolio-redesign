"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig } from "framer-motion";

export const PageIntroContext = createContext<boolean>(true);

export const usePageIntro = () => {
  return { revealed: useContext(PageIntroContext) };
};

const transitionMap: Record<string, "accent" | "theme"> = {
  "/": "theme",
  "/what-we-do": "accent",
  "/our-work": "theme",
  "/about-us": "theme",
  "/insights": "theme",
  "/contact": "theme",
};

// Durations strictly calibrated for Axiogen signature zoom transitions
const uS = 0.34; // box spring-in duration
const dS = 0.5;  // box zoom-expand duration
const fS = 0.38; // curtain clear fade-out duration
const UM = 0.05; // pause between spring and expand
const hS = (uS + UM) * 1000; // 390ms: trigger expand
const pS = hS + dS * 1000;   // 890ms: trigger clear & onHandoff
const HM = pS + fS * 1000;   // 1270ms: transition complete (gone)

function ZoomCurtain({
  variant = "theme",
  onHandoff,
}: {
  variant?: "accent" | "theme";
  onHandoff: () => void;
}) {
  const [phase, setPhase] = useState<"box" | "expand" | "clear" | "gone">("box");
  const [windowSize, setWindowSize] = useState<{ w: number; h: number }>(() => {
    if (typeof window !== "undefined") {
      return { w: window.innerWidth, h: window.innerHeight };
    }
    return { w: 390, h: 844 };
  });

  const isExpandingOrBeyond = phase !== "box";

  useEffect(() => {
    if (isExpandingOrBeyond) return;
    const handleResize = () =>
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpandingOrBeyond]);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase("expand"), hS),
      window.setTimeout(() => {
        setPhase("clear");
        onHandoff();
      }, pS),
      window.setTimeout(() => setPhase("gone"), HM),
    ];

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [onHandoff]);

  if (phase === "gone") return null;

  // Box size formula: Math.round(Math.min(132, Math.max(76, innerWidth * 0.14)))
  const boxSize = Math.round(Math.min(132, Math.max(76, windowSize.w * 0.14)));
  const isTheme = variant === "theme";

  return (
    <MotionConfig reducedMotion="never">
      <motion.div
        className={`fixed inset-0 z-[90] flex items-center justify-center ${
          isTheme ? "bg-foreground" : "bg-background"
        }`}
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "clear" ? 0 : 1 }}
        transition={{ duration: fS, ease: [0.4, 0, 0.2, 1] }}
        aria-hidden="true"
        style={{ pointerEvents: "none" }}
      >
        {/* Subtle background wash for theme mode */}
        {isTheme && (
          <div className="absolute inset-0 bg-background opacity-[0.08]" />
        )}

        {/* Signature Axiogen Zoom Box */}
        <motion.div
          className={isTheme ? "relative bg-background" : "relative"}
          initial={{
            width: boxSize,
            height: boxSize,
            borderRadius: 22,
            opacity: 0,
            scale: 0.45,
          }}
          animate={
            phase === "box"
              ? {
                  width: boxSize,
                  height: boxSize,
                  borderRadius: 22,
                  opacity: 1,
                  scale: 1,
                }
              : {
                  width: windowSize.w * 1.06,
                  height: windowSize.h * 1.2,
                  borderRadius: 0,
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={
            phase === "box"
              ? {
                  type: "spring",
                  stiffness: 420,
                  damping: 26,
                  mass: 0.7,
                  duration: uS,
                }
              : {
                  duration: dS,
                  ease: [0.65, 0, 0.35, 1],
                }
          }
          style={isTheme ? undefined : { backgroundColor: "#FF6B42" }}
        />
      </motion.div>
    </MotionConfig>
  );
}

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const variant = transitionMap[pathname];
  const [revealed, setRevealed] = useState(!variant);

  useEffect(() => {
    if (!transitionMap[pathname]) {
      setRevealed(true);
      return;
    }
    setRevealed(false);
    const fallbackTimer = window.setTimeout(() => {
      setRevealed(true);
    }, 1100);
    return () => window.clearTimeout(fallbackTimer);
  }, [pathname]);

  const onHandoff = useCallback(() => {
    setRevealed(true);
  }, []);

  return (
    <PageIntroContext.Provider value={revealed}>
      {children}
      {variant && (
        <ZoomCurtain
          key={pathname}
          variant={variant}
          onHandoff={onHandoff}
        />
      )}
    </PageIntroContext.Provider>
  );
}
