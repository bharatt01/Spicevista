import { motion } from "framer-motion";
import spiceProcess from "@/assets/quality-control.jpg";

const stages = [
  "Sourcing from trusted farms",
  "Sun drying and cleaning",
  "Precision grading and sorting",
  "Quality testing and certification",
  "Packaging and export handling",
];

const ProcessSteps = () => (
  <section className="py-24 relative bg-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.img
        src={spiceProcess}
        alt="Spice processing"
        className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div>
        <h2 className="font-playfair text-4xl font-bold text-[#B85C38] mb-6">
          Our Journey of Purity
        </h2>
        <p className="text-gray-700 mb-8">
          Every batch of spices passes through a detailed and transparent process that ensures global quality standards and authentic Indian taste.
        </p>

        <ul className="space-y-4 border-l-4 border-[#B85C38]/40 pl-6">
          {stages.map((stage, i) => (
            <motion.li
              key={i}
              className="text-gray-800 font-medium relative"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-8 top-1 w-3 h-3 bg-[#B85C38] rounded-full"></span>
              {stage}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ProcessSteps;
