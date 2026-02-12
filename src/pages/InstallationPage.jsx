import HeroSection from "../components/InstallationPageComponents/HeroSection";
import ProductOverviewSection from "../components/InstallationPageComponents/ProductOverviewSection";
import ValuePropositionSection from "../components/InstallationPageComponents/ValuePropositionSection";
import SpecsSection from "../components/InstallationPageComponents/SpacesSection";
import CTASection from "../components/InstallationPageComponents/CTASection";

import "./InstallationPage.css"

export default function EVInstallationPage() {
  return (
    <div className="installation">
      <HeroSection />
      <ProductOverviewSection />
      <ValuePropositionSection />
      <SpecsSection />
      <CTASection />
    </div>
  );
}
