"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle, Zap, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import BlurLines from "./BlurLines";

const serviceOptions = [
  "Custom AI & Neural Models",
  "Full-Stack Web App",
  "Cybersecurity & Sandboxing",
  "API & Cloud Architecture",
  "Voice & Audio AI",
  "Brand & Creative Direction",
];

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FF6B42", "#9B8AFF", "#4FD16B", "#FFFFFF"],
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-20 text-foreground border-t border-border transition-colors duration-300 font-['Schibsted_Grotesk',sans-serif]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-8">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B42]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            Start A Project
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-8">
          <BlurLines
            lines={["TELL US THE GOAL.", "WE'LL ENGINEER WHAT IT NEEDS."]}
            className="text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold tracking-[-0.03em] leading-[0.98] text-foreground"
            delayOffset={0.05}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed mb-16"
        >
          Replies land within one working day. For immediate high-priority inquiries, WhatsApp or direct calls are the fastest channels.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[28px] bg-card border border-border shadow-sm">
              <h4 className="text-xl font-bold tracking-tight text-foreground mb-6">
                Direct Channels
              </h4>

              <div className="space-y-4">
                <a
                  href="https://wa.me/917030807704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-border hover:border-emerald-500/40 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                        WhatsApp Instant
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">
                        +91 70308 07704
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                </a>

                <a
                  href="mailto:axiogen01@gmail.com"
                  className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-border hover:border-[#FF6B42]/40 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B42]/10 border border-[#FF6B42]/20 flex items-center justify-center text-[#FF6B42]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-[#FF6B42] transition-colors">
                        Email Inquiry
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">
                        axiogen01@gmail.com
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#FF6B42] transition-colors" />
                </a>

                <a
                  href="tel:+917030807704"
                  className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-border hover:border-[#9B8AFF]/40 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#9B8AFF]/10 border border-[#9B8AFF]/20 flex items-center justify-center text-[#9B8AFF]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-[#9B8AFF] transition-colors">
                        Telephone
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">
                        +91 70308 07704
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#9B8AFF] transition-colors" />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-[28px] bg-card border border-border font-mono text-xs text-muted-foreground shadow-sm">
              <div className="flex items-center gap-2 text-foreground font-bold mb-2">
                <Zap className="w-4 h-4 text-[#FF6B42]" />
                <span>Zero-Fluff Guarantee</span>
              </div>
              <p className="leading-relaxed">
                We respect your time. No multi-tier sales reps. Your inquiry is reviewed directly by an engineer who can assess technical feasibility immediately.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-card border border-border shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Inquiry Dispatched</h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    Thank you, {formData.name || "friend"}. We will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      What can we help you build? (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                            selectedServices.includes(srv)
                              ? "bg-[#FF6B42] text-white font-semibold"
                              : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Aditya / Team Lead"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#FF6B42] text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#FF6B42] text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Project Goals & Context *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what you're building, target timeline, or tech stack preference..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#FF6B42] text-sm transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#FF6B42] to-[#FF8CA6] hover:shadow-[0_0_30px_rgba(255,107,66,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
