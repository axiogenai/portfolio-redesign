"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Search, Cpu, Rocket } from "lucide-react";
import BlurLines from "./BlurLines";

const steps = [
  {
    step: "01",
    title: "Discovery & Architectural Scoping",
    desc: "We analyze your exact technical bottlenecks, user flows, and compute constraints. We establish rigorous benchmarks and data contracts before a single line of code is written.",
    deliverables: ["Technical Architecture Doc", "Data Schema & API Contracts", "Latency Benchmarks"],
    icon: Search,
  },
  {
    step: "02",
    title: "High-Velocity Engineering",
    desc: "We build in rapid, test-driven iterations. You receive live preview URLs and daily staging progress. Machine learning models are trained, validated, and packaged with zero friction.",
    deliverables: ["Staging Deployment", "Neural Model Weights", "Core Web Interface"],
    icon: Cpu,
  },
  {
    step: "03",
    title: "Hardening & Production Launch",
    desc: "We subject the system to fuzz testing, security penetration checks, and concurrency simulations. Once verified, we deploy with automated monitoring and failover triggers.",
    deliverables: ["Production Handover", "Automated CI/CD Mesh", "SLA & Performance Guarantee"],
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 text-white border-t border-white/8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 mb-8">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B42]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            Our Process
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-8">
          <BlurLines
            lines={["HOW THE WORK", "ACTUALLY RUNS."]}
            className="text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold tracking-[-0.03em] leading-[0.98] text-white"
            lineClassName="text-white"
            delayOffset={0.05}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-16"
        >
          No bureaucratic drag or endlessly deferred timelines. Three transparent phases focused on
          clarity, velocity, and enterprise-grade execution.
        </motion.p>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] bg-neutral-950 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-neutral-700">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B42]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                    {s.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    Key Deliverables
                  </div>
                  <ul className="space-y-2">
                    {s.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
