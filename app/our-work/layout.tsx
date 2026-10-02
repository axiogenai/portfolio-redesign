import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Case Studies | Team Axiogen",
  description:
    "Explore the portfolio of Team Axiogen — AI-powered applications, full-stack web platforms, mobile apps, cybersecurity tools, and digital engineering projects built for clients worldwide.",
  keywords: [
    "Team Axiogen portfolio",
    "AI projects India",
    "software case studies",
    "ClinicOS case study",
    "web development portfolio",
    "mobile app showcase",
    "cybersecurity tools portfolio",
    "digital engineering projects",
    "live client work",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Our Work — Projects by Team Axiogen",
    description:
      "Explore Team Axiogen's portfolio of AI applications, web platforms, mobile apps, and cybersecurity tools.",
    url: "https://team.axiogen.in/our-work",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Portfolio & Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Projects by Team Axiogen",
    description:
      "Explore Team Axiogen's portfolio of AI applications and digital platforms.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/our-work",
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
