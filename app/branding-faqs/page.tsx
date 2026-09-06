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

const BRANDING_SECTIONS = [
  {
    category: "01 / Brand Strategy",
    items: [
      {
        q: "What distinguishes a visual identity system from a logo mark?",
        a: "A logo is an isolated symbol. A brand identity system encompasses typography hierarchies, colour contrast mathematical matrices, layout grids, conversational voice, and strict design tokens that make a brand immediately identifiable even before the logo mark is displayed.",
      },
      {
        q: "Does the studio provide market positioning alongside visual design?",
        a: "Yes. Every visual identity sprint begins with competitor differentiation audits, audience perception mapping, and category conventions analysis. We establish the strategic foundation before entering Figma.",
      },
      {
        q: "How does the studio research category visual landscape?",
        a: "We conduct systematic audits across direct competitors and adjacent industry innovators. We identify saturated tropes, typographic cliches, and visual whitespace to construct an identity that stands out with authority.",
      },
      {
        q: "Can an existing brand be evolved without losing hard-won market equity?",
        a: "Yes. Brand evolutions require auditing legacy recognition assets — identifying which shapes, typographic elements, or proportions carry customer recall, and modernizing the surrounding architecture without alienating existing users.",
      },
      {
        q: "What is the typical timeframe for a comprehensive brand sprint?",
        a: "A complete strategic positioning and visual identity sprint typically executes in 3–6 weeks, structured into research, direction exploratory, system refinement, and asset production tranches.",
      },
    ],
  },
  {
    category: "02 / Visual Systems & Assets",
    items: [
      {
        q: "What deliverables are included in a studio identity package?",
        a: "Deliverables include primary, secondary, and sub-mark lockups, responsive SVG iconsets, light and dark mode colour palettes with strict WCAG AA contrast values, web and desktop typography pairings, social cover templates, and production CSS tokens.",
      },
      {
        q: "How many creative directions are explored during identity sprints?",
        a: "We develop 2–3 fully realized strategic directions rather than preliminary sketches. Each direction is tested against real UI layouts, mobile screens, and editorial formats so you evaluate genuine systemic execution.",
      },
      {
        q: "Are identity marks verified across extreme scales and contrast ratios?",
        a: "Yes. Every symbol is engineered for micro-legibility down to 16px favicons and high-contrast monochrome printing, ensuring clarity across low-fidelity physical media and high-density Retina displays.",
      },
      {
        q: "Are source files provided for print, digital, and vector environments?",
        a: "Yes. You receive clean, organized SVG, EPS, PDF, and high-resolution PNG exports. Colour specifications are provided in HEX, RGB, HSL, and CMYK formats alongside CSS variables.",
      },
      {
        q: "Can you build around established brand constraints?",
        a: "Yes. If your organization has established typographic licenses or legacy colours that must persist, we engineer the surrounding design system to elevate those constraints into modern digital environments.",
      },
    ],
  },
  {
    category: "03 / Systems & Guidelines",
    items: [
      {
        q: "What is contained within the brand specification runbook?",
        a: "Our brand guidelines detail clear space rules, prohibited misuse patterns, scale ratios, multi-tier typography pairings, editorial tone principles, and digital CSS variables for developer implementation.",
      },
      {
        q: "How do developers consume the identity system?",
        a: "We translate the brand guidelines directly into Tailwind config files, CSS custom properties, and Figma component libraries, ensuring frontend teams implement layouts with mathematical consistency.",
      },
      {
        q: "How are brand guidelines delivered and maintained?",
        a: "We deliver both an interactive digital documentation portal and high-resolution vector PDF manuals. Source Figma design libraries are published as shared team libraries for seamless version control.",
      },
    ],
  },
  {
    category: "04 / Brand Migration & Rollout",
    items: [
      {
        q: "How do you coordinate identity rollouts across active software?",
        a: "We create staged transition roadmaps. Core digital surfaces — marketing domains, web applications, and social assets — are aligned for synchronized release, minimizing disjointed user touchpoints.",
      },
      {
        q: "Can an identity refresh occur without service interruptions?",
        a: "Yes. Digital updates are deployed via atomic git commits and updated CSS tokens, allowing instant visual transitions without application downtime.",
      },
      {
        q: "What if we only require a visual refresh rather than a complete renaming?",
        a: "A visual refresh is our most common engagement. We preserve your existing naming equity while updating layout mechanics, typography systems, and interaction aesthetics to current engineering standards.",
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

export default function BrandingFAQsPage() {
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
              eyebrow="Branding FAQs"
              lines={["Brand systems,", "clarified."]}
              support="Architectural standards, design systems, visual identity engineering, and production asset deliverables answered plainly."
            />

            {/* Quick Cross-Link Pill */}
            <div className="mt-8">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs sm:text-sm text-muted-foreground hover:border-foreground/20 hover:text-foreground transition-all shadow-sm"
              >
                <span>Looking for technical or commercial answers?</span>
                <span className="font-bold text-foreground inline-flex items-center gap-1">
                  View Studio FAQs
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            {/* FAQ Groups */}
            <div className="mt-16 lg:mt-24 space-y-12 lg:space-y-16">
              {BRANDING_SECTIONS.map((sec) => (
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
                  Brand Architecture
                </span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Ready to construct your brand identity?
                </h3>
                <p className="mt-2 text-neutral-400 max-w-xl text-base">
                  Direct engagement with senior brand architects. Structured systems built for lasting recognition.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Initiate brand sprint</span>
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
