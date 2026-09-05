"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import AxiogenLogo from "./AxiogenLogo";

// Kinetic Fade-Up component
function FadeUpBlur({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Kinetic Slide-In component for nav items
function SlideInBlur({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "200px 0px" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/axiogen",
    style: { backgroundColor: "#0A66C2" },
    icon: (
      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
        <path fill="#FFFFFF" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918010127704",
    style: { backgroundColor: "#25D366" },
    icon: (
      <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
        <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/axiogen",
    style: { backgroundColor: "#000000", border: "1px solid rgba(255,255,255,0.25)" },
    icon: (
      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
        <path fill="#FFFFFF" d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/axiogen",
    style: { background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
    icon: (
      <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
        <path fill="#FFFFFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-background p-3 sm:p-5 md:p-6 mt-12 sm:mt-16 font-['Schibsted_Grotesk',sans-serif] [--footer-card:#0d0d0d] [--footer-frame:hsl(var(--background))] dark:[--footer-card:#161616] transition-colors duration-300">
      <div
        className="relative w-full overflow-hidden"
        style={{
          // @ts-expect-error custom CSS properties
          "--rail-icon": "2.25rem",
          "--rail-gap": "0.625rem",
          "--rail-inset": "0.625rem",
          "--rail-top": "1rem",
          "--rail-notch": "24px",
          "--rail-count": 4,
          "--rail-w": "calc(2 * var(--rail-inset) + var(--rail-icon))",
          "--rail-h":
            "calc(var(--rail-top) + var(--rail-count) * var(--rail-icon) + (var(--rail-count) - 1) * var(--rail-gap) + var(--rail-inset) + var(--rail-notch))",
        }}
      >
        {/* Top-Left Notched Rail for Social Icons (Responsive across all screens) */}
        <div
          className="absolute top-0 left-0 bg-[var(--footer-frame)] rounded-br-[24px] rounded-tl-[24px] md:rounded-tl-[32px] z-20"
          style={{ width: "var(--rail-w)", height: "var(--rail-h)" }}
        >
          {/* Inner fillet notch corner pieces */}
          <div
            className="absolute bg-[var(--footer-card)] z-20"
            style={{
              top: "calc(var(--rail-h) - var(--rail-notch))",
              left: "calc(var(--rail-w) - var(--rail-notch))",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="w-full h-full bg-[var(--footer-frame)] rounded-br-[24px]" />
          </div>
          <div
            className="absolute top-0 bg-[var(--footer-frame)] z-20"
            style={{
              left: "var(--rail-w)",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="w-full h-full bg-[var(--footer-card)] rounded-tl-[24px]" />
          </div>
          <div
            className="absolute left-0 bg-[var(--footer-frame)] z-20"
            style={{
              top: "var(--rail-h)",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="w-full h-full bg-[var(--footer-card)] rounded-tl-[24px]" />
          </div>
        </div>

        {/* The 4 Floating Real Brand Social Buttons inside the rail */}
        <div
          className="absolute flex flex-col z-30"
          style={{
            top: "var(--rail-top)",
            left: "var(--rail-inset)",
            gap: "var(--rail-gap)",
          }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "var(--rail-icon)",
                height: "var(--rail-icon)",
                ...s.style,
              }}
              className="rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md select-none text-white"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Top-Right Notched Button: "Sh*t I've gone too far, send me back up 👆" (Desktop) */}
        <div
          onClick={scrollToTop}
          className="absolute top-0 right-0 h-[44px] px-6 bg-[var(--footer-frame)] rounded-bl-[24px] rounded-tr-[24px] md:rounded-tr-[32px] z-20 hidden md:flex items-center gap-1.5 cursor-pointer text-xs text-neutral-800 dark:text-neutral-200 font-semibold select-none hover:opacity-90 transition-opacity"
        >
          <div className="absolute top-0 -left-[24px] w-[24px] h-[24px] bg-[var(--footer-frame)] z-20">
            <div className="w-full h-full bg-[var(--footer-card)] rounded-tr-[24px]" />
          </div>
          <div className="absolute top-[44px] right-0 w-[24px] h-[24px] bg-[var(--footer-frame)] z-20">
            <div className="w-full h-full bg-[var(--footer-card)] rounded-tr-[24px]" />
          </div>
          <span>Sh*t I've gone too far, send me back up</span>
          <ArrowUp className="h-3.5 w-3.5 stroke-[2.5]" />
        </div>

        {/* Main Footer Card */}
        <footer className="relative bg-[var(--footer-card)] text-white pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-12 px-4 sm:px-8 lg:px-20 overflow-hidden rounded-[24px] md:rounded-[32px]">
          <div className="max-w-7xl mx-auto relative">
            <div className="pl-16 sm:pl-20 pt-2 md:pt-4 pb-10 md:pb-12 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
              {/* Brand & Call to Action with Blur-in Animation */}
              <div className="flex flex-col gap-6 items-start max-w-sm w-full">
                <FadeUpBlur delay={0.05}>
                  <Link
                    href="/"
                    className="group inline-flex items-center gap-3"
                    aria-label="Team Axiogen home"
                  >
                    <AxiogenLogo className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none sm:h-11 sm:w-11" />
                    <span className="text-2xl font-black tracking-tighter text-white sm:text-3xl">
                      Team Axiogen.
                    </span>
                  </Link>
                </FadeUpBlur>

                <FadeUpBlur delay={0.1}>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                    Do you like
                    <br />
                    what you see?
                  </h2>
                </FadeUpBlur>

                <FadeUpBlur delay={0.2} className="w-full">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-white/85 transition-all hover:scale-[1.03] active:scale-[0.98] group shadow-md"
                    >
                      <span>Start a project</span>
                      <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <div className="flex flex-col gap-1 leading-none">
                      <span className="text-[11px] font-semibold text-white">
                        Scope-led proposals
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Built around your brief
                      </span>
                    </div>
                  </div>
                </FadeUpBlur>
              </div>

              {/* Navigation Columns with Kinetic Blur Slide-In & Hover Lines */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 flex-1 w-full lg:w-auto text-xs sm:text-sm">
                {/* Column 1: Learn */}
                <div className="flex flex-col gap-4">
                  <FadeUpBlur delay={0.15}>
                    <h3 className="text-white font-extrabold tracking-widest text-[11px] uppercase opacity-95">
                      Learn
                    </h3>
                  </FadeUpBlur>
                  <ul className="flex flex-col gap-2.5 text-neutral-300 text-xs sm:text-sm">
                    {[
                      { label: "About", href: "/about-us", delay: 0.2 },
                      { label: "Culture", href: "/about-us", delay: 0.23 },
                      { label: "Client work", href: "/our-work", delay: 0.26 },
                      { label: "Processes", href: "/what-we-do", delay: 0.29 },
                      { label: "FAQs", href: "/contact", delay: 0.32 },
                      { label: "Branding FAQs", href: "/contact", delay: 0.35 },
                      { label: "Blog", href: "/insights", delay: 0.38 },
                    ].map((item) => (
                      <li key={item.label}>
                        <SlideInBlur delay={item.delay}>
                          <Link
                            href={item.href}
                            className="group relative inline-block hover:text-white transition-colors"
                          >
                            <span>{item.label}</span>
                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                          </Link>
                        </SlideInBlur>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Explore */}
                <div className="flex flex-col gap-4">
                  <FadeUpBlur delay={0.2}>
                    <h3 className="text-white font-extrabold tracking-widest text-[11px] uppercase opacity-95">
                      Explore
                    </h3>
                  </FadeUpBlur>
                  <ul className="flex flex-col gap-2.5 text-neutral-300 text-xs sm:text-sm">
                    {[
                      { label: "Home", href: "/", delay: 0.25 },
                      { label: "Work", href: "/our-work", delay: 0.28, isNew: true },
                      { label: "Services", href: "/what-we-do", delay: 0.31 },
                      { label: "Careers", href: "/contact", delay: 0.34 },
                      { label: "Sectors", href: "/what-we-do", delay: 0.37 },
                      { label: "Contact", href: "/contact", delay: 0.43 },
                    ].map((item) => (
                      <li key={item.label}>
                        <SlideInBlur delay={item.delay} className="flex items-center gap-2">
                          <Link
                            href={item.href}
                            className="group relative inline-block hover:text-white transition-colors"
                          >
                            <span>{item.label}</span>
                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                          </Link>
                          {item.isNew && (
                            <span className="bg-white text-black font-extrabold text-[8px] px-1.5 py-0.5 rounded uppercase tracking-wider scale-90">
                              New
                            </span>
                          )}
                        </SlideInBlur>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Get in touch */}
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
                  <FadeUpBlur delay={0.25}>
                    <h3 className="text-white font-extrabold tracking-widest text-[11px] uppercase opacity-95">
                      Get in touch
                    </h3>
                  </FadeUpBlur>
                  <ul className="flex flex-col gap-3 text-neutral-300 text-xs sm:text-sm">
                    <SlideInBlur delay={0.3} className="flex items-center gap-2.5">
                      <Phone className="h-3.5 w-3.5 text-white/90 shrink-0" />
                      <a
                        href="tel:+918010127704"
                        className="group relative inline-block hover:text-white transition-colors"
                      >
                        <span>+91 80101 27704</span>
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </a>
                    </SlideInBlur>

                    <SlideInBlur delay={0.35} className="flex items-center gap-2.5">
                      <Mail className="h-3.5 w-3.5 text-white/90 shrink-0" />
                      <a
                        href="mailto:axiogen01@gmail.com"
                        className="group relative inline-block hover:text-white transition-colors break-all"
                      >
                        <span>axiogen01@gmail.com</span>
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </a>
                    </SlideInBlur>

                    <SlideInBlur delay={0.4} className="flex items-start gap-2.5">
                      <MapPin className="h-3.5 w-3.5 text-white/90 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Team Axiogen.</p>
                        <p className="text-neutral-300 text-xs">India & Worldwide</p>
                      </div>
                    </SlideInBlur>

                    <SlideInBlur delay={0.45} className="flex items-center gap-2.5">
                      <span className="text-white text-sm font-bold flex-shrink-0">///</span>
                      <span className="hover:text-white transition-colors text-neutral-300 text-xs font-mono">
                        team.axiogen.in
                      </span>
                    </SlideInBlur>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Scroll-to-Top Button */}
            <div className="flex md:hidden justify-center pt-4 pb-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-white/20 active:scale-95"
              >
                <span>Sh*t I've gone too far, send me back up</span>
                <ArrowUp className="h-3.5 w-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Massive Brand Watermark: CRAFTING SINCE 2024 */}
            <div className="border-t border-white/10 pt-6 sm:pt-8 pb-8 sm:pb-10 overflow-hidden select-none">
              <h1 className="text-[clamp(1.5rem,7vw,7vw)] sm:text-5xl md:text-[6.5vw] lg:text-[7vw] font-black text-white tracking-tight leading-none text-center lg:text-left opacity-95 uppercase whitespace-nowrap">
                CRAFTING SINCE 2024
              </h1>
            </div>

            {/* Bottom Copyright & Legal Strip with Fade-in */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] sm:text-xs text-neutral-400">
              <FadeUpBlur delay={0.25}>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
                  <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <AxiogenLogo className="h-6 w-6 shrink-0 object-contain" />
                    <span className="text-sm font-black tracking-tighter text-white">
                      Team Axiogen.
                    </span>
                  </Link>
                  <span className="hidden text-white/25 md:inline">|</span>
                  <span>© Team Axiogen 2026</span>
                  <span className="text-white/25">|</span>
                  <span>India & Worldwide</span>
                </div>
              </FadeUpBlur>

              <FadeUpBlur delay={0.3}>
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                  <span>Web & AI Engineering</span>
                  <span>|</span>
                  <span>All Rights Reserved</span>
                  <span>|</span>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </FadeUpBlur>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

