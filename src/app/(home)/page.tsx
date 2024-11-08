import BenefitsSection from "@/components/benefits-sections";
import RecentBlog from "@/components/blog/recent-blog";
import CompaniesSection from "@/components/companies-section";
import FaqSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";

import Hero from "./hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesSection />
      <BenefitsSection />
      <FeaturesSection />
      <FaqSection />
      <TestimonialsSection />
      <RecentBlog />
    </>
  );
}
