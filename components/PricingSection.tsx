"use client";

import { useState } from "react";
import { usePostHog } from "@/hooks/usePostHog";

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const { trackButtonClick, trackEvent } = usePostHog();

  const plans = [
    {
      name: "MVP Standard",
      price: "$1,999",
      period: "/ project",
      description: "Perfect for validating your idea quickly",
      features: [
        "Core features only",
        "Basic UI/UX design",
        "2 weeks development",
        "Basic testing",
        "Deployment support",
        "1 month support",
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-800",
      bgGradient: "from-gray-50 to-gray-100",
      iconGradient: "from-gray-400 to-gray-600",
    },
    {
      name: "MVP Growth",
      price: "$2,999",
      period: "/ project",
      description: "For founders ready to scale fast",
      features: [
        "All MVP features",
        "Advanced UI/UX design",
        "Continuous development",
        "Comprehensive testing",
        "Performance optimization",
        "3 months support",
        "Analytics integration",
        "Basic SEO setup",
      ],
      popular: true,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconGradient: "from-blue-400 to-indigo-600",
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-light rounded-full mb-4 md:mb-6 backdrop-blur-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 font-bold text-sm sm:text-base">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 md:-top-5 left-0 right-0 flex justify-center z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold shadow-2xl flex items-center space-x-1 animate-bounce">
                      <span className="text-[10px] sm:text-xs md:text-sm">🔥</span>
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Card */}
              <div className={`relative h-full ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-50/50 to-purple-50/50 shadow-2xl border border-blue-200' 
                  : 'bg-white shadow-xl'
              } rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500`}>
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`}></div>
                <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 sm:-translate-y-24 sm:translate-x-24 md:-translate-y-32 md:translate-x-32"></div>
                
                {/* Content */}
                <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8">
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1 sm:ml-2 text-sm sm:text-base md:text-lg">{plan.period}</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-4 sm:mt-6"></div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform`}>
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[13px] sm:text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`w-full text-center py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-[13px] sm:text-sm md:text-base transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl transform hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      trackButtonClick('Book a Call', `Pricing - ${plan.name}`);
                      trackEvent('pricing_plan_selected', { plan_name: plan.name, plan_price: plan.price });
                    }}
                  >
                    <span>Book a Call</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                
                {/* Hover glow effect */}
                {hoveredPlan === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-5 pointer-events-none`}></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:inline-flex max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Need a custom solution?</h3>
              <p className="text-sm sm:text-base text-gray-600">Let's discuss your specific requirements</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              onClick={() => trackButtonClick('Get Custom Quote', 'Pricing - Custom')}
            >
              <span>Get Custom Quote</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}