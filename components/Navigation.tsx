"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect" : "bg-transparent"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="gradient-text">mvplab</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
              About
            </a>
            <a href="/work" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
              Work
            </a>
            <a href="/#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
              Plans
            </a>
            <a href="/#contact" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 glass-effect rounded-b-2xl">
            <a href="/about" className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all">
              About
            </a>
            <a href="/work" className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all">
              Work
            </a>
            <a href="/#pricing" className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all">
              Plans
            </a>
            <a href="/#contact" className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all">
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}