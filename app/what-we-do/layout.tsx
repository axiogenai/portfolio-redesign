import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, Website & Software Development Services in Kolhapur | Axiogen",
  description:
    "Explore Team Axiogen services: AI agent development, business automation, custom software, SaaS platforms, website and mobile app development, cloud engineering and cybersecurity.",
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
    title: "AI & Software Development Services | Team Axiogen",
    description:
      "Explore Team Axiogen services: AI agent development, business automation, custom software, SaaS platforms, website and mobile app development, cloud engineering and cybersecurity.",
    url: "https://team.axiogen.in/what-we-do",
    siteName: "Team Axiogen",
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
