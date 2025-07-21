import PortfolioSection from "@/components/PortfolioSection";
import Navigation from "@/components/Navigation";

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <PortfolioSection />
      </main>
    </>
  );
}