"use client";

import React, { useState } from "react";
import Image from "next/image";

const Slider = () => {
  const images = [
    "/slider_1.jpg",
    "/slider_2.jpg",
    "/slider_3.jpg",
    "/slider_4.jpg",
    "/slider_5.jpg",
    "/slider_6.jpg",
    "/slider_7.jpg",
    "/slider_8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-16 bg-[#050816] relative overflow-hidden">

      {/* BACKGROUND GLOW EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#050816] to-blue-950/40 pointer-events-none" />

      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-4xl mx-auto">

        {/* SLIDER CARD */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 hover:border-blue-500 bg-[#0a0f2c]/70 backdrop-blur-xl shadow-lg shadow-blue-500/10 transition">

          {/* TOP GLOW LAYER */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-600/10 pointer-events-none" />

          {/* IMAGE TRACK */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full relative">

                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={600}
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full
            bg-[#050816]/80 border border-blue-500/30
            hover:bg-blue-600 hover:border-blue-400
            text-white flex items-center justify-center
            shadow-lg shadow-blue-500/20 transition"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full
            bg-[#050816]/80 border border-blue-500/30
            hover:bg-blue-600 hover:border-blue-400
            text-white flex items-center justify-center
            shadow-lg shadow-blue-500/20 transition"
          >
            ›
          </button>

          {/* DOT INDICATORS */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                    : "w-2.5 bg-blue-500/30 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Slider;