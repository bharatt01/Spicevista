import React from "react";

const AboutHero = () => {
  return (
    <section className="relative py-28 bg-gradient-to-tr from-[#E0523D]/10 via-[#FFD580]/10 to-[#E0523D]/10 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
          About <span className="text-foreground">SpiceVista</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From the bustling spice lanes of Delhi to kitchens across the globe, 
          we bring the authentic taste of India’s spice heritage to the world.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
