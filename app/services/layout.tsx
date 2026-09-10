import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — What Team Axiogen Does",
  description:
    "Team Axiogen offers AI development, machine learning, full-stack web & mobile apps, cybersecurity, cloud & DevOps, brand identity design, and academic project development.",
  alternates: {
    canonical: "https://team.axiogen.in/what-we-do",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
