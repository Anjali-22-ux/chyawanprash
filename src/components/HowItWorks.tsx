import { motion } from "framer-motion";
import { Leaf, FlaskConical, UtensilsCrossed } from "lucide-react";

const steps = [
  {
    icon: Leaf,
    number: "01",
    title: "Traditional Herbs",
    description: "Carefully selected Ayurvedic herbs sourced from trusted origins.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Thoughtful Preparation",
    description: "Crafted following time-honored Ayurvedic preparation methods.",
  },
  {
    icon: UtensilsCrossed,
    number: "03",
    title: "One Spoon Daily",
    description: "Simple morning ritual. Just one spoon with warm water or milk.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px]" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">The Process</span>
          <h2 className="font-display text-3xl md:text-5xl text-cream mt-4">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full card-premium border-gold/20 mb-6">
                <step.icon className="w-10 h-10 text-gold" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-primary-foreground text-sm font-semibold flex items-center justify-center">
                  {step.number.split("")[1]}
                </span>
              </div>

              <h3 className="font-display text-xl text-cream mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
