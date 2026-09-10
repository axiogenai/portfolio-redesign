import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Questions | Team Axiogen",
  description:
    "Find answers to common questions about working with Team Axiogen — project timelines, pricing, tech stack, communication, deliverables, and more.",
  openGraph: {
    title: "FAQs — Team Axiogen",
    description:
      "Answers to common questions about working with Team Axiogen.",
    url: "https://team.axiogen.in/faqs",
  },
  twitter: {
    title: "FAQs — Team Axiogen",
    description: "Common questions about working with Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/faqs",
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
