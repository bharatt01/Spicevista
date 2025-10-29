import { Award, Globe, MapPin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Award,
    title: "30+ Years of Legacy",
    description: "Three decades of expertise in spice trading",
  },
  {
    icon: MapPin,
    title: "Sourced from India's Finest",
    description: "Direct from Delhi's traditional spice markets",
  },
  {
    icon: Globe,
    title: "Exporting Globally",
    description: "Serving Europe, USA & Middle East",
  },
  {
    icon: CheckCircle,
    title: "Quality Standards",
    description: "Stringent international quality compliance",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
