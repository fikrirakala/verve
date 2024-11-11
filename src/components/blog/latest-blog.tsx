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

export default function LatestBlog() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-screen-lg px-4">
        {/* <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
          <h3>
            <span className="text-gradient">Latest Posts:</span>
          </h3>
        </div> */}

        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
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
