"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-[#050816] min-h-screen">

      {/* HERO SECTION */}
      <div className="grid place-items-center relative min-h-[90vh] overflow-hidden">

        <Image
          className="absolute w-full h-full object-cover -z-10 top-0 opacity-40"
          src="/techbg18.jpg"
          width={1200}
          height={800}
          alt="Picture of the bgcontactus"
        />

        <div
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-white text-center
          bg-[#0a0f2c]/70 backdrop-blur-md
          border border-blue-500/20 hover:border-blue-500
          px-10 py-6 rounded-2xl shadow-lg shadow-blue-500/10"
        >
          CONTACT US
        </div>

      </div>

      {/* CONTACT SECTION */}
      <section className="py-20 px-4">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center" data-aos="fade-up">

            <p className="font-medium text-2xl text-blue-400">
              Contact us
            </p>

            <h1 className="mt-10 text-2xl md:text-3xl font-semibold text-white">
              Chat to our friendly team at S.C.S.L Technologies
            </h1>

            <p className="mt-4 text-gray-400">
              We’d love to hear from you. Please fill out this form or shoot us an email.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

            {[
              {
                title: "Email",
                desc: "Our friendly team is here to help.",
                value: "samexblogex08@yahoo.com",
              },
              {
                title: "Live chat",
                desc: "Our friendly team is here to help.",
                value: "Start new chat",
              },
              {
                title: "Office",
                desc: "We are Located in",
                value: "Lagos and Abuja.",
              },
              {
                title: "Phone",
                desc: "Mon-Fri from 8am to 5pm.",
                value: "0818-569-6269",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative p-6 rounded-2xl
                bg-[#0a0f2c] border border-blue-500/20
                hover:border-blue-500 transition duration-300
                shadow-lg shadow-blue-500/10"
              >

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-blue-500 text-blue-400 bg-[#050816] group-hover:bg-blue-500 group-hover:text-white transition mb-4">
                  ✦
                </div>

                {/* TITLE */}
                <h2 className="text-white text-lg font-semibold">
                  {item.title}
                </h2>

                {/* DESC */}
                <p className="mt-2 text-gray-400 text-sm">
                  {item.desc}
                </p>

                {/* VALUE */}
                <p className="mt-3 text-blue-400 text-sm font-medium">
                  {item.value}
                </p>

                {/* LINE EFFECT */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contacts;