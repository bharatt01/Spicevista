import React from "react";
import QualityHero from "@/components/QualityHero";
import ProcessSteps from "@/components/ProcessSteps";
import CertificationSection from "@/components/CertificationsSection";
import QualityCTA from "@/components/QualityCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QualitySteps from "@/components/QualitySteps";

const QualityPage = () => {
  return (
    <>
    <Header />
    <main className="pt-20">
      <QualityHero />
      <QualitySteps />
      <ProcessSteps />
      <CertificationSection />
      <QualityCTA />
    </main>
    <Footer />
    </>
  );
};

export default QualityPage;
