import { motion } from "framer-motion";
import { Shield, Sparkles, Leaf, Heart } from "lucide-react";
import heroImage from "@/assets/chyawanprash-hero.png";

const AMAZON_LINK = "https://www.amazon.in/NID-Tea-Tablets-Green-60/dp/B0FH2HHDBL";

const floatingBadges = [
  { icon: Shield, text: "Daily Immunity", delay: 0 },
  { icon: Sparkles, text: "Vitality", delay: 0.2 },
  { icon: Leaf, text: "Ayurvedic Formula", delay: 0.4 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Holy Ayurveda
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 max-w-4xl text-balance"
          >
            Your Daily Ritual for{" "}
            <span className="text-gradient-gold">Immunity & Strength</span>
          </motion.h1>

          {/* Product Image with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative my-8 md:my-12"
          >
            {/* Glow behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gold/10 blur-3xl pulse-glow" />
            </div>

            {/* Product image */}
            <img
              src={heroImage}
              alt="Holy Ayurveda Premium Chyawanprash"
              className="relative z-10 w-64 md:w-80 lg:w-96 h-auto floating drop-shadow-2xl"
            />

            {/* Floating benefit badges */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + badge.delay }}
                className={`absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full card-premium border-gold/20 
                  ${index === 0 ? "left-0 top-1/4 -translate-x-1/2 floating" : ""}
                  ${index === 1 ? "right-0 top-1/3 translate-x-1/2 floating-delayed" : ""}
                  ${index === 2 ? "left-1/4 bottom-0 translate-y-1/2 floating-slow" : ""}
                `}
              >
                <badge.icon className="w-4 h-4 text-gold" />
                <span className="text-sm text-cream whitespace-nowrap">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 mb-8"
          >
            <p className="text-xl md:text-2xl font-display text-cream">
              Daily immunity support for less than{" "}
              <span className="text-gradient-gold font-semibold">₹20 a day</span>
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              One jar lasts 30+ days • Simple daily wellness ritual
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow px-10 py-4 rounded-full text-lg font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-100"
            >
              <span className="relative z-10">Order Now</span>
            </a>
            <p className="text-muted-foreground text-xs">
              Check today's Amazon price • Fulfilled by Amazon
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
