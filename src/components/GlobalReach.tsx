import { Card } from "@/components/ui/card";
import { Globe2, Package, Users, TrendingUp } from "lucide-react";

const regions = [
  { name: "Europe", countries: "UK, Germany, France, Netherlands" },
  { name: "North America", countries: "USA, Canada" },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
];

const strengths = [
  {
    icon: Package,
    title: "Competitive Pricing",
    description: "Direct sourcing ensures best value for our partners",
  },
  {
    icon: TrendingUp,
    title: "Consistent Supply",
    description: "Reliable year-round availability through established networks",
  },
  {
    icon: Users,
    title: "Flexible Solutions",
    description: "Retail and bulk packaging tailored to your requirements",
  },
  {
    icon: Globe2,
    title: "Private Labeling",
    description: "Build your brand with our quality products",
  },
];

const GlobalReach = () => {
  return (
    <section id="global" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Global Reach
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exporting India's authentic flavours to kitchens worldwide
          </p>
        </div>

        {/* World Map Visual */}
        <div className="mb-16 relative">
          <Card className="p-12 bg-gradient-to-br from-secondary/10 to-primary/10 border-primary/20">
            <div className="text-center mb-8">
              <Globe2 className="h-20 w-20 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Our Export Markets
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 text-center shadow-warm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="font-semibold text-lg text-foreground mb-2">
                    {region.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{region.countries}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <div className="inline-block bg-card rounded-lg p-8 shadow-warm max-w-3xl border border-primary/20">
            <p className="font-playfair text-2xl italic text-foreground">
              "Our mission is to make India's authentic flavours available to every
              kitchen across the world."
            </p>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <strength.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {strength.title}
              </h3>
              <p className="text-muted-foreground text-sm">{strength.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
