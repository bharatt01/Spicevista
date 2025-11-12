import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spices.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateProducts = () => {
    navigate("/products"); // route to products page
  };

  const handleNavigateContact = () => {
    navigate("/contact"); // route to contact page
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative py-20">
        <div className="max-w-3xl animate-fade-in-up pointer-events-auto">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6 border border-accent/30">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">30+ Years of Excellence</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            From Delhi's Heart to the World
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            Exporting the Essence of India
          </p>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            For over three decades, SpiceVista Exports has been a trusted name in
            authentic Indian spices. Now bringing that legacy to global kitchens in
            Europe, USA, and the Middle East.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleNavigateProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant text-lg px-8"
            >
              Explore Our Range
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleNavigateContact}
              className="border-2 border-primary-foreground text-orange-500 hover:bg-primary-foreground hover:text-secondary text-lg px-8"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
