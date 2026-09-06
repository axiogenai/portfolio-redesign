"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

const customEase = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "Understanding the real problem",
    body: "We begin by analyzing underlying architectural constraints and user flows. A structured technical audit covers data models, existing infrastructure, latency requirements, and measurable success criteria before a single design screen or schema is drafted.",
    deliverables: ["Scoped Technical Brief", "Feasibility Assessment", "System Architecture Blueprint"],
    duration: "1–3 Days",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "Defining how we architect it",
    body: "Stack selection, database models, caching layers, and API protocols are determined here. You receive a concrete engineering roadmap with dependencies clearly mapped before development begins.",
    deliverables: ["Technical Specification Doc", "Schema Definitions", "Interactive Wireframes"],
    duration: "2–5 Days",
  },
  {
    num: "03",
    phase: "Design",
    title: "System-level UI & interactive prototypes",
    body: "We design in Figma using production design tokens, real copy, and strict layout grids. Both light and dark modes are engineered simultaneously. You evaluate responsive state flows rather than static screenshots.",
    deliverables: ["Component Design System", "Responsive Desktop & Mobile Flows", "Figma Token Library"],
    duration: "5–14 Days",
  },
  {
    num: "04",
    phase: "Build",
    title: "Full-stack engineering & testing",
    body: "Clean, strongly typed codebases with component modularity and zero cumulative layout shift. We architect for long-term maintainability, strict security posture, and high throughput from the first commit.",
    deliverables: ["Typed Next.js / API Codebase", "Database Migrations", "Automated CI/CD Pipelines"],
    duration: "2–8 Weeks",
  },
  {
    num: "05",
    phase: "Launch",
    title: "Production deployment & verification",
    body: "Zero-downtime deployment pipelines, edge DNS routing, SSL verification, telemetry monitoring, and search engine optimization. Handoff includes complete architectural documentation and runbooks.",
    deliverables: ["Production Cloud Deployment", "Core Web Vitals Audit", "Handoff Runbook & Access Keys"],
    duration: "3–5 Days",
  },
  {
    num: "06",
    phase: "Iterate",
    title: "Telemetry & performance tuning",
    body: "The highest-performing software evolves with live user telemetry. We provide dedicated post-launch monitoring windows to review server logs, query latency, and behavioral analytics.",
    deliverables: ["Error Telemetry Dashboard", "Query Optimization Audit", "Feature Iteration Roadmap"],
    duration: "Continuous",
  },
];

const principles = [
  {
    num: "01",
    title: "Transparent Scope",
    desc: "Fixed-scope architectural proposals with zero hidden invoices or surprise billable hours.",
  },
  {
    num: "02",
    title: "Async Precision",
    desc: "Weekly written technical briefings, commit milestones, and blocker alerts that respect your time.",
  },
  {
    num: "03",
    title: "Direct Engineering",
    desc: "Direct communication with the system architects and engineers building your software.",
  },
  {
    num: "04",
    title: "Milestone Gates",
    desc: "Every phase requires explicit client sign-off before subsequent phases begin.",
  },
];

export default function ProcessesPage() {
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
              eyebrow="Processes"
              lines={["How we actually", "engineer and ship."]}
              support="No black boxes. No agency smoke-and-mirrors. Here is the exact technical progression of how an idea transitions into a resilient production system."
            />

            {/* Sleek 3-Column Process Step Bento Cards */}
            <section className="mt-16 lg:mt-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.05,
                      ease: customEase,
                    }}
                    className="group relative flex flex-col justify-between rounded-[32px] sm:rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.01] hover:from-foreground/[0.07] hover:to-foreground/[0.02] p-8 sm:p-9 hover:border-foreground/30 hover:-translate-y-1.5 transition-all duration-400 shadow-sm hover:shadow-2xl"
                  >
                    <div>
                      {/* Top Rail: Phase Badge + Duration Tag */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-foreground px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-background shadow-sm">
                          {step.phase}
                        </span>
                        <span className="rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[11px] font-bold text-muted-foreground">
                          {step.duration}
                        </span>
                      </div>

                      {/* Step Number & Title */}
                      <div className="font-mono text-4xl sm:text-5xl font-black text-foreground/15 mt-5 leading-none select-none">
                        {step.num}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-3 mb-2.5">
                        {step.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {step.body}
                      </p>
                    </div>

                    {/* Deliverables Section */}
                    <div className="pt-5 border-t border-border mt-auto">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2.5">
                        Key Deliverables
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {step.deliverables.map((d) => (
                          <span
                            key={d}
                            className="rounded-full bg-foreground/[0.04] border border-border px-3 py-1 text-[11px] font-medium text-foreground/80"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Working Principles (4-Column Bento Cards) */}
            <section className="mt-20 lg:mt-32">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-8">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Working Principles
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((p, idx) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.06,
                      ease: customEase,
                    }}
                    className="group relative flex flex-col justify-between rounded-[32px] sm:rounded-[34px] border border-border bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.01] hover:from-foreground/[0.07] hover:to-foreground/[0.02] hover:border-foreground/30 p-7 sm:p-8 hover:-translate-y-1.5 transition-all duration-400 shadow-sm hover:shadow-xl"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-muted-foreground">
                        // PRINCIPLE {p.num}
                      </span>

                      <h4 className="text-lg font-bold text-foreground mt-4 mb-2">
                        {p.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Teaser Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="mt-16 lg:mt-24 rounded-[32px] sm:rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.01] hover:from-foreground/[0.05] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:border-foreground/25"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">
                  Frequently Asked
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Need clarity on scopes, billing, or stack handoffs?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Read our technical FAQs for direct answers on contracts, communication cadences, and code ownership.
                </p>
              </div>
              <Link
                href="/faqs"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-bold transition-all hover:opacity-85 shrink-0"
              >
                <span>View FAQs</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Bottom Dark CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="mt-16 lg:mt-24 rounded-[32px] bg-[#141414] text-white p-8 sm:p-14 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF6B42]">
                  Start a project
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Ready to initiate Phase 01?
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  Send us your brief or problem statement. We return a concrete architecture roadmap in 48 hours.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Initiate project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
