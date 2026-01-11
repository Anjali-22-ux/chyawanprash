import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "My family has been using this every morning for 3 months. We feel more energetic and the kids love the taste.",
  },
  {
    name: "Rajesh Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Finally found a Chyawanprash that feels authentic. The quality is noticeably better than mass-market brands.",
  },
  {
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Worth every rupee. One jar lasts our family the whole month. Simple, effective wellness.",
  },
  {
    name: "Amit Gupta",
    location: "Delhi",
    rating: 5,
    text: "I was skeptical at first, but after consistent daily use, I genuinely feel the difference in my energy levels.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl text-cream mt-4">
            Trusted by Families
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="card-premium p-8 md:p-12 rounded-3xl text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl text-cream mb-8 leading-relaxed">
              "{testimonials[current].text}"
            </blockquote>

            {/* Author */}
            <div>
              <p className="text-cream font-medium">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-cream hover:border-gold/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-gold w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-cream hover:border-gold/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
