import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Team Axiogen — Let's Build Something Remarkable",
  description:
    "Get in touch with Team Axiogen for AI development, web & mobile apps, cybersecurity, cloud solutions, and student projects. Based in Kolhapur & Sangli, Maharashtra, India. Email: axiogen01@gmail.com",
  openGraph: {
    title: "Contact Team Axiogen",
    description:
      "Reach out to Team Axiogen for AI, web development, cybersecurity, and digital engineering projects. Based in India.",
    url: "https://team.axiogen.in/contact",
  },
  twitter: {
    title: "Contact Team Axiogen",
    description:
      "Reach out to Team Axiogen for AI, web development, and digital engineering.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
