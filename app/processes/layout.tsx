import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process — How Team Axiogen Builds Software",
  description:
    "Learn how Team Axiogen builds software — from discovery and architecture to development, testing, deployment, and ongoing support. Our proven process delivers high-quality results.",
  openGraph: {
    title: "Our Process — Team Axiogen",
    description:
      "From discovery to deployment — how Team Axiogen builds software.",
    url: "https://team.axiogen.in/processes",
  },
  twitter: {
    title: "Our Process — Team Axiogen",
    description: "How Team Axiogen builds software from start to finish.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/processes",
  },
};

export default function ProcessesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
