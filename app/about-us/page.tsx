"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  CheckCircle2, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Activity, 
  Workflow, 
  HeartPulse, 
  Mic, 
  Bot, 
  Code2, 
  Server, 
  Database, 
  Smartphone,
  ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

const customEase = [0.16, 1, 0.3, 1] as const;

// Studio Statistics
const studioStats = [
  { label: "Projects Shipped", value: "50+", detail: "Across AI, web, mobile & cloud" },
  { label: "Custom Architecture", value: "100%", detail: "Zero boilerplate or templates" },
  { label: "Production SLA", value: "99.9%", detail: "Monitored distributed uptime" },
  { label: "Engineering Hubs", value: "02", detail: "Kolhapur & Sangli, Maharashtra" },
];

// Core Ecosystem Products from team.axiogen.in
const ecosystemProducts = [
  {
    icon: HeartPulse,
    tag: "Healthcare SaaS",
    name: "Axiogen ClinicOS",
    badge: "Medical EHR Suite",
    desc: "Next-generation clinic operating system engineered for doctors and healthcare centers. Features real-time live token queue displays, digital e-prescriptions, multi-specialty patient EHR history, and automated WhatsApp appointment reminders.",
    capabilities: [
      "Real-time token queue TV displays",
      "Digital prescription writing & PDF export",
      "Encrypted patient medical records",
      "WhatsApp automated notifications",
    ],
  },
  {
    icon: Mic,
    tag: "Autonomous AI",
    name: "Axiogen Voice Engine v2",
    badge: "Neural Conversational AI",
    desc: "Low-latency autonomous voice agents powered by fine-tuned neural TTS, real-time speech-to-text, and conversational LLM pipelines. Capable of handling high-volume outbound lead qualification and instant inbound inquiries.",
    capabilities: [
      "Sub-800ms conversational response latency",
      "Neural voice synthesis & human inflection",
      "Dynamic CRM synchronization & webhook dispatch",
      "Multi-lingual speech recognition",
    ],
  },
  {
    icon: Code2,
    tag: "Web Engineering",
    name: "Cinematic Web Systems",
    badge: "Next.js 15 & WebGL",
    desc: "Sub-second, interactive digital flagship platforms built with Next.js App Router, React 19, TypeScript, and fluid Three.js / WebGL interactions. Engineered for 100/100 Core Web Vitals and organic technical search dominance.",
    capabilities: [
      "Sub-second page transitions & instant FCP",
      "GPU-accelerated micro-animations",
      "Strict end-to-end TypeScript architecture",
      "Automated edge caching & CDN delivery",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "Cloud Security",
    name: "Axiogen Vault & Dynamic WAF",
    badge: "Zero-Exposure Storage",
    desc: "Cryptographic digital asset delivery and dynamic application firewall proxies. Integrated with MinIO S3 object storage with time-decay presigned URLs, cryptographic file delivery, and real-time malicious traffic scrubbing.",
    capabilities: [
      "Time-decay cryptographic presigned URLs",
      "Zero-exposure private storage architecture",
      "Dynamic WAF rate-limiting & IP reputation",
      "Automated automated threat telemetry",
    ],
  },
];

// Interactive Technical Stack Tabs
type StackCategory = "ai" | "web" | "cloud" | "mobile";

const stackData: Record<
  StackCategory,
  { name: string; tag: string; description: string }[]
> = {
  ai: [
    { name: "PyTorch & TensorFlow", tag: "Frameworks", description: "Deep learning model training, architecture customization & edge inference." },
    { name: "Autonomous LLM Agents", tag: "Cognitive", description: "Function-calling tool-use agents with persistent vector memory & RAG." },
    { name: "Whisper & Neural TTS", tag: "Speech & Audio", description: "Low-latency real-time voice transcription and expressive voice synthesis." },
    { name: "Vector Databases", tag: "Embeddings", description: "pgvector, Pinecone & Qdrant for semantic search & contextual retrieval." },
  ],
  web: [
    { name: "Next.js 15 App Router", tag: "Framework", description: "Server components, streaming SSR, and edge compute runtime optimization." },
    { name: "React 19 & TypeScript", tag: "Core UI", description: "Typed component architectures, hooks, and clean state primitives." },
    { name: "Tailwind CSS & Motion", tag: "Styling", description: "Design-token design systems, responsive layouts & 60fps animations." },
    { name: "Three.js & WebGL", tag: "3D & Canvas", description: "Cinematic interactive spatial graphics, shaders, and geometry rendering." },
  ],
  cloud: [
    { name: "Docker & Kubernetes", tag: "Containers", description: "Containerized microservice meshes with automated horizontal pod autoscaling." },
    { name: "AWS & Google Cloud", tag: "Cloud Infra", description: "Elastic compute, multi-region failover, serverless lambdas & VPC networks." },
    { name: "PostgreSQL & Redis", tag: "Databases", description: "ACID transactional databases, connection pooling & distributed caching." },
    { name: "CI/CD & Observability", tag: "DevOps", description: "Automated GitHub Actions pipelines, telemetry logging & uptime alerting." },
  ],
  mobile: [
    { name: "Flutter & Dart", tag: "Cross-Platform", description: "Unified iOS & Android builds with 60fps Skia engine rendering." },
    { name: "React Native", tag: "Native Hybrid", description: "Platform-native bridge integration with fluid gesture mechanics." },
    { name: "Hardware Integration", tag: "Sensors", description: "Biometric auth, BLE peripherals, camera feeds & background GPS." },
    { name: "Offline Sync Engines", tag: "State", description: "Local SQLite/WatermelonDB persistence with background server sync." },
  ],
};

// Studio Story Chapters
const storyChapters = [
  {
    num: "01",
    label: "Genesis & Thesis",
    title: "The Problem With Traditional Agencies",
    body: "Most traditional digital agencies operate on a broken assembly-line model: senior directors pitch the proposal, then immediately delegate implementation to junior sub-contractors. Code quality degrades, technical debt compounds, and accountability evaporates into layers of middle management. We founded Team Axiogen to prove a radically different thesis: that an elite, focused engineering duo with complete algorithmic and systems mastery can ship faster, build cleaner, and scale higher than agency teams ten times their size.",
  },
  {
    num: "02",
    label: "Engineering DNA",
    title: "Built From First Principles in Maharashtra",
    body: "Operating from the technological corridors of Kolhapur and Sangli with deployments worldwide, Team Axiogen didn't start with marketing gimmicks. We began in the terminal — optimizing neural models, building real-time WebSocket queues, and engineering ClinicOS from scratch to survive the chaotic real-world demands of busy medical clinics. Every line of code is written with obsessive craftsmanship and tested under heavy production load.",
  },
  {
    num: "03",
    label: "Operating Philosophy",
    title: "Zero Middlemen. Direct Craftsperson Communication.",
    body: "When you partner with Team Axiogen, you speak directly with the architects who design your database schemas, train your AI pipelines, and craft your user interfaces. No account managers playing telephone, no fabricated billing hours, and no surprises. Just direct, transparent engineering execution from concept to live production deployment.",
  },
];

// Timeline Milestones
const studioTimeline = [
  {
    year: "2024",
    title: "Studio Genesis & ClinicOS",
    detail: "Founded by Aditya Patil & Aditya Minchekar in Maharashtra. Successfully architected and deployed Axiogen ClinicOS healthcare platform alongside bespoke high-performance web systems for enterprise clients.",
  },
  {
    year: "2025",
    title: "Autonomous Voice & AI Scaling",
    detail: "Engineered Axiogen Voice Engine v2 with sub-second neural conversational calling. Expanded deep-tech capabilities into RAG vector pipelines, dynamic WAF proxies, and automated cloud infrastructure.",
  },
  {
    year: "2026",
    title: "Global Reach & Full-Spectrum Delivery",
    detail: "Delivering production platforms worldwide across FinTech, HealthTech, EdTech, and SaaS. Operating as an independent, self-funded deep-tech powerhouse proving that small, disciplined teams build the best software.",
  },
];

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<StackCategory>("ai");
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculate = () => {
      setScrollDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80));
    };

    calculate();
    const observer = new ResizeObserver(calculate);
    observer.observe(track);
    window.addEventListener("resize", calculate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculate);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
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
              eyebrow="About Team Axiogen"
              lines={["Two engineers,", "one relentless standard.", "Zero agency bloat."]}
              support="Founded by Aditya Patil & Aditya Minchekar, Team Axiogen is an independent AI Automation & Systems Engineering Studio in India. We architect autonomous AI models, ClinicOS healthcare suites, and high-performance digital platforms with direct founder-led engineering."
            />

            {/* Dual Studio Visuals Grid */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5 lg:gap-6 mt-8 lg:mt-12">
              <motion.div
                className="sm:col-span-7"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: customEase }}
              >
                <div className="aspect-[16/11] overflow-hidden rounded-[24px] bg-muted md:rounded-[36px] shadow-xl relative border border-border">
                  <Image
                    src="/creative-office.webp"
                    alt="The Axiogen studio workspace"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                className="sm:col-span-5"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: customEase, delay: 0.08 }}
              >
                <div className="aspect-[16/11] overflow-hidden rounded-[24px] bg-muted md:rounded-[36px] shadow-xl relative border border-border">
                  <Image
                    src="/team-collab.webp"
                    alt="Engineering review and architecture session"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </section>

            {/* Studio Metrics & Details */}
            <section className="mt-14 border-t border-border pt-10 lg:mt-20 lg:pt-12" aria-label="Studio details">
              <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {studioStats.map((stat, idx) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.06, ease: customEase }}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                      {stat.value}
                    </dd>
                    <p className="mt-1.5 text-xs text-muted-foreground">{stat.detail}</p>
                  </motion.div>
                ))}
              </dl>
            </section>

            {/* ========================================================================= */}
            {/* CHAPTER 1: THE STORYTELLING NARRATIVE */}
            {/* ========================================================================= */}
            <section className="mt-24 lg:mt-36">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                The Story Behind Team Axiogen
              </div>
              <h2
                className="text-foreground font-bold tracking-tight leading-[1.05] mb-12"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Engineering built on first principles, not agency overhead.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {storyChapters.map((ch, idx) => (
                  <motion.div
                    key={ch.num}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.65, delay: idx * 0.09, ease: customEase }}
                    className="rounded-[30px] border border-border bg-foreground/[0.02] p-8 sm:p-10 flex flex-col justify-between hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-300 shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                        <span className="font-mono text-sm font-bold text-muted-foreground">
                          CHAPTER {ch.num}
                        </span>
                        <span className="rounded-full bg-foreground/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                          {ch.label}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4 leading-snug">
                        {ch.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                        {ch.body}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B42]" />
                      <span>Direct Craftsperson Standard</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* CHAPTER 2: THE FOUNDERS & LEADERSHIP (EXACT SCREENSHOT MATCH)             */}
            {/* ========================================================================= */}
            <section className="mt-28 lg:mt-40 relative overflow-hidden rounded-[32px] md:rounded-[44px] border border-border">
              {/* Earth Atmospheric Background Backdrop (nightmode.webp) */}
              <div 
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen pointer-events-none"
                style={{ backgroundImage: "url('/BG/nightmode.webp')" }}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#07070c]/90 via-[#07070c]/70 to-[#07070c]/95 pointer-events-none" />

              <div className="px-5 py-14 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16 text-white">
                {/* Header Badge & Title */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: customEase }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl text-white/80 text-[11px] font-medium uppercase tracking-[0.25em] shadow-lg mb-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B42] animate-pulse" />
                    <span>The Minds Behind Axiogen</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08, ease: customEase }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.14em] uppercase text-white leading-tight mb-4"
                    style={{ fontFamily: "'Rostex', sans-serif" }}
                  >
                    MEET OUR FOUNDERS
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, ease: customEase }}
                    className="text-sm sm:text-base text-white/70 font-light max-w-xl leading-relaxed"
                  >
                    Software engineers & systems architects engineering autonomous AI models, high-performance web architectures, and enterprise cloud infrastructure.
                  </motion.p>
                </div>

                {/* The 2 Founder Cards Matching media_1788710630466.png */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                  {/* Founder 1: ADITYA PATIL */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: customEase }}
                    className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/[0.1] hover:border-white/[0.22] bg-gradient-to-b from-[#12121c]/95 via-[#0a0a10]/98 to-[#06060a]/98 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute -top-24 -right-24 w-52 h-52 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.07] transition-colors" />

                    <div>
                      {/* Location Header */}
                      <div className="flex items-center justify-end pb-3 border-b border-white/[0.08]">
                        <span className="text-[10px] sm:text-[11px] text-white/40 font-mono tracking-widest uppercase">
                          KOLHAPUR, IN
                        </span>
                      </div>

                      {/* Name & Title */}
                      <div className="mt-4 sm:mt-5 mb-3">
                        <h3
                          className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.08em] uppercase text-white leading-tight"
                          style={{ fontFamily: "'Rostex', sans-serif" }}
                        >
                          ADITYA PATIL
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 font-light tracking-wide mt-1">
                          Founder &amp; Principal Systems Architect
                        </p>
                      </div>

                      {/* Philosophy Quote */}
                      <div className="my-4 sm:my-5 pl-3.5 border-l-2 border-white/20 py-0.5">
                        <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed italic">
                          &ldquo;We engineer complete end-to-end software — from autonomous AI models and automation to web architectures, SaaS platforms, and bespoke systems built to scale.&rdquo;
                        </p>
                      </div>

                      {/* Discipline & Specialization */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-white/40 font-mono block text-[9px] uppercase tracking-wider mb-1">
                            Core Discipline
                          </span>
                          <span className="text-white/95 font-medium text-xs leading-snug">
                            Autonomous AI &amp; Web Platforms
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-white/40 font-mono block text-[9px] uppercase tracking-wider mb-1">
                            Core Specialization
                          </span>
                          <span className="text-white/95 font-medium text-xs leading-snug">
                            Full-Stack AI &amp; Product Architecture
                          </span>
                        </div>
                      </div>

                      {/* Deep Dossier details */}
                      <p className="text-xs text-white/55 font-light leading-relaxed mt-4 pt-3 border-t border-white/[0.06]">
                        Leads full-stack engineering, neural voice synthesis pipelines, ClinicOS medical platform, and bespoke product systems from the Kolhapur engineering hub.
                      </p>
                    </div>

                    {/* Actions Footer */}
                    <div className="pt-5 border-t border-white/[0.08] mt-6 flex items-center justify-between gap-3">
                      <a
                        href="https://github.com/axiogenai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.25] text-white/80 hover:text-white rounded-xl flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all"
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current opacity-80"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        <span>GitHub</span>
                      </a>

                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-white text-black hover:bg-neutral-200 rounded-xl flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-[0.14em] transition-all shadow-md"
                      >
                        <Mail className="w-3 h-3 text-black" />
                        <span>Contact Directly →</span>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Founder 2: ADITYA MINCHEKAR */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
                    className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/[0.1] hover:border-white/[0.22] bg-gradient-to-b from-[#12121c]/95 via-[#0a0a10]/98 to-[#06060a]/98 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute -top-24 -right-24 w-52 h-52 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.07] transition-colors" />

                    <div>
                      {/* Location Header */}
                      <div className="flex items-center justify-end pb-3 border-b border-white/[0.08]">
                        <span className="text-[10px] sm:text-[11px] text-white/40 font-mono tracking-widest uppercase">
                          SANGLI, IN
                        </span>
                      </div>

                      {/* Name & Title */}
                      <div className="mt-4 sm:mt-5 mb-3">
                        <h3
                          className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.08em] uppercase text-white leading-tight"
                          style={{ fontFamily: "'Rostex', sans-serif" }}
                        >
                          ADITYA MINCHEKAR
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 font-light tracking-wide mt-1">
                          Co-Founder &amp; Technology Lead
                        </p>
                      </div>

                      {/* Philosophy Quote */}
                      <div className="my-4 sm:my-5 pl-3.5 border-l-2 border-white/20 py-0.5">
                        <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed italic">
                          &ldquo;Resilient engineering demands rock-solid backends, secure multi-tenant cloud infrastructure, and distributed pipelines that run continuously without fail.&rdquo;
                        </p>
                      </div>

                      {/* Discipline & Specialization */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-white/40 font-mono block text-[9px] uppercase tracking-wider mb-1">
                            Core Discipline
                          </span>
                          <span className="text-white/95 font-medium text-xs leading-snug">
                            Cloud Architecture &amp; Scale
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-white/40 font-mono block text-[9px] uppercase tracking-wider mb-1">
                            Core Specialization
                          </span>
                          <span className="text-white/95 font-medium text-xs leading-snug">
                            Distributed Multi-Tenant Systems
                          </span>
                        </div>
                      </div>

                      {/* Deep Dossier details */}
                      <p className="text-xs text-white/55 font-light leading-relaxed mt-4 pt-3 border-t border-white/[0.06]">
                        Directs cloud infrastructure, distributed backends, database scaling (PostgreSQL &amp; real-time queues), Docker/Kubernetes container orchestration, and DevOps from Sangli.
                      </p>
                    </div>

                    {/* Actions Footer */}
                    <div className="pt-5 border-t border-white/[0.08] mt-6 flex items-center justify-between gap-3">
                      <a
                        href="https://github.com/axiogenai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.25] text-white/80 hover:text-white rounded-xl flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all"
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current opacity-80"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        <span>GitHub</span>
                      </a>

                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-white text-black hover:bg-neutral-200 rounded-xl flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-[0.14em] transition-all shadow-md"
                      >
                        <Mail className="w-3 h-3 text-black" />
                        <span>Contact Directly →</span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* CHAPTER 3: PROPRIETARY ECOSYSTEM (EVERYTHING ABOUT TEAM.AXIOGEN.IN)       */}
            {/* ========================================================================= */}
            <section className="mt-28 lg:mt-40">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Proprietary Flagship Systems
              </div>
              <h2
                className="text-foreground font-bold tracking-tight leading-[1.05] mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Production platforms engineered in-house at Axiogen.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-12">
                We don’t just write client code — we engineer and operate production SaaS platforms, medical healthcare suites, and autonomous AI infrastructure.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {ecosystemProducts.map((prod, idx) => {
                  const Icon = prod.icon;
                  return (
                    <motion.div
                      key={prod.name}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.65, delay: idx * 0.08, ease: customEase }}
                      className="group rounded-[32px] border border-border bg-foreground/[0.02] p-8 sm:p-10 flex flex-col justify-between hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-300 shadow-sm"
                    >
                      <div>
                        {/* Header Row */}
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-foreground/[0.06] border border-border flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-foreground/75" strokeWidth={1.75} />
                            </div>
                            <div>
                              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground block">
                                {prod.tag}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                                {prod.name}
                              </h3>
                            </div>
                          </div>
                          <span className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground shrink-0 shadow-sm">
                            {prod.badge}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-6">
                          {prod.desc}
                        </p>

                        {/* Key Capabilities */}
                        <div className="pt-5 border-t border-border">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block mb-3">
                            Architectural Capabilities
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {prod.capabilities.map((cap) => (
                              <div key={cap} className="flex items-center gap-2 text-xs text-foreground/85">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B42] shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                        <span>Axiogen Engineered</span>
                        <span>Production Verified</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* CHAPTER 4: TECHNICAL STACK & CORE COMPETENCIES MATRIX                     */}
            {/* ========================================================================= */}
            <section className="mt-28 lg:mt-40">
              <div className="rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.01] p-8 sm:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      Core Engineering Competencies
                    </div>
                    <h2
                      className="text-foreground font-bold tracking-tight leading-[1.05]"
                      style={{
                        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Production technologies we build with daily.
                    </h2>
                  </div>

                  {/* Category Pill Switcher */}
                  <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-foreground/[0.05] border border-border w-fit shrink-0">
                    {(
                      [
                        { key: "ai", label: "AI & Neural" },
                        { key: "web", label: "Full-Stack Web" },
                        { key: "cloud", label: "Cloud & Systems" },
                        { key: "mobile", label: "Native Mobile" },
                      ] as const
                    ).map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setActiveTab(t.key)}
                        className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                          activeTab === t.key
                            ? "bg-foreground text-background shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: customEase }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
                  >
                    {stackData[activeTab].map((item) => (
                      <div
                        key={item.name}
                        className="rounded-[24px] border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:border-foreground/30 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                              {item.tag}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B42]" />
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">
                            {item.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>
          </div>

          {/* ========================================================================= */}
          {/* CHAPTER 5: HORIZONTAL PINNED TIMELINE (2024 — 2026)                       */}
          {/* ========================================================================= */}
          <section
            ref={containerRef}
            aria-labelledby="timeline-heading"
            className="relative mt-28 lg:mt-40"
            style={{ height: `calc(100svh + ${scrollDistance}px)` }}
          >
            <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
              <div className="px-4 md:px-[clamp(20px,2.6vw,52px)] mb-8">
                <p
                  id="timeline-heading"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Studio Milestones (2024 — 2026)
                </p>
                <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  How our multidisciplinary model was forged
                </h3>
              </div>

              {/* Horizontal Moving Cards Track */}
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex gap-6 pl-4 md:pl-[clamp(20px,2.6vw,52px)] pr-12 w-fit"
              >
                {studioTimeline.map((item) => (
                  <div
                    key={item.year}
                    className="w-[320px] sm:w-[420px] shrink-0 rounded-[28px] border border-border bg-foreground/[0.03] p-8 sm:p-10 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs uppercase tracking-[0.16em]">
                        <span className="text-3xl font-black text-foreground">{item.year}</span>
                        <span className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] font-bold text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>Team Axiogen Studio</span>
                      <span>Phase {item.year}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <div className="mx-auto max-w-[1920px]">
            {/* ========================================================================= */}
            {/* CHAPTER 6: ENTITY DISAMBIGUATION & AUTHORITY STATEMENT                   */}
            {/* ========================================================================= */}
            <section className="mt-20 lg:mt-28 rounded-[28px] border border-dashed border-border bg-foreground/[0.02] p-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                    Official Entity Authority &amp; Disambiguation
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    Team Axiogen (team.axiogen.in &amp; axiogen.in)
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
                    Team Axiogen is an Indian AI Automation &amp; Systems Engineering Studio founded by Aditya Patil &amp; Aditya Minchekar, headquartered in Maharashtra, India. We architect autonomous AI voice agents, ClinicOS medical platform, and bespoke full-stack applications. Axiogen has zero affiliation with biotechnology, pharmaceuticals, or cosmetics companies that share the name.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="https://team.axiogen.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    <span>team.axiogen.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Bottom Dark CTA */}
            <div className="mt-20 rounded-[32px] bg-[#141414] text-white p-8 sm:p-14 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF6B42]">
                  Direct Engineering Engagement
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Work directly with Aditya &amp; Aditya.
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  No middlemen, no account managers. Every project is scoped transparently and engineered directly by the studio founders.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-neutral-200 transition-colors"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
