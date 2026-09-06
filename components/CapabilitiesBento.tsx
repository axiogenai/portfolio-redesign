"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import BlurLines from "./BlurLines";

const services = [
  {
    title: "AI / ML Solutions",
    description:
      "Custom models, pipelines, and intelligent automation built to solve complex computational problems.",
    tags: ["TensorFlow", "PyTorch", "Automation", "Pipelines"],
  },
  {
    title: "Web Development",
    description:
      "Modern full-stack applications with premium UX/UI and robust database routing configurations.",
    tags: ["Next.js", "React 19", "TypeScript", "Node.js"],
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform native iOS & Android applications engineered for speed and fluid animations.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, container orchestration, and continuous DevOps deployment pipelines.",
    tags: ["AWS", "GCP", "Docker", "DevOps"],
  },
  {
    title: "Database Design",
    description:
      "High-performance database architectures, query optimization, and secure data relation schemas.",
    tags: ["PostgreSQL", "Supabase", "Indexing", "Schemas"],
  },
  {
    title: "Voice Synthesis",
    description:
      "Real-time AI voice generation, speech-to-text integration, and interactive voice interfaces.",
    tags: ["Neural TTS", "Speech-to-Text", "Voice AI", "Whisper"],
  },
  {
    title: "Document Intelligence",
    description:
      "AI-driven document parsing, automated text extraction, and contextual knowledge insights.",
    tags: ["OCR", "Extraction", "Context RAG", "Embeddings"],
  },
  {
    title: "Deep Research",
    description:
      "Automated academic research, intelligent documentation, and domain knowledge synthesis.",
    tags: ["ArXiv Synthesis", "Documentation", "Literature Review", "Analysis"],
  },
  {
    title: "Meta & Google Ads",
    description:
      "Data-driven paid customer acquisition across Meta and Google Ads. Conversion tracking, pixel & CAPI, creative testing, and ROAS scaling.",
    tags: ["Meta Ads", "Google Ads", "Pixel & CAPI", "ROAS"],
  },
];

const solutionsFor = [
  {
    title: "Student Projects",
    description:
      "Final year, mini, academic & research projects with comprehensive documentation & step-by-step support.",
  },
  {
    title: "Real-World Industry",
    description:
      "Enterprise workflow integrations, startup MVPs, and customized business process automation systems.",
  },
  {
    title: "Startups & Founders",
    description:
      "Rapid interactive product development, scalable application architectures, and end-to-end launch support.",
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

export default function CapabilitiesBento() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="capabilities"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 text-white border-t border-white/8"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/10 mb-8">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300">
            Services We Provide
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-6">
          <BlurLines
            lines={["AI, WEB, MOBILE,", "CLOUD & INTELLIGENT SYSTEMS."]}
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
          className="max-w-3xl text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-8"
        >
          From research to deployment — we build powerful, intelligent digital products for enterprises, startups & students. You envision it, we engineer it.
        </motion.p>

        {/* Value Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          {badges.map((b) => (
            <div
              key={b}
              className="rounded-full border border-white/10 bg-neutral-900/90 px-4 py-1.5 text-xs font-semibold text-white/90 shadow-sm"
            >
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* 8 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between p-7 rounded-[26px] bg-neutral-950/70 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Spotlight hover effect */}
              <div
                className="pointer-events-none absolute -inset-px rounded-[26px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
                }}
              />

              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-white/6"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perfect Solutions For Section */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-8 text-center">
            Perfect Solutions For
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionsFor.map((sol, idx) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[24px] border border-white/10 bg-neutral-900/40 p-7 flex flex-col justify-start"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {sol.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {sol.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-16 rounded-[24px] border border-white/10 bg-neutral-900/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 shrink-0">
            Tech Stack :
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-neutral-300 bg-neutral-900 border border-white/8"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
