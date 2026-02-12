import HeroV2Section from "../components/InvestmentPageComponents/HeroV2Section.jsx";
import ProblemSolutionSection from "../components/InvestmentPageComponents/ProblemSolutionSection";
import TractionSection from "../components/InvestmentPageComponents/TractionSection";
import MarketSection from "../components/InvestmentPageComponents/MarketSection";
import TeamSection from "../components/InvestmentPageComponents/TeamSection";

export default function InvestmentPage() {
  return (
    <main className="investment-page">
      <HeroV2Section />
      <ProblemSolutionSection />
      <TractionSection />
      <MarketSection />
      <TeamSection />
    </main>
  );
}
