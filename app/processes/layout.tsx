import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Engineering Process — How Team Axiogen Ships Software",
  description:
    "Learn how Team Axiogen builds software — from discovery and architecture to development, testing, deployment, and ongoing support. Our proven process delivers high-quality results.",
  keywords: [
    "software development process",
    "agile engineering methodology",
    "architecture design process",
    "how to hire software agency",
    "Team Axiogen process",
    "production deployment workflow",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Our Process — Team Axiogen",
    description:
      "From discovery to deployment — how Team Axiogen builds software.",
    url: "https://team.axiogen.in/processes",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Engineering Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process — Team Axiogen",
    description: "How Team Axiogen builds software from start to finish.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/processes",
  },
};

export default function ProcessesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
