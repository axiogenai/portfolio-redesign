import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI Systems & Digital Engineering | Team Axiogen",
  description:
    "Team Axiogen offers AI development, machine learning, digital platforms, mobile applications, cybersecurity, cloud architecture, brand identity design, and academic project development. Based in India.",
  keywords: [
    "AI development services",
    "machine learning studio",
    "digital platform engineering",
    "intelligent software systems",
    "mobile app development India",
    "cybersecurity architecture",
    "cloud infrastructure DevOps",
    "brand identity design",
    "student project development",
    "custom software engineering",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Services — AI Development & Digital Engineering | Team Axiogen",
    description:
      "AI development, digital platforms, mobile apps, cybersecurity, cloud solutions, and student projects by Team Axiogen.",
    url: "https://team.axiogen.in/what-we-do",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Services — AI & Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — What Team Axiogen Does",
    description:
      "AI, digital platforms, cybersecurity, and cloud solutions by Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/what-we-do",
  },
};

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
