"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: "MVP in 14 Days",
      subtitle: "Ship Fast, Learn Faster",
      description: "From idea to launch in 2 weeks. We build lean MVPs that validate your assumptions and get real user feedback.",
      features: [
        "Product strategy & roadmap",
        "Full-stack development",
        "User analytics built-in",
        "Launch support"
      ],
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-400",
      stats: { number: "14", label: "days to launch" },
    },
    {
      title: "AI Voice Agents",
      subtitle: "Your 24/7 AI Employee",
      description: "Build conversational AI that handles customer calls, books appointments, and scales your operations without hiring.",
      features: [
        "Natural conversation flow",
        "Multi-language support",
        "CRM integration",
        "Real-time analytics"
      ],
      icon: "🤖",
      gradient: "from-purple-500 to-pink-400",
      stats: { number: "95%", label: "call success rate" },
    },
    {
      title: "Growth Engineering",
      subtitle: "Scale What Works",
      description: "Take your validated MVP to the next level with performance optimization, feature expansion, and growth infrastructure.",
      features: [
        "Performance optimization",
        "Feature development",
        "A/B testing setup",
        "Growth analytics"
      ],
      icon: "📈",
      gradient: "from-green-500 to-emerald-400",
      stats: { number: "3x", label: "faster scaling" },
    },
    {
      title: "Technical Co-founder",
      subtitle: "Your CTO Partner",
      description: "Get a technical partner who codes, strategizes, and scales with you. Perfect for non-technical founders.",
      features: [
        "Technical leadership",
        "Architecture decisions",
        "Team building support",
        "Investor pitch tech"
      ],
      icon: "👥",
      gradient: "from-orange-500 to-red-400",
      stats: { number: "5%", label: "equity partnership" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%2F%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-white font-medium text-sm">Not Your Average Dev Shop</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-text-reveal' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              We Build Products,
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Not Just Code
            </span>
          </h2>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Four ways we help founders go from zero to one
          </p>
        </div>
        {/* Service cards in a modern grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveService(index)}
              className={`group relative cursor-pointer ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-full p-6 rounded-2xl border transition-all duration-500 ${
                activeService === index
                  ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-white/30 scale-105'
                  : 'bg-gray-900/30 border-white/10 hover:border-white/20'
              } backdrop-blur-sm`}>
                {/* Icon and title */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 transform transition-transform group-hover:rotate-6`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.subtitle}</p>
                </div>
                
                {/* Stats */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {service.stats.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {service.stats.label}
                  </div>
                </div>
                
                {/* Description (hidden on mobile, shown on hover) */}
                <p className="text-sm text-gray-400 line-clamp-3 mb-4 lg:hidden">
                  {service.description}
                </p>
                
                {/* View details link */}
                <div className="flex items-center text-sm font-medium group-hover:text-white transition-colors">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                    Learn more
                  </span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Active indicator */}
              {activeService === index && (
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-10 blur-xl`}></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Detailed view for active service */}
        <div className={`mt-12 max-w-4xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${services[activeService].gradient} text-white text-sm font-medium mb-4`}>
                  {services[activeService].icon} {services[activeService].subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{services[activeService].title}</h3>
                <p className="text-gray-400 mb-6">{services[activeService].description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-white font-medium hover:opacity-80 transition-opacity"
                >
                  <span className="text-lg">Let's talk</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}