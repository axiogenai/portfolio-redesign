"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

const customEase = [0.16, 1, 0.3, 1] as const;

const FAQ_SECTIONS = [
  {
    category: "01 / Getting Started",
    items: [
      {
        q: "How do we initiate an engagement with Team Axiogen?",
        a: "Send us a message via email or the project intake form. Provide your objectives, known technical dependencies, target deployment window, and any existing architecture. A senior engineer reviews the brief and returns a concrete assessment within 48 hours.",
      },
      {
        q: "Do you take on projects of varying complexity?",
        a: "Yes, but we evaluate technical fit rigorously. We specialize in high-stakes projects where architectural performance, reliable uptime, and refined design systems matter. If an engagement is better served by an off-the-shelf platform, we will advise you directly.",
      },
      {
        q: "How do you coordinate with distributed international teams?",
        a: "We engineer for clients globally across North America, Europe, and Asia-Pacific. We run an async-first operating cadence supported by shared Git repos, weekly video syncs, and documented RFCs so time zone differences never become bottlenecks.",
      },
      {
        q: "What domains does the studio support?",
        a: "Our core engineering covers AI/ML solutions, full-stack web platforms, native mobile applications, cloud & DevOps infrastructure, voice synthesis, and document intelligence. See our Sectors documentation for detailed capabilities.",
      },
      {
        q: "Can we review verified client implementations?",
        a: "Yes. Our Work archive showcases active production builds, and our team is happy to review technical case studies and codebase architectures during our introductory session.",
      },
    ],
  },
  {
    category: "02 / Commercials & Scoping",
    items: [
      {
        q: "How are project commercials structured?",
        a: "We operate on fixed-scope, milestone-gated agreements. Following our initial discovery audit, we establish precise deliverables, architecture requirements, and guaranteed pricing. You never face hidden billable increments or surprise invoices.",
      },
      {
        q: "What is your baseline engagement commitment?",
        a: "Our focused architectural sprints typically begin at ₹40,000 / $600 USD for scoped microservices and scale based on infrastructure complexity, neural network training, or full-platform scope.",
      },
      {
        q: "How are billing milestones scheduled?",
        a: "Standard contracts are distributed across technical milestones — typically an initial architecture mobilization deposit, a midway staging demonstration gate, and a final sign-off tranche upon production handoff.",
      },
      {
        q: "How do scope evolutions get handled during development?",
        a: "If your product requirements shift during development, we provide an itemized change-request addendum specifying timeline and cost impacts. Work on new scope only proceeds after your written approval.",
      },
      {
        q: "Do you offer post-launch maintenance retainers?",
        a: "Yes. For teams requiring dedicated telemetry monitoring, continuous dependency updates, or ongoing feature iterations, we offer structured engineering retainers with guaranteed response SLAs.",
      },
    ],
  },
  {
    category: "03 / Timeline & Delivery",
    items: [
      {
        q: "What are typical production timeframes?",
        a: "A high-performance marketing platform or design system ships in 2–4 weeks. A full-stack web application or SaaS platform typically requires 6–12 weeks. Deep neural network integrations or multi-tenant platforms range from 8–16 weeks.",
      },
      {
        q: "How are technical blockers and dependencies resolved?",
        a: "We document all external API, credential, and design dependencies upfront in our architecture blueprint. If an external blocker arises, we notify your team immediately and re-sequence concurrent tasks to protect the delivery milestone.",
      },
      {
        q: "How is revision feedback incorporated?",
        a: "Every deliverable milestone includes an explicit review and iteration window. Feedback is gathered through Figma and GitHub issues, addressed systematically, and verified before advancing to the next gate.",
      },
      {
        q: "Can the studio deliver against strict commercial deadlines?",
        a: "Yes, provided the target window is technically viable. If an accelerated date requires phased feature releases or scope triage, we provide a structured release plan to hit your target date safely.",
      },
    ],
  },
  {
    category: "04 / Post-Launch & Ownership",
    items: [
      {
        q: "What support is provided immediately following deployment?",
        a: "All contracts include a dedicated post-launch telemetry and bug-watch window. We monitor server telemetry, error rates, and user flows to ensure zero operational regressions.",
      },
      {
        q: "Who retains ownership of the codebase and intellectual property?",
        a: "You retain 100% intellectual property ownership. Upon milestone settlement, all Git repositories, infrastructure accounts, API credentials, design files, and deployment pipelines transfer entirely to your organization.",
      },
      {
        q: "Do you provide architectural documentation and team training?",
        a: "Yes. We deliver a comprehensive engineering runbook covering local development setup, environment variables, deployment steps, and system schemas. For complex builds, we host an interactive code walkthrough for your internal team.",
      },
    ],
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-0 px-6 sm:px-8">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-foreground/80 transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 mt-0.5 h-7 w-7 rounded-full border border-border flex items-center justify-center transition-colors duration-200 ${
            isOpen ? "bg-foreground border-foreground" : "bg-foreground/[0.04]"
          }`}
        >
          <Plus
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "text-background rotate-45" : "text-foreground"
            }`}
            strokeWidth={2}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: customEase }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const [openStates, setOpenStates] = useState<Record<string, number | null>>({});

  const toggleItem = (category: string, index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

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
              eyebrow="FAQs"
              lines={["Questions", "and answers."]}
              support="Direct, transparent answers regarding engineering scopes, commercial structures, timeline milestones, and intellectual property ownership."
            />

            {/* FAQ Groups */}
            <div className="mt-16 lg:mt-24 space-y-12 lg:space-y-16">
              {FAQ_SECTIONS.map((sec) => (
                <section key={sec.category} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sticky top-28">
                      {sec.category}
                    </span>
                  </div>

                  <div className="lg:col-span-8 rounded-[32px] sm:rounded-[36px] border border-border bg-gradient-to-b from-foreground/[0.03] to-foreground/[0.008] shadow-sm overflow-hidden">
                    {sec.items.map((item, idx) => (
                      <FAQItem
                        key={item.q}
                        q={item.q}
                        a={item.a}
                        isOpen={openStates[sec.category] === idx}
                        onToggle={() => toggleItem(sec.category, idx)}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

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
                  Still have questions?
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Discuss your project requirements.
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  Direct answers from system architects with zero pressure and zero sales sequences.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Get in touch</span>
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
