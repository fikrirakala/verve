import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="text-center">
          <h1 className="mb-6 bg-gradient-to-t from-white to-white/60 bg-clip-text text-7xl font-medium leading-tight tracking-tight text-transparent">
            Deliver an enterprise quality <br className="hidden lg:block" />{" "}
            project in minutes
          </h1>
          <p className="text-muted-foreground mb-12 text-balance text-lg tracking-tight">
            Beautifully designed, animated components and templates built with{" "}
            <br className="hidden md:block" /> Next.js, Tailwind CSS, React, and
            Framer Motion.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">Get started for free</Link>
          </Button>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-3xl border">
          <Image
            src="/images/dashboard.png"
            alt="Dashboard"
            width={2000}
            height={1138}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
