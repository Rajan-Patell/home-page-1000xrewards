
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PaymentMethodsSection } from "@/components/landing/PaymentMethodsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="mx-auto max-w-[1440px]">
          <HeroSection />
          <TrustedBySection />
          <FeaturesSection />
          <HowItWorksSection />
          <PaymentMethodsSection />
        </div>
        <FAQSection />
        <div className="mx-auto max-w-[1440px]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
