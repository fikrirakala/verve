import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const features = ["Free 7-day trial", "No credit card required"];

export default function CtaSection() {
  return (
    <section className="relative py-32">
      <div className="relative z-10 mx-auto max-w-screen-lg px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="mt-4 bg-gradient-to-tl from-white to-white/60 bg-clip-text text-5xl font-medium leading-tight tracking-tight text-transparent lg:text-6xl">
              Start Your <br className="hidden lg:block" /> 7-day free trial
            </h2>
            <ul className="flex flex-wrap items-center gap-4">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Image
                    src="/icons/checklist-icon.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:place-self-end">
            <Image
              src="/icons/cta-icon.svg"
              alt="Icon"
              width={80}
              height={80}
              className="mb-10"
            />
            <div className="flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/">Get started</Link>
              </Button>
              <div className="text-muted-foreground flex flex-col gap-1 text-sm">
                <p>4.80/5</p>
                <p>From 300+ Customer Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex justify-center overflow-hidden">
        <div className="flex w-full max-w-screen-2xl items-end justify-center bg-[radial-gradient(circle_at_50%_230%,rgba(81,224,207,0.32),rgba(10,10,10,0)_75%)]">
          <div className="h-[1px] w-[85%] bg-[radial-gradient(circle_closest-corner_at_50%_0,rgba(81,224,207,0.32),rgba(10,10,10,0)_70%)]"></div>
        </div>
      </div>
    </section>
  );
}
