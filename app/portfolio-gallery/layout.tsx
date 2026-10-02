import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Gallery — Complete Project Archive | Team Axiogen",
  description:
    "Browse the complete project gallery of Team Axiogen — AI applications, software systems, mobile apps, cybersecurity tools, and digital products built for clients across industries.",
  keywords: [
    "software gallery",
    "software project gallery",
    "AI app examples",
    "mobile app showcase",
    "Team Axiogen projects archive",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Portfolio Gallery — Complete Project Archive | Team Axiogen",
    description:
      "Browse all projects by Team Axiogen — AI systems, software platforms, mobile applications, and cybersecurity.",
    url: "https://team.axiogen.in/portfolio-gallery",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Project Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Gallery — Team Axiogen",
    description: "Complete project gallery by Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/portfolio-gallery",
  },
};

export default function PortfolioGalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
