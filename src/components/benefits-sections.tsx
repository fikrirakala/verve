import { Badge } from "./ui/badge";

export default function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
          <div className="flex w-full max-w-2xl flex-col items-start">
            <Badge>Product Overview</Badge>
            <h2 className="mt-4 bg-gradient-to-tl from-white to-white/60 bg-clip-text text-5xl font-medium leading-tight tracking-tight text-transparent lg:text-6xl">
              Discover a simple notebook solution today.
            </h2>
          </div>
          <div className="">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              alias consequatur laboriosam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
