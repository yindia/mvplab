import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyMVPSection from "@/components/WhyMVPSection";
import ServicesSection from "@/components/ServicesSection";
import VideoBackground from "@/components/VideoBackground";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhyMVPSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}