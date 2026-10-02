import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Team Axiogen — Hire AI & Digital Engineers",
  description:
    "Get in touch with Team Axiogen for AI development, intelligent platforms, mobile applications, cybersecurity, cloud solutions, and student projects. Based in Kolhapur & Sangli, Maharashtra, India. Email: axiogen01@gmail.com",
  keywords: [
    "hire AI developers India",
    "contact Team Axiogen",
    "hire software engineers Kolhapur",
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
    title: "Contact Team Axiogen — Let's Build Something Remarkable",
    description:
      "Reach out to Team Axiogen for AI, intelligent platforms, cybersecurity, and digital engineering projects. Based in India.",
    url: "https://team.axiogen.in/contact",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Team Axiogen",
      },
    ],
    locale: "en_US",
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
