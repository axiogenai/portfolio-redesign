import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog — Team Axiogen",
  description:
    "Read insights, technical articles, and thought leadership from Team Axiogen on AI, machine learning, web development, cybersecurity, branding, and digital engineering.",
  openGraph: {
    title: "Insights & Blog — Team Axiogen",
    description:
      "Technical articles and insights from Team Axiogen on AI, web development, and digital engineering.",
    url: "https://team.axiogen.in/insights",
  },
  twitter: {
    title: "Insights & Blog — Team Axiogen",
    description:
      "Technical articles and insights from Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
