import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FounderSection from "@/components/FounderSection";
import TeamSection from "@/components/TeamSection";
import TimelineSection from "@/components/TimelineSection";

export const metadata: Metadata = {
  title: "About Us - mvplab | Meet Our Team of Cracked Engineers",
  description: "Meet the team behind mvplab. Experienced engineers, open source contributors, and startup veterans who ship fast and scale faster.",
  openGraph: {
    title: "About Us - mvplab | Meet Our Team of Cracked Engineers",
    description: "Meet the team behind mvplab. Experienced engineers, open source contributors, and startup veterans who ship fast and scale faster.",
    url: "https://mvplab.dev/about",
  },
  alternates: {
    canonical: "https://mvplab.dev/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 bg-white min-h-screen">
        {/* Page Header */}
        <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">About </span>
              <span className="gradient-text">mvplab</span>
            </h1>
            <p className="text-xl text-gray-600">Building the future, one MVP at a time</p>
          </div>
        </div>
        
        {/* <FounderSection /> */}
        <TeamSection />
        <TimelineSection />
      </main>
    </>
  );
}