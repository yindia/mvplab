"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

export default function TestimonialsSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      content: "MVP delivered in 14 days. Conversion up 43%. Best decision for our startup.",
      author: "Vasu Srivastava",
      role: "Founder, Recutr.dev",
      image: "VS",
      rating: 5,
      highlight: "43% conversion increase",
    },
    {
      content: "From idea to funded startup in 3 weeks. The speed and quality were unmatched.",
      author: "Janit",
      role: "CEO, DataSherlock",
      image: "SC",
      rating: 5,
      highlight: "14 Days to MVP",
    },
    {
      content: "Our AI voice agent handles 5x more calls. Game-changing for our operations.",
      author: "Nakul",
      role: "CTO, The SaaS Company",
      image: "MR",
      rating: 5,
      highlight: "5x capacity increase",
    }
  ];

  const gradients = [
    "from-blue-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-blue-500",
    "from-pink-500 to-rose-500",
  ];

  return (
    <section ref={sectionRef as any} id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2240%22%20height%3D%2240%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2040%200%20L%200%200%200%2040%22%20fill%3D%22none%22%20stroke%3D%22rgba(0%2C0%2C0%2C0.02)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%2F%3E%3C%2Fsvg%3E')]"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-4 ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-gray-700 font-medium text-sm">Wall of Love</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isInView ? 'animate-text-reveal' : 'opacity-0'}`}>
            <span className="text-gray-900">Founders </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Love Us</span>
          </h2>
          <p className={`text-lg text-gray-600 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Join 50+ founders who shipped with us
          </p>
        </div>
        
        {/* Testimonials grid - Bento box style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className={`h-full p-6 bg-white rounded-2xl border transition-all duration-300 ${
                hoveredIndex === index
                  ? 'border-gray-300 shadow-xl transform -translate-y-1'
                  : 'border-gray-200 shadow-sm'
              }`}>
                {/* Header with avatar and info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white text-sm font-bold mr-3`}>
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                      <div className="text-gray-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                  {/* Rating stars */}
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Testimonial content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                
                {/* Highlight badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-600">
                  <svg className="w-3 h-3 mr-1.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {testimonial.highlight}
                </div>
              </div>
              
              {/* Hover accent */}
              {hoveredIndex === index && (
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradients[index % gradients.length]} opacity-5 pointer-events-none`}></div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className={`text-center mt-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <p className="text-gray-600 mb-4">Ready to join them?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Building Today
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}