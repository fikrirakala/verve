import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";

import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation/navbar";

import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Verve - Next.js website template",
  description:
    "Transform your tech startup's website with the Verve SaaS/Technology Template. Beautifully designed and user-friendly, this template is perfect for showcasing your innovative products and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} bg-[url('/bg/stars.svg')] antialiased`}
      >
        <div className="absolute bottom-auto left-0 right-0 top-0 z-0 mx-auto flex h-[908px] w-full max-w-[2400px] items-start justify-center overflow-hidden">
          <div className="absolute bottom-auto left-0 right-0 top-0 z-[2] h-[764px] w-full flex-none bg-[radial-gradient(circle_at_50%_-40%,rgba(76,202,187,0.42),rgb(10,10,10)_65%)]"></div>
          <Image
            src="/bg/hero-pattern.svg"
            alt=""
            width={2400}
            height={890}
            className="absolute -top-6 bottom-auto left-auto right-auto z-[1] h-[764px] w-[2400px] max-w-none opacity-55 mix-blend-soft-light"
          />
        </div>

        <Navbar />
        <main className="relative mx-auto w-full pt-20">{children}</main>
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
