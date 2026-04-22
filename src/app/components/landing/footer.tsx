"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative mt-32 pt-20 bg-[#050816] border-t border-blue-500/20"
    >
      {/* BLUE GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16">

          {/* LEFT */}
          <div className="space-y-4">
            <Image
              src="/scslogo1.jpg"
              alt="logo"
              width={180}
              height={80}
              className="rounded-lg border border-blue-500/20"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              Welcome to SCSL and NEXUS your reliable tech plug.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <Image src="/facebook_icon.jpg" alt="facebook" width={24} height={24} />
              <Image src="/twitter_icon.jpg" alt="twitter" width={24} height={24} />
              <Image src="/linkedin_icon.png" alt="linkedin" width={24} height={24} />
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4 tracking-wider">
              COMPANY
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About us
                </Link>
              </li>

              <li>
                <Link href="/business" className="hover:text-blue-400 transition">
                  Business
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4 tracking-wider">
              GET IN TOUCH
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>+234 818-569-6269</li>
              <li>Contact@scsl.com</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-blue-500/20" />

        {/* COPYRIGHT */}
        <div className="py-6 text-center text-gray-500 text-sm">
          Copyright {new Date().getFullYear()}© S.C.S.L - All Right Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;