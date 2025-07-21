"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhyMVPSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      title: "Built for Speed & Scale",
      description: "Your MVP is developed using modern, scalable tech—ready to grow with your users and business.",
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "One Project. One Focus.",
      description: "We don't juggle clients. Your MVP gets our full attention, every step of the way.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Clarity-First MVP Design",
      description: "We turn complex ideas into simple, engaging interfaces that users actually enjoy using.",
      icon: "✨",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Built for Real-World Results",
      description: "We don't just build MVPs — we build traction. Funding, users, and growth start with the right product foundation.",
      icon: "📈",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/20 to-teal-500/20",
    },
  ];

  return (
    <section ref={sectionRef as any} id="why" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 glass-light rounded-full mb-4 sm:mb-6 backdrop-blur-sm ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-sm sm:text-base">Why Choose Us</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gray-900">Why Choose </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              mvplab
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We combine cutting-edge technology with proven development practices to deliver MVPs that stand out in the market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative ${isInView ? 'scroll-fade-up' : ''} ${isInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-30' : ''
              }`}></div>
              
              {/* Card */}
              <div className={`relative card-3d bg-white/90 backdrop-blur-sm border-2 ${
                hoveredIndex === index ? 'border-transparent gradient-border' : 'border-gray-100'
              }`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 transition-opacity duration-500 rounded-2xl ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl transform transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <span className="text-4xl filter drop-shadow-lg">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className={`mt-6 flex items-center text-sm font-semibold transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                      Learn more
                    </span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to build something amazing?</p>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}