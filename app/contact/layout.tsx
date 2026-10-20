import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact #1 Software & AI Company in Kolhapur | Team Axiogen",
  description:
    "Contact Team Axiogen to discuss AI development, custom software, SaaS, websites, mobile apps and business automation. Serving Kolhapur, Sangli and clients across India.",
  keywords: [
    "hire AI developers India",
    "contact Team Axiogen",
    "hire software engineers Kolhapur",
    "software company contact Kolhapur",
    "top IT company in Kolhapur contact",
    "web developers in Kolhapur contact",
    "get software quote Kolhapur",
    "software project inquiry",
    "AI consulting contact",
    "hire systems engineer India",
    "AI engineering inquiry",
    "freelance AI engineer India",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Contact Team Axiogen | AI & Software Projects",
    description:
      "Contact Team Axiogen to discuss AI development, custom software, SaaS, websites, mobile apps and business automation. Serving Kolhapur, Sangli and clients across India.",
    url: "https://team.axiogen.in/contact",
    siteName: "Team Axiogen",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Team Axiogen",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Team Axiogen",
    description:
      "Reach out to Team Axiogen for AI, intelligent platforms, and digital engineering.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
