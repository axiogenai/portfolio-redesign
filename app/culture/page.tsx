"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

const customEase = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    num: "01",
    tag: "Integrity",
    title: "Radical Integrity",
    body: "We say what we mean and mean what we say. If a technical challenge has a cleaner alternative or a requested feature adds unnecessary technical debt, we flag it before billing, not after.",
  },
  {
    num: "02",
    tag: "Velocity",
    title: "Engineering Speed",
    body: "Velocity without cutting corners. We move fast because we are organized, modular, and clear on technical architecture — not because we are reckless. Delivery dates are commitments.",
  },
  {
    num: "03",
    tag: "Detail",
    title: "Obsessive Craft",
    body: "We care deeply about runtime latency, layout stability, typography metrics, and state synchronization — every micro-interaction that users instinctively feel even if they cannot name it.",
  },
  {
    num: "04",
    tag: "Clarity",
    title: "Full Transparency",
    body: "You see the actual technical trade-offs, architecture decisions, and code commits. No agency smoke-and-mirrors. Direct access to the engineers building your systems.",
  },
  {
    num: "05",
    tag: "Ownership",
    title: "Direct Ownership",
    body: "Every discipline owner is accountable end-to-end. There are no junior handoff tiers or administrative intermediaries. When we take on a system, we own its operational health.",
  },
  {
    num: "06",
    tag: "Evolution",
    title: "Relentless Evolution",
    body: "Technology paradigms shift rapidly. We stay in an active state of prototyping — neural networks, distributed databases, modern frameworks. Stagnation is the only outcome we refuse.",
  },
];

const manifesto = [
  "We do not build for award juries. We build for measurable business outcomes.",
  "Direct craftsperson communication beats layers of agency intermediaries.",
  "Every line of code and every layout element must justify its existence.",
  "We ship, we benchmark against reality, and we iterate with live data.",
  "Clarity over complexity. Durable architecture over ephemeral trends.",
];

const studioStats = [
  { label: "Studio Model", value: "Direct", detail: "Engineers & designers only" },
  { label: "Founded", value: "2024", detail: "Independent & self-funded" },
  { label: "Disciplines", value: "05", detail: "AI, Web, Apps, Cloud, Security" },
  { label: "Deployment", value: "Global", detail: "Deploying worldwide from India" },
];

export default function CulturePage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
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
              eyebrow="Culture"
              lines={["How we think,", "build, and operate."]}
              support="We are an independent studio built on direct communication, deep engineering craft, and a refusal to compromise on technical quality."
            />

            {/* Manifesto Strip */}
            <section
              className="mt-16 lg:mt-24 overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#141414] text-white p-8 sm:p-12 lg:p-16"
            >
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 mb-8">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                Studio Manifesto
              </div>

              <div className="space-y-0 divide-y divide-white/10">
                {manifesto.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.06,
                      ease: customEase,
                    }}
                    className="flex items-start gap-6 py-6 sm:py-8 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-neutral-500 shrink-0 mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="text-white font-bold leading-snug tracking-[-0.02em]"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
                    >
                      {line}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Core Values Section */}
            <section className="mt-20 lg:mt-32">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-8">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Core Principles
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {values.map((v, idx) => (
                  <motion.div
                    key={v.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.06,
                      ease: customEase,
                    }}
                    className="group relative flex flex-col justify-between rounded-[32px] sm:rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.01] hover:from-foreground/[0.07] hover:to-foreground/[0.02] p-8 sm:p-9 shadow-sm hover:border-foreground/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400"
                  >
                    <div>
                      {/* Top Header Rail */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="rounded-full bg-foreground px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-background shadow-sm">
                          {v.tag}
                        </span>
                        <span className="font-mono text-xs font-bold text-muted-foreground">
                          // {v.num}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
                        {v.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                        {v.body}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>VERIFIED STANDARD</span>
                      <span>AXIOGEN CORE</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Studio Operating Model */}
            <section className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: customEase }}
                className="lg:col-span-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                  Operating Model
                </span>
                <h2
                  className="text-foreground font-bold tracking-tight leading-[1.04]"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                    letterSpacing: "-0.035em",
                  }}
                >
                  Direct craft.
                  <br />
                  Zero bureaucracy.
                </h2>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Traditional agencies insert account managers, project coordinators, and sales reps between the client and the people actually writing code. Information degrades at every hop.
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  At Axiogen, clients collaborate directly with senior engineers and system architects. Technical decisions are made in minutes, blockers are identified immediately, and accountability is total.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: customEase, delay: 0.1 }}
                className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  {
                    title: "Direct Access",
                    desc: "Collaborate directly with the engineers architecting your software.",
                  },
                  {
                    title: "Async Precision",
                    desc: "Documented technical decisions, concise updates, and zero meeting bloat.",
                  },
                  {
                    title: "Unified Team",
                    desc: "AI, full-stack web, mobile, and security working in lockstep.",
                  },
                  {
                    title: "Total Ownership",
                    desc: "We take full accountability for architecture, stability, and handoff.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] sm:rounded-[30px] border border-border bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.008] hover:from-foreground/[0.06] hover:to-foreground/[0.01] p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/25 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </section>

            {/* Studio Metrics Section */}
            <section className="mt-20 border-t border-border pt-10 lg:mt-32 lg:pt-14" aria-label="Culture details">
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

            {/* Bottom Dark CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="mt-20 lg:mt-32 rounded-[32px] bg-[#141414] text-white p-8 sm:p-14 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF6B42]">
                  Join us or work with us
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Appreciate high engineering standards?
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  We are always open to high-caliber engineers and ambitious founders building serious technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black hover:bg-neutral-200 transition-colors"
                >
                  <span>View careers</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
