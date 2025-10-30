import React from "react";
import { Button } from "@/components/ui/button";

const QualityCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-center text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-6">
          Excellence You Can Taste
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Every pinch of SpiceVista spice is a promise — of purity, passion, 
          and perfection. Partner with us and experience the true flavor of India.
        </p>
        <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default QualityCTA;
