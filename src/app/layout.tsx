import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/landing/navbar";
import Footer from "./components/landing/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "scslnexus",
  description: "scslnexus website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors duration-300`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}