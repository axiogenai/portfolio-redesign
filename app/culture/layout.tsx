import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Culture & Engineering Values — Team Axiogen",
  description:
    "Discover Team Axiogen's engineering culture — craft obsession, remote-first workflows, async communication, and a relentless focus on shipping elegant, high-quality software.",
  keywords: [
    "engineering culture",
    "software craft values",
    "Team Axiogen culture",
    "async first engineering",
    "remote company values India",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Our Culture — Team Axiogen",
    description:
      "Engineering excellence, craft obsession, and remote-first culture at Team Axiogen.",
    url: "https://team.axiogen.in/culture",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Engineering Culture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Culture — Team Axiogen",
    description: "Engineering culture and values at Team Axiogen.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/culture",
  },
};

export default function CultureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
