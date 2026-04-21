"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close menu
  const handleNavClick = () => {
    setCollapse(true);
  };

  return (
    <>
      <Head>
        <title>S.C.S.L IT/ICT</title>
      </Head>

      <nav
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md
        bg-gradient-to-r from-[#020617]/95 via-[#0f172a]/95 to-[#1e3a8a]/95
        dark:from-black dark:via-gray-900 dark:to-black
        border-b border-blue-500/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3" onClick={handleNavClick}>
            <Image
              src="/scslogo1.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-lg border border-blue-400/30"
            />
            <span className="text-white font-bold text-lg hidden sm:block">
              S.C.S.L
            </span>
          </Link>

          {/* NAV */}
          <ul
            className={`${
              collapse ? "hidden" : "flex"
            } lg:flex absolute lg:static top-20 left-0 w-full lg:w-auto 
            flex-col lg:flex-row gap-6 lg:gap-10
            backdrop-blur-xl bg-white/10 dark:bg-black/80
            border-b border-blue-500/20 lg:border-none
            p-6 lg:p-0 text-white font-medium transition-all duration-300`}
          >
            {["Home", "About", "Business", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group"
                  onClick={handleNavClick}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white text-lg mr-4"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* MOBILE MENU */}
          <FaBars
            className="text-white text-xl lg:hidden cursor-pointer"
            onClick={() => setCollapse(!collapse)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;