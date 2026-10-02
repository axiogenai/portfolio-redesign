"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SmoothScroll from "@/components/SmoothScroll";

export default function PrivacyPolicyPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
        <Navbar />

        <main
          className="px-4 md:px-[clamp(20px,2.6vw,52px)]"
          style={{
            paddingTop: "clamp(104px, 12vw, 168px)",
            paddingBottom: "clamp(56px, 7vw, 120px)",
          }}
        >
          <div className="mx-auto max-w-4xl">
            <PageHeader
              eyebrow="Legal & Governance"
              lines={["Privacy Policy", "& Data Stewardship."]}
              support="Last updated: October 2026. How Team Axiogen protects client intellectual property, data security, and communication confidentiality."
            />

            <div className="mt-16 space-y-12 text-sm sm:text-base leading-relaxed text-foreground/80">
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  1. Zero Data Exploitation
                </h2>
                <p>
                  Team Axiogen operates as an independent AI & digital engineering studio. We never sell, rent, monetize, or trade client datasets, source code, proprietary algorithms, or personal contact information to third parties or advertising networks under any circumstances.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  2. Intellectual Property (IP) Protection
                </h2>
                <p>
                  All software architectures, custom algorithms, model weights, database schemas, and digital assets developed under contract for clients are the exclusive intellectual property of the respective client upon milestone fulfillment. We maintain strict non-disclosure compliance across all engineering engagements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  3. Information Collection & Use
                </h2>
                <p>
                  When you submit project inquiries via our contact form or communicate with our AI Concierge, we collect only the information necessary to evaluate your project scope and provide accurate technical roadmaps (such as name, email address, and project brief). This data is stored securely and used solely for communication and project scoping.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  4. Security Protocols
                </h2>
                <p>
                  We implement hardened cryptographic protocols, encrypted communication channels (SSL/TLS), and zero-exposure storage architectures. Internal access to production codebases and client credentials is strictly restricted using multi-factor authentication and role-based access controls.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  5. Contact & Inquiries
                </h2>
                <p>
                  For any privacy questions, data deletion requests, or security disclosures, reach out directly to our leadership team at{" "}
                  <a
                    href="mailto:axiogen01@gmail.com"
                    className="font-medium text-foreground underline hover:text-[#FF6B42] transition-colors"
                  >
                    axiogen01@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
