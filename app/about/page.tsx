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
      <main className="pt-16">
        {/* <FounderSection /> */}
        <TeamSection />
        <TimelineSection />
      </main>
    </>
  );
}