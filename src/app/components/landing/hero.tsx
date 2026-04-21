"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#050816]">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Technology background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* BLUE + RED MODERN GRADIENT LAYER */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-red-600/20" />
      </div>

      {/* GLOW EFFECTS (modern 2026 UI feel) */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-600/20 blur-[140px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-md text-blue-300 text-xs tracking-widest uppercase">
            ⚡ Technology • Training • Software • ICT Solutions
          </span>
        </motion.div>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          SAMAY CLASSIC SYNERGY LTD
          <br />
          <span className="text-blue-400">(S.C.S.L)</span>
        </motion.h1>

        {/* SUB TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-lg md:text-2xl text-white/80"
        >
          YOUR ONE STOP TECHNOLOGY FIRM!
        </motion.h2>

        {/* SECOND BRAND */}
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-3 text-xl md:text-3xl font-bold text-red-400"
        >
          & NEXUS CLASSIC COMPUTER SCHOOLS LTD.
        </motion.h3>

        {/* DESCRIPTION BOX (modern outline UI) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 mx-auto max-w-3xl border border-blue-500/30 bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-white/80 shadow-lg"
        >
          CODE, SOFTWARE, HARDWARE,
          <br />
          CONTENT MGMT, AI, SUPPLIES,
          <br />
          FRONT & BACKEND AUTOMATION,
          <br />
          DESIGNS, TRAINING, ICT & PROJECTS.
        </motion.div>

        {/* CTA STYLE HINT (optional but modern feel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-sm text-white/50"
        >
          Delivering modern ICT solutions across Nigeria & beyond
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;