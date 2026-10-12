import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Team Axiogen | AI & Software Engineering in Kolhapur",
  description:
    "Meet Team Axiogen, an AI and software engineering studio serving Kolhapur, Sangli and businesses across Maharashtra and India. Learn about our founders, engineering approach and digital products.",
  keywords: [
    "Team Axiogen founders",
    "Aditya Patil CEO",
    "Aditya Minchekar",
    "Ajinkya More",
    "AI studio India",
    "tech company Kolhapur",
    "software engineering Sangli",
    "about Team Axiogen",
    "independent engineering studio",
    "ClinicOS founders",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "About Team Axiogen | AI & Software Engineering",
    description:
      "Meet Team Axiogen, an AI and software engineering studio serving Kolhapur, Sangli and businesses across Maharashtra and India. Learn about our founders, engineering approach and digital products.",
    url: "https://team.axiogen.in/about-us",
    siteName: "Team Axiogen",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Founders & Leadership",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Team Axiogen",
    description:
      "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is an independent AI Automation & Systems Engineering Studio in India.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/about-us",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
