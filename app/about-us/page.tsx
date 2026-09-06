"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

const timeline = [
  {
    year: "2024",
    tag: "Studio Genesis",
    body: "Founded as an independent deep-tech and digital engineering studio in India. Bringing AI architectures, full-stack web platforms, mobile apps, and cybersecurity together under one roof.",
  },
  {
    year: "2025",
    tag: "Deep Tech & AI",
    body: "Expanded into bespoke neural architectures, autonomous LLM agent systems, and enterprise cloud infrastructure alongside high-performance digital platforms.",
  },
  {
    year: "2026",
    tag: "One Team, Global Reach",
    body: "Five core disciplines under one roof, deploying worldwide. Direct craftsperson communication without agency layers or disconnected handoffs.",
  },
];

const studioStats = [
  { label: "Founded", value: "2024", detail: "Self-funded & independent" },
  { label: "Core disciplines", value: "05", detail: "AI, Web, Apps, Cloud, Security" },
  { label: "Team model", value: "Direct", detail: "Direct craftsperson communication" },
  { label: "Global scope", value: "Worldwide", detail: "Deploying globally from India" },
];

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculate = () => {
      setScrollDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80));
    };

    calculate();
    const observer = new ResizeObserver(calculate);
    observer.observe(track);
    window.addEventListener("resize", calculate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculate);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
        <Navbar />

        <main
          className="px-4 md:px-[clamp(20px,2.6vw,52px)]"
          style={{
            paddingTop: "clamp(104px, 12vw, 168px)",
            paddingBottom: "clamp(56px, 7vw, 120px)",
          }}
        >
          <div className="mx-auto max-w-[1920px]">
            <PageHeader
              eyebrow="About"
              lines={["An independent", "creative studio", "built to ship."]}
              support="We are an independent deep-tech and digital engineering studio in India. AI systems, web platforms, mobile apps, cybersecurity and cloud architecture are handled by one unified team, built to scale as your business does."
            />

            {/* Dual Studio Visuals Grid */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5 lg:gap-6 mt-8 lg:mt-12">
              <motion.div
                className="sm:col-span-7"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="aspect-[16/11] overflow-hidden rounded-[20px] bg-muted md:rounded-[34px] shadow-xl relative">
                  <Image
                    src="/creative-office.webp"
                    alt="The studio workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="sm:col-span-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              >
                <div className="aspect-[16/11] overflow-hidden rounded-[20px] bg-muted md:rounded-[34px] shadow-xl relative">
                  <Image
                    src="/team-collab.webp"
                    alt="The team reviewing work together"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </section>

            {/* Studio Metrics & Details */}
            <section className="mt-16 border-t border-border pt-10 lg:mt-24 lg:pt-12" aria-label="Studio details">
              <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {studioStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          {/* Horizontal Pinned Timeline Section */}
          <section
            ref={containerRef}
            aria-labelledby="timeline-heading"
            className="relative mt-24"
            style={{ height: `calc(100svh + ${scrollDistance}px)` }}
          >
            <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
              <div className="px-4 md:px-[clamp(20px,2.6vw,52px)] mb-8">
                <p
                  id="timeline-heading"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Studio Milestones (2024 — 2026)
                </p>
                <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  How our multidisciplinary model was forged
                </h3>
              </div>

              {/* Horizontal Moving Cards Track */}
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex gap-6 pl-4 md:pl-[clamp(20px,2.6vw,52px)] pr-12 w-fit"
              >
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className="w-[320px] sm:w-[400px] shrink-0 rounded-[28px] border border-border bg-foreground/[0.03] p-8 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.16em]">
                        <span className="text-2xl font-bold text-foreground">{item.year}</span>
                        <span className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] font-bold text-foreground">
                          {item.tag}
                        </span>
                      </div>
                      <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>Team Axiogen Studio</span>
                      <span>Phase {item.year}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-20 max-w-7xl mx-auto rounded-[32px] bg-[#141414] text-white p-8 sm:p-14 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF6B42]">
                Work with us
              </span>
              <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Have a project ready to build?
              </h3>
              <p className="mt-2 text-neutral-400 max-w-xl text-base">
                Direct communication, transparent scope, and guaranteed craft.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-neutral-200 transition-colors shrink-0"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
