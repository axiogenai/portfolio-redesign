import React from "react";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import SelectedWork from "@/components/SelectedWork";
import OurExpertise from "@/components/OurExpertise";
import ClientStory from "@/components/ClientStory";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AskAI from "@/components/AskAI";
import LiveVisitors from "@/components/LiveVisitors";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Development & Software Company in Kolhapur | Team Axiogen",
  description: "Team Axiogen builds AI agents, custom software, SaaS platforms, websites, mobile apps and business automation systems for startups and businesses in Kolhapur, Sangli and across India.",
  alternates: { canonical: "https://team.axiogen.in/" },
  openGraph: {
    title: "Team Axiogen | AI Development & Software Engineering",
    description: "AI agents, SaaS, custom software and automation systems engineered in Maharashtra, India.",
    url: "https://team.axiogen.in/",
    siteName: "Team Axiogen",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/axiogen-logo.png", width: 1200, height: 630, alt: "Team Axiogen AI and Software Engineering Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Axiogen | AI Development & Software Engineering",
    description: "AI agents, SaaS, custom software and automation systems engineered in Maharashtra, India.",
    images: ["/axiogen-logo.png"],
  },
};

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background text-foreground selection:bg-[#FF6B42] selection:text-white">
        <Navbar />
        <Hero />
        <WhoWeAre />
        <SelectedWork />
        <OurExpertise />
        <ClientStory />
        <InfiniteMarquee />
        <AskAI />
        <LiveVisitors />
        <GetInTouch />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
