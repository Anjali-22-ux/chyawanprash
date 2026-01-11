import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Leaf } from "lucide-react";
import heroImage from "@/assets/chyawanprash-hero.png";
import heroVideo from "@/assets/hero-video.mp4";

const AMAZON_LINK = "https://www.amazon.in/NID-Tea-Tablets-Green-60/dp/B0FH2HHDBL";

const floatingBadges = [
  { icon: Shield, text: "Daily Immunity", delay: 0.8 },
  { icon: Sparkles, text: "Vitality", delay: 1.0 },
  { icon: Leaf, text: "Ayurvedic Formula", delay: 1.2 },
];

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Video Background - fades in smoothly when loaded */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Subtle ambient particles - fewer, slower, calmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle-subtle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient glow - gentle breathing animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] z-[1]"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Brand - gentle fade only, no movement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Holy Ayurveda
          </motion.p>

          {/* Headline - subtle fade, minimal movement */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 max-w-4xl text-balance"
          >
            Your Daily Ritual for{" "}
            <span className="text-gradient-gold">Immunity & Strength</span>
          </motion.h1>

          {/* Product Image with floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
            className="relative my-8 md:my-12"
          >
            {/* Glow behind product - gentle breathing */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.03, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gold/10 blur-3xl" />
            </motion.div>

            {/* Product image - very subtle floating */}
            <motion.img
              src={heroImage}
              alt="Holy Ayurveda Premium Chyawanprash"
              className="relative z-10 w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
              animate={{ 
                y: [0, -6, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />

            {/* Floating benefit badges - calm fade in */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: badge.delay, ease: "easeOut" }}
                className={`absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full card-premium border-gold/20 
                  ${index === 0 ? "left-0 top-1/4 -translate-x-1/2" : ""}
                  ${index === 1 ? "right-0 top-1/3 translate-x-1/2" : ""}
                  ${index === 2 ? "left-1/4 bottom-0 translate-y-1/2" : ""}
                `}
              >
                <badge.icon className="w-4 h-4 text-gold" />
                <span className="text-sm text-cream whitespace-nowrap">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow px-10 py-4 rounded-full text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-100"
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
