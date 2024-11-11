import Image from "next/image";

import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";
import Marquee from "./ui/marquee";

const stats = [
  {
    title: "48M+",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/icons/stat-icon-01.svg",
  },
  {
    title: "95%",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/icons/stat-icon-02.svg",
  },
  {
    title: "22K+",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/icons/stat-icon-03.svg",
  },
];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero facere corrupti est, beatae similique asperiores ducimus unde vero quas dolore, optio deserunt nobis neque obcaecati a voluptatibus non?",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero facere corrupti est, beatae similique asperiores ducimus unde vero quas dolore, optio deserunt nobis neque obcaecati a voluptatibus non?",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero facere corrupti est, beatae similique asperiores ducimus unde vero quas dolore, optio deserunt nobis neque obcaecati a voluptatibus non?",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews;
const secondRow = reviews;

export default function TestimonialsSection() {
  return (
    <section className="py-28">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="mb-16 text-center">
          <Badge>Testimonials</Badge>
          <h2 className="mt-4">
            <span className="text-gradient">Hear feedback from our users</span>
          </h2>
        </div>

        <div className="mx-auto mb-16 grid w-full max-w-screen-lg grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center gap-6">
              <div className="rounded-full border border-white/[0.03] bg-white/[0.03] px-7 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-3xl">
                <Image src={stat.icon} alt="Icon" width={24} height={24} />
              </div>
              <div className="grid gap-2 text-center">
                <h3>
                  <span className="text-gradient">{stat.title}</span>
                </h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-20 grid h-[600px] w-full grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2 md:grid-cols-3">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] [--gap:2rem]"
          >
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="hidden [--duration:20s] [--gap:2rem] sm:flex"
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="hidden [--duration:25s] [--gap:2rem] md:flex"
          >
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative grid cursor-pointer gap-4 overflow-hidden rounded-2xl border bg-white/[0.01] p-6"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium text-muted-foreground">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="text-sm">{body}</blockquote>
    </figure>
  );
};
