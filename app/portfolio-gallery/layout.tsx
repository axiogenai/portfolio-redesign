import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Gallery — All Projects by Team Axiogen",
  description:
    "Browse the complete project gallery of Team Axiogen — AI applications, web platforms, mobile apps, cybersecurity tools, and digital products built for clients across industries.",
  openGraph: {
    title: "Portfolio Gallery — Team Axiogen",
    description:
      "Browse all projects by Team Axiogen — AI, web, mobile, and cybersecurity.",
    url: "https://team.axiogen.in/portfolio-gallery",
  },
  twitter: {
    title: "Portfolio Gallery — Team Axiogen",
    description: "Complete project gallery by Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/portfolio-gallery",
  },
};

export default function PortfolioGalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
