"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FounderSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef as any} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 glass-light rounded-full mb-6 backdrop-blur-sm ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">Leadership</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gray-900">Meet Our </span>
            <span className="gradient-text">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visionary leadership driving innovation in cloud-native technologies
          </p>
        </div>

        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto ${isInView ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 md:h-full overflow-hidden group order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=800&fit=crop"
                alt="Founder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              
              {/* Social Links Overlay */}
              <div className="absolute bottom-6 left-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors hover:scale-110 transform duration-300">
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors hover:scale-110 transform duration-300">
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-1 md:order-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Building the Future of Technology</h3>
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold">Founder & CEO</p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our founder brings exceptional experience as a core maintainer of major CNCF and Linux Foundation projects. 
                  With deep contributions to <span className="text-indigo-600 font-semibold">Kyverno.io</span> and{" "}
                  <span className="text-indigo-600 font-semibold">Flyte.org</span>, they've shaped critical infrastructure 
                  that powers modern cloud-native applications worldwide.
                </p>
                <p>
                  At <span className="text-purple-600 font-semibold">Union.ai</span>, they played a pivotal role in 
                  building the company from ground zero to a thriving enterprise, establishing robust engineering practices 
                  and scaling the platform to serve enterprise customers globally.
                </p>
                <p>
                  Their expertise extends to working with industry giants like <span className="text-orange-600 font-semibold">Toyota</span>, 
                  where they delivered transformative solutions that revolutionized operational efficiency and digital innovation 
                  in automotive technology.
                </p>
              </div>

              {/* Achievements */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="glass-light rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold gradient-text mb-1">CNCF</div>
                  <div className="text-sm text-gray-600">Core Maintainer</div>
                </div>
                <div className="glass-light rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold gradient-text mb-1">0→1</div>
                  <div className="text-sm text-gray-600">Startup Builder</div>
                </div>
              </div>
            </div>

          </div>

          {/* Key Highlights */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-b-3xl px-6 sm:px-8 md:px-10 py-6 md:py-8">
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Open Source Leadership</h4>
                <p className="text-gray-600 text-sm">Core maintainer of Kyverno.io & Flyte.org</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Enterprise Experience</h4>
                <p className="text-gray-600 text-sm">Built Union.ai from 0 to 1</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Industry Impact</h4>
                <p className="text-gray-600 text-sm">Transformed operations at Toyota</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote className="text-2xl text-gray-700 font-medium italic max-w-3xl mx-auto">
              "We believe every great idea deserves a chance to become reality. Our mission is to remove the technical barriers and help founders focus on what matters most - building products users love."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}