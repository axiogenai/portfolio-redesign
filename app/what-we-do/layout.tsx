import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI Development, Web Platforms & Engineering | Team Axiogen",
  description:
    "Team Axiogen offers AI development, machine learning, full-stack web & mobile apps, cybersecurity, cloud & DevOps, brand identity design, e-commerce solutions, and academic project development. Based in India.",
  keywords: [
    "AI development services",
    "machine learning studio",
    "full-stack web development",
    "Next.js web development",
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
      "AI development, web & mobile apps, cybersecurity, cloud solutions, and student projects by Team Axiogen.",
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
      "AI, web development, cybersecurity, and cloud solutions by Team Axiogen.",
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
