"use client";

import { useState } from "react";

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "MVP Standard Plan",
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
      name: "MVP Growth Retainer Plan",
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
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-light rounded-full mb-4 md:mb-6 backdrop-blur-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 font-bold text-sm sm:text-base">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto lg:items-center px-4 sm:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center space-x-2 animate-bounce">
                      <span className="text-sm">🔥</span>
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Card */}
              <div className={`relative h-full ${
                plan.popular 
                  ? 'glass-light shadow-2xl' 
                  : 'bg-white shadow-xl'
              } rounded-3xl overflow-hidden transform transition-all duration-500 ${
                hoveredPlan === index ? 'translate-y-[-8px]' : ''
              }`}>
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`}></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-6"></div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform`}>
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`w-full text-center py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl transform hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span>Book a Call</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 glass-light rounded-3xl backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need a custom solution?</h3>
              <p className="text-gray-600">Let's discuss your specific requirements</p>
            </div>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
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