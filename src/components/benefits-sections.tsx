import Image from "next/image";

import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

const benefits = [
  {
    title: "Express ideas like a human, not a machine.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.",
    icon: "/icons/benefit-icon-01.svg",
    image: "/images/benefit-image-01.webp",
  },
  {
    title: "Build your model block by block.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.",
    icon: "/icons/benefit-icon-02.svg",
    image: "/images/benefit-image-02.webp",
  },
  {
    title: "Express ideas like a human, not a machine.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie.",
    icon: "/icons/benefit-icon-03.svg",
    image: "/images/benefit-image-03.webp",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
          <div className="flex w-full max-w-2xl flex-col items-start">
            <Badge>Product Overview</Badge>
            <h2 className="mt-4">
              <span className="text-gradient">
                Discover a simple notebook solution today.
              </span>
            </h2>
          </div>
          <div className="">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              alias consequatur laboriosam.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8">
          {benefits.map(({ title, description, icon, image }, i) => {
            const odd = i % 2 !== 0;

            return (
              <BenefitCard
                key={i}
                title={title}
                description={description}
                icon={icon}
                image={image}
                odd={odd}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

type BenefitCardProps = {
  title: string;
  description: string;
  icon: string;
  image: string;
  odd: boolean;
};

function BenefitCard({
  title,
  description,
  icon,
  image,
  odd = false,
}: BenefitCardProps) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-3xl border p-3 md:grid-cols-2">
      <div
        className={cn(
          "flex flex-col justify-between gap-6 p-0 md:p-5 lg:p-11",
          odd && "order-1 md:order-2"
        )}
      >
        <div>
          <img src={icon} alt="Icon" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>
            <span className="text-gradient">{title}</span>
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border",
          odd && "order-2 md:order-1"
        )}
      >
        <Image
          src={image}
          alt={title}
          width={1160}
          height={728}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
