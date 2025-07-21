"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who Do You Work With?",
      answer: "We work with ambitious founders, startups, and businesses looking to build or revamp their digital products. Whether you're pre-seed or Series A, we help turn your vision into reality.",
    },
    {
      question: "What's Your Design Process Like?",
      answer: "We follow a collaborative, iterative process: Discovery → Wireframing → Design → Development → Testing → Launch. You're involved at every step with regular check-ins and updates.",
    },
    {
      question: "How Long Does a Typical Project Take?",
      answer: "MVP Standard projects typically take 2-4 weeks. Growth Retainer projects are ongoing with continuous improvements. Timeline depends on project complexity and scope.",
    },
    {
      question: "Do You Offer Refunds?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the initial designs, we'll work with you to make it right or provide a partial refund based on work completed.",
    },
    {
      question: "When Can You Start?",
      answer: "We typically start new projects within 3-5 business days after contract signing. For urgent projects, we can sometimes accommodate faster timelines.",
    },
    {
      question: "How Do We Communicate?",
      answer: "We use Slack for daily communication, weekly video calls for updates, and a project management tool for tracking progress. You'll always know what we're working on.",
    },
    {
      question: "Do You Offer On-Going Support?",
      answer: "Yes! Standard plans include 1 month of support, Growth Retainer plans include 3 months. We also offer extended support packages for continued partnership.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full mb-6">
            <span className="text-purple-600 font-medium">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">FAQs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl transition-all duration-300 ${
                  openIndex === index
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <h3 className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}