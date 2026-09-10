import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Culture — Engineering Excellence at Team Axiogen",
  description:
    "Discover Team Axiogen's engineering culture — craft obsession, remote-first workflows, async communication, and a relentless focus on shipping elegant, high-quality software.",
  openGraph: {
    title: "Our Culture — Team Axiogen",
    description:
      "Engineering excellence, craft obsession, and remote-first culture at Team Axiogen.",
    url: "https://team.axiogen.in/culture",
  },
  twitter: {
    title: "Our Culture — Team Axiogen",
    description: "Engineering culture and values at Team Axiogen.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/culture",
  },
};

export default function CultureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
