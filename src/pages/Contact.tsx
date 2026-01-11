import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 py-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-12">
            Have questions about our products? We're here to help.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.a
            href="mailto:support@holyayurveda.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-premium p-8 rounded-2xl flex flex-col items-center text-center hover:glow-subtle transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl text-cream mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm">support@holyayurveda.com</p>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-premium p-8 rounded-2xl flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-xl text-cream mb-2">Response Time</h3>
            <p className="text-muted-foreground text-sm">We typically respond within 24-48 hours</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-xl bg-secondary/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-cream">For order inquiries:</strong> Please contact Amazon customer service 
            directly as all orders are fulfilled through Amazon.
          </p>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
