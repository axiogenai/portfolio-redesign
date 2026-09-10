import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries & Sectors — Who Team Axiogen Works With",
  description:
    "Team Axiogen builds AI and software solutions across industries — healthcare, fintech, e-commerce, education, SaaS, real estate, media, and more. Explore the sectors we serve.",
  openGraph: {
    title: "Industries & Sectors — Team Axiogen",
    description:
      "AI and software solutions for healthcare, fintech, e-commerce, education, and more by Team Axiogen.",
    url: "https://team.axiogen.in/sectors",
  },
  twitter: {
    title: "Industries & Sectors — Team Axiogen",
    description: "Sectors and industries served by Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/sectors",
  },
};

export default function SectorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
