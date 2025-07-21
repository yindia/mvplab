export default function ServicesSection() {
  const services = [
    {
      title: "MVP Development",
      description: "Lean MVPs built fast with killer design, smooth UX, and real user value.",
      tags: ["AI", "SaaS", "Automations"],
      icon: "💡",
      color: "blue",
    },
    {
      title: "Voice Agent",
      description: "AI-powered voice agents that understand, engage, and deliver exceptional conversational experiences.",
      tags: ["AI Assistant", "Voice AI", "Natural Language"],
      icon: "🎙️",
      color: "purple",
    },
    {
      title: "Revamp Your Website",
      description: "Transform your old website into a high-converting, modern experience.",
      tags: ["UI/UX", "Prototyping", "SEO", "Landing Page Design"],
      icon: "🎨",
      color: "pink",
    },
    {
      title: "Design",
      description: "Modern, responsive designs that capture your brand essence.",
      tags: ["Next.js", "Branding"],
      icon: "✏️",
      color: "orange",
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
  };

  const iconBgClasses: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-400 to-blue-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
    pink: "bg-gradient-to-br from-pink-400 to-pink-600",
    orange: "bg-gradient-to-br from-orange-400 to-orange-600",
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full mb-6">
            <span className="text-purple-600 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we offer comprehensive services to bring your vision to life.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card h-full flex flex-col hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-14 h-14 ${iconBgClasses[service.color]} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-2xl animate-wiggle">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1.5 ${colorClasses[service.color]} rounded-full text-sm font-medium border`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}