import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const certs = [
  "FSSAI Certified",
  "ISO 22000:2018",
  "HACCP Compliance",
  "Spices Board India",
  "APEDA Registered",
];

const CertificationSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#FFECD1] to-[#FFF6E8] text-center">
    <div className="container mx-auto px-4">
      <h2 className="font-playfair text-4xl font-bold text-[#B85C38] mb-10">
        Certified for Excellence
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="px-8 py-4 border-2 border-[#B85C38]/30 rounded-full bg-white shadow-md hover:shadow-xl hover:bg-[#FFF4E5] transition-all duration-300">
              <span className="font-medium text-[#B85C38]">{c}</span>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-700 mt-8 max-w-2xl mx-auto">
        We proudly uphold globally recognized certifications — a testament to our unwavering
        dedication to hygiene, safety, and unmatched quality.
      </p>
    </div>
  </section>
);

export default CertificationSection;
