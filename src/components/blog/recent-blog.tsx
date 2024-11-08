import { Badge } from "../ui/badge";
import BlogCard from "./blog-card";

const articles = [
  {
    title: "Our Journey with Caching",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab odit, repellat, velit reprehenderit numquam non minima consequuntur omnis quo iusto consequatur ex, esse inventore illo! Quis quae et natus?",
    image: "/blog/blog-01.png",
    href: "/blog/blog-01",
  },
  {
    title: "Turbopack Dev is Now Stable",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab odit, repellat, velit reprehenderit numquam non minima consequuntur omnis quo iusto consequatur ex, esse inventore illo! Quis quae et natus?",
    image: "/blog/blog-02.png",
    href: "/blog/blog-02",
  },
  {
    title: "How to Think About Security in Next.js",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab odit, repellat, velit reprehenderit numquam non minima consequuntur omnis quo iusto consequatur ex, esse inventore illo! Quis quae et natus?",
    image: "/blog/blog-03.png",
    href: "/blog/blog-03",
  },
];

export default function RecentBlog() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
          <div className="flex w-full max-w-lg flex-col items-start">
            <Badge>Recent Articles</Badge>
            <h2 className="mt-4 bg-gradient-to-tl from-white to-white/60 bg-clip-text text-5xl font-medium leading-tight tracking-tight text-transparent lg:text-6xl">
              Blog &amp; Articles
            </h2>
          </div>
          <div className="w-full max-w-xl">
            <p className="text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              alias consequatur laboriosam.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article, i) => (
            <div key={i}>
              <BlogCard
                title={article.title}
                description={article.description}
                image={article.image}
                href={article.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
