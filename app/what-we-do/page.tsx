"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlurLines from "@/components/BlurLines";
import { usePageIntro } from "@/components/PageTransitionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import ServicesDeck, { ServiceItem } from "@/components/ServicesDeck";
import { DEFAULT_SERVICES } from "@/lib/defaultServices";

const customEase = [0.16, 1, 0.3, 1] as const;

// Default 9 Services fallback
const services: ServiceItem[] = DEFAULT_SERVICES;

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

export default function WhatWeDoPage() {
  const { revealed } = usePageIntro();
  const [servicesList, setServicesList] = React.useState<ServiceItem[]>(DEFAULT_SERVICES);

  React.useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && Array.isArray(resData.data) && resData.data.length > 0) {
          setServicesList(resData.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
        <Navbar />

        <main
          className="px-4 md:px-[clamp(20px,2.6vw,52px)]"
          style={{
            paddingBottom: "clamp(56px, 7vw, 120px)",
          }}
        >
          {/* Signature Coral Orange Header */}
          <header
            className="-mx-4 flex min-h-[100svh] flex-col rounded-b-[24px] px-4 md:-mx-[clamp(20px,2.6vw,52px)] md:rounded-b-[40px] md:px-[clamp(20px,2.6vw,52px)]"
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
                  lines={["We’re a creative", "studio with deep", "expertise"]}
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

          {/* Signature Interactive Stacked Card Deck */}
          <div className="mt-14 lg:mt-20 -mx-4 md:-mx-[clamp(20px,2.6vw,52px)]">
            <ServicesDeck items={servicesList} />
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
