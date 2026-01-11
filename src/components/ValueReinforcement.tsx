import { motion } from "framer-motion";
import { Calendar, Heart, Coins } from "lucide-react";

const ValueReinforcement = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-premium p-10 md:p-16 rounded-3xl text-center glow-subtle">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-8">
              <Calendar className="w-10 h-10 text-gold" />
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-cream mb-4">
              One Jar = One Month of Care
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Premium wellness that fits your lifestyle and budget. No subscriptions. No complicated routines.
            </p>

            {/* Value metrics */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-background/50">
                <Coins className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-2xl font-display text-cream">₹20/day</p>
                <p className="text-muted-foreground text-sm">Affordable care</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50">
                <Calendar className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-2xl font-display text-cream">30+ Days</p>
                <p className="text-muted-foreground text-sm">Per jar supply</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50">
                <Heart className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-2xl font-display text-cream">Daily</p>
                <p className="text-muted-foreground text-sm">Simple ritual</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueReinforcement;
