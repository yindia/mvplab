"use client";

import { useState, useEffect } from "react";
import ParticleBackground from "./ParticleBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

export default function CTASection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('cta-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef as any} id="cta-section" className="section-padding relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-600 opacity-50 animate-gradient-shift" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Enhanced Particle Background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pattern-float" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Mouse-following spotlight effect */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated emoji decoration */}
          <div className={`text-6xl mb-8 ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="inline-block animate-rocket">🚀</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 ${isInView ? 'animate-text-reveal' : 'opacity-0'}`}>
            <span className="inline-block hover:animate-glitch" data-text="Let's Build">Let's Build</span>{' '}
            <span className="inline-block hover:animate-glitch" data-text="Together">Together</span>
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Ready to transform your vision into a market-ready product? 
            Let's discuss how we can help you launch faster and scale smarter.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0 ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 animate-pulse-slow"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-cal-namespace="30min"
              data-cal-link="mvplab/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              {/* 3D effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Book an Intro Call</span>
              <svg className="relative w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a
              href="/work"
              className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 hover:border-white/50 hover:scale-105"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              <span className="relative">View Our Work</span>
              <svg className="relative w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          {/* Animated trust indicators */}
          <div className={`mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 text-sm sm:text-base ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><AnimatedCounter end={5} />+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><AnimatedCounter end={98} />% Client Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><AnimatedCounter end={2} />-<AnimatedCounter end={4} /> Week Delivery</span>
            </div>
          </div>

          {/* Floating UI elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
}