"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

const serviceChips = [
  "AI & Neural Systems",
  "Website Design",
  "Web App",
  "Mobile Apps",
  "Cybersecurity",
  "Cloud & DevOps",
  "Brand Identity",
  "E-Commerce",
  "Something else",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (chip: string) => {
    setSelectedServices((prev) =>
      prev.includes(chip) ? prev.filter((s) => s !== chip) : [...prev, chip]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const s = selectedServices.length ? selectedServices.join(", ") : "General inquiry";
    const text = encodeURIComponent(
      `Hello Team Axiogen!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nServices: ${s}\n\nBrief: ${formData.message}`
    );

    // Open WhatsApp directly with the pre-filled enquiry
    window.open(`https://wa.me/918010127704?text=${text}`, "_blank", "noopener");
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background font-['Schibsted_Grotesk',sans-serif] text-foreground">
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
              eyebrow="Contact"
              lines={["Tell us what", "you need built"]}
              support="Send the goal, the deadline and anything you already have. You get a scope and a straight answer on fit — not a sales sequence."
            />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Direct Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </span>
                <a
                  href="mailto:axiogen01@gmail.com"
                  className="mt-2 block text-2xl font-bold tracking-tight text-foreground hover:opacity-75 transition-opacity"
                >
                  axiogen01@gmail.com
                </a>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Phone / WhatsApp
                </span>
                <a
                  href="tel:+918010127704"
                  className="mt-2 block text-2xl font-bold tracking-tight text-foreground hover:opacity-75 transition-opacity"
                >
                  +91 80101 27704
                </a>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Studio
                </span>
                <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  India & Worldwide
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Elsewhere
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://wa.me/918010127704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground hover:bg-foreground hover:text-background transition-all"
                    aria-label="WhatsApp"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com/axiogen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground hover:bg-foreground hover:text-background transition-all"
                    aria-label="Instagram"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Replies land within one working day. If it is urgent, WhatsApp is the fastest route.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] border border-border bg-[#141414] text-white p-6 sm:p-10 lg:p-12 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Start a project
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Four fields, then pick what you need. Nothing else required.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.14em] text-neutral-400 mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.14em] text-neutral-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.14em] text-neutral-400 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.14em] text-neutral-400 mb-2">
                      What are you trying to achieve? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="The goal, the deadline, and anything that already exists."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Multi-Select Service Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.14em] text-neutral-400 mb-3">
                      What do you need? (pick any)
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceChips.map((chip) => {
                        const isSelected = selectedServices.includes(chip);
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => toggleService(chip)}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition-all inline-flex items-center gap-1.5 ${
                              isSelected
                                ? "bg-white text-black shadow-md scale-[1.03]"
                                : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/5"
                            }`}
                          >
                            <span>{chip}</span>
                            {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-white text-black py-4 font-bold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.99]"
                    >
                      <span>Send enquiry</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-center text-xs text-neutral-500 font-mono">
                      Sent straight to the studio. We never pass your details on.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
