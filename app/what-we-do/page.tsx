"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurLines from "@/components/BlurLines";
import SmoothScroll from "@/components/SmoothScroll";
import { usePageIntro } from "@/components/PageTransitionProvider";

const ServicesDeck = dynamic(() => import("@/components/ServicesDeck"), {
  ssr: false,
  loading: () => (
    <article className="relative bg-background" style={{ height: "600svh" }}>
      <div className="sticky top-0 h-[100svh] flex items-center px-4 py-[76px] sm:px-8 md:py-[92px] lg:px-12">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col rounded-[18px] border border-black/10 px-5 py-6 min-h-[56svh] bg-[#FF6B42] text-black md:rounded-[26px] md:px-8 md:py-8">
          <div className="flex items-baseline justify-between gap-4 border-b border-black/20 pb-3 font-mono text-[10px] tracking-[0.16em] uppercase text-black/70">
            <span>01 / AI</span>
            <span>01 — 06</span>
          </div>
          <div className="flex flex-1 flex-col justify-center py-6 md:py-8">
            <h3 className="text-[clamp(1.5rem,2.9vw,2.75rem)] font-bold uppercase leading-[1.04] text-black">
              AI & Neural Systems
            </h3>
          </div>
        </div>
      </div>
    </article>
  ),
});

const services = [
  {
    slug: "ai-neural-systems",
    display: "AI",
    num: "01",
    title: "AI & Neural Systems",
    subtitle: "Bespoke neural network architectures, custom LLM fine-tuning, autonomous agents and predictive models.",
    description: "We engineer production-grade AI systems, from custom neural network training and computer vision pipelines to multi-agent reasoning architectures and high-throughput inference engines. Designed to run reliably in production with deterministic speed and accuracy.",
    outcomes: [
      "Deterministic low latency and high accuracy",
      "Robust, hallucination-free retrieval pipelines",
      "Scalable cloud inference infrastructure",
    ],
    deliverables: [
      "Custom LLM fine-tuning and agentic workflows",
      "Neural network training & dataset pipelines",
      "Voice synthesis, vision models & embeddings",
      "Production API endpoints and real-time inference",
    ],
  },
  {
    slug: "web-development",
    display: "Build",
    num: "02",
    title: "Web & App Development",
    subtitle: "Fast, maintainable digital products designed around real business workflows.",
    description: "We design and engineer marketing sites, web applications, SaaS products, dashboards, e-commerce experiences and mobile apps. Every build is scoped around users, content, integrations, security and measurable performance — not a pre-selected template.",
    outcomes: [
      "A product people can use confidently",
      "Fast pages and resilient infrastructure",
      "A codebase your team can extend",
    ],
    deliverables: [
      "Product discovery, UX flows and UI systems",
      "Responsive websites and progressive web apps",
      "Flutter and React Native apps, or fully native iOS and Android",
      "APIs, authentication, databases, CMS and payments",
    ],
  },
  {
    slug: "brand-presence",
    display: "Brand",
    num: "03",
    title: "Brand Presence & Social Systems",
    subtitle: "A recognisable brand voice and content system across every active channel.",
    description: "We turn positioning into a practical publishing system: clear themes, repeatable formats, consistent art direction and reporting that helps the next month improve on the last.",
    outcomes: [
      "A consistent public identity",
      "Faster, easier content decisions",
      "Useful audience and content insights",
    ],
    deliverables: [
      "Channel and competitor audit",
      "Content pillars and monthly planning",
      "Design templates, copy and publishing support",
      "Community workflows and performance reports",
    ],
  },
  {
    slug: "performance-marketing",
    display: "Growth",
    num: "04",
    title: "Performance Marketing & Paid Creative",
    subtitle: "Creative testing and campaign management judged on qualified actions, not vanity reach.",
    description: "Paid creative planned, produced and run as an engine. We design angle variations, test hooks, configure tracking and iterate on the signals that actually move customer acquisition costs.",
    outcomes: [
      "Clear visibility on customer acquisition",
      "Creative variations ready to deploy",
      "Weekly performance notes and next-test plans",
    ],
    deliverables: [
      "Paid account and attribution setup",
      "Ad creative batches and hook variations",
      "Campaign management across Meta, Google and LinkedIn",
      "Dashboards, reporting and optimisation notes",
    ],
  },
  {
    slug: "cybersecurity-cloud",
    display: "Security",
    num: "05",
    title: "Cybersecurity & Cloud Infrastructure",
    subtitle: "Hardened zero-trust architecture, automated threat detection and containerized cloud sandboxes.",
    description: "We build secure distributed infrastructure, cryptographic verification engines, automated vulnerability scanning and hardened cloud deployments designed to withstand targeted intrusion and maintain complete compliance.",
    outcomes: [
      "Zero-day attack mitigation and active telemetry",
      "Resilient, highly available cloud infrastructure",
      "Cryptographic data integrity and end-to-end encryption",
    ],
    deliverables: [
      "Penetration testing and automated security auditing",
      "Zero-trust IAM and microservice network isolation",
      "Kubernetes, Docker and serverless orchestration",
      "Real-time security telemetry and anomaly detection",
    ],
  },
  {
    slug: "brand-identity",
    display: "Design",
    num: "06",
    title: "Logo & Brand Identity",
    subtitle: "Distinct visual identities designed to work from an app icon to a storefront.",
    description: "We begin with context — category, audience, competition and ambition — then build a coherent identity rather than an isolated logo. Every decision is tested for legibility, flexibility and real-world use.",
    outcomes: [
      "A distinctive, ownable identity",
      "Consistent application across channels",
      "Practical files your team can use",
    ],
    deliverables: [
      "Research and visual direction",
      "Logo system and responsive variations",
      "Colour, typography and supporting graphic language",
      "Usage guidelines and production-ready assets",
    ],
  },
];

const marqueeItems = [
  "AI & Neural Systems",
  "Web & App Development",
  "Brand & Digital Strategy",
  "Performance Marketing",
  "Cybersecurity & Cloud",
  "UI/UX & Product Design",
];

function BottomCallout() {
  return (
    <section className="px-3 pb-[clamp(24px,4vw,56px)] pt-[clamp(72px,11vw,176px)] sm:px-5 md:px-6">
      <div className="relative isolate overflow-hidden rounded-[24px] bg-[#0a0a0a] px-5 py-14 text-white sm:px-8 sm:py-20 md:rounded-[40px] md:px-12 md:py-28 lg:px-16 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_72%_44%_at_50%_12%,#000_0%,transparent_80%)] md:bg-[size:160px_160px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.11]"
          style={{
            background: "radial-gradient(50% 38% at 50% 0%, #FF6B42 0%, #FF6B4240 32%, transparent 72%)",
          }}
        />

        {/* Marquee Banner */}
        <div
          aria-hidden="true"
          className="relative -mx-5 mb-10 flex overflow-hidden border-y border-white/10 py-3 sm:-mx-8 md:-mx-12 md:mb-16 lg:-mx-16"
        >
          <div className="flex shrink-0 animate-[marquee-left_32s_linear_infinite] items-center motion-reduce:animate-none">
            {[0, 1].map((s) => (
              <div key={s} className="flex shrink-0 items-center">
                {marqueeItems.map((r) => (
                  <span
                    key={r}
                    className="flex shrink-0 items-center gap-4 whitespace-nowrap px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 sm:gap-6 sm:px-6 sm:text-[11px]"
                  >
                    <span>{r}</span>
                    <span className="h-1 w-1 rounded-full bg-[#FF6B42]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 12-col Quote + Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-12">
          <figure className="lg:col-span-5">
            <blockquote className="text-[clamp(1.25rem,2.1vw,2rem)] font-semibold leading-[1.3] tracking-[-0.025em] text-white">
              “Six services, one team, and the same standard across all of them. We would rather scope the work honestly than sell you a package you do not need.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-l-2 border-[#FF6B42] pl-4">
              <span className="leading-tight">
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white">
                  Team Axiogen. Studio
                </span>
                <span className="mt-1 block text-xs text-white/50">
                  Creative, product & growth team
                </span>
              </span>
            </figcaption>
          </figure>

          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3 lg:col-span-7">
            {services.map((s, r) => (
              <li key={s.slug} className="bg-[#0a0a0a] p-4 sm:p-5">
                <span className="font-mono text-[10px] tracking-[0.16em] text-white/40">
                  {String(r + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-bold leading-tight tracking-[-0.02em] text-white sm:mt-6 sm:text-base">
                  {s.display}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-white/50 sm:text-xs">
                  {s.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 border-t border-white/10 pt-10 md:mt-20 md:pt-14">
          <h2 className="max-w-[22ch] text-[clamp(2.25rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white">
            Let’s build the next one together.
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6B42] px-7 py-4 text-sm font-bold text-black transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.99] sm:w-auto sm:text-base"
            >
              <span>Connect with us</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
              </span>
            </Link>
            <p className="text-sm text-white/50 sm:ml-2">
              Tell us the goal. We will tell you what it actually needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WhatWeDoPage() {
  const { revealed } = usePageIntro();

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background font-['Schibsted_Grotesk',sans-serif]">
        <Navbar />

        <main
          className="px-4 md:px-[clamp(32px,6vw,120px)]"
          style={{ paddingBottom: "clamp(56px, 7vw, 120px)" }}
        >
          {/* Signature Coral Orange Header */}
          <header
            className="-mx-4 flex min-h-[100svh] flex-col rounded-b-[24px] px-4 md:-mx-[clamp(32px,6vw,120px)] md:rounded-b-[40px] md:px-[clamp(32px,6vw,120px)]"
            style={{
              backgroundColor: "#FF6B42",
              paddingTop: "clamp(104px, 12vw, 168px)",
            }}
          >
            <div className="flex flex-1 flex-col justify-center">
              <div className="mb-4 flex items-center gap-2 text-[11px] font-medium tracking-[0.04em] text-black/70 sm:hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/60" />
                Services
              </div>

              <h1
                className="block text-black"
                style={{
                  fontSize: "clamp(2.05rem, 7.2vw, 7.25rem)",
                  lineHeight: 0.99,
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                }}
              >
                <BlurLines
                  active={revealed}
                  className="block text-black"
                  lines={[
                    "We’re a creative",
                    "studio with deep",
                    "expertise",
                  ]}
                />
              </h1>

              <div className="mt-8 grid grid-cols-1 lg:mt-14 lg:grid-cols-12">
                <p className="max-w-[30ch] text-lg leading-[1.35] text-black sm:text-xl md:text-[1.4rem] lg:col-span-5 lg:col-start-7">
                  We bring craft and clear thinking to ambitious brands, and build work that earns attention.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pb-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/70">
              <span>Scroll</span>
              <motion.span
                className="block h-6 w-px bg-black/40"
                initial={{ y: 0, opacity: 0.35 }}
                animate={{ y: [0, 8, 0], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </header>

          {/* Exact WhyCreatives 3D Card Deck Stacking Section */}
          <div className="-mx-4 md:-mx-[clamp(32px,6vw,120px)]">
            <ServicesDeck items={services} />
          </div>

          {/* Bottom Dark Callout Box */}
          <div className="-mx-4 md:-mx-[clamp(32px,6vw,120px)]">
            <BottomCallout />
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
