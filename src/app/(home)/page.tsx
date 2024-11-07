import CompaniesSection from "@/components/companies-section";
import FaqSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";

import Hero from "./hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesSection />
      <FeaturesSection />
      <FaqSection />
    </>
  );
}
