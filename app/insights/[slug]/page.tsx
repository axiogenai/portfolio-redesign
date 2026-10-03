import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ARTICLES } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Team Axiogen",
    };
  }

  const url = `https://team.axiogen.in/insights/${article.slug}`;

  return {
    title: `${article.title} — Team Axiogen Insights`,
    description: article.meta_description,
    keywords: article.keywords,
    authors: [{ name: article.author, url: "https://team.axiogen.in" }],
    creator: article.author,
    publisher: "Team Axiogen",
    openGraph: {
      title: article.title,
      description: article.meta_description,
      url,
      type: "article",
      publishedTime: article.published_at,
      authors: [article.author],
      siteName: "team.axiogen.in",
      images: [
        {
          url: "/axiogen-logo.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.meta_description,
      images: ["/axiogen-logo.png"],
      creator: "@teamaxiogen",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.meta_description,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      url: "https://team.axiogen.in/about-us",
    },
    publisher: {
      "@type": "Organization",
      name: "Team Axiogen",
      url: "https://team.axiogen.in",
      logo: {
        "@type": "ImageObject",
        url: "https://team.axiogen.in/axiogen-logo.png",
      },
    },
    datePublished: article.published_at,
    dateModified: article.published_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://team.axiogen.in/insights/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

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
        name: "Insights",
        item: "https://team.axiogen.in/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://team.axiogen.in/insights/${article.slug}`,
      },
    ],
  };

  const formattedDate = new Date(article.published_at).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-['Schibsted_Grotesk',sans-serif]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <Navbar />

        <main
          className="px-4 md:px-[clamp(20px,2.6vw,52px)]"
          style={{
            paddingTop: "clamp(104px, 12vw, 168px)",
            paddingBottom: "clamp(56px, 7vw, 120px)",
          }}
        >
          <div className="mx-auto max-w-4xl">
            {/* Back to Insights Link */}
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all insights</span>
            </Link>

            {/* Article Header */}
            <header className="border-b border-border pb-8 sm:pb-12">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground mb-4">
                <span className="inline-flex h-6 items-center rounded-full bg-foreground px-3 text-[10px] text-background">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formattedDate}
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.read_time} min read
                </span>
              </div>

              <h1
                className="text-foreground tracking-tight font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]"
                style={{ letterSpacing: "-0.035em" }}
              >
                {article.title}
              </h1>

              {/* Author Strip */}
              <div className="mt-8 flex items-center gap-3.5 pt-6 border-t border-border/50">
                <div className="h-10 w-10 rounded-full bg-foreground/10 border border-border flex items-center justify-center font-bold text-sm text-foreground">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground flex items-center gap-2">
                    <span>{article.author}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {article.authorRole}
                  </div>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <article className="mt-10 sm:mt-14 space-y-12 sm:space-y-16 text-base sm:text-lg leading-relaxed text-foreground/85">
              {article.sections.map((section, idx) => (
                <section key={idx} className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {section.codeBlock && (
                    <div className="mt-6 rounded-2xl bg-neutral-900 border border-neutral-800 p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-neutral-200">
                      <div className="text-[10px] uppercase font-bold text-neutral-400 mb-3 tracking-wider">
                        {section.codeBlock.language}
                      </div>
                      <pre>
                        <code>{section.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}
            </article>

            {/* Bottom Call to Action */}
            <div className="mt-16 sm:mt-24 rounded-3xl bg-foreground/[0.03] border border-border p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Ready to architect high-performance software?
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-lg">
                  Partner directly with Team Axiogen founders and architects. We ship production systems on tight sprint cadences.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-6 py-3.5 rounded-full hover:opacity-90 transition-all shrink-0 text-sm"
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
