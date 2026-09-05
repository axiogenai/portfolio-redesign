"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Server, Shield, Database, Layers, Terminal } from "lucide-react";
import BlurLines from "./BlurLines";

const capabilities = [
  {
    title: "AI & Neural Systems",
    description:
      "Bespoke neural network training, voice synthesis engines, LLM embeddings, and real-time computer vision classifiers engineered directly for production.",
    icon: Cpu,
    gradient: "from-[#FF6B42]/20 to-transparent",
    tags: ["PyTorch", "Voice AI", "LLM Pipelines", "FastAPI"],
  },
  {
    title: "Full-Stack Web Platforms",
    description:
      "Next-generation web applications built with Next.js App Router, React 19, and Tailwind CSS. Obsessively optimized for Core Web Vitals and zero cumulative layout shift.",
    icon: Globe,
    gradient: "from-[#9B8AFF]/20 to-transparent",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4"],
  },
  {
    title: "Active Threat Defense & SecOps",
    description:
      "Enterprise cybersecurity tooling, honeypot traps, entropy analysis, and runtime monitoring to neutralize ransomware and malicious session hijacking in real time.",
    icon: Shield,
    gradient: "from-[#4FD16B]/20 to-transparent",
    tags: ["Entropy Models", "Behavioral ML", "Watchdog Sandboxes"],
  },
  {
    title: "Cloud Microservices & Containers",
    description:
      "Containerized microservice meshes deployed on Oracle Cloud, AWS, and serverless edge runtimes with strict autoscaling and automated health reconciliation.",
    icon: Server,
    gradient: "from-[#5BB8E5]/20 to-transparent",
    tags: ["Docker", "OCI Compute", "Nginx Gateways", "Zero-Downtime"],
  },
  {
    title: "Vector DBs & Document Intelligence",
    description:
      "Automated extraction and semantic search across complex unstructured documents, patents, and medical records using dense vector embeddings.",
    icon: Database,
    gradient: "from-[#FFB43D]/20 to-transparent",
    tags: ["ChromaDB", "Vector Indexing", "RAG Pipelines", "OCR"],
  },
  {
    title: "Real-Time Systems & Distributed Data",
    description:
      "Event-driven architectures powered by WebSockets, PostgreSQL, Supabase, and Redis for sub-millisecond state synchronization across global clients.",
    icon: Layers,
    gradient: "from-[#DB2777]/20 to-transparent",
    tags: ["PostgreSQL", "Supabase", "WebSockets", "Redis"],
  },
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
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 mb-8">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9B8AFF]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            Capabilities & Services
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-8">
          <BlurLines
            lines={["PRECISION SERVICES,", "ENGINEERED FOR SCALE."]}
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
          We do not sell pre-packaged templates or bloated retainers. We evaluate the exact bottleneck
          in your technical pipeline and architect custom high-performance software to eliminate it.
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] bg-neutral-950/70 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Spotlight hover effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
                  }}
                />

                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/25 group-hover:scale-105 transition-all mb-6">
                    <Icon className="w-6 h-6 text-[#9B8AFF]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-[#9B8AFF] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
                    {cap.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/8">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-400 bg-neutral-900 border border-white/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
