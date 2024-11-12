import { Badge } from "../ui/badge";

export default function FeaturedBlog() {
  return (
    <section className="pt-28">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="text-center">
          <Badge>Blog</Badge>
          <h1 className="mt-4">
            <span className="text-gradient">
              Verve Blog:
              <br className="hidden lg:block" /> Build Pages With Verve
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
