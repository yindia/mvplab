export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "Working with this team was a game-changer for our startup. The designs not only looked incredible but directly contributed to our conversion rates increasing by 43%. Worth every penny.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "Vorkel AI",
      image: "SC",
      gradient: "from-blue-400 to-purple-600",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6">
            <span className="text-orange-600 font-medium">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Quote decoration */}
              <div className="absolute -top-10 -left-10 text-9xl text-blue-100 font-serif select-none">"</div>
              
              <div className="card relative z-10 text-center p-10 lg:p-12">
                <div className="mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${testimonial.gradient} rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {testimonial.image}
                  </div>
                </div>
                
                <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="font-bold text-gray-900 text-lg">
                    — {testimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
                
                {/* Success metric badge */}
                <div className="mt-8 inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-green-700 font-semibold">43% conversion rate increase</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}