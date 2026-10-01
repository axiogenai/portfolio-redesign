import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Team Axiogen",
  description:
    "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is an independent AI Automation & Systems Engineering Studio in India architecting autonomous AI models, ClinicOS, and high-performance digital platforms.",
  openGraph: {
    title: "About Us — Team Axiogen",
    description:
      "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is an independent AI Automation & Systems Engineering Studio in India architecting autonomous AI models, ClinicOS, and high-performance digital platforms.",
    url: "https://team.axiogen.in/about-us",
  },
  twitter: {
    title: "About Us — Team Axiogen",
    description:
      "Founded by Aditya Patil (Founder & CEO), Aditya Minchekar (Co-Founder), and Ajinkya More (Co-Founder), Team Axiogen is an independent AI Automation & Systems Engineering Studio in India.",
  },
  alternates: {
    canonical: "https://team.axiogen.in/about-us",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
