import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding FAQs — Brand Identity Guidelines | Team Axiogen",
  description:
    "Everything about Team Axiogen's brand identity — logo usage, color palette, typography, brand voice, and visual guidelines for partners and collaborators.",
  openGraph: {
    title: "Branding FAQs — Team Axiogen",
    description:
      "Brand identity guidelines, logo usage, and visual standards for Team Axiogen.",
    url: "https://team.axiogen.in/branding-faqs",
  },
  twitter: {
    title: "Branding FAQs — Team Axiogen",
    description: "Brand identity guidelines for Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/branding-faqs",
  },
};

export default function BrandingFaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
