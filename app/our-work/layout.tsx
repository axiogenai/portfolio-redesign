import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Projects by Team Axiogen",
  description:
    "Explore the portfolio of Team Axiogen — AI-powered applications, full-stack web platforms, mobile apps, cybersecurity tools, and digital engineering projects built for clients worldwide.",
  openGraph: {
    title: "Our Work — Projects by Team Axiogen",
    description:
      "Explore Team Axiogen's portfolio of AI applications, web platforms, mobile apps, and cybersecurity tools.",
    url: "https://team.axiogen.in/our-work",
  },
  twitter: {
    title: "Our Work — Projects by Team Axiogen",
    description:
      "Explore Team Axiogen's portfolio of AI applications and digital platforms.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/our-work",
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
