import type { Metadata } from "next";
import PortfolioSectionNoImages from "@/components/PortfolioSectionNoImages";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Our Work - mvplab | Portfolio of Successful MVP Projects",
  description: "Explore our portfolio of successful MVP launches. See how we've helped startups go from idea to market-ready products in record time.",
  openGraph: {
    title: "Our Work - mvplab | Portfolio of Successful MVP Projects",
    description: "Explore our portfolio of successful MVP launches. See how we've helped startups go from idea to market-ready products in record time.",
    url: "https://mvplab.dev/work",
  },
  alternates: {
    canonical: "https://mvplab.dev/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <PortfolioSectionNoImages />
      </main>
    </>
  );
}