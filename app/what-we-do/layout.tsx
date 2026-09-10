import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — What Team Axiogen Does",
  description:
    "Team Axiogen offers AI development, machine learning, full-stack web & mobile apps, cybersecurity, cloud & DevOps, brand identity design, e-commerce solutions, and academic project development. Based in India.",
  openGraph: {
    title: "Services — What Team Axiogen Does",
    description:
      "AI development, web & mobile apps, cybersecurity, cloud solutions, and student projects by Team Axiogen.",
    url: "https://team.axiogen.in/what-we-do",
  },
  twitter: {
    title: "Services — What Team Axiogen Does",
    description:
      "AI, web development, cybersecurity, and cloud solutions by Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/what-we-do",
  },
};

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
