import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries & Sectors — AI & Software Solutions | Team Axiogen",
  description:
    "Team Axiogen builds AI and software solutions across industries — healthcare, fintech, e-commerce, education, SaaS, real estate, media, and more. Explore the sectors we serve.",
  keywords: [
    "fintech software development India",
    "healthcare AI solutions",
    "edtech platform development",
    "ecommerce website design",
    "B2B SaaS development India",
    "real estate software",
    "civic tech solutions",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Industries & Sectors — Who Team Axiogen Works With",
    description:
      "AI and software solutions for healthcare, fintech, e-commerce, education, and more by Team Axiogen.",
    url: "https://team.axiogen.in/sectors",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Industries Served by Team Axiogen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries & Sectors — Team Axiogen",
    description: "Sectors and industries served by Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/sectors",
  },
};

export default function SectorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
