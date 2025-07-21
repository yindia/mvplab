"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timelineEvents = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Started mvplab with a mission to help startups launch faster and scale smarter.",
    icon: "🚀",
    color: "from-blue-400 to-blue-600",
  },
  {
    year: "2025",
    title: "First Client Success",
    description: "Delivered our first MVP in just 3 weeks, setting the standard for rapid development.",
    icon: "🎯",
    color: "from-green-400 to-green-600",
  },
  {
    year: "2025",
    title: "Team Assembly",
    description: "Assembled a team of cracked engineers, CNCF contributors and startup veterans.",
    icon: "👥",
    color: "from-purple-400 to-purple-600",
  },
  {
    year: "2025",
    title: "5+ Projects Pipeline",
    description: "Building MVPs across AI/ML, FinTech, Healthcare, and EdTech sectors.",
    icon: "📈",
    color: "from-orange-400 to-orange-600",
  },
  {
    year: "Future",
    title: "Scaling Together",
    description: "Committed to building long-term partnerships and helping startups reach new heights.",
    icon: "🌟",
    color: "from-pink-400 to-pink-600",
  },
];

export default function TimelineSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef as any} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 glass-light rounded-full mb-6 backdrop-blur-sm ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">Our Journey</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gray-900">Building the </span>
            <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From our humble beginnings to becoming a trusted partner for startups worldwide, 
            here's how we've grown.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
                } ${isInView ? 'scroll-fade-up in-view' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                  }`}>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${event.color} text-white`}>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer`}>
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className={`inline-flex flex-col items-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <p className="text-gray-600 mb-6 text-lg">
              Ready to be part of our next chapter?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Journey
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