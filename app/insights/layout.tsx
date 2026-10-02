import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Technical Blog — AI & Software Engineering | Team Axiogen",
  description:
    "Read insights, technical articles, and architectural teardowns from Team Axiogen on AI, machine learning, web development, cybersecurity, branding, and digital engineering.",
  keywords: [
    "AI engineering blog",
    "software architecture articles",
    "Next.js performance guide",
    "machine learning tutorials India",
    "cybersecurity best practices",
    "Team Axiogen insights",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Insights & Blog — Team Axiogen",
    description:
      "Technical articles and insights from Team Axiogen on AI, web development, and digital engineering.",
    url: "https://team.axiogen.in/insights",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Technical Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog — Team Axiogen",
    description:
      "Technical articles and insights from Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/insights",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
