import { motion } from "framer-motion";
import qualityBg from "@/assets/quality-hero.jpg";

const QualityHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={qualityBg}
        alt="Quality and Process"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
          Quality & Process
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white/90">
          Every spice that leaves our facility carries a legacy of trust, purity, and perfection.
        </p>
      </motion.div>
    </section>
  );
};

export default QualityHero;
