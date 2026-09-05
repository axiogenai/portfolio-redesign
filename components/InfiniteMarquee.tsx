"use client";

import React, { useRef, useState, useEffect } from "react";

const text = "LET'S CONNECT • LET'S EVOLVE • LET'S BUILD •";

function MarqueeRow({
  reverse = false,
  duration = 26,
  running = true,
}: {
  reverse?: boolean;
  duration?: number;
  running?: boolean;
}) {
  return (
    <div className="flex w-max select-none">
      {[0, 1].map((r) => (
        <div
          key={r}
          className={`flex w-max shrink-0 ${
            reverse
              ? "animate-[marquee-right_linear_infinite]"
              : "animate-[marquee-left_linear_infinite]"
          }`}
          style={{
            animationDuration: `${duration}s`,
            animationPlayState: running ? "running" : "paused",
          }}
        >
          {[0, 1].map((s) => (
            <span
              key={s}
              className="whitespace-nowrap pr-[0.35em] text-foreground"
              style={{
                fontSize: "clamp(2.75rem, 11vw, 13rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                fontWeight: 500,
              }}
            >
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function InfiniteMarquee() {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden bg-background font-['Schibsted_Grotesk',sans-serif]"
      style={{
        paddingTop: "clamp(56px, 7vw, 120px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
      aria-label="Let's work together"
    >
      <a
        href="#contact"
        className="group block select-none opacity-90 transition-opacity duration-500 hover:opacity-100"
      >
        <div className="overflow-hidden" aria-hidden="true">
          <MarqueeRow duration={26} running={isInView} />
        </div>
        <div className="mt-1 hidden overflow-hidden sm:block lg:mt-2" aria-hidden="true">
          <MarqueeRow reverse duration={32} running={isInView} />
        </div>
      </a>
    </section>
  );
}
