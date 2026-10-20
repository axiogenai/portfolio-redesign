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
  title: "Best Software Development Company in Kolhapur | Web, Mobile & Enterprise Apps | Team Axiogen",
  description: "Team Axiogen is the #1 software development company in Kolhapur, Maharashtra. Top-rated IT company building custom web applications, mobile apps (Android/iOS), enterprise ERP & CRM, AI agent automation, and SaaS platforms.",
  keywords: [
    "software company in Kolhapur",
    "software development company Kolhapur",
    "best software company in Kolhapur",
    "top IT company in Kolhapur",
    "web development company Kolhapur",
    "website design company Kolhapur",
    "custom software development Kolhapur",
    "mobile app development company Kolhapur",
    "AI company Kolhapur",
    "AI development company Kolhapur",
    "ERP CRM software Kolhapur",
    "manufacturing software Kolhapur MIDC",
    "software company Sangli",
  ],
  alternates: { canonical: "https://team.axiogen.in/" },
  openGraph: {
    title: "Team Axiogen | #1 Software Development Company in Kolhapur",
    description: "AI agents, SaaS, custom software and automation systems engineered in Maharashtra, India.",
    url: "https://team.axiogen.in/",
    siteName: "Team Axiogen",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/axiogen-logo.png", width: 1200, height: 630, alt: "Team Axiogen #1 Software, Web & Mobile App Development Company in Kolhapur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Axiogen | #1 Software Development Company in Kolhapur",
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
