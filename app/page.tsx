import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import SelectedWork from "@/components/SelectedWork";
import OurExpertise from "@/components/OurExpertise";
import ClientStory from "@/components/ClientStory";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AskAI from "@/components/AskAI";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

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
        <GetInTouch />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
