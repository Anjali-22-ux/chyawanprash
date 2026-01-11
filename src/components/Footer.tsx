import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-brown-deep border-t border-border/50">
      <div className="container px-4">
        {/* Disclaimer */}
        <div className="text-center mb-10 p-6 rounded-xl bg-secondary/30 max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <strong className="text-cream">Important:</strong> This website is not Amazon or Flipkart. 
            We redirect to the official Amazon product page for secure purchasing.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-gold transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-gold transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Brand */}
        <div className="text-center">
          <p className="text-gold font-display text-xl mb-2">Holy Ayurveda</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Holy Ayurveda. All rights reserved.
          </p>
        </div>

        {/* Health disclaimer */}
        <div className="mt-10 pt-8 border-t border-border/30 max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground/70 text-center leading-relaxed">
            These statements have not been evaluated by any regulatory authority. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            Please consult your healthcare provider before starting any new supplement.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
