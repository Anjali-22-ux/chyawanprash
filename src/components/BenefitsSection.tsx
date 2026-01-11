import { motion } from "framer-motion";
import { Shield, Zap, Leaf, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Supports Daily Immunity",
    description: "Gentle, consistent support for your body's natural defenses throughout the year.",
  },
  {
    icon: Zap,
    title: "Boosts Energy & Vitality",
    description: "Feel more energized naturally without artificial stimulants or caffeine.",
  },
  {
    icon: Leaf,
    title: "Ayurvedic, Not Synthetic",
    description: "Pure herbal formulation based on time-tested Ayurvedic principles.",
  },
  {
    icon: Wallet,
    title: "Affordable Daily Wellness",
    description: "Premium care for less than ₹20 a day. Wellness shouldn't be expensive.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl text-cream mt-4">
            Benefits That Matter
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 card-premium rounded-2xl transition-all duration-300 hover:glow-subtle"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
