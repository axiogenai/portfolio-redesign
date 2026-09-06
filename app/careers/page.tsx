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

const perks = [
  {
    num: "01",
    tag: "Autonomy",
    title: "Remote-First Architecture",
    desc: "Work from anywhere. We operate on written RFCs, documented pull requests, and asynchronous workflows that respect deep focus.",
  },
  {
    num: "02",
    tag: "Standards",
    title: "Obsessive Craft Culture",
    desc: "We do not ship hacky code or unpolished interfaces. You work alongside engineers and designers who obsess over technical elegance.",
  },
  {
    num: "03",
    tag: "Velocity",
    title: "High Production Velocity",
    desc: "We engineer systems deployed to real users across international markets. Zero corporate bureaucracy or interminable slide decks.",
  },
  {
    num: "04",
    tag: "Growth",
    title: "R&D & Learning Sprints",
    desc: "We sponsor toolchains, cloud compute credits, model access, and specialized technical conferences to continuously expand your craft.",
  },
  {
    num: "05",
    tag: "Accountability",
    title: "Direct System Ownership",
    desc: "Take full architectural ownership from initial commit through deployment. No middle managers or handoff dilution.",
  },
  {
    num: "06",
    tag: "Impact",
    title: "High-Impact Studio Team",
    desc: "A lean, elite engineering core where your individual technical decisions directly shape production systems.",
  },
];

const openRoles = [
  {
    num: "01",
    title: "Full-Stack Software Engineer",
    type: "Full-Time",
    location: "Remote · India",
    description:
      "We are seeking a Full-Stack Engineer who transitions effortlessly between typed Next.js App Router frontends and low-latency Node.js/Python API backends. You build with strict attention to Core Web Vitals, database indexing, and maintainable component hierarchies.",
    requirements: [
      "TypeScript & React 19",
      "Next.js App Router",
      "PostgreSQL & Supabase",
      "REST & GraphQL APIs",
      "Docker & OCI Deployments",
      "Tailwind CSS Layouts",
    ],
    mailSubject: "Full-Stack Software Engineer Application",
  },
  {
    num: "02",
    title: "Machine Learning & Neural Architect",
    type: "Full-Time",
    location: "Remote · India",
    description:
      "We need an applied ML engineer who bridges research papers with production APIs. You will fine-tune open-weights models, architect dense vector retrieval systems, train computer vision classifiers, and optimize GPU inference pipelines.",
    requirements: [
      "PyTorch & Python Core",
      "Custom LLM Fine-Tuning",
      "ChromaDB & Vector RAG",
      "FastAPI Microservices",
      "CUDA Inference Optimization",
      "HuggingFace Transformers",
    ],
    mailSubject: "Machine Learning Engineer Application",
  },
  {
    num: "03",
    title: "Brand Systems & UI Designer",
    type: "Contract / Full-Time",
    location: "Remote · Global",
    description:
      "We are looking for a systems-minded visual designer fluent in token-based component design, typography pairing mathematics, and high-fidelity interaction prototyping. You collaborate directly with frontend engineers to ensure zero design drift.",
    requirements: [
      "Figma Auto-Layout & Tokens",
      "Systemic Brand Guidelines",
      "Typography & Grid Systems",
      "Responsive Layout Mechanics",
      "Micro-Interactions",
      "SVG & Vector Optimization",
    ],
    mailSubject: "Brand Systems Designer Application",
  },
];

export default function CareersPage() {
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
              eyebrow="Careers"
              lines={["Join", "Team Axiogen."]}
              support="We are an independent studio built for craftspersons. We partner with engineers and designers who care about technical rigor, clear documentation, and shipping software that matters."
            />

            {/* Studio Environment / Perks */}
            <section className="mt-16 lg:mt-24">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-8">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Engineering Environment
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {perks.map((perk, idx) => (
                  <motion.div
                    key={perk.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.05,
                      ease: customEase,
                    }}
                    className="group relative flex flex-col justify-between rounded-[32px] sm:rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.01] hover:from-foreground/[0.07] hover:to-foreground/[0.02] hover:border-foreground/30 p-7 sm:p-8 hover:-translate-y-1.5 transition-all duration-400 shadow-sm hover:shadow-2xl"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        // {perk.num} · {perk.tag}
                      </span>

                      <h3 className="text-xl font-bold tracking-tight text-foreground mt-4 mb-2">
                        {perk.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Open Positions */}
            <section className="mt-20 lg:mt-32">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-8">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Active Roles
              </div>

              <div className="space-y-8">
                {openRoles.map((role, idx) => (
                  <motion.div
                    key={role.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.06,
                      ease: customEase,
                    }}
                    className="group relative rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.008] hover:from-foreground/[0.05] p-8 sm:p-12 shadow-sm hover:border-foreground/30 hover:shadow-2xl transition-all duration-400"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                      <div className="flex-1">
                        {/* Role Header */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-3">
                          <span className="rounded-full bg-foreground px-3.5 py-1 text-xs font-bold text-background shadow-sm">
                            {role.type}
                          </span>
                          <span className="rounded-full border border-border bg-foreground/[0.04] px-3.5 py-1 text-xs font-medium text-foreground">
                            {role.location}
                          </span>
                          <span className="font-mono text-xs font-semibold text-muted-foreground">
                            ROLE {role.num}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                          {role.title}
                        </h3>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-4xl">
                          {role.description}
                        </p>

                        {/* Requirements Chips */}
                        <div className="mt-6 pt-6 border-t border-border">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                            Core Requirements
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {role.requirements.map((req) => (
                              <span
                                key={req}
                                className="rounded-full bg-foreground/[0.04] border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Apply Action */}
                      <div className="lg:self-center shrink-0">
                        <a
                          href={`mailto:axiogen01@gmail.com?subject=${encodeURIComponent(role.mailSubject)}`}
                          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-bold transition-all hover:opacity-85 shadow-sm"
                        >
                          <span>Apply for role</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Speculative Application Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="mt-14 lg:mt-20 rounded-[32px] sm:rounded-[36px] border border-dashed border-border/80 bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.01] hover:border-foreground/30 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 shadow-sm"
            >
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                  General Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Don't see an exact role listed?
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  If you possess extraordinary capability in systems programming, neural architectures, distributed databases, or digital interface design, submit your portfolio or GitHub.
                </p>
              </div>
              <a
                href="mailto:axiogen01@gmail.com?subject=Speculative%20Engineering%20Application"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-bold text-foreground hover:bg-foreground hover:text-background transition-all shrink-0"
              >
                <span>Send portfolio</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

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
                  Client Inquiries
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Looking to hire our studio instead?
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  Direct engagement with senior architects. Fixed scope proposals and verified production delivery.
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
