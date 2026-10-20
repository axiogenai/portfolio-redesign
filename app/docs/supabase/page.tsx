import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FileText,
  Database,
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function SupabaseDocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e4e4e7] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Docs Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-mono">
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Axiogen
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <span className="text-zinc-400">Docs</span>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <span className="text-emerald-400">Supabase Integration</span>
        </nav>

        {/* Normal Document Title & Metadata */}
        <header className="border-b border-zinc-800/80 pb-6 mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-mono">
              Technology Partner Spec
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] text-zinc-400 bg-zinc-900 border border-zinc-800 font-mono">
              v2.4 Production
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            ClinicOS × Supabase Integration Documentation
          </h1>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
            Technical architecture, relational data models, realtime WebSocket synchronization, and security specifications for ClinicOS backed by Supabase cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-1 font-mono">
            <span>Author: Team Axiogen</span>
            <span>•</span>
            <span>Platform: ClinicOS EMR</span>
            <span>•</span>
            <span>Engine: Supabase PostgreSQL & Realtime</span>
            <span>•</span>
            <span>Status: Verified Active</span>
          </div>
        </header>

        {/* Documentation Body (Clean Technical Layout) */}
        <article className="space-y-10 text-sm leading-relaxed text-zinc-300">
          {/* Section 1: Executive Overview */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 border-b border-zinc-800/60 pb-2">
              <FileText className="w-4 h-4 text-emerald-400" /> 1. Executive Summary
            </h2>
            <p className="text-zinc-300">
              <strong className="text-white">ClinicOS</strong> is an Electronic Medical Records (EMR) and Outpatient Department (OPD) queue management system built for medical practices, clinics, and multi-specialty centers. 
            </p>
            <p className="text-zinc-400">
              By integrating natively with <strong className="text-zinc-200">Supabase</strong>, ClinicOS leverages enterprise-grade PostgreSQL, Supabase Realtime (WebSockets), and Connection Pooling (Supavisor) to power sub-60ms live cabin token movements, zero-collision appointment sequencing, and tamper-proof prescription histories.
            </p>
          </section>

          {/* Section 2: Architecture */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 border-b border-zinc-800/60 pb-2">
              <Server className="w-4 h-4 text-emerald-400" /> 2. Architecture & Data Flow
            </h2>
            <p className="text-zinc-300">
              The integration operates across a dual-tier architecture connecting the clinical doctor workspace, public patient radar, and microservices through Supabase:
            </p>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="font-mono text-emerald-400 font-bold">01.</span>
                <div>
                  <strong className="text-white">Doctor EMR Workspace (Vite + React):</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Clinicians record diagnostic notes, generate digital case papers, and advance daily patient queues. State commits execute atomically to Supabase.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-emerald-400 font-bold">02.</span>
                <div>
                  <strong className="text-white">Public Patient Radar & Portal (Next.js):</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Patients monitor active cabin consultations live, inspect dynamic wait times, and reserve sequential appointments with zero polling delay.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-emerald-400 font-bold">03.</span>
                <div>
                  <strong className="text-white">Backend Microservices (Node.js Express):</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Communicates with Supabase via Transaction Connection Pooling (Supavisor on Port 6543) for automated WhatsApp reminders and cryptographic certificate validation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Core Domain Models */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 border-b border-zinc-800/60 pb-2">
              <Database className="w-4 h-4 text-emerald-400" /> 3. Data Entities & Relational Design
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Clinical entities are structured to maintain strict relational integrity across outpatient interactions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-zinc-900/50 border border-zinc-800 rounded-lg space-y-1">
                <h3 className="font-medium text-xs text-white">Facility & Practitioner Registry</h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Multi-tenant clinic metadata, doctor registration credentials, medical specializations, and operating hours.
                </p>
              </div>
              <div className="p-3.5 bg-zinc-900/50 border border-zinc-800 rounded-lg space-y-1">
                <h3 className="font-medium text-xs text-white">Patient Master Index</h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Unified patient identification, longitudinal visit histories, demographic records, and contact channels.
                </p>
              </div>
              <div className="p-3.5 bg-zinc-900/50 border border-zinc-800 rounded-lg space-y-1">
                <h3 className="font-medium text-xs text-white">OPD Live Queue Engine</h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Real-time token lifecycle registry tracking daily consultation states: waiting, in-cabin, completed, rescheduled.
                </p>
              </div>
              <div className="p-3.5 bg-zinc-900/50 border border-zinc-800 rounded-lg space-y-1">
                <h3 className="font-medium text-xs text-white">Clinical Encounters & Prescriptions</h3>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Structured diagnostic records, pharmaceutical regimens, multi-lingual audio prescriptions, and verification hashes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Realtime Protocol */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 border-b border-zinc-800/60 pb-2">
              <Zap className="w-4 h-4 text-emerald-400" /> 4. Realtime Queue Synchronization
            </h2>
            <p className="text-zinc-300">
              The live queue engine uses Supabase Realtime channel subscriptions to broadcast token state transitions with sub-60ms latency:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-zinc-300">
              <li>
                <strong className="text-white">Queue Advance:</strong> Clinician calls the next patient token inside ClinicOS EMR.
              </li>
              <li>
                <strong className="text-white">PostgreSQL Transaction:</strong> Supabase commits the status change and lifecycle timestamps atomically.
              </li>
              <li>
                <strong className="text-white">WebSocket Broadcast:</strong> Supabase Realtime dispatches the mutation event filtered by clinic tenant.
              </li>
              <li>
                <strong className="text-white">Lobby & Mobile Sync:</strong> Lobby radar displays and patient mobile web apps update immediately without polling.
              </li>
            </ol>
          </section>

          {/* Section 5: Security & Compliance */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 border-b border-zinc-800/60 pb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 5. Security & Healthcare Compliance
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <p>
                • <strong className="text-white">Row Level Security (RLS):</strong> Multi-tenant isolation guarantees patient records are accessible strictly to authorized clinic staff.
              </p>
              <p>
                • <strong className="text-white">Cryptographic Verification:</strong> Medical certificates and prescriptions feature tamper-proof verification seals verifiable without exposing underlying EMR databases.
              </p>
              <p>
                • <strong className="text-white">Encryption:</strong> Enforced TLS 1.3 in-flight and AES-256 storage volume encryption at rest on Supabase cloud.
              </p>
            </div>
          </section>

          {/* Section 6: Telemetry & Production Verification */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2 border-b border-zinc-800/60 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 6. Production Verification Status
            </h2>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4 font-mono text-xs space-y-2">
              <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-500">Database Engine</span>
                <span className="text-emerald-400 font-semibold">Supabase Managed PostgreSQL</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-500">Realtime Protocol</span>
                <span className="text-emerald-400 font-semibold">Supabase Realtime v2 (WebSockets)</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                <span className="text-zinc-500">Connection Pooler</span>
                <span className="text-emerald-400 font-semibold">Port 6543 (Supavisor)</span>
              </div>
              <div className="flex justify-between pb-0.5">
                <span className="text-zinc-500">Deployment Status</span>
                <span className="text-emerald-400 font-semibold">Active In Production</span>
              </div>
            </div>
          </section>
        </article>

        {/* Normal Docs Footer */}
        <footer className="border-t border-zinc-800/80 mt-14 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© 2026 Team Axiogen. ClinicOS Platform Documentation.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Axiogen Home
            </Link>
            <Link href="https://team.axiogen.in" className="hover:text-zinc-300 transition-colors">
              team.axiogen.in
            </Link>
          </div>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
