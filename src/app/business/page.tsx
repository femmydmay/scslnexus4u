"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Business = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">

        <div
          data-aos="fade-up"
          className="w-full mt-10 mb-20 grid text-center gap-8 rounded-2xl
          bg-[#0a0f2c] border border-blue-500/20 hover:border-blue-500
          p-8 transition duration-300 shadow-lg shadow-blue-500/10
          relative overflow-hidden group"
        >
          {/* glow background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-600/10 pointer-events-none" />

          <section className="relative z-10">
            <h3 className="text-blue-400 text-center font-bold text-3xl font-cde my-3">
              Contract Execution/Project Management
            </h3>

            <article className="text-gray-300 text-center text-lg md:text-xl leading-[2.5rem]">
              At S.C.S.L technologies we believe in <br />
              diverifying and have highly skilled and trained personnel<br />
              Our business varies from Software(Development), App building, <br />
              Training to Installations and Supply.
              <br />
              We have done projects for both Government and Private Sectors.
              <br />
              Our Prices and costing are reasonable, you will not regret doing business with us.
            </article>
          </section>

          {/* bottom glow line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
        </div>

      </div>
    </section>
  );
};

export default Business;