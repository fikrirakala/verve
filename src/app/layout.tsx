import type { Metadata } from "next";
import localFont from "next/font/local";

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
        <Navbar />
        <main className="relative mx-auto w-full pt-20">{children}</main>
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
