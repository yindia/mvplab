"use client";

import { useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import TypewriterText from "./TypewriterText";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-aurora opacity-30"></div>
      
      {/* Interactive gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
            style={{ animation: 'bounce-in 0.8s ease-out' }}
          >
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-gray-800 font-semibold">
              🚀 <AnimatedCounter end={15} suffix="+" /> Projects Successfully Delivered
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="text-gray-900" style={{ animation: 'slide-in-bottom 0.8s ease-out 0.2s both' }}>
              We Build MVPs that
            </span>
            <br />
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                <TypewriterText text="Launch Fast" speed={100} />
              </span>
            </span>
            <span className="text-gray-900" style={{ animation: 'slide-in-bottom 0.8s ease-out 0.6s both' }}> and </span>
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 animate-gradient">
                <TypewriterText text="Scale Faster" speed={100} />
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>
            Transform your vision into a market-ready product with our expert team. 
            <span className="block mt-2 text-lg text-gray-500">From idea to launch in weeks, not months.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}>
            <a href="#contact" className="group relative btn-primary ripple magnetic-button">
              <span className="relative z-10 flex items-center">
                Book a Call
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a href="#portfolio" className="group relative overflow-hidden bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 gradient-border ripple magnetic-button">
              <span className="relative z-10 flex items-center">
                See Our Work
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Animated Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group" style={{ animation: 'bounce-in 0.8s ease-out 1.2s both' }}>
              <div className="text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center group" style={{ animation: 'bounce-in 0.8s ease-out 1.4s both' }}>
              <div className="text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center group" style={{ animation: 'bounce-in 0.8s ease-out 1.6s both' }}>
              <div className="text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={2} suffix="-4" />
              </div>
              <div className="text-gray-600 font-medium">Weeks to Launch</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 relative" style={{ animation: 'fadeInUp 1s ease-out 1.8s both' }}>
          <div className="relative mx-auto max-w-6xl">
            {/* Main hero card */}
            <div className="relative glass-light rounded-3xl p-2 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative rounded-2xl overflow-hidden">
                {/* Dashboard mockup */}
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                  <div className="bg-gray-900/50 backdrop-blur rounded-xl p-6 h-full">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 h-full">
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
                        <div className="h-2 bg-white/20 rounded mb-2 animate-pulse"></div>
                        <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
                        <div className="h-2 bg-white/20 rounded mb-2 animate-pulse"></div>
                        <div className="h-2 bg-white/10 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
                        <div className="h-2 bg-white/20 rounded mb-2 animate-pulse"></div>
                        <div className="h-2 bg-white/10 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating UI elements with glassmorphism */}
              <div className="absolute -top-8 -left-8 glass-light rounded-2xl shadow-2xl p-5 animate-float hover:scale-105 transition-transform cursor-pointer" style={{ animation: 'rotate-in 0.8s ease-out 2s both' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Lightning Fast</div>
                    <div className="text-sm text-gray-600">2-4 week delivery</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 glass-light rounded-2xl shadow-2xl p-5 animate-float hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '3s', animation: 'rotate-in 0.8s ease-out 2.2s both' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Production Ready</div>
                    <div className="text-sm text-gray-600">Scalable architecture</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-12 glass-light rounded-2xl shadow-2xl p-5 animate-float hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '5s', animation: 'rotate-in 0.8s ease-out 2.4s both' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Pixel Perfect</div>
                    <div className="text-sm text-gray-600">Beautiful design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}