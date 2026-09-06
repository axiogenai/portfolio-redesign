"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";
import ServicesDeck, { ServiceItem } from "@/components/ServicesDeck";

const customEase = [0.16, 1, 0.3, 1] as const;

// The 9 Real Services from verified production offerings
const services: ServiceItem[] = [
  {
    slug: "ai-ml",
    display: "AI & NEURAL",
    num: "01",
    title: "AI / ML Solutions",
    subtitle:
      "Custom models, pipelines, and intelligent automation built to solve complex computational problems.",
    description:
      "From fine-tuning open-weights models to building end-to-end RAG pipelines and deploying edge computer vision models, we engineer intelligent systems that scale reliably.",
    outcomes: [
      "Automated decision making at scale",
      "Higher operational accuracy and speed",
      "Zero manual intervention on repetitive tasks",
    ],
    deliverables: [
      "Custom model training & neural architectures",
      "TensorFlow & PyTorch production inference",
      "Automated machine learning pipelines",
      "Predictive analytics & intelligent workflows",
    ],
  },
  {
    slug: "web-development",
    display: "FULL-STACK WEB",
    num: "02",
    title: "Web Development",
    subtitle:
      "Modern full-stack applications with premium UX/UI and robust database routing configurations.",
    description:
      "We design and build production-grade web platforms with Next.js App Router, typed TypeScript architectures, sub-second latency, and pixel-accurate interactive layouts.",
    outcomes: [
      "Sub-second page load times and 100 Core Web Vitals",
      "Scalable and maintainable modular architecture",
      "Production-ready codebase from day one",
    ],
    deliverables: [
      "Next.js App Router & React 19 architecture",
      "TypeScript full-stack codebase",
      "Responsive UI systems & design tokens",
      "REST, GraphQL & serverless API routes",
    ],
  },
  {
    slug: "mobile-apps",
    display: "NATIVE MOBILE",
    num: "03",
    title: "Mobile Apps",
    subtitle:
      "Cross-platform native iOS & Android applications engineered for speed and fluid animations.",
    description:
      "Fluid, gesture-driven mobile applications built with Flutter and React Native. Engineered to feel indistinguishable from high-end platform-native software with offline state sync.",
    outcomes: [
      "Unified codebase across iOS and Android",
      "Native device speed and responsiveness",
      "High user retention and store ratings",
    ],
    deliverables: [
      "Cross-platform Flutter & React Native applications",
      "Native device hardware integration (GPS, camera, biometrics)",
      "60fps gesture micro-animations & smooth transitions",
      "App Store & Google Play Store release management",
    ],
  },
  {
    slug: "cloud-solutions",
    display: "DEVOPS & CLOUD",
    num: "04",
    title: "Cloud Solutions",
    subtitle:
      "Scalable cloud infrastructure, container orchestration, and continuous DevOps deployment pipelines.",
    description:
      "Resilient cloud architectures built on AWS and GCP. Automated CI/CD pipelines, Docker container meshes, zero-downtime rolling releases, and 24/7 telemetry monitoring.",
    outcomes: [
      "99.99% uptime and auto-scaling resilience",
      "Automated testing and painless deploys",
      "Optimized cloud compute and storage bills",
    ],
    deliverables: [
      "AWS & GCP multi-region cloud architecture",
      "Docker containerization & Kubernetes clusters",
      "Automated CI/CD deployment pipelines",
      "Zero-downtime releases & edge caching",
    ],
  },
  {
    slug: "database-design",
    display: "DATA ARCHITECTURE",
    num: "05",
    title: "Database Design",
    subtitle:
      "High-performance database architectures, query optimization, and secure data relation schemas.",
    description:
      "Relational and document database architectures engineered for high concurrency. Index profiling, query latency reduction, automated migration scripts, and strict row-level security.",
    outcomes: [
      "Sub-millisecond query responses under high load",
      "Strict data integrity and compliance",
      "Seamless scaling without schema lock-ins",
    ],
    deliverables: [
      "PostgreSQL, Supabase & relational schema design",
      "Query index profiling & latency reduction",
      "Automated migrations & zero-downtime rollouts",
      "Row-level security, replication & backup strategies",
    ],
  },
  {
    slug: "voice-synthesis",
    display: "VOICE AI",
    num: "06",
    title: "Voice Synthesis",
    subtitle:
      "Real-time AI voice generation, speech-to-text integration, and interactive voice interfaces.",
    description:
      "Neural voice synthesis engines and conversational audio systems. Ultra-low latency streaming, custom voice cloning, emotional prosody tuning, and multilingual Whisper transcription.",
    outcomes: [
      "Lifelike conversational audio experiences",
      "Ultra-low latency real-time voice responses",
      "Seamless multi-language speech capabilities",
    ],
    deliverables: [
      "Neural text-to-speech (TTS) synthesis engines",
      "Whisper-based speech-to-text transcription",
      "Low-latency interactive voice conversational agents",
      "Custom voice cloning & emotional prosody tuning",
    ],
  },
  {
    slug: "document-intelligence",
    display: "NLP & EXTRACTION",
    num: "07",
    title: "Document Intelligence",
    subtitle:
      "AI-driven document parsing, automated text extraction, and contextual knowledge insights.",
    description:
      "High-precision document processing pipelines. OCR layout analysis, tabular extraction from scanned PDFs, schema validation, and dense vector embeddings for instantaneous search.",
    outcomes: [
      "Instant extraction from unstructured documents",
      "99%+ accuracy on complex tabular formats",
      "Direct question answering over private knowledge bases",
    ],
    deliverables: [
      "Layout-aware OCR & PDF table parsing",
      "Structured entity extraction & validation",
      "Contextual vector embeddings & RAG search",
      "Dense retrieval pipelines for massive doc sets",
    ],
  },
  {
    slug: "deep-research",
    display: "RESEARCH & PAPERS",
    num: "08",
    title: "Deep Research",
    subtitle:
      "Automated academic research, intelligent documentation, and domain knowledge synthesis.",
    description:
      "Automated scholarly literature exploration, IEEE-standard documentation, and domain knowledge mapping. Bridging complex academic papers into working software implementations.",
    outcomes: [
      "Weeks of literature review condensed into hours",
      "Publication-grade technical documentation",
      "Clear competitive and academic positioning",
    ],
    deliverables: [
      "Automated ArXiv & academic paper literature reviews",
      "Comprehensive IEEE formatted documentation & reports",
      "Deep domain insight extraction & synthesis",
      "Citation validation & experimental benchmark analysis",
    ],
  },
  {
    slug: "meta-google-ads",
    display: "PERFORMANCE MARKETING",
    num: "09",
    title: "Meta & Google Ads",
    subtitle:
      "Data-driven paid customer acquisition across Meta and Google Ads with conversion tracking and ROAS scaling.",
    description:
      "Full-funnel digital advertising engineered around measurable business returns. Server-side Conversion API (CAPI), Google Performance Max, creative hook testing, and attribution analytics.",
    outcomes: [
      "High-converting traffic with measurable ROAS",
      "Precise conversion tracking with zero signal loss",
      "Systematic creative iteration and lower CAC",
    ],
    deliverables: [
      "Meta Ads & Instagram campaign architecture",
      "Google Search & Performance Max campaign build",
      "Server-side Conversions API (CAPI) & Pixel tracking",
      "Creative hook testing, copy variants & ROAS reporting",
    ],
  },
];

const solutionsFor = [
  {
    num: "01",
    tag: "Academic",
    title: "Student Projects",
    description:
      "Final year, mini, academic & research projects with comprehensive documentation & step-by-step support.",
    deliverables: [
      "Final Year & Major Projects",
      "Research Paper Implementations",
      "Complete Code Documentation",
      "Viva & Presentation Walkthrough",
    ],
  },
  {
    num: "02",
    tag: "Enterprise",
    title: "Real-World Industry",
    description:
      "Enterprise workflow integrations, startup MVPs, and customized business process automation systems.",
    deliverables: [
      "Business Process Automation",
      "Enterprise Workflow Integrations",
      "Custom Internal Tooling",
      "Legacy Infrastructure Modernization",
    ],
  },
  {
    num: "03",
    tag: "Founders",
    title: "Startups & Founders",
    description:
      "Rapid interactive product development, scalable application architectures, and end-to-end launch support.",
    deliverables: [
      "0-to-1 Rapid MVP Launches",
      "Scalable SaaS Architectures",
      "Cross-Platform Mobile Apps",
      "Production CI/CD Pipelines",
    ],
  },
];

const techStack = [
  "PYTHON",
  "REACT",
  "NODE.JS",
  "NEXT.JS",
  "JAVA",
  "TENSORFLOW",
  "AWS / GCP",
  "POSTGRESQL",
  ".NET",
];

const badges = [
  "Production-Grade Code",
  "On-Time Delivery",
  "Affordable Pricing",
];

export default function WhatWeDoPage() {
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
            {/* Page Header */}
            <PageHeader
              eyebrow="Services We Provide"
              lines={["AI, Web, Mobile,", "Cloud & Intelligent Systems."]}
              support="From research to deployment — we build powerful, intelligent digital products for enterprises, startups & students. You envision it, we engineer it."
            />

            {/* Value Guarantees Badges - NO ICONS, NO COLORED BULLETS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: customEase }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {badges.map((b) => (
                <div
                  key={b}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm"
                >
                  <span>{b}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Signature Interactive Stacked Card Deck - 9 Services */}
          <div className="mt-14 lg:mt-20 -mx-4 md:-mx-[clamp(20px,2.6vw,52px)]">
            <ServicesDeck items={services} />
          </div>

          <div className="mx-auto max-w-[1920px]">

            {/* Perfect Solutions For Section - ZERO ICONS */}
            <section className="mt-24 lg:mt-36">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Perfect Solutions For
              </div>
              <h2
                className="text-foreground font-bold tracking-tight leading-[1.04] mb-12"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Tailored for every stage of development.
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {solutionsFor.map((sol, idx) => (
                  <motion.div
                    key={sol.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: customEase,
                    }}
                    className="group relative flex flex-col justify-between rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.01] hover:from-foreground/[0.07] hover:to-foreground/[0.02] p-8 sm:p-10 shadow-sm hover:border-foreground/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="rounded-full bg-foreground px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-background shadow-sm">
                          {sol.tag}
                        </span>
                        <span className="font-mono text-xs font-semibold text-muted-foreground">
                          {sol.num} / AUDIENCE
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                        {sol.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                        Key Deliverables
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sol.deliverables.map((d) => (
                          <span
                            key={d}
                            className="rounded-full bg-foreground/[0.04] border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/80"
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

            {/* Tech Stack Banner */}
            <section className="mt-20 lg:mt-32">
              <div className="rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.01] p-8 sm:p-12">
                <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  Engineering Tech Stack
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
                  Production stacks we build with daily.
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-foreground/[0.04] px-5 py-2.5 font-mono text-xs sm:text-sm font-bold text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
                  From Research to Deployment
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  You envision it, we engineer it.
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  Whether you are a student preparing your major project, an enterprise automating workflows, or a startup founder launching an MVP — we deliver production-grade code on time.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Start a project</span>
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
