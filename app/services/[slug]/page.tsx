import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Terminal,
  Clock,
  MessageSquare,
  ChevronRight,
  FileCheck,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { getServicePage, getAllServiceSlugs, ServicePageData } from "@/lib/servicePages";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {
      title: "Service Not Found | Team Axiogen",
    };
  }

  const canonicalUrl = `https://team.axiogen.in/services/${service.slug}`;

  return {
    title: `${service.metaTitle} | Team Axiogen`,
    description: service.metaDescription,
    keywords: service.targetQueries,
    authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
    creator: "Team Axiogen",
    publisher: "Team Axiogen",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Team Axiogen Engineering Studio`,
      description: service.metaDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "team.axiogen.in",
      images: [
        {
          url: "/axiogen-logo.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Team Axiogen`,
      description: service.metaDescription,
      images: ["/axiogen-logo.png"],
      creator: "@teamaxiogen",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `https://team.axiogen.in/services/${service.slug}`;

  // Structured Service JSON-LD Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Team Axiogen",
      url: "https://team.axiogen.in",
      logo: "https://team.axiogen.in/axiogen-logo.png",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Capabilities`,
      itemListElement: service.capabilities.map((c, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        name: c.title,
        description: c.description,
      })),
    },
  };

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://team.axiogen.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://team.axiogen.in/what-we-do",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  };

  // FAQPage Schema for Google Rich Snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-background text-foreground font-['Schibsted_Grotesk',sans-serif] selection:bg-[#FF6B42] selection:text-white">
        <Navbar />

        <main className="px-4 md:px-[clamp(20px,3.5vw,72px)] pt-32 pb-24 max-w-7xl mx-auto">
          {/* Breadcrumb & Back Link */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground mb-8">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Services</span>
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground/90 font-semibold">{service.title}</span>
          </div>

          {/* Hero Section */}
          <section className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-secondary text-secondary-foreground border border-border mb-6">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: service.themeColor }}
              />
              <span>{service.badge}</span>
              <span className="opacity-40">#{service.number}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-foreground">
              {service.h1}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              {service.tagline} {service.heroSnippet}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Consult on Your Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <a
                href={`https://wa.me/918767980838?text=${encodeURIComponent(
                  `Hi Team Axiogen, I would like to discuss our requirements for ${service.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border font-semibold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#FF6B42]" />
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>

            {/* Keywords / Target Scope pills */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground/80 uppercase tracking-wider text-[10px]">
                Specialized In:
              </span>
              {service.targetQueries.map((query) => (
                <span
                  key={query}
                  className="px-2.5 py-1 rounded-md bg-muted/60 text-foreground/90 border border-border/50"
                >
                  {query}
                </span>
              ))}
            </div>
          </section>

          {/* In-Depth Overview Section */}
          <section className="mb-20 rounded-3xl p-8 md:p-12 bg-card border border-border">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-foreground">
              {service.overviewHeading}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {service.overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Who This Is For (Target Audiences) */}
          <section className="mb-20">
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42]">
                Target Applications
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
                Who We Engineer This For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.targetAudiences.map((aud, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-card border border-border flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      {aud.role}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-3 text-foreground">
                      {aud.title}
                    </h3>
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase text-red-400 tracking-wider">
                        The Bottleneck
                      </span>
                      <p className="text-sm text-muted-foreground mt-1 leading-normal">
                        {aud.challenge}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-bold uppercase text-[#FF6B42] tracking-wider">
                      Our Engineering Solution
                    </span>
                    <p className="text-sm text-foreground/90 font-medium mt-1 leading-normal">
                      {aud.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Architectural Capabilities */}
          <section className="mb-20">
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42]">
                Technical Deliverables
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
                Core Architectural Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-7 bg-card border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-foreground">{cap.title}</h3>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-secondary text-secondary-foreground border border-border whitespace-nowrap">
                        {cap.metric}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase text-muted-foreground tracking-wider block mb-2.5">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {cap.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B42] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Production Architecture Layers */}
          <section className="mb-20 rounded-3xl p-8 md:p-12 bg-secondary/50 border border-border">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42]">
                System Architecture
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">
                {service.architecture.heading}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                {service.architecture.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {service.architecture.layers.map((layer, lIdx) => (
                <div
                  key={lIdx}
                  className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#FF6B42] block mb-1">
                      {layer.layer}
                    </span>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      {layer.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Matrix */}
          <section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42]">
                Production Technology
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">
                Battle-Tested Tech Stack
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.techStack.map((stack, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-card border border-border"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-foreground border border-border/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4-Step Engineering Process */}
          <section className="mb-20">
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42]">
                Disciplined Execution
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
                How We Deliver: 4-Step Engineering Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {service.process.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono text-[#FF6B42]">
                        {p.step}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                        {p.duration}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground block mb-1">
                      {p.phase}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-0.5">
                      Milestone Deliverable:
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {p.output}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Case Study Deep Dive */}
          <section className="mb-20 rounded-3xl p-8 md:p-12 bg-card border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42] block mb-2">
                {service.caseStudy.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                {service.caseStudy.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3">
                {service.caseStudy.outcome}
              </p>
              <span className="text-xs text-muted-foreground font-medium">
                Client / Architecture: {service.caseStudy.client}
              </span>
            </div>

            <Link
              href={`/insights/${service.caseStudy.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border font-bold text-sm whitespace-nowrap transition-colors"
            >
              <span>Read Architectural Case Study</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </section>

          {/* Frequently Asked Questions (FAQ Section with Schema) */}
          <section className="mb-20">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B42]">
                Clarity & Transparency
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Direct answers to common questions about timelines, technology, security, and intellectual property.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-2xl p-6 bg-card border border-border transition-colors hover:border-foreground/20"
                >
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="rounded-3xl p-8 md:p-14 bg-foreground text-background text-center flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest opacity-70 mb-2">
              Start Your Project with Team Axiogen
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mb-4">
              Ready to engineer your {service.title.toLowerCase()}?
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-xl mb-8 leading-relaxed">
              Schedule a technical discovery session with our founding engineers. We will analyze your requirements, review architecture feasibility, and deliver an actionable scope.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-background text-foreground font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Technical Discovery
              </Link>
              <a
                href={`https://wa.me/918767980838?text=${encodeURIComponent(
                  `Hi Team Axiogen, I would like to schedule a consultation for ${service.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-background/40 hover:bg-background/10 font-bold text-sm transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FF6B42]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
