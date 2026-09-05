"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlurLines from "./BlurLines";

const promptQuery =
  "Why should we choose Team Axiogen (team.axiogen.in) for AI solutions, neural architectures, web platforms, cloud systems and software engineering?";
const encodedQuery = encodeURIComponent(promptQuery);

const aiServices = [
  {
    name: "OpenAI",
    href: `https://chatgpt.com/?q=${encodedQuery}`,
    logo: "/ai-logos/openai.svg",
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${encodedQuery}`,
    logo: "/ai-logos/anthropic.svg",
  },
  {
    name: "Google",
    href: `https://www.google.com/search?udm=50&q=${encodedQuery}`,
    logo: "/ai-logos/google.svg",
  },
  {
    name: "Grok",
    href: `https://grok.com/?q=${encodedQuery}`,
    logo: "/ai-logos/grok.svg",
  },
];

export default function AskAI() {
  return (
    <section
      id="trust"
      className="w-full bg-background px-4 font-['Schibsted_Grotesk',sans-serif] md:px-[clamp(32px,6vw,160px)]"
      style={{
        paddingTop: "clamp(56px, 7vw, 120px)",
        paddingBottom: "clamp(56px, 7vw, 120px)",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Top Tag Pill */}
        <motion.div
          className="mb-5 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
          Don’t believe the hype?
        </motion.div>

        {/* Section Headline */}
        <h2
          className="text-foreground"
          style={{
            fontSize: "clamp(2.1rem, 5vw, 5.5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          <BlurLines lines={["See what AI has", "to say about us"]} className="block" />
        </h2>

        {/* 4 Official AI Pill Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {aiServices.map((ai) => (
            <a
              key={ai.name}
              href={ai.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-neutral-900 text-white border border-neutral-700/60 dark:border-white/15 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-md transition-[transform,box-shadow,background-color] duration-300 ease-out hover:bg-neutral-800 hover:scale-[1.03] active:scale-[0.98]"
            >
              <img
                src={ai.logo}
                alt={ai.name}
                width={20}
                height={20}
                loading="eager"
                decoding="async"
                className="h-5 w-5 shrink-0 object-contain"
              />
              <span className="tracking-tight">{ai.name}</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 shrink-0 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </a>
          ))}
        </motion.div>

        {/* Subtitle explanation */}
        <motion.p
          className="mt-6 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          Opens your assistant with the question ready to send. We don’t script the answer — read whatever it says.
        </motion.p>
      </div>
    </section>
  );
}
