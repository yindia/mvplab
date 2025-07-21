"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link?: string;
  github?: string;
  featured?: boolean;
  video?: string;
  demoUrl?: string;
  impact?: string;
  timeline?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The SaaS Company",
    description: "Revolutionary no-code infrastructure automation platform that empowers teams to deploy, manage, and scale cloud resources without writing a single line of code.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["NextJs", "Terraform", "Golang", "AWS"],
    category: "No Code",
    featured: true,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    impact: "40% faster deployment",
    timeline: "3 weeks",
  },
  {
    id: 2,
    title: "Data Sherlock",
    description: "AI-powered data intelligence platform using advanced RAG technology. Connect any database and ask questions in plain English.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["NextJs", "Kubernetes", "LLM"],
    category: "AI Platform",
    featured: true,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    impact: "5x faster insights",
    timeline: "4 weeks",
  },
  {
    id: 3,
    title: "Intervyo",
    description: "Next-generation AI interview preparation platform featuring realistic voice conversations that adapt to any tech role.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["NextJS", "LiveKit", "Python"],
    category: "Voice AI",
    featured: true,
    demoUrl: "https://intervyo.ai",
    impact: "85% success rate",
    timeline: "2 weeks",
  },
  {
    id: 4,
    title: "AI Recruiter",
    description: "Automated talent screening with AI voice agents that conduct interviews and provide detailed candidate insights.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["NextJs", "Python", "Supabase"],
    category: "Voice AI",
    demoUrl: "https://airecruiter.io",
    impact: "10x faster hiring",
    timeline: "3 weeks",
  }
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef as any} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 glass-light rounded-full mb-6 backdrop-blur-sm ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">Launching Tomorrow's Success Stories</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gray-900">Quality Over </span>
            <span className="gradient-text">Quantity</span>
          </h1>
          
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            We're not your typical dev shop. We're a new breed of builders focused on 
            creating exceptional products that define categories, not just fill portfolios.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-lg mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-gray-600">Launch Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">14</div>
              <div className="text-sm text-gray-600">Days Average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-sm text-gray-600">Game Changers</div>
            </div>
          </div>
        </div>

        {/* Featured Projects - Bento Grid Style */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Project Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.video && (
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setShowVideoModal(true);
                        }}
                        className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500">Shipped in {project.timeline}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.category === 'Voice AI' ? 'bg-purple-100 text-purple-700' :
                      project.category === 'AI Platform' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full mb-8 ${isInView ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-purple-700 font-semibold">Every Project is a Category Leader</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Your Project Could Be <span className="gradient-text">Next</span>
          </h2>
          
          <p className={`text-xl text-gray-600 mb-10 leading-relaxed ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            We select projects that have the potential to redefine industries. 
            If you're building something revolutionary, let's talk.
          </p>
          
          <a
            href="/#contact"
            className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            Start Your Success Story
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Video Container */}
            <div className="relative pt-[56.25%] bg-gray-900">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={selectedProject.video}
                title={selectedProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}