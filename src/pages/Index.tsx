import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import ProblemSolution from "@/components/ProblemSolution";
import BenefitsSection from "@/components/BenefitsSection";
import ProductHighlights from "@/components/ProductHighlights";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import ValueReinforcement from "@/components/ValueReinforcement";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustIndicators />
      <ProblemSolution />
      <BenefitsSection />
      <ProductHighlights />
      <Testimonials />
      <HowItWorks />
      <ValueReinforcement />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
