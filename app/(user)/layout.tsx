import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ".././globals.css";
import Header from "@/components/layouts/Header";
import Container from "@/components/layouts/Container";
import Hero from "@/components/layouts/Hero";
import Scales from "@/components/layouts/Scales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AHs Blog",
  description: "Created for people by AHs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased bg-gray-100 `}>
        <Container className="relative">
          <Scales/>
          <Header/>
          <Hero/>
          {children}
        </Container>
      </body>
    </html>
  );
}
