"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import BlurLines from "./BlurLines";

const testimonials = [
  {
    quote:
      "Axiogen built our automated SEO intelligence pipeline from scratch. What used to take our content team three days is now executed in less than 30 seconds with Gemini AI.",
    author: "Enterprise Platform Lead",
    company: "SEOHub Pro",
    rating: 5,
  },
  {
    quote:
      "The zero-exposure cryptographic file vault exceeded all security audit criteria. Zero plain-text persistence on disk and under 30ms latency even during peak load.",
    author: "Chief Technology Officer",
    company: "Cyber Threat Intelligence",
    rating: 5,
  },
  {
    quote:
      "Working with Axiogen feels like having an elite R&D team on demand. They speak deep machine learning and ship production software without unnecessary ceremony.",
    author: "Founding Partner",
    company: "Invenscope Labs",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 text-white border-t border-white/8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 mb-8">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB43D]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            Don't Believe The Hype?
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <BlurLines
            lines={["WHAT TEAMS & FOUNDERS", "HAVE TO SAY."]}
            className="text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold tracking-[-0.03em] leading-[0.98] text-white"
            lineClassName="text-white"
            delayOffset={0.05}
          />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between p-8 sm:p-10 rounded-[28px] bg-neutral-950 border border-white/10 hover:border-white/20 transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center gap-1 text-[#FFB43D] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-neutral-200 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/8">
                <div className="font-bold text-white tracking-tight">{t.author}</div>
                <div className="text-xs font-mono text-neutral-400 mt-0.5">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
