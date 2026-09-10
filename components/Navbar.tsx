"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import AxiogenLogo from "./AxiogenLogo";

const navLinks = [
  { label: "Services", href: "/what-we-do" },
  { label: "Work", href: "/our-work" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const { toggleTheme } = useTheme();
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = 0;

    const update = () => {
      ticking = 0;
      const currentScrollY = Math.max(0, window.scrollY);
      const delta = currentScrollY - lastScrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 60) {
        setHideNav(false);
      } else if (delta > 15) {
        setHideNav(true);
      } else if (delta < -12) {
        setHideNav(false);
      }

      lastScrollY = currentScrollY;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (ticking) cancelAnimationFrame(ticking);
    };
  }, []);

  const shouldHide = hideNav && !menuOpen;
  const isCoralHeader = pathname === "/what-we-do" && !isScrolled;

  return (
    <>
      <header
        data-floating="true"
        className="group/nav fixed left-0 right-0 top-0 z-[60] px-3 sm:px-4 pt-3.5 sm:pt-4 font-['Schibsted_Grotesk',sans-serif] pointer-events-none"
        style={{
          transform: `translate3d(0, ${shouldHide ? "-150%" : "0px"}, 0)`,
          transition: "transform 320ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      >
        <div
          className={`mx-auto flex items-center justify-between border rounded-full pointer-events-auto transition-colors duration-300 ${
            isCoralHeader
              ? "max-w-[1120px] border-black/15 bg-black/[0.08] backdrop-blur-md shadow-sm"
              : isScrolled
              ? "max-w-[1120px] border-black/[0.08] bg-[#f2f2ef]/95 dark:border-white/10 dark:bg-[#1c1d1b]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              : "max-w-[1120px] border-black/[0.06] bg-[#f2f2ef]/80 dark:border-white/[0.08] dark:bg-[#1c1d1b]/80 backdrop-blur-md shadow-sm"
          }`}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 24,
            paddingRight: 10,
          }}
        >
          {/* Logo: Axiogen Real Vector Logo + Team Axiogen. */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0 select-none"
            aria-label="Team Axiogen home"
          >
            <AxiogenLogo
              className={`h-7 w-7 md:h-8 md:w-8 shrink-0 transition-colors ${
                isCoralHeader ? "text-black" : "text-foreground"
              }`}
            />
            <span
              className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${
                isCoralHeader ? "text-black" : "text-foreground"
              }`}
            >
              Team Axiogen.
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[13px] font-bold transition-colors duration-300 ${
              isCoralHeader ? "text-black/80" : "text-foreground/80"
            }`}
          >
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`relative py-1 group transition-colors ${
                    isCoralHeader
                      ? isActive
                        ? "text-black font-extrabold"
                        : "hover:text-black"
                      : isActive
                      ? "text-foreground font-extrabold"
                      : "hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left rounded-full bg-current transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Theme Toggle + Start a Project Button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`relative h-10 w-10 md:h-11 md:w-11 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden select-none shrink-0 border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.15] hover:scale-105 active:scale-95 shadow-sm ${
                isCoralHeader
                  ? "text-black border-black/20 bg-black/5 hover:bg-black/10"
                  : ""
              }`}
              aria-label="Toggle theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-600 stroke-[2] transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] text-sky-400 fill-sky-400/20 stroke-[2] transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Start a Project Pill CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-foreground text-background text-[13px] font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:opacity-85 active:scale-[0.98] transition-all select-none shadow-sm"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden h-10 w-10 rounded-full flex flex-col items-center justify-center gap-1.5 z-[60] relative shrink-0 transition-colors ${
                isCoralHeader
                  ? "text-black hover:bg-black/10"
                  : "text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background text-foreground pt-28 px-6 font-['Schibsted_Grotesk',sans-serif] flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((l, c) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: c * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => {
                      setTimeout(() => setMenuOpen(false), 40);
                    }}
                    className="text-3xl font-bold text-foreground hover:opacity-60 transition-opacity"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-foreground/10 flex flex-col gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-full border border-foreground/15 bg-foreground/5 text-foreground text-sm font-bold"
              >
                <span className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-amber-500 dark:hidden" />
                  <Moon className="h-4 w-4 text-sky-400 hidden dark:block" />
                  <span>Toggle Theme</span>
                </span>
                <span className="text-xs font-semibold opacity-60 uppercase tracking-wider">
                  Tap to switch
                </span>
              </button>

              <Link
                href="/contact"
                onClick={() => {
                  setTimeout(() => setMenuOpen(false), 40);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background text-sm font-bold py-4 rounded-full shadow-md"
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
