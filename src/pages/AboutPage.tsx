import React from "react";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import JourneyTimeline from "@/components/JourneyTimeline";
import ValuesSection from "@/components/ValuesSection";
import AboutCTA from "@/components/AboutCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
    <Header />
    <main className="pt-20">
      <AboutHero />
      <OurStory />
      <JourneyTimeline />
      <ValuesSection />
      <AboutCTA />
    </main>

    <Footer />
   </>
  );
};

export default AboutPage;
