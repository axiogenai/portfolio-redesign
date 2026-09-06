"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Brain, Shield, Cpu, Activity, Layers, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";
import rawProjects from "@/public/projects.json";

interface RawProject {
  id: string;
  name: string;
  category: string;
  year: string;
  desc: string;
  tech: string[];
  link: string | null;
  display_order: number;
}

const projectsData: RawProject[] = rawProjects as RawProject[];

const categoryFilters = [
  "All",
  "Artificial Intelligence",
  "Cybersecurity",
  "Healthcare & SaaS",
  "Developer Tools",
  "Enterprise & Cloud",
];

function mapToFilterCategory(cat: string): string {
  const lower = cat.toLowerCase();
  if (lower.includes("ai") || lower.includes("intelligence") || lower.includes("patent") || lower.includes("model")) {
    return "Artificial Intelligence";
  }
  if (lower.includes("cyber") || lower.includes("security") || lower.includes("firewall") || lower.includes("warden")) {
    return "Cybersecurity";
  }
  if (lower.includes("health") || lower.includes("clinic") || lower.includes("medical") || lower.includes("wellness")) {
    return "Healthcare & SaaS";
  }
  if (lower.includes("developer") || lower.includes("tool") || lower.includes("code") || lower.includes("web3") || lower.includes("forge")) {
    return "Developer Tools";
  }
  return "Enterprise & Cloud";
}

function getCategoryIcon(cat: string) {
  const filterGroup = mapToFilterCategory(cat);
  switch (filterGroup) {
    case "Artificial Intelligence":
      return <Brain className="h-3.5 w-3.5 text-amber-500" />;
    case "Cybersecurity":
      return <Shield className="h-3.5 w-3.5 text-red-500" />;
    case "Healthcare & SaaS":
      return <Activity className="h-3.5 w-3.5 text-emerald-500" />;
    case "Developer Tools":
      return <Cpu className="h-3.5 w-3.5 text-cyan-500" />;
    default:
      return <Layers className="h-3.5 w-3.5 text-indigo-500" />;
  }
}

export default function PortfolioGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        mapToFilterCategory(project.category) === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
            {/* Back to Work Link */}
            <div className="mb-6">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Featured Showcase</span>
              </Link>
            </div>

            {/* Header for Axiogen Gallery */}
            <PageHeader
              eyebrow="Gallery"
              lines={["Every project,", "in one place"]}
              support="Everything we have built, designed and deployed across AI models, cybersecurity systems, healthcare SaaS and scalable web apps."
            />

            {/* Search & Filter Controls */}
            <div className="mt-12 sm:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/70 pb-8">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count =
                    cat === "All"
                      ? projectsData.length
                      : projectsData.filter((p) => mapToFilterCategory(p.category) === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-foreground text-background shadow-md"
                          : "border border-border bg-card/50 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                          isActive ? "bg-background/20 text-background" : "bg-foreground/10 text-foreground/80"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword, tech..."
                  className="w-full rounded-full border border-border bg-card/60 pl-11 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#FF6B42] focus:outline-none focus:ring-2 focus:ring-[#FF6B42]/20 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, pIdx) => {
                const hasLink = Boolean(project.link);
                return (
                  <motion.div
                    key={project.id || pIdx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: (pIdx % 6) * 0.05 }}
                    className="group relative flex flex-col justify-between rounded-[30px] sm:rounded-[34px] border border-border bg-gradient-to-b from-foreground/[0.035] to-foreground/[0.008] hover:from-foreground/[0.065] hover:to-foreground/[0.015] p-7 sm:p-8 shadow-sm hover:shadow-2xl hover:border-[#FF6B42]/50 hover:-translate-y-1.5 transition-all duration-400"
                  >
                    <div>
                      {/* Top Category Badge & Year */}
                      <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                          {getCategoryIcon(project.category)}
                          <span>{project.category}</span>
                        </span>
                        <span className="font-mono text-xs font-bold text-muted-foreground/70">
                          {project.year}
                        </span>
                      </div>

                      {/* Title & Live Link */}
                      <div className="mt-4 flex items-start justify-between gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-[#FF6B42] transition-colors">
                          {project.name}
                        </h3>
                        {hasLink && (
                          <a
                            href={project.link!}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.name}`}
                            className="h-9 w-9 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-[#FF6B42] group-hover:border-[#FF6B42] group-hover:text-black transition-all"
                          >
                            <ArrowUpRight className="h-4 w-4 stroke-[2.25]" />
                          </a>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Stack Footer */}
                    <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border/60 bg-foreground/[0.04] px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {hasLink ? (
                        <a
                          href={project.link!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B42] hover:underline"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-muted-foreground/60 uppercase">
                          Engineered
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
