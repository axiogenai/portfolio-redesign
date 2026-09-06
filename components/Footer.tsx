"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter, FaInstagram } from "react-icons/fa6";
import AxiogenLogo from "./AxiogenLogo";
import ShinyText from "./ShinyText";

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
    icon: <FaLinkedinIn className="w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917030807704",
    icon: <FaWhatsapp className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />,
  },
  {
    name: "X",
    href: "https://x.com/axiogen",
    icon: <FaXTwitter className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/axiogen",
    icon: <FaInstagram className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />,
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
          "--rail-w": "3.5rem",
          "--rail-top": "1.25rem",
          "--rail-gap": "0.75rem",
          "--rail-notch": "24px",
          "--rail-h":
            "calc(var(--rail-top) + 4 * 2.5rem + 3 * var(--rail-gap) + var(--rail-notch) + 0.25rem)",
        }}
      >
        {/* Top-Left Notched Rail for Social Icons (Desktop only to prevent mobile squishing) */}
        <div
          className="absolute top-0 left-0 bg-[var(--footer-frame)] rounded-br-[24px] z-20 hidden md:block"
          style={{ width: "var(--rail-w)", height: "var(--rail-h)" }}
        >
          {/* Inner fillet notch corner pieces */}
          <div
            className="absolute bg-[var(--footer-card)] z-20 pointer-events-none"
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
            className="absolute top-0 bg-[var(--footer-frame)] z-20 pointer-events-none"
            style={{
              left: "var(--rail-w)",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="w-full h-full bg-[var(--footer-card)] rounded-tl-[24px]" />
          </div>
          <div
            className="absolute left-0 bg-[var(--footer-frame)] z-20 pointer-events-none"
            style={{
              top: "var(--rail-h)",
              width: "var(--rail-notch)",
              height: "var(--rail-notch)",
            }}
          >
            <div className="w-full h-full bg-[var(--footer-card)] rounded-tl-[24px]" />
          </div>
        </div>

        {/* The 4 Floating Clean Social Icons inside the rail (Desktop) */}
        <div
          className="absolute hidden md:flex flex-col items-center z-30"
          style={{
            top: "var(--rail-top)",
            left: "0",
            width: "var(--rail-w)",
            gap: "var(--rail-gap)",
          }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "hsl(var(--foreground))" }}
              className="group w-10 h-10 flex items-center justify-center select-none text-foreground hover:opacity-75 transition-opacity"
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
        <footer className="footer-card-responsive relative bg-[var(--footer-card)] text-white pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-12 overflow-hidden rounded-[24px] md:rounded-[32px]">
          <div className="max-w-7xl mx-auto relative">
            <div className="footer-content-padded pt-2 md:pt-4 pb-10 md:pb-12 flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-16">
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

                {/* Mobile Horizontal Social Icons */}
                <FadeUpBlur delay={0.25} className="w-full">
                  <div className="flex md:hidden items-center gap-3 pt-1">
                    {socialLinks.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 active:scale-95 transition-all select-none shrink-0"
                        aria-label={s.name}
                      >
                        {React.cloneElement(s.icon as React.ReactElement<{ className?: string }>, {
                          className: "w-4.5 h-4.5 text-white",
                        })}
                      </a>
                    ))}
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
                        <SlideInBlur delay={item.delay}>
                          <Link
                            href={item.href}
                            className="group relative inline-flex items-center gap-2 hover:text-white transition-colors"
                          >
                            <span>{item.label}</span>
                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            {item.isNew && (
                              <span className="inline-flex items-center justify-center bg-white text-black font-extrabold text-[8.5px] leading-none px-1.5 py-0.5 rounded uppercase tracking-wider">
                                New
                              </span>
                            )}
                          </Link>
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
                  <ul className="flex flex-col gap-3.5 text-neutral-300 text-xs sm:text-sm">
                    <li>
                      <SlideInBlur delay={0.3} className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-white/90 shrink-0" />
                        <a
                          href="tel:+917030807704"
                          className="group relative inline-flex items-center hover:text-white transition-colors"
                        >
                          <span>+91 70308 07704</span>
                          <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      </SlideInBlur>
                    </li>

                    <li>
                      <SlideInBlur delay={0.35} className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-white/90 shrink-0" />
                        <a
                          href="mailto:axiogen01@gmail.com"
                          className="group relative inline-flex items-center hover:text-white transition-colors break-all"
                        >
                          <span>axiogen01@gmail.com</span>
                          <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      </SlideInBlur>
                    </li>

                    <li>
                      <SlideInBlur delay={0.4} className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-white/90 mt-0.5 shrink-0" />
                        <div className="flex flex-col leading-tight">
                          <p className="font-semibold text-white">Team Axiogen.</p>
                          <p className="text-neutral-400 text-xs mt-0.5">India & Worldwide</p>
                        </div>
                      </SlideInBlur>
                    </li>

                    <li>
                      <SlideInBlur delay={0.45} className="flex items-center gap-3">
                        <span className="text-white text-sm font-bold flex-shrink-0 w-4 text-center">///</span>
                        <span className="hover:text-white transition-colors text-neutral-300 text-xs font-mono">
                          team.axiogen.in
                        </span>
                      </SlideInBlur>
                    </li>
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
              <h1 className="text-[clamp(1.5rem,7vw,7vw)] sm:text-5xl md:text-[6.5vw] lg:text-[7vw] font-black tracking-tight leading-none text-center lg:text-left uppercase whitespace-nowrap">
                <ShinyText
                  text="CRAFTING SINCE 2024"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                />
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

