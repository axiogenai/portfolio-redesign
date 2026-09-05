"use client";

import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Nu = ["One stop solution for", "all creative needs", "and goals"];
const ju = [0.16, 1, 0.3, 1] as const;

const De = (e: number) => Math.round(e * 100) / 100;
const St = (e: number, t: number, n: number, r: number) =>
  `A ${De(e)} ${De(e)} 0 0 ${t} ${De(n)} ${De(r)}`;

function iO(
  e: number,
  t: number,
  n: { right: number; bottom: number }[],
  r: number,
  s: number,
  i = 0
) {
  const o = n[n.length - 1].bottom,
    a = n[0].bottom,
    l = Math.max(4, Math.min(r * 0.6, i / 3)),
    c = i > 12 && a >= r + l && a <= o - 2 * l,
    u: string[] = [];
  u.push(`M ${De(n[0].right)} 0`);
  u.push(`H ${De(e - r)}`);
  u.push(St(r, 1, e, r));
  u.push(`V ${De(t - r)}`);
  u.push(St(r, 1, e - r, t));
  u.push(`H ${De(r)}`);
  u.push(St(r, 1, 0, t - r));
  if (c) {
    u.push(`V ${De(a + l)}`);
    u.push(St(l, 1, l, a));
    u.push(`H ${De(i - l)}`);
    u.push(St(l, 1, i, a + l));
    u.push(`V ${De(o - l)}`);
    u.push(St(l, 0, i + l, o));
  } else {
    u.push(`V ${De(o + r)}`);
    u.push(St(r, 1, r, o));
  }
  for (let d = n.length - 1; d >= 0; d--) {
    const f = n[d].right,
      p = d === 0 ? 0 : n[d - 1].bottom;
    if (d === n.length - 1) {
      const g = Math.min(s, (n[d].bottom - p) / 2);
      u.push(`H ${De(f - g)}`);
      u.push(St(g, 0, f, n[d].bottom - g));
    }
    if (d === 0) {
      u.push("V 0");
      break;
    }
    const x = n[d - 1].right,
      y = p - (d - 2 >= 0 ? n[d - 2].bottom : 0),
      b = n[d].bottom - p,
      m = Math.max(3, Math.min(s, Math.abs(x - f) / 2, y / 2, b / 2));
    if (x > f) {
      u.push(`V ${De(p + m)}`);
      u.push(St(m, 1, f + m, p));
      u.push(`H ${De(x - m)}`);
      u.push(St(m, 0, x, p - m));
    } else {
      u.push(`V ${De(p + m)}`);
      u.push(St(m, 0, f - m, p));
      u.push(`H ${De(x + m)}`);
      u.push(St(m, 1, x, p - m));
    }
  }
  u.push("Z");
  return u.join(" ");
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const btnRef = useRef<HTMLDivElement>(null);
  const [clipPathStr, setClipPathStr] = useState<string | null>(null);

  const calculatePath = useCallback(() => {
    const u = containerRef.current,
      d = panelRef.current,
      f = badgeRef.current,
      p = btnRef.current,
      x = lineRefs.current.filter(Boolean) as HTMLSpanElement[];

    if (!u || !d || !f || !p || x.length !== Nu.length) return;
    const y = u.getBoundingClientRect(),
      b = y.width,
      m = y.height;
    if (b < 2 || m < 2) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const g = isMobile ? 16 : Math.max(14, Math.min(34, b * 0.026));
    const w = (_: HTMLElement) => {
      const B = _.getBoundingClientRect();
      return { right: B.right - y.left, bottom: B.bottom - y.top };
    };

    const S = w(f),
      E = x.map(w),
      T = w(p),
      k = [...E, T];

    for (let _ = k.length - 2; _ >= 0; _--) {
      k[_] = { ...k[_], right: Math.max(k[_].right, k[_ + 1].right) };
    }

    const C = [
      { right: Math.max(S.right, k[0].right), bottom: k[0].bottom },
      ...k.slice(1),
    ];
    // On phone screens, ensure the cutout leaves at least 15-20% for the video strip on the right
    const M = isMobile ? Math.min(b - g - 4, b * 0.85) : b - g - 4,
      j: { right: number; bottom: number }[] = [];

    for (const _ of C) {
      const B = Math.min(_.right, M),
        L = Math.min(_.bottom, m - g - 4),
        $ = j[j.length - 1];

      if ($ && Math.abs(B - $.right) < g * 1.4) {
        $.right = Math.max($.right, B);
        $.bottom = Math.max($.bottom, L);
        continue;
      }
      if ($ && L <= $.bottom + 8) {
        $.right = Math.max($.right, B);
        $.bottom = Math.max($.bottom, L);
        continue;
      }
      j.push({ right: B, bottom: L });
    }

    if (!j.length) return;
    const V = Math.max(0, d.getBoundingClientRect().left - y.left);
    setClipPathStr(iO(b, m, j, g, g, V));
  }, []);

  useLayoutEffect(() => {
    calculatePath();
    const u = containerRef.current,
      d = panelRef.current;
    if (!u || !d) return;

    let f = 0;
    const p = () => {
      f ||
        (f = requestAnimationFrame(() => {
          f = 0;
          calculatePath();
        }));
    };

    const x = new ResizeObserver(p);
    x.observe(u);
    x.observe(d);

    return () => {
      x.disconnect();
      if (f) cancelAnimationFrame(f);
    };
  }, [calculatePath]);

  useEffect(() => {
    if (typeof document === "undefined" || !("fonts" in document)) return;
    let u = true;
    document.fonts.ready.then(() => {
      if (u) calculatePath();
    });
    return () => {
      u = false;
    };
  }, [calculatePath]);

  const padL = "var(--pad-l)";
  const padR = "var(--pad-r)";

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
      id="top"
      className="relative min-h-svh w-full bg-background text-foreground transition-colors duration-300 md:min-h-0"
    >
      <div
        className="w-full px-3 md:px-[clamp(28px,4.5vw,120px)]"
        style={{
          paddingTop: "clamp(100px, 11vw, 112px)",
          paddingBottom: "clamp(30px, 4vw, 76px)",
        }}
      >
        <div
          ref={containerRef}
          className="hero-video-container"
          style={{ "--panel-w": "calc(100vw - 24px)" } as React.CSSProperties}
        >
          {/* Overlaid Floating Text Block in Corner */}
          <div
            ref={panelRef}
            className="absolute left-0 top-0 z-10 flex flex-col items-start max-w-[86%] sm:max-w-[78%] md:max-w-none [--pad-l:clamp(8px,2.5vw,16px)] [--pad-r:clamp(12px,3vw,24px)] md:left-[min(7vw,104px)] md:[--pad-l:clamp(20px,2.2vw,34px)] md:[--pad-r:clamp(20px,2vw,30px)]"
          >
            {/* Top Indicator: Team Axiogen */}
            <div
              ref={badgeRef}
              className="w-fit"
              style={{
                paddingLeft: padL,
                paddingRight: padR,
                paddingTop: "clamp(10px, 1.4vw, 20px)",
                paddingBottom: "clamp(8px, 1.2vw, 18px)",
              }}
            >
              <motion.span
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: ju }}
              >
                <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-foreground" />
                <span className="whitespace-nowrap text-[12px] font-medium leading-none text-foreground sm:text-[13px] lg:text-[15px]">
                  Team Axiogen
                </span>
              </motion.span>
            </div>

            {/* Giant Title Typography with Kinetic Slide Up */}
            <h1
              className="font-['Schibsted_Grotesk','Plus_Jakarta_Sans',sans-serif] text-foreground"
              style={{
                fontSize: "clamp(1.65rem, 5.8vw, 104px)",
                fontWeight: 500,
                letterSpacing: "-0.022em",
                margin: 0,
              }}
            >
              {Nu.map((u, d) => (
                <span
                  key={u}
                  ref={(f) => {
                    lineRefs.current[d] = f;
                  }}
                  className="block w-fit overflow-hidden whitespace-nowrap"
                  style={{
                    lineHeight: 1,
                    paddingLeft: padL,
                    paddingRight: padR,
                    paddingBottom: "0.14em",
                    marginBottom: d === Nu.length - 1 ? 0 : "-0.25em",
                  }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "108%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      ease: ju,
                      delay: 0.08 + d * 0.09,
                    }}
                    style={{ willChange: "transform" }}
                  >
                    {u}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Action Buttons */}
            <div
              ref={btnRef}
              className="w-fit"
              style={{
                paddingLeft: padL,
                paddingRight: padR,
                paddingTop: "clamp(12px, 1.6vw, 24px)",
                paddingBottom: "clamp(12px, 1.6vw, 24px)",
              }}
            >
              <motion.div
                className="flex flex-wrap items-center gap-2.5 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: ju, delay: 0.45 }}
              >
                <a
                  href="#work"
                  onClick={(e) => scrollTo(e, "#work")}
                  className="group flex items-center gap-2 rounded-full bg-foreground py-2 pl-4 pr-1.5 sm:pl-5 sm:pr-2 text-[13px] sm:text-[14px] font-semibold text-background transition-colors hover:opacity-85 lg:text-[15px] shadow-sm"
                >
                  <span>View our work</span>
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-background/20 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
                  </span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, "#contact")}
                  className="group flex items-center gap-1.5 px-3 py-2 rounded-full border border-foreground/15 text-[13px] sm:text-[14px] font-semibold text-foreground transition-all hover:bg-foreground/5 md:border-none md:px-0 md:py-0 lg:text-[15px]"
                >
                  <span>Start a project</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                  />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Dynamic Video Cutout (SVG Path Cutout on both phone screens and desktop screens) */}
          <div
            className="hero-video-cutout"
            style={{
              clipPath: clipPathStr ? `path("${clipPathStr}")` : undefined,
              WebkitClipPath: clipPathStr ? `path("${clipPathStr}")` : undefined,
              borderRadius: clipPathStr ? undefined : "clamp(20px, 2.6vw, 34px)",
            }}
          >
            {/* Agency Showreel Video */}
            <video
              src="/video/axiogen_showreel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
