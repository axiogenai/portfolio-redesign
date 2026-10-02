import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — FAQs | Team Axiogen",
  description:
    "Find answers to common questions about working with Team Axiogen — project timelines, pricing, tech stack, communication, deliverables, and IP ownership.",
  keywords: [
    "software development pricing India",
    "software engineering FAQs",
    "hire software developers cost",
    "Team Axiogen FAQs",
    "software contract terms",
    "project timelines and deliverables",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "FAQs — Frequently Asked Questions | Team Axiogen",
    description:
      "Answers to common questions about working with Team Axiogen — pricing, timelines, tech stack, and deliverables.",
    url: "https://team.axiogen.in/faqs",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen FAQs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs — Team Axiogen",
    description: "Common questions about working with Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/faqs",
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
