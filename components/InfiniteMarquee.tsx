"use client";

import React from "react";

const textPhrases = ["LET'S CONNECT", "LET'S EVOLVE", "LET'S BUILD"];

function MarqueeRow({
  reverse = false,
  duration = 26,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="flex w-full select-none overflow-hidden" aria-hidden="true">
      <div
        className={`flex shrink-0 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        } will-change-transform`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((r) => (
          <div key={r} className="flex shrink-0 items-center">
            {textPhrases.map((phrase, s) => (
              <React.Fragment key={`${r}-${s}`}>
                <span
                  className="whitespace-nowrap px-4 sm:px-8 text-foreground"
                  style={{
                    fontSize: "clamp(2.75rem, 11vw, 13rem)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.04em",
                    fontWeight: 500,
                  }}
                >
                  {phrase}
                </span>
                <span
                  className="select-none px-3 sm:px-6 font-bold text-foreground/30"
                  style={{
                    fontSize: "clamp(1.75rem, 7vw, 7rem)",
                    lineHeight: 1.02,
                  }}
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

export default function InfiniteMarquee() {
  return (
    <section
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
        <div className="overflow-hidden">
          <MarqueeRow duration={28} />
        </div>
        <div className="mt-1 hidden overflow-hidden sm:block lg:mt-2">
          <MarqueeRow reverse duration={34} />
        </div>
      </a>
    </section>
  );
}
