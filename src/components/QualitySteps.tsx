import { Card } from "@/components/ui/card";
import { ShieldCheck, Microscope, Package, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ShieldCheck,
    title: "Trusted Sourcing",
    desc: "We work hand-in-hand with verified farmers who follow traditional cultivation methods, ensuring authenticity from the soil itself.",
  },
  {
    icon: Microscope,
    title: "Rigorous Testing",
    desc: "Each batch undergoes multiple stages of cleaning, grading, and laboratory inspection to ensure zero contamination.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    desc: "Our automated packaging units use food-grade materials, preserving aroma, flavor, and freshness at every step.",
  },
  {
    icon: Truck,
    title: "Safe Export",
    desc: "With temperature-controlled logistics and airtight containers, we guarantee product safety until it reaches your kitchen.",
  },
];

const QualitySteps = () => (
  <section className="py-24 bg-gradient-to-b from-[#FFF8F2] to-[#FFECD1]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#B85C38] mb-4">
          From Fields to Flavors
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Every step in our process is guided by care, precision, and a commitment to excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center shadow-warm bg-white hover:shadow-lg transition-all duration-300 rounded-2xl">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#B85C38]/10 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-[#B85C38]" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QualitySteps;
