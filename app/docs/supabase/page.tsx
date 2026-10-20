"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";
import {
  Database,
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function SupabaseIntegrationDocsPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#08080a] text-white font-['Schibsted_Grotesk',sans-serif] selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar />

        <main
          className="px-4 md:px-[clamp(20px,2.6vw,52px)]"
          style={{
            paddingTop: "clamp(104px, 12vw, 168px)",
            paddingBottom: "clamp(56px, 7vw, 120px)",
          }}
        >
          <div className="mx-auto max-w-4xl space-y-16">
            <PageHeader
              eyebrow="Supabase Technology Partner"
              lines={["ClinicOS Integration", "& Technical Spec."]}
              support="Production architecture, data models, realtime WebSocket orchestration, and healthcare compliance powering ClinicOS on Supabase cloud infrastructure."
            />

            {/* Quick Metrics Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#0f0f12] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <h3 className="font-semibold text-xs tracking-wider uppercase">Realtime Radar</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Sub-60ms live cabin token propagation using Supabase Realtime WebSocket broadcasts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0f0f12] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Cpu className="w-4 h-4" />
                  <h3 className="font-semibold text-xs tracking-wider uppercase">Connection Pooler</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Resilient transaction pooling via Supavisor prevents exhaustion during peak morning OPD rushes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0f0f12] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Layers className="w-4 h-4" />
                  <h3 className="font-semibold text-xs tracking-wider uppercase">ACID Sequencing</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Database trigger automation guarantees gapless, zero-collision daily token issuance per facility.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0f0f12] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="font-semibold text-xs tracking-wider uppercase">Health Security</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  AES-256 at rest, TLS 1.3 in-flight, and Row Level Security multi-tenant boundaries.
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-14 text-sm sm:text-base leading-relaxed text-white/80">
              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-emerald-400" /> 1. Architecture Overview
                </h2>
                <p>
                  ClinicOS implements a dual-layer architectural model engineered to bridge client-side reactivity with the ACID guarantees of Supabase Managed PostgreSQL.
                </p>
                <div className="p-6 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-4 text-xs sm:text-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>
                        <strong className="text-white">Doctor EMR Workspace (Vite + React):</strong> Provides clinicians with instant case paper generation, diagnostic triage templates, and token calling.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>
                        <strong className="text-white">Public Patient Portal (Next.js):</strong> Patients monitor live OPD token movements, verify tamper-proof digital certificates, and access multi-lingual voice prescriptions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>
                        <strong className="text-white">Microservices Tier (Node.js Express):</strong> Communicates with Supabase using transactional connection pooling (Supavisor) for high-concurrency background notifications.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-emerald-400" /> 2. Core Relational Entities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-2">
                    <h3 className="font-semibold text-sm text-white">Facility & Practitioner Registry</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Manages multi-tenant clinic configurations, practitioner medical registration numbers, and operational consultation timings.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-2">
                    <h3 className="font-semibold text-sm text-white">Unified Patient Master Index</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Maintains comprehensive longitudinal patient visitation histories, demographics, contact channels, and localized village records.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-2">
                    <h3 className="font-semibold text-sm text-white">High-Velocity OPD Queue Engine</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Tracks real-time consultation lifecycle states (waiting, in-cabin, completed, rescheduled) with zero token collisions.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-2">
                    <h3 className="font-semibold text-sm text-white">Clinical Encounters & Prescriptions</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Stores structured clinical observations, diagnosis classifications, pharmaceutical regimens, and audio prescription links.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-emerald-400" /> 3. Realtime Queue Synchronization Flow
                </h2>
                <div className="p-6 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </span>
                    <p>
                      <strong className="text-white">Doctor Advances Queue:</strong> Clinician selects the next patient in ClinicOS EMR.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </span>
                    <p>
                      <strong className="text-white">PostgreSQL Transaction Commit:</strong> Supabase commits transaction with updated lifecycle timestamps.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      3
                    </span>
                    <p>
                      <strong className="text-white">WebSocket Broadcast:</strong> Supabase Realtime dispatches change event filtered by facility tenant.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      4
                    </span>
                    <p>
                      <strong className="text-white">Instant Radar Refresh:</strong> Patient mobile web apps and lobby monitors update token status in &lt;60ms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> 4. Security & Healthcare Compliance
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong className="text-white">Row Level Security (RLS):</strong> Multi-tenant isolation ensures patient records are accessible strictly to authorized clinical personnel.
                  </li>
                  <li>
                    <strong className="text-white">Cryptographic Verification:</strong> Medical certificates and prescriptions feature tamper-proof verification seals verifiable without exposing underlying EMR databases.
                  </li>
                  <li>
                    <strong className="text-white">Data Protection:</strong> Full TLS 1.3 encryption in transit with AES-256 storage volume encryption at rest.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 5. Production Telemetry & Verification
                </h2>
                <div className="p-6 rounded-2xl bg-[#0d0d10] border border-white/5 space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-white/60">Database Engine</span>
                      <span className="font-semibold text-emerald-400">Supabase Managed PostgreSQL</span>
                    </div>
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-white/60">Realtime Latency</span>
                      <span className="font-semibold text-emerald-400">&lt; 60ms Average</span>
                    </div>
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-white/60">Transaction Pooler</span>
                      <span className="font-semibold text-emerald-400">Active (Supavisor)</span>
                    </div>
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-white/60">Integration Stage</span>
                      <span className="font-semibold text-emerald-400">Production / Live</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs">
                    All outpatient queues, consultation sequences, and prescriptions are securely processed through Supabase across live clinical deployments.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
