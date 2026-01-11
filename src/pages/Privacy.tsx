import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 py-20 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-cream mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            Last updated: January 2026
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Information We Collect</h2>
          <p>
            This website is a promotional landing page that redirects visitors to the official Amazon product page. 
            We do not collect, store, or process any personal information directly.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Third-Party Links</h2>
          <p>
            This website contains links to Amazon.in. When you click on these links and make a purchase, 
            you will be subject to Amazon's privacy policy and terms of service.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Cookies</h2>
          <p>
            We may use basic analytics cookies to understand website traffic. These cookies do not collect 
            personal identification information.
          </p>
          
          <h2 className="font-display text-2xl text-cream mt-8">Contact</h2>
          <p>
            For any privacy-related inquiries, please contact us through our contact page.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;
