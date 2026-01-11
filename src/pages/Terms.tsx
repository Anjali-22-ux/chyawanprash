import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 py-20 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-cream mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            Last updated: January 2026
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">About This Website</h2>
          <p>
            This website is a promotional landing page for Holy Ayurveda products. We are not Amazon or 
            any e-commerce platform. All purchases are made through the official Amazon product page.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Product Information</h2>
          <p>
            The information provided on this website is for general informational purposes only. 
            Product descriptions, pricing, and availability are subject to change on Amazon.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Health Disclaimer</h2>
          <p>
            The statements on this website have not been evaluated by any regulatory authority. 
            Our products are not intended to diagnose, treat, cure, or prevent any disease. 
            Please consult your healthcare provider before starting any new supplement regimen.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Limitation of Liability</h2>
          <p>
            Holy Ayurveda shall not be liable for any indirect, incidental, or consequential damages 
            arising from the use of this website or the purchase of products through linked platforms.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
