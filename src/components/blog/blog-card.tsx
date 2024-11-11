import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function BlogCard({
  title,
  description,
  image,
  href,
}: BlogCardProps) {
  return (
    <Link href={href} className="group flex flex-col gap-8">
      <div className="h-[280px] w-full overflow-hidden rounded-2xl border bg-white/[0.01]">
        <Image
          src={image}
          alt={title}
          width={768}
          height={552}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4>{title}</h4>
        <p className="line-clamp-2 text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
