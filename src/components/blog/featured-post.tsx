import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <Link
      href="/blog/blog-01"
      className="relative flex min-h-[420px] items-end justify-start overflow-hidden rounded-2xl border p-10"
    >
      <Image
        src="/blog/featured-post-image.webp"
        alt="Image"
        width={1728}
        height={792}
        className="absolute inset-x-0 inset-y-0 z-0 h-full w-full object-cover"
      />
      <div className="relative z-[2] flex flex-col gap-8">
        <h3>Structured Layers</h3>
      </div>
    </Link>
  );
}
