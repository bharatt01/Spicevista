import React from "react";
import factoryImage from "@/assets/factory.jpg";
import exportImage from "@/assets/export.jpg";
import teamImage from "@/assets/team.jpg";

const ValuesSection = () => {
  const values = [
    {
      title: "Quality First",
      desc: "We follow rigorous sourcing and purity checks to ensure every spice meets the highest standards.",
      img: factoryImage,
    },
    {
      title: "Global Authenticity",
      desc: "We deliver the same authentic Indian aroma to homes and restaurants worldwide.",
      img: exportImage,
    },
    {
      title: "People & Passion",
      desc: "Behind every batch is a passionate team preserving India’s spice legacy.",
      img: teamImage,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-10">
          Our Mission & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white/90"
            >
              <img src={value.img} alt={value.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
