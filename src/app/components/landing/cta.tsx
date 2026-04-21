"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative py-20 bg-[#050816] overflow-hidden">

      {/* Glow effects (modern tech UI) */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-600/20 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full text-center"
      >

        {/* TITLE (same text, modern styling) */}
        <h2 className="text-white font-bold lg:text-3xl sm:text-lg uppercase mt-6 text-center leading-snug px-4">
          S.C.S.L & Nexus Computer Schools Ltd. <br /> are your direct plug
          to everything computing in Nigeria and Outside.
        </h2>

        {/* MAIN SECTION */}
        <section className="min-h-[60vh] w-11/12 mx-auto mt-8 mb-20
                             bg-white/5 backdrop-blur-xl
                             border border-blue-500/20
                             rounded-2xl p-8 shadow-xl
                             hover:border-blue-500/40 transition">

          <div>
            <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 items-center mt-10 gap-6">

              {/* IMAGE 1 */}
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-blue-500/30 shadow-lg">
                <Image
                  className="object-cover"
                  src="/techbg12.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the bgaboutus2"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col justify-center h-full">

                <p className="mt-10 mb-10 text-white/80 text-base leading-relaxed tracking-normal text-justify max-w-prose">
                  SAMAY CLASSIC SYNERGY LIMITED (S.C.S.L) & NEXUS CLASSIC
                  COMPUTER SCHOOLS LTD. are a complete ICT solution Provider,
                  located in Lagos and Abuja, Nigeria. Services we provide are:
                  Training, Software Development, Responsive Website Design and
                  Development, App building for both Android
                </p>

                {/* BUTTON (modern outline style) */}
                <div className="mt-3">
                  <button className="px-4 py-2 border border-blue-500/40 text-white rounded-xl font-semibold
                                     hover:bg-blue-600/20 transition backdrop-blur-md">

                    Read More

                    <p className="mt-1">
                      <Link
                        href="/business"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        Business
                      </Link>
                    </p>

                  </button>
                </div>

              </div>

              {/* IMAGE 2 */}
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-blue-500/30 shadow-lg">
                <Image
                  className="object-cover"
                  src="/techbg8.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the bgaboutus2"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

            </div>
          </div>

        </section>
      </motion.div>
    </div>
  );
}