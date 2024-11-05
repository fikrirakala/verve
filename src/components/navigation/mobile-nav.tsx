"use client";

import Link from "next/link";

import { Button } from "../ui/button";

const NAV_LINKS = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Integrations",
    href: "/integrations",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function MobileNav({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col bg-background px-4 pb-4 pt-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b py-5 text-xl"
            >
              {link.title}
            </Link>
          ))}
          <Button asChild className="mt-5 w-full">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      )}
    </>
  );
}
