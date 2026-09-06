"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowUpRight,
  Globe,
  LayoutGrid,
  Play,
  Pause,
  Search,
  Brain,
  Shield,
  Cpu,
  Activity,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import NotchedCard from "@/components/NotchedCard";
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

// 9 Flagship Showcase Projects matching WhyCreatives reference design
const showcaseProjects = [
  {
    id: "breadberry",
    name: "Breadberry",
    category: "Website",
    year: "2026",
    desc: "A focused three-page B2B site built to win restaurant and hotel accounts.",
    image: "/portfolio/breadberry.webp",
    link: "https://breadberry.co.in/",
  },
  {
    id: "kyoprep",
    name: "Kyoprep",
    category: "Web Design",
    year: "2026",
    desc: "An Edtech website crafted for modern learning and seamless onboarding.",
    image: "/portfolio/kyoprep.webp",
    link: "https://kyoprep.in/",
  },
  {
    id: "zraaya",
    name: "Zraya",
    category: "Website",
    year: "2026",
    desc: "A calm, premium showcase for an architecture and construction studio.",
    image: "/portfolio/zraya.webp",
    link: "https://zraaya.in/",
  },
  {
    id: "clorefy",
    name: "Clorefy",
    category: "Website",
    year: "2026",
    desc: "Product site for an AI platform that drafts business documents in seconds.",
    image: "/portfolio/clorefy.webp",
    link: "https://clorefy.com/",
  },
  {
    id: "addmenu",
    name: "Addmenu",
    category: "Website",
    year: "2026",
    desc: "A QR menu platform made simple for hotels and restaurants to run.",
    image: "/portfolio/addmenu.webp",
    link: "https://addmenu.in/",
  },
  {
    id: "id3cor",
    name: "iD3cor",
    category: "Website",
    year: "2026",
    desc: "An interior design portfolio with a short path from idea to consultation.",
    image: "/portfolio/id3cor.webp",
    link: "https://id3cor.com/",
  },
  {
    id: "rahaman",
    name: "Rahaman Construction",
    category: "Website",
    year: "2026",
    desc: "A construction and interiors site built on clarity, proof and trust.",
    image: "/portfolio/rahaman.webp",
    link: "https://rahamanconstruction.in/",
  },
  {
    id: "dhristi",
    name: "Dhristi services",
    category: "Website",
    year: "2026",
    desc: "A contracting platform spanning civil, electrical and telecom projects.",
    image: "/portfolio/dhristi.webp",
    link: "https://dhristi.co.in/",
  },
  {
    id: "pink-brasserie",
    name: "The Pink Brasserie",
    category: "Website",
    year: "2026",
    desc: "An immersive restaurant site covering menu, story and reservations.",
    image: "/portfolio/pink-brasserie.webp",
    link: "https://www.thepinkbrasserie.com/",
  },
];

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
  if (
    lower.includes("ai") ||
    lower.includes("intelligence") ||
    lower.includes("patent") ||
    lower.includes("model")
  ) {
    return "Artificial Intelligence";
  }
  if (
    lower.includes("cyber") ||
    lower.includes("security") ||
    lower.includes("firewall") ||
    lower.includes("warden")
  ) {
    return "Cybersecurity";
  }
  if (
    lower.includes("health") ||
    lower.includes("clinic") ||
    lower.includes("medical") ||
    lower.includes("wellness")
  ) {
    return "Healthcare & SaaS";
  }
  if (
    lower.includes("developer") ||
    lower.includes("tool") ||
    lower.includes("code") ||
    lower.includes("web3") ||
    lower.includes("forge")
  ) {
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

export default function OurWorkPage() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setProgress(0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay progress bar animation timer
  useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const interval = 40; // 100 steps -> 4000ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, selectedIndex]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setProgress(0);
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const auto = autoplay.current;
    if (!auto) return;
    if (isPlaying) {
      auto.stop();
      setIsPlaying(false);
    } else {
      auto.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  // Filtered full project archive
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
            {/* Header: "Take a look at our projects" */}
            <header className="mb-12 lg:mb-20">
              <div className="mb-4 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                Our Work
              </div>
              <h1>
                <span
                  className="block text-foreground"
                  style={{
                    fontSize: "clamp(2.25rem, 8vw, 8.5rem)",
                    lineHeight: 0.94,
                    letterSpacing: "-0.05em",
                    fontWeight: 700,
                  }}
                >
                  <span
                    className="block overflow-hidden"
                    style={{ paddingBottom: "0.16em", marginBottom: "-0.16em" }}
                  >
                    <span className="block">
                      <span className="flex items-start gap-3 sm:gap-5">
                        <span
                          className="hidden shrink-0 sm:block"
                          style={{ marginTop: "0.42em", lineHeight: 0 }}
                        >
                          <span className="flex items-center gap-2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:text-xs">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                            Our Work
                          </span>
                        </span>
                        <span>Take a look at</span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="block overflow-hidden"
                    style={{ paddingBottom: "0.16em", marginBottom: 0 }}
                  >
                    <span className="block">our projects</span>
                  </span>
                </span>
              </h1>
              <div className="mt-8 grid grid-cols-1 lg:mt-14 lg:grid-cols-12">
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-[46ch] text-lg font-medium leading-[1.45] tracking-[-0.02em] text-foreground sm:text-xl md:text-2xl">
                    Brand identities, websites, apps and video — built by one team and shipped for real businesses.
                  </p>
                </div>
              </div>
            </header>

            {/* Horizontal Project Showcase Carousel */}
            <div className="relative mt-8 sm:mt-12 lg:mt-16 select-none">
              <div className="mx-auto w-full max-w-[1680px]">
                {/* Embla Viewport */}
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex touch-pan-y touch-pinch-zoom">
                    {showcaseProjects.map((item, idx) => {
                      const isActive = idx === selectedIndex;
                      return (
                        <div
                          key={item.id}
                          className="flex-[0_0_88%] sm:flex-[0_0_88%] xl:flex-[0_0_82%] px-2 sm:px-3 lg:px-4 shrink-0 transform-gpu transition-all duration-700"
                          style={{
                            opacity: isActive ? 1 : 0.45,
                            transform: isActive ? "scale(1)" : "scale(0.92)",
                          }}
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                            onClick={(e) => {
                              if (!isActive) {
                                e.preventDefault();
                                scrollTo(idx);
                              }
                            }}
                          >
                            {/* Notched Card with dynamic corner cutouts */}
                            <NotchedCard
                              className="aspect-[16/10] transition-transform duration-500 will-change-transform group-hover:-translate-y-2 motion-reduce:transform-none"
                              radiusClassName="rounded-[20px] md:rounded-[34px]"
                              surfaceClassName="bg-secondary"
                              tags={
                                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background shadow-md">
                                  {item.category === "Web Design" ? (
                                    <LayoutGrid className="w-3.5 h-3.5" />
                                  ) : (
                                    <Globe className="w-3.5 h-3.5" />
                                  )}
                                  <span>{item.category}</span>
                                </span>
                              }
                              meta={
                                <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                                  {item.year}
                                </span>
                              }
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                loading="eager"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] transform-gpu will-change-transform"
                              />
                            </NotchedCard>

                            {/* Title & Description Below Card */}
                            <div className="mt-5 md:mt-7">
                              <h3
                                className="flex flex-wrap items-baseline gap-x-3 text-foreground transition-colors duration-300 group-hover:text-muted-foreground"
                                style={{
                                  fontSize: "clamp(1.5rem, 2.6vw, 2.85rem)",
                                  lineHeight: 1.04,
                                  letterSpacing: "-0.04em",
                                  fontWeight: 700,
                                }}
                              >
                                <span>{item.name}</span>
                                <ArrowUpRight className="h-[0.55em] w-[0.55em] shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
                              </h3>
                              <p className="mt-3 line-clamp-2 max-w-[58ch] text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Carousel Controls: Capsule Dots, Progress Bar, Play/Pause */}
                <div className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-5 px-4 sm:justify-between lg:mt-10">
                  {/* Dot Indicators */}
                  <div className="flex max-w-full shrink-0 items-center justify-center gap-2">
                    {showcaseProjects.map((_, dIdx) => (
                      <button
                        key={dIdx}
                        type="button"
                        onClick={() => scrollTo(dIdx)}
                        aria-label={`Go to slide ${dIdx + 1}`}
                        style={{
                          minHeight: 0,
                          height: "8px",
                          width: dIdx === selectedIndex ? "28px" : "8px",
                          padding: 0,
                          margin: 0,
                        }}
                        className={`shrink-0 rounded-full border-0 outline-none transition-all duration-300 ${
                          dIdx === selectedIndex
                            ? "bg-foreground"
                            : "bg-foreground/25 hover:bg-foreground/45"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Autoplay Progress Line */}
                  <div className="relative hidden h-1.5 w-28 shrink-0 overflow-hidden rounded-full bg-foreground/15 transition-opacity duration-300 ease-in-out sm:block">
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-foreground transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Pause / Play Button */}
                  <button
                    type="button"
                    onClick={toggleAutoplay}
                    aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                    className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background active:scale-95 sm:flex"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 fill-current" />
                    ) : (
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                {/* "See All Works" CTA Button */}
                <div className="mt-14 flex justify-center lg:mt-20">
                  <a
                    href="#full-archive"
                    className="group inline-flex h-16 items-center gap-3 rounded-full bg-foreground pl-8 pr-3 text-background transition-opacity duration-300 hover:opacity-90 sm:h-[76px] sm:pl-11 sm:pr-4"
                  >
                    <span
                      style={{
                        fontSize: "clamp(1.05rem, 1.5vw, 1.5rem)",
                        letterSpacing: "-0.03em",
                        fontWeight: 700,
                      }}
                    >
                      See All Works ({projectsData.length})
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/15 text-background transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none sm:h-12 sm:w-12">
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.25]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* FULL ARCHIVE SECTION */}
            <section id="full-archive" className="mt-28 sm:mt-36 pt-16 border-t border-border/70 scroll-mt-28">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B42]">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B42]" />
                    <span>Complete Directory</span>
                  </div>
                  <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                    All {projectsData.length} Engineered Systems
                  </h2>
                  <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
                    Search and filter every production application, AI engine, security tool, and infrastructure service crafted by Team Axiogen.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, tech or role..."
                    style={{
                      paddingLeft: "2.75rem",
                      paddingRight: searchQuery ? "4rem" : "1.25rem",
                    }}
                    className="w-full rounded-full border border-border bg-card/60 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#FF6B42] focus:outline-none focus:ring-2 focus:ring-[#FF6B42]/20 transition-all backdrop-blur-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground px-2 py-1"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
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
                      className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
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

              {/* Projects Grid */}
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
                      className="group relative flex flex-col justify-between rounded-[22px] md:rounded-[28px] border border-border/80 bg-card p-6 sm:p-7 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.4),0_16px_32px_rgba(0,0,0,0.5)] hover:border-[#FF6B42]/50 hover:-translate-y-1.5 transition-all duration-300"
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
                            <span>Live Demo</span>
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

              {filteredProjects.length === 0 && (
                <div className="py-20 text-center border rounded-2xl border-dashed border-border mt-8">
                  <p className="text-lg font-bold text-foreground">No matching projects found</p>
                  <p className="text-sm text-muted-foreground mt-1">Try resetting the search query or category filter</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-bold text-background"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
