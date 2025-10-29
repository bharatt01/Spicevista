import { Card } from "@/components/ui/card";
import qualityImage from "@/assets/quality-control.jpg";
import { ShieldCheck, Microscope, Package, Truck } from "lucide-react";

const qualitySteps = [
  {
    icon: ShieldCheck,
    title: "Trusted Sourcing",
    description: "Direct procurement from verified farmers and trusted suppliers",
  },
  {
    icon: Microscope,
    title: "Rigorous Testing",
    description: "Advanced cleaning, grading, and quality inspection processes",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    description: "State-of-the-art facilities meeting international food safety standards",
  },
  {
    icon: Truck,
    title: "Safe Export",
    description: "Secure logistics ensuring freshness from our facility to your door",
  },
];

const certifications = [
  "FSSAI Certified",
  "ISO Compliant",
  "HACCP Standards",
  "Spices Board India",
  "APEDA Registered",
];

const Quality = () => {
  return (
    <section id="quality" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quality & Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uncompromising standards from farm to container
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              {qualitySteps.map((step, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-warm transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in">
            <img
              src={qualityImage}
              alt="Quality control process"
              className="rounded-lg shadow-warm w-full object-cover h-[600px]"
            />
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Our Certifications & Standards
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-background rounded-full border border-primary/30 text-foreground font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {cert}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              We adhere to strict hygiene protocols and international food safety
              standards, ensuring every batch meets the highest quality benchmarks
              for global markets.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Quality;
