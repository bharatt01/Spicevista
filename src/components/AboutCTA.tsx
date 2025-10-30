import React from "react";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-center text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold mb-6">
          Join the SpiceVista Family
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with us to bring the purest, most flavorful Indian spices to your
          region. Experience excellence — one pinch at a time.
        </p>
        <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default AboutCTA;
