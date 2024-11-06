import CompaniesSection from "@/components/companies-section";
import FeaturesSection from "@/components/features-section";

import Hero from "./hero";

export default function HomePage() {
  return (
    <div className="min-h-[2000px]">
      <Hero />
      <CompaniesSection />
      <FeaturesSection />
    </div>
  );
}
