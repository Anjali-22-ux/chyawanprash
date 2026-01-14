import { motion } from "framer-motion";

const AMAZON_LINK = "https://www.amazon.in/dp/B0GGC4YB5S";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px]" />

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-6">
            One Jar. One Month.{" "}
            <span className="text-gradient-gold">Daily Immunity Ritual.</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Lifestyle-friendly wellness that fits your budget and busy schedule.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow px-12 py-5 rounded-full text-xl font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-100"
            >
              <span className="relative z-10">Order Now</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Check today's Amazon price • Fulfilled by Amazon
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
