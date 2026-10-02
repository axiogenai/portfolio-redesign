import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding FAQs & Visual Identity Guidelines — Team Axiogen",
  description:
    "Everything about Team Axiogen's brand identity — logo usage, color palette, typography, brand voice, and visual guidelines for partners and collaborators.",
  keywords: [
    "brand identity guidelines",
    "logo design FAQs",
    "visual system standards",
    "rebranding process",
    "brand book guidelines India",
    "typography and color systems",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Branding FAQs — Brand Identity Guidelines | Team Axiogen",
    description:
      "Brand identity guidelines, logo usage, and visual standards for Team Axiogen.",
    url: "https://team.axiogen.in/branding-faqs",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Branding Guidelines",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding FAQs — Team Axiogen",
    description: "Brand identity guidelines for Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/branding-faqs",
  },
};

export default function BrandingFaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
