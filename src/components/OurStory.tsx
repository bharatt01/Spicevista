import React from "react";
import spiceMarketImage from "@/assets/spice-market.jpg";

const OurStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={spiceMarketImage}
          alt="Traditional Delhi spice market"
          className="rounded-lg shadow-lg object-cover w-full h-[500px]"
        />
        <div>
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            SpiceVista Exports began over 30 years ago in the heart of Delhi, 
            where the aroma of tradition fills the air. What started as a small 
            spice business has grown into a global brand trusted for authenticity.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Our roots lie in the iconic Khari Baoli market — Asia’s largest spice hub. 
            Today, we blend our ancestral expertise with modern techniques to deliver 
            world-class spices across continents.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-lg font-playfair text-foreground bg-muted/40 py-4 rounded-r-lg">
            “Every spice we deliver carries the story of India — its soil, its sun, 
            and its centuries of flavor.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
