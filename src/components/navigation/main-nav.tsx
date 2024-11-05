import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export default function MainNav() {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex-1">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={32} />
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href="/about">About</Link>
        <Link href="/integration">Integration</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
}
