import Navigation from "@/components/Navigation";
import FounderSection from "@/components/FounderSection";
import TeamSection from "@/components/TeamSection";
import TimelineSection from "@/components/TimelineSection";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <FounderSection />
        <TeamSection />
        <TimelineSection />
      </main>
    </>
  );
}