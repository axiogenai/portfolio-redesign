import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Team Axiogen | Leadership, Mission & Founders",
  description:
    "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is an independent AI Automation & Systems Engineering Studio in India architecting autonomous AI models, ClinicOS, and high-performance digital platforms.",
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
    title: "About Us — Team Axiogen | Leadership & Mission",
    description:
      "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is an independent AI Automation & Systems Engineering Studio in India.",
    url: "https://team.axiogen.in/about-us",
    siteName: "team.axiogen.in",
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
