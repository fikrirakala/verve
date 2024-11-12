"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";

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

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const pathname = usePathname();

  const ref = useRef(null);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        ref={ref}
        variants={{
          onTop: {
            background: "transparent",
            borderBottom: "solid 1px transparent",
          },
          notOnTop: {
            backgroundColor: "rgb(10 10 10 / 0.4)",
            backdropFilter: "blur(12px)",
            borderBottom: "solid 1px rgb(255 255 255 / 0.08)",
          },
        }}
        initial="hidden"
        animate={scroll ? "notOnTop" : "onTop"}
        transition={{ duration: 0.35 }}
        className="fixed inset-x-0 top-0 z-50 flex h-20 w-full select-none items-center"
      >
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4">
          <Link href="/" className="z-50 flex-1">
            <Image src="/logo.svg" alt="Logo" width={100} height={32} />
          </Link>
          <nav className="hidden gap-4 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                (pathname.includes(link.href) && link.href.length > 1) ||
                pathname === link.href;

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    "flex h-11 items-center rounded-full border border-transparent px-5 py-2 text-sm hover:border hover:border-white/10 hover:bg-white/[0.04] hover:backdrop-blur-xl",
                    isActive &&
                      "border-white/10 bg-white/[0.04] backdrop-blur-xl"
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-1 justify-end">
            <Button
              asChild
              variant="secondary"
              className="hidden rounded-full lg:flex"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <div className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
            </div>
          </div>
        </div>
      </motion.header>
      <MobileNav isOpen={isOpen} />
    </>
  );
}
