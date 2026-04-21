"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Training() {
  return (
    <div className="py-20 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-sm tracking-widest uppercase text-blue-400 font-semibold">
            Training
          </h2>

          <p className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            NEXUS CLASSIC COMPUTER SCHOOLS LTD. CLASSROOM & ONLINE TRAINING
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            WE ARE HERE TO SERVE YOU!
          </p>
        </motion.div>

        {/* ================= SECTION 1 ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {/* LEFT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <Image
              src="/scslemblem.jpg"
              width={500}
              height={500}
              alt="Picture of the bgaboutus2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CENTER TEXT */}
          <div className="rounded-2xl border border-blue-500/20 bg-[#0a0f2c]/80 backdrop-blur-xl p-8 shadow-lg shadow-blue-500/10 hover:border-blue-500 transition">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              NEXUS CLASSIC COMPUTER SCHOOLS LTD is very much in tune with the latest in technology and AI. We proffer solutions and train students in the areas of software and hardware. Our experienced Tutors guide the students through the basics to complex studies in software development. We customize our courses, making them suitable for students, both productively and financially.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <Image
              src="/cct3.jpg"
              width={500}
              height={500}
              alt="Picture of the bgaboutus2"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* ================= FULL STACK CERT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h3 className="text-white text-xl font-semibold">
            FULL STACK SOFTWARE TRAINING CERTIFICATION!
          </h3>

          <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <Image
              src="/cct1.jpg"
              width={1200}
              height={600}
              alt="Picture of the techdev"
              className="w-full object-cover opacity-80 hover:opacity-100 transition"
            />
          </div>
        </motion.div>

        {/* ================= TECH STACK SECTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <Image
              src="/techbg3.jpg"
              width={500}
              height={500}
              alt="Picture of the bgaboutus2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CENTER TEXT */}
          <div className="rounded-2xl bg-[#0a0f2c]/80 border border-blue-500/20 backdrop-blur-xl p-8 shadow-lg shadow-blue-500/10">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Master the programming technologies demanded by employers: HTML, JavaScript, Node.js, React, React Native, Database, AI and more. Change your professional path and start a career as a junior FullStack JS developer. Become indispensable to any company with the hottest IT skills. It involves working with various technologies and tools, including front-end web development, back-end web development, and database.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <Image
              src="/techbg2.jpg"
              width={500}
              height={500}
              alt="Picture of the bgaboutus2"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

      </div>
    </div>
  );
}