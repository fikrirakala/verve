import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/navigation/navbar";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

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
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          className={cn(
            "stroke-border z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,white,transparent)]"
          )}
        />
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
