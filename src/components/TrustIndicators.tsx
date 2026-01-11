import { motion } from "framer-motion";
import { Leaf, Award, Calendar, Users } from "lucide-react";

const trustItems = [
  { icon: Leaf, title: "100% Ayurvedic", subtitle: "Formulation" },
  { icon: Award, title: "Premium Quality", subtitle: "Ingredients" },
  { icon: Calendar, title: "Designed for", subtitle: "Daily Use" },
  { icon: Users, title: "Trusted by", subtitle: "Wellness Families" },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 card-premium rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg text-cream">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
