"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  published_at: string;
  read_time: number;
  meta_description: string;
}

const articles: Article[] = [
  {
    id: "1",
    slug: "why-brand-redesigns-fail",
    title: "Why 90% of brand redesigns fail in the first six months",
    category: "Branding",
    published_at: "2024-08-14",
    read_time: 4,
    meta_description: "An identity is only as durable as its execution after launch day. How to build design systems that marketing and engineering teams actually adopt rather than circumvent.",
  },
  {
    id: "2",
    slug: "optimizing-llm-inference-latency-edge",
    title: "Optimizing LLM inference latency and token throughput at the edge",
    category: "AI Architecture",
    published_at: "2024-07-22",
    read_time: 6,
    meta_description: "KV-cache pruning, speculative decoding, and quantization strategies that cut round-trip latency to sub-100ms on serverless GPU clusters.",
  },
  {
    id: "3",
    slug: "beyond-templates-bespoke-engineering",
    title: "Beyond templates: Why bespoke Next.js architectures scale while builders crumble",
    category: "Engineering",
    published_at: "2024-06-18",
    read_time: 5,
    meta_description: "When codebases are engineered with clean component boundaries and headless pipelines, page load stays instantaneous as your catalog and team scale.",
  },
  {
    id: "4",
    slug: "creative-testing-without-guesswork",
    title: "Creative testing without guesswork: Setting up honest attribution signals",
    category: "Strategy",
    published_at: "2024-05-30",
    read_time: 5,
    meta_description: "How to evaluate creative performance using business-level purchase intent rather than vanity platform metrics and click fraud.",
  },
  {
    id: "5",
    slug: "ai-force-multiplier-in-modern-studios",
    title: "AI as a force multiplier, not an identity replacement",
    category: "Engineering",
    published_at: "2024-04-12",
    read_time: 7,
    meta_description: "How modern multidisciplinary studios leverage generative models and automations to amplify human craft without compromising taste.",
  },
];

const formatDate = (d: string) => {
  return new Date(d).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category))).sort();
    return ["All", ...cats];
  }, []);

  const filteredArticles = useMemo(() => {
    return activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const [featured, ...rest] = filteredArticles;

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
            <PageHeader
              eyebrow="Insights"
              lines={["Notes on", "the craft"]}
              support="What we have learned building brands, digital platforms and AI systems — written down while it is still useful. No listicles."
            />

            {/* Category Filter Pills with Smooth Animated Indicator */}
            <div
              role="group"
              aria-label="Filter articles by category"
              className="my-12 flex flex-wrap items-center gap-2 lg:mb-20 lg:gap-2.5"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "All"
                    ? articles.length
                    : articles.filter((a) => a.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                    className={`relative flex h-11 items-center overflow-hidden rounded-full border px-5 transition-colors duration-300 sm:h-12 sm:px-6 ${
                      isActive
                        ? "border-foreground"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeInsightCategory"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-2 text-sm font-bold tracking-[-0.01em] transition-colors duration-300 ${
                        isActive ? "text-background" : "text-muted-foreground"
                      }`}
                    >
                      {cat}
                      <span
                        className={`text-[11px] font-semibold tabular-nums ${
                          isActive ? "text-background/55" : "text-muted-foreground/55"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Featured Hero Article */}
            {featured && (
              <motion.article
                key={featured.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-y border-border"
              >
                <Link
                  href="/contact"
                  className="group grid grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:gap-10 lg:py-14"
                >
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-7 items-center rounded-full bg-foreground px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-background">
                        Latest
                      </span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        <span>{featured.category}</span>
                        <span aria-hidden="true" className="text-muted-foreground/40">/</span>
                        <span className="tracking-[0.1em]">{formatDate(featured.published_at)}</span>
                        <span aria-hidden="true" className="text-muted-foreground/40">/</span>
                        <span className="inline-flex items-center gap-1.5 tracking-[0.1em]">
                          <Clock className="h-3 w-3" />
                          {featured.read_time} min
                        </span>
                      </div>
                    </div>

                    <h2
                      className="mt-5 text-foreground transition-colors duration-300 group-hover:text-muted-foreground"
                      style={{
                        fontSize: "clamp(1.85rem, 4.4vw, 4.5rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.045em",
                        fontWeight: 700,
                      }}
                    >
                      {featured.title}
                    </h2>
                  </div>

                  <div className="flex flex-col justify-end lg:col-span-5">
                    <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {featured.meta_description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground">
                      <span>Read the article</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Grid of Remaining Articles */}
            {rest.length > 0 && (
              <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((item, rIdx) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6% 0px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: rIdx * 0.08,
                    }}
                    className="flex flex-col justify-between group"
                  >
                    <Link href="/contact" className="block">
                      <div className="flex flex-wrap items-center gap-x-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-3">
                        <span>{item.category}</span>
                        <span aria-hidden="true" className="text-muted-foreground/40">/</span>
                        <span>{formatDate(item.published_at)}</span>
                        <span aria-hidden="true" className="text-muted-foreground/40">/</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.read_time}m
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {item.meta_description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-foreground group-hover:underline">
                        <span>Read note</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
