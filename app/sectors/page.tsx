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

const clientSectors = [
  {
    num: "01",
    tag: "Academic",
    title: "Student Projects",
    description:
      "Final year, mini, academic & research projects with comprehensive documentation & step-by-step support. We help students turn complex computer science concepts into functioning, high-scoring submissions.",
    capabilities: [
      "Final Year & Major Projects",
      "Research Paper Implementation",
      "Comprehensive Documentation & Reports",
      "Viva & Presentation Support",
      "Full Source Code & Setup Walkthrough",
    ],
  },
  {
    num: "02",
    tag: "Enterprise",
    title: "Real-World Industry",
    description:
      "Enterprise workflow integrations, startup MVPs, and customized business process automation systems. We replace brittle manual workflows with resilient, database-backed intelligent software.",
    capabilities: [
      "Enterprise Workflow Integration",
      "Business Process Automation",
      "High-Performance Database Architectures",
      "Custom Internal Tooling & Portals",
      "Cloud Infrastructure & DevOps Pipelines",
    ],
  },
  {
    num: "03",
    tag: "Founders",
    title: "Startups & Founders",
    description:
      "Rapid interactive product development, scalable application architectures, and end-to-end launch support. From concept to an investor-ready, user-facing production release.",
    capabilities: [
      "0-to-1 MVP Engineering",
      "Scalable SaaS Architectures",
      "Cross-Platform Mobile Apps",
      "AI & LLM Product Integrations",
      "Continuous CI/CD & Cloud Deployment",
    ],
  },
];

const services = [
  {
    num: "01",
    name: "AI / ML Solutions",
    tag: "Intelligent Systems",
    description:
      "Custom models, pipelines, and intelligent automation built to solve complex computational problems.",
    capabilities: ["Custom Model Training", "Predictive Analytics", "Automated Pipelines", "Computer Vision"],
  },
  {
    num: "02",
    name: "Web Development",
    tag: "Full-Stack Web",
    description:
      "Modern full-stack applications with premium UX/UI and robust database routing configurations.",
    capabilities: ["Next.js & React 19", "Robust APIs & Routing", "High-Speed Performance", "Responsive UI Systems"],
  },
  {
    num: "03",
    name: "Mobile Apps",
    tag: "Native Mobile",
    description:
      "Cross-platform native iOS & Android applications engineered for speed and fluid animations.",
    capabilities: ["iOS & Android Builds", "Fluid UI Micro-Animations", "Offline State Sync", "App Store Deployment"],
  },
  {
    num: "04",
    name: "Cloud Solutions",
    tag: "DevOps & Cloud",
    description:
      "Scalable cloud infrastructure, container orchestration, and continuous DevOps deployment pipelines.",
    capabilities: ["AWS & GCP Setup", "Docker Containers", "CI/CD Automation", "Autoscaling & Monitoring"],
  },
  {
    num: "05",
    name: "Database Design",
    tag: "Data Architecture",
    description:
      "High-performance database architectures, query optimization, and secure data relation schemas.",
    capabilities: ["PostgreSQL & Relational Data", "Query Latency Optimization", "Schema Migrations", "Data Security & Backup"],
  },
  {
    num: "06",
    name: "Voice Synthesis",
    tag: "Voice AI",
    description:
      "Real-time AI voice generation, speech-to-text integration, and interactive voice interfaces.",
    capabilities: ["Real-Time Voice Generation", "Speech-to-Text Transcription", "Interactive Voice Interfaces", "Custom Voice Cloning"],
  },
  {
    num: "07",
    name: "Document Intelligence",
    tag: "NLP & Extraction",
    description:
      "AI-driven document parsing, automated text extraction, and contextual knowledge insights.",
    capabilities: ["OCR Document Parsing", "Automated Information Extraction", "Contextual Semantic Search", "Vector Embeddings"],
  },
  {
    num: "08",
    name: "Deep Research",
    tag: "Research & Papers",
    description:
      "Automated academic research, intelligent documentation, and domain knowledge synthesis.",
    capabilities: ["Academic Paper Synthesis", "Technical Documentation", "Literature Review Tools", "Domain Data Extraction"],
  },
  {
    num: "09",
    name: "Meta & Google Ads",
    tag: "Paid Acquisition",
    description:
      "Data-driven paid customer acquisition across Meta (Instagram / Facebook) and Google Ads. Conversion tracking, pixel & CAPI setup, creative testing, and ROAS optimization.",
    capabilities: ["Meta Ads & Instagram Campaigns", "Google Search & Performance Max", "Conversion Tracking & CAPI", "A/B Creative & Hook Testing", "Attribution & ROAS Analytics"],
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

const guarantees = [
  "Production-Grade Code",
  "On-Time Delivery",
  "Affordable Pricing",
];

export default function SectorsPage() {
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
              eyebrow="Solutions & Sectors"
              lines={["Who we build for,", "what we engineer."]}
              support="From research to deployment — we build powerful, intelligent digital products for enterprises, startups & students. You envision it, we engineer it."
            />

            {/* Core Value Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: customEase }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {guarantees.map((g) => (
                <div
                  key={g}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm"
                >
                  <span>{g}</span>
                </div>
              ))}
            </motion.div>

            {/* Section 1: Perfect Solutions For (The 3 Core Audiences) */}
            <section className="mt-20 lg:mt-28">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-8">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Perfect Solutions For
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {clientSectors.map((sector, idx) => (
                  <motion.div
                    key={sector.num}
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
                      {/* Top Header Rail */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-background shadow-md">
                          {sector.tag}
                        </span>
                        <span className="font-mono text-xs font-bold text-muted-foreground">
                          {sector.num} / AUDIENCE
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                        {sector.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {sector.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                        Key Support & Deliverables
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sector.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-full bg-foreground/[0.04] border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Section 2: Services We Provide (The 9 Real Services - 3x3 Grid) */}
            <section className="mt-24 lg:mt-32">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Services We Provide
              </div>
              <h2
                className="text-foreground font-bold tracking-tight leading-[1.04] mb-12"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                AI, Web, Mobile, Cloud & Intelligent Systems
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.05,
                      ease: customEase,
                    }}
                    className="group relative flex flex-col justify-between rounded-[32px] sm:rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.01] hover:from-foreground/[0.07] hover:to-foreground/[0.02] hover:border-foreground/30 p-7 sm:p-8 transition-all duration-400 shadow-sm hover:shadow-2xl hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Top Spec Header */}
                      <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        <span className="font-semibold text-foreground/70">
                          {service.num} / {service.tag}
                        </span>
                        <span>AXIOGEN</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-4 mb-2.5">
                        {service.name}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2.5">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-full bg-foreground/[0.04] border border-border px-3 py-1 text-[11px] font-medium text-foreground/75"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Section 3: Verified Tech Stack */}
            <section className="mt-24 lg:mt-32">
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
