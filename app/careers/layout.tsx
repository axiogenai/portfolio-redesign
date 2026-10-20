import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join Team Axiogen | Software & AI Company in Kolhapur",
  description:
    "Join Team Axiogen — a high-growth software engineering and AI company in Kolhapur, Maharashtra. We're looking for engineers, designers, and builders who obsess over craft and ship at high velocity.",
  keywords: [
    "AI engineer jobs India",
    "software jobs in Kolhapur",
    "IT jobs in Kolhapur",
    "web developer jobs Kolhapur",
    "software engineer careers Kolhapur",
    "software engineering jobs remote",
    "systems engineer careers India",
    "Team Axiogen careers",
    "remote tech jobs India",
    "machine learning engineer hiring",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Careers — Join Team Axiogen",
    description:
      "Join Team Axiogen. Remote-first, high-velocity engineering culture. We're hiring engineers and designers.",
    url: "https://team.axiogen.in/careers",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Careers at Team Axiogen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Join Team Axiogen",
    description:
      "Join Team Axiogen — remote-first, high-velocity engineering culture.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
