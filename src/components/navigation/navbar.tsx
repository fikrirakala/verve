"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

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
            borderBottom: "solid 1px rgb(10 10 10 / 0.8)",
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
          <nav className="hidden gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 justify-end">
            <Button asChild className="hidden lg:flex">
              <Link href="/login">Login</Link>
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
