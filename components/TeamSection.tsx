"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TechLogos } from "./TechLogos";

export default function TeamSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 });

  const achievements = [
    {
      icon: "⚡",
      title: "Lightning Fast Shipping",
      description: "Our team of cracked engineers ships production-ready code at unprecedented speed",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🏆",
      title: "CNCF Contributors",
      description: "Core maintainers of famous CNCF open source projects with global impact",
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      icon: "🚀",
      title: "Zero to One Experts",
      description: "Transform raw ideas into market-ready products with proven startup methodologies",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: "📈",
      title: "1 to 100 Scale Masters",
      description: "Scaled startups from MVP to millions in revenue with battle-tested architecture",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Average Experience" },
    { number: "50+", label: "Startups Launched" },
    { number: "5M+", label: "Lines of Code Shipped" },
    { number: "24h", label: "Average Response Time" },
  ];

  return (
    <section ref={sectionRef as any} id="team" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 glass-light rounded-full mb-6 backdrop-blur-sm ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">Meet the Team</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gray-900">Built by </span>
            <span className="gradient-text">Cracked Engineers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just developers. We're startup veterans, open source contributors, and scaling experts who live and breathe fast execution.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative group ${isInView ? 'scroll-fade-up in-view' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl ${achievement.gradient}"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-14 h-14 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <span className="text-2xl">{achievement.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`glass-light rounded-3xl p-8 md:p-12 ${isInView ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 animate-scale" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technologies We Master</h3>
          <div className="relative">
            {/* Gradient fade on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Horizontal scroll container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 px-4 pb-4">
                {[
                  { name: "React", logo: TechLogos.React, color: "from-cyan-400 to-cyan-600" },
                  { name: "Next.js", logo: TechLogos.Nextjs, color: "from-gray-700 to-gray-900" },
                  { name: "Python", logo: TechLogos.Python, color: "from-blue-500 to-yellow-500" },
                  { name: "Go", logo: TechLogos.Go, color: "from-cyan-500 to-blue-600" },
                  { name: "Kubernetes", logo: TechLogos.Kubernetes, color: "from-blue-600 to-blue-800" },
                  { name: "Docker", logo: TechLogos.Docker, color: "from-blue-400 to-blue-600" },
                  { name: "AWS", logo: TechLogos.AWS, color: "from-orange-500 to-orange-700" },
                  { name: "TypeScript", logo: TechLogos.TypeScript, color: "from-blue-600 to-blue-800" },
                  { name: "GraphQL", logo: TechLogos.GraphQL, color: "from-pink-500 to-purple-600" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 ${isInView ? 'animate-slide-in-bottom' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                  >
                    <div className="group flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-300 cursor-pointer">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        {tech.logo}
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to work with engineers who actually ship?</p>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Let's Talk
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}