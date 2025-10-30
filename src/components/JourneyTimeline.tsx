import React from "react";

const JourneyTimeline = () => {
  const milestones = [
    { year: "1990", text: "Founded in Old Delhi with a small spice shop." },
    { year: "2005", text: "Expanded operations to serve clients across India." },
    { year: "2015", text: "Launched international exports to the Middle East and Europe." },
    { year: "2024", text: "Recognized as a leading exporter of premium Indian spices." },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-12">
          Our Journey
        </h2>
        <div className="relative max-w-3xl mx-auto border-l-2 border-primary pl-8 space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-1 w-3 h-3 bg-primary rounded-full"></div>
              <h4 className="font-semibold text-foreground">{item.year}</h4>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
