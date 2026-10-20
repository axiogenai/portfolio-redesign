import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Team Axiogen | Leading Software, Web & Mobile App Company in Kolhapur",
  description:
    "Meet Team Axiogen, the leading software development and AI company headquartered in Kolhapur, Maharashtra. Founded by Aditya Patil (CEO), Aditya Minchekar, and Ajinkya More, engineering high-impact digital systems and enterprise platforms across India.",
  keywords: [
    "Team Axiogen founders",
    "Aditya Patil CEO",
    "Aditya Minchekar",
    "Ajinkya More",
    "software company Kolhapur",
    "best IT company in Kolhapur",
    "AI company Kolhapur",
    "top software company Maharashtra",
    "web developers Kolhapur",
    "tech company Kolhapur",
    "software engineering Sangli",
    "about Team Axiogen",
    "leading software engineering company",
    "ClinicOS founders",
  ],
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "About Team Axiogen | AI & Software Engineering",
    description:
      "Meet Team Axiogen, the leading software development and AI company headquartered in Kolhapur, Maharashtra. Founded by Aditya Patil (CEO), Aditya Minchekar, and Ajinkya More, engineering high-impact digital systems and enterprise platforms across India.",
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
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Team Axiogen",
    description:
      "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is the premier Software Development, Web & Mobile Apps, and Enterprise Systems Company in Kolhapur, Maharashtra, India.",
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
