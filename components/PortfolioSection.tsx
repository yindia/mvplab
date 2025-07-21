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
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with ML predictions for e-commerce businesses. Built with React, Python, and TensorFlow.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    category: "AI/ML",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Complete patient management solution with appointment scheduling, EMR, and billing integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    category: "Healthcare",
    featured: true,
  },
  {
    id: 3,
    title: "FinTech Payment Gateway",
    description: "Secure payment processing platform handling millions of transactions daily with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tags: ["Go", "Kubernetes", "Redis", "Stripe API"],
    category: "FinTech",
    featured: true,
  },
  {
    id: 4,
    title: "E-Learning Platform",
    description: "Interactive online learning platform with video streaming, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["React", "GraphQL", "Node.js", "MongoDB"],
    category: "EdTech",
  },
  {
    id: 5,
    title: "IoT Fleet Management",
    description: "Real-time fleet tracking and management system with predictive maintenance alerts.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Python", "AWS IoT", "React", "PostgreSQL"],
    category: "IoT",
  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media monitoring and analytics platform for brand management.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Next.js", "Python", "Redis", "Elasticsearch"],
    category: "MarTech",
  },
];

const categories = ["All", "AI/ML", "Healthcare", "FinTech", "EdTech", "IoT", "MarTech"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 });

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section ref={sectionRef as any} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 glass-light rounded-full mb-6 backdrop-blur-sm ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">Our Work</span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gray-900">Projects That </span>
            <span className="gradient-text">Define Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've helped startups and enterprises build products that users love. 
            Here's a showcase of our recent work.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isInView ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative h-full ${isInView ? 'scroll-fade-up in-view' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors"
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

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className={`inline-flex flex-col items-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-600 mb-6 text-lg">
              Have a project in mind? Let's build something amazing together.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
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