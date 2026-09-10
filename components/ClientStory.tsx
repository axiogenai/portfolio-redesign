"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const xS = "clamp(220px, 24vw, 320px)";
const CO = "clamp(440px, 48vw, 640px)";
const PO = "One team from first idea to launch day";
const ly = {
  name: "Team Axiogen Studio",
  role: "Creative, product & growth team",
};

export default function ClientStory() {
  const [teamImg, setTeamImg] = useState("/team-collab.webp");

  useEffect(() => {
    fetch("/api/media")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data?.teamCollab) {
          setTeamImg(resData.data.teamCollab);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <div
      id="client-story"
      className="relative z-10 w-full scroll-mt-24 px-3 pb-[clamp(28px,4vw,64px)] sm:px-5 md:px-6"
      style={{ marginTop: `calc(-1 * ${xS})` }}
    >
      <motion.figure
        className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-[24px] bg-secondary shadow-[0_40px_90px_-50px_rgba(0,0,0,0.7)] md:rounded-[40px]"
        style={{ height: CO }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background Image */}
        <img
          src={teamImg}
          alt="The Team Axiogen crew working together on a client project"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/10 to-black/45"
        />

        {/* Top-Left Quote Bubble & Author Figcaption */}
        <div className="absolute left-3 top-3 max-w-[min(88%,30rem)] sm:left-6 sm:top-6 md:left-8 md:top-8">
          {/* Speech bubble */}
          <motion.div
            className="relative rounded-2xl bg-white px-4 py-3.5 text-black sm:px-6 sm:py-5 shadow-xl"
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.15 }}
          >
            <p
              className="font-bold tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.05rem, 2.1vw, 2.1rem)", lineHeight: 1.14 }}
            >
              <span className="mr-2 inline-block text-black font-black text-xl">“</span>
              {PO}
            </p>
            {/* Speech bubble beak */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 left-7 h-4 w-4 rotate-45 rounded-[3px] bg-white"
            />
          </motion.div>

          {/* Author Tag */}
          <motion.figcaption
            className="mt-3 inline-flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 text-black sm:gap-3 sm:px-3.5 sm:py-2.5 shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          >
            <img
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              loading="lazy"
              decoding="async"
              className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-9 sm:w-9"
            />
            <span className="leading-tight">
              <span className="block text-xs font-bold sm:text-sm">{ly.name}</span>
              <span className="block text-[10px] text-black/60 sm:text-xs">{ly.role}</span>
            </span>
          </motion.figcaption>
        </div>

        {/* Bottom Actions */}
        <motion.div
          className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6 md:inset-x-8 md:bottom-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Bottom Left Circular Button */}
          <a
            href="#work"
            aria-label="See client work"
            className="group hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 ease-out hover:scale-110 active:scale-95 motion-reduce:transform-none sm:flex sm:h-14 sm:w-14 shadow-lg"
          >
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </a>

          {/* Bottom Right Pill Actions */}
          <div className="ml-auto flex flex-col items-end gap-2 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 text-[11px] font-bold text-black transition-colors duration-300 hover:bg-white/85 sm:text-xs shadow-md"
            >
              <span>See client work</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowUpRight className="h-3 w-3" strokeWidth={3} />
              </span>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-black/85 py-2 pl-4 pr-2 text-[11px] font-bold text-white transition-colors duration-300 hover:bg-black sm:text-xs shadow-md"
            >
              <span>About the studio</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowUpRight className="h-3 w-3" strokeWidth={3} />
              </span>
            </a>
          </div>
        </motion.div>
      </motion.figure>
    </div>
  );
}
