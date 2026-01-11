import { motion } from "framer-motion";

const ProblemSolution = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">The Challenge</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mt-4 mb-6">
              Modern Life Demands More
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Busy schedules. Processed foods. Constant stress. Your body faces challenges our ancestors never imagined.
              </p>
              <p>
                Your immune system needs consistent, daily support—not quick fixes.
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-premium p-8 md:p-10 rounded-3xl glow-subtle"
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">The Solution</span>
            <h2 className="font-display text-3xl md:text-4xl text-cream mt-4 mb-6">
              Ancient Wisdom, Daily Ritual
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Chyawanprash has supported wellness for thousands of years. One spoon each morning. That's all it takes.
              </p>
              <p>
                Pure Ayurvedic herbs. No synthetic ingredients. Just nature's way of caring for you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
