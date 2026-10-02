import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Team Axiogen",
  description:
    "Team Axiogen privacy policy: How we handle client confidentiality, data protection, security protocols, and intellectual property.",
  authors: [{ name: "Team Axiogen", url: "https://team.axiogen.in" }],
  creator: "Team Axiogen",
  publisher: "Team Axiogen",
  openGraph: {
    title: "Privacy Policy — Team Axiogen",
    description: "Team Axiogen privacy policy and data governance.",
    url: "https://team.axiogen.in/privacy-policy",
    siteName: "team.axiogen.in",
    images: [
      {
        url: "/axiogen-logo.png",
        width: 1200,
        height: 630,
        alt: "Team Axiogen Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Team Axiogen",
    description: "Team Axiogen privacy policy and data governance.",
    images: ["/axiogen-logo.png"],
    creator: "@teamaxiogen",
  },
  alternates: {
    canonical: "https://team.axiogen.in/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
