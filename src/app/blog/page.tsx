import FeaturedBlog from "@/components/blog/featured-blog";
import LatestBlog from "@/components/blog/latest-blog";
import FaqSection from "@/components/faq-section";

export default function BlogPage() {
  return (
    <>
      <FeaturedBlog />
      <LatestBlog />
      <FaqSection />
    </>
  );
}
