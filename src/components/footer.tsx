import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col justify-between gap-8 py-20 md:flex-row">
          <div className="flex w-full max-w-xs flex-col items-start gap-8">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={32} />
            </Link>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit nobis
              quasi earum.
            </p>
            <Button variant="secondary" className="rounded-full">
              (01) 123 456 7890
            </Button>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex min-w-[180px] flex-col gap-5">
              <h6 className="text-muted-foreground font-medium">Product</h6>
              <Link href="/" className="hover:text-primary">
                Verve Footer Link
              </Link>
              <Link href="/" className="hover:text-primary">
                Verve Footer Link
              </Link>
              <Link href="/" className="hover:text-primary">
                Verve Footer Link
              </Link>
            </div>
            <div className="flex min-w-[180px] flex-col gap-5">
              <h6 className="text-muted-foreground font-medium">Features</h6>
              <Link href="/" className="hover:text-primary">
                Verve Footer Link
              </Link>
              <Link href="/" className="hover:text-primary">
                Verve Footer Link
              </Link>
              <Link href="/" className="hover:text-primary">
                Verve Footer Link
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t py-14 md:flex-row">
          <div className="text-muted-foreground">&copy;2024 Verve</div>
          <div className="flex justify-end gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Changelog
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
