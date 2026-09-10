import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Meet Team Axiogen",
  description:
    "Learn about Team Axiogen — an AI & digital engineering studio from Kolhapur, India. Meet the engineers and designers building intelligent software systems, bespoke AI models, and high-performance digital platforms.",
  openGraph: {
    title: "About Us — Meet Team Axiogen",
    description:
      "Meet the engineers and designers behind Team Axiogen. We build AI systems, full-stack platforms, and cybersecurity architectures from India.",
    url: "https://team.axiogen.in/about-us",
  },
  twitter: {
    title: "About Us — Meet Team Axiogen",
    description:
      "Meet the engineers and designers behind Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/about-us",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
