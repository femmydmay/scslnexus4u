"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "./components/Slider";
import Link from "next/link";
import { motion } from "framer-motion";
import { Features } from "./components/landing/features";

import Navbar from "./components/landing/navbar";
import HeroSection from "./components/landing/hero";
import CTA from "./components/landing/cta";
import HowItWorks from "./components/landing/how-it-works";
import Training from "./components/landing/training";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-white dark:bg-[#050816] text-black dark:text-white min-h-screen transition-colors duration-300">

        <Navbar />

        <HeroSection />
        <CTA />

        <Features />

        <HowItWorks />

        <Slider />

        <Training />

        {/* ===================== WHATSAPP FLOAT MODAL (NEW) ===================== */}
        <div className="fixed bottom-6 right-6 z-50 group">

          <a
            href="https://wa.me/2348185696269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full
            bg-green-500 hover:bg-green-600
            shadow-lg shadow-green-500/30
            transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-7 h-7"
            >
              <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.12 2.81c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32z" />
              <path d="M16 3C9.37 3 4 8.37 4 15c0 2.39.7 4.62 1.9 6.49L4 29l7.75-1.87C13.5 27.71 14.73 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.2 0-2.37-.22-3.45-.64l-.25-.1-4.6 1.11 1.2-4.48-.16-.23A9.9 9.9 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
          </a>

          <div className="absolute right-16 bottom-2 hidden group-hover:block
          bg-[#0a0f2c] border border-green-500/30
          text-white text-sm px-4 py-3 rounded-xl
          shadow-lg shadow-green-500/20 w-64">

            <p className="font-semibold text-green-400">
              Need Help?
            </p>

            <p className="text-gray-300 text-xs mt-1">
              Chat with us on WhatsApp for instant enquiries & support.
            </p>

            <a
              href="https://wa.me/2348185696269"
              target="_blank"
              className="mt-2 inline-block text-green-400 hover:text-green-300 text-xs font-medium"
            >
              Click to open chat →
            </a>

          </div>
        </div>

      </main>
    </>
  );
}