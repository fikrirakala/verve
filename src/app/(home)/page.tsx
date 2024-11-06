import CompaniesSection from "@/components/companies-section";

import Hero from "./hero";

export default function HomePage() {
  return (
    <div className="min-h-[2000px]">
      <Hero />
      <CompaniesSection />
    </div>
  );
}
