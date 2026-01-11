import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroImage from "@/assets/chyawanprash-hero.png";

const highlights = [
  "Inspired by classical Ayurveda texts",
  "Carefully sourced premium herbs",
  "Traditional preparation methods",
  "Suitable for everyday use",
  "No artificial preservatives",
  "Designed for the whole family",
];

const ProductHighlights = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gold/10 blur-3xl" />
            </div>
            <img
              src={heroImage}
              alt="Premium Chyawanprash Product"
              className="relative z-10 w-64 md:w-80 mx-auto floating-slow"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">Product Details</span>
            <h2 className="font-display text-3xl md:text-5xl text-cream mt-4 mb-8">
              Crafted with Care
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-cream/90">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
