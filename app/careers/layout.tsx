import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join Team Axiogen",
  description:
    "Join Team Axiogen — a remote-first AI & digital engineering studio from India. We're looking for engineers, designers, and builders who obsess over craft and ship at high velocity.",
  openGraph: {
    title: "Careers — Join Team Axiogen",
    description:
      "Join Team Axiogen. Remote-first, high-velocity engineering culture. We're hiring engineers and designers.",
    url: "https://team.axiogen.in/careers",
  },
  twitter: {
    title: "Careers — Join Team Axiogen",
    description:
      "Join Team Axiogen — remote-first, high-velocity engineering culture.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
