import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Software Engineering Insights | Team Axiogen",
  description:
    "Read practical engineering insights from Team Axiogen on AI development, software architecture, SaaS, cybersecurity, automation and building digital products.",
  keywords: [
    "AI engineering blog",
    "software architecture articles",
    "software performance guide",
    "machine learning tutorials India",
    "cybersecurity best practices",
    "Team Axiogen insights",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "AI & Software Engineering Insights | Team Axiogen",
    description:
      "Read practical engineering insights from Team Axiogen on AI development, software architecture, SaaS, cybersecurity, automation and building digital products.",
    url: "https://team.axiogen.in/insights",
    siteName: "Team Axiogen",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Technical Insights",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog — Team Axiogen",
    description:
      "Technical articles and insights from Team Axiogen on AI and software engineering.",
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
