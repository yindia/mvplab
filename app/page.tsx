"use client";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyMVPSection from "@/components/WhyMVPSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { getCalApi } from "@calcom/embed-react";
import { use, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("floatingButton", {"calLink":"mvplab/30min","config":{"layout":"month_view"}});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
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