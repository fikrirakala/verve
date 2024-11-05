"use client";

import MainNav from "./main-nav";

export default function Navbar() {
  return (
    <header className="relative flex h-24 w-full items-center">
      <div className="mx-auto flex w-full max-w-screen-xl items-center">
        <MainNav />
      </div>
    </header>
  );
}
