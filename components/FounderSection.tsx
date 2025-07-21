"use client";

export default function FounderSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Founder</h2>
          <p className="text-gray-400 text-lg">Visionary leadership driving innovation</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 border border-zinc-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Building the Future of Technology</h3>
              <p className="text-gray-300 mb-6">
                Our founder brings exceptional experience as a core maintainer of major CNCF and Linux Foundation projects. 
                With deep contributions to <span className="text-blue-400 font-semibold">Kyverno.io</span> and{" "}
                <span className="text-blue-400 font-semibold">Flyte.org</span>, they've shaped critical infrastructure 
                that powers modern cloud-native applications worldwide.
              </p>
              <p className="text-gray-300 mb-6">
                At <span className="text-purple-400 font-semibold">Union.ai</span>, they played a pivotal role in 
                building the company from ground zero to a thriving enterprise, establishing robust engineering practices 
                and scaling the platform to serve enterprise customers globally.
              </p>
              <p className="text-gray-300 mb-8">
                Their expertise extends to working with industry giants like <span className="text-red-400 font-semibold">Toyota</span>, 
                where they delivered transformative solutions that revolutionized operational efficiency and digital innovation 
                in automotive technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Profile
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Portfolio
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h4 className="text-xl font-semibold mb-3 text-white">Open Source Contributions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Kyverno.io</span>
                    <span className="text-sm text-blue-400">Core Maintainer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Flyte.org</span>
                    <span className="text-sm text-blue-400">Core Maintainer</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h4 className="text-xl font-semibold mb-3 text-white">Professional Experience</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Union.ai</span>
                    <span className="text-sm text-purple-400">0 to 1 Builder</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Toyota</span>
                    <span className="text-sm text-red-400">Technical Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}