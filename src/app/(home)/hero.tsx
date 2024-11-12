import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="text-center">
          <Badge>Verve Product Overview</Badge>
          <h1 className="mb-6 mt-6">
            <span className="text-gradient">
              Deliver an enterprise quality <br className="hidden md:block" />{" "}
              project in minutes
            </span>
          </h1>
          <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl">
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
