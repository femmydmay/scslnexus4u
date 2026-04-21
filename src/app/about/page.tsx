"use client";

import React, { useEffect } from "react";
import { Features } from "../components/landing/features";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#050816] min-h-screen">

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= ABOUT CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

        <div
          data-aos="fade-up"
          className="mt-12 rounded-2xl border border-blue-500/20 bg-[#0a0f2c]/80 backdrop-blur-xl shadow-lg shadow-blue-500/10 p-6 sm:p-10 hover:border-blue-500 transition duration-300"
        >

          <section>

            {/* TITLE */}
            <h3 className="text-center font-bold text-2xl sm:text-3xl text-white my-6">
              WELCOME TO SAMAY CLASSIC SYNERGY LTD (S.C.S.L)
            </h3>

            {/* CONTENT */}
            <article className="text-gray-300 text-sm sm:text-lg leading-relaxed text-justify space-y-6">

              <p>
                <strong className="text-white">About S.C.S.L</strong>
                <br />
                Welcome to Samay Classic Synergy Ltd (S.C.S.L) and NEXUS CLASSIC
                COMPUTER SCHOOLS LTD, a leading provider of IT and ICT solutions
                located in Lagos and Abuja, Nigeria.
              </p>

              <p>
                <strong className="text-white">Services We Provide:</strong>
              </p>

              <p>
                <span className="text-blue-400 font-semibold">Software Training:</span>{" "}
                We offer comprehensive software training programs designed to equip our
                students with essential skills. Our experienced instructors provide
                hands-on training, ensuring practical experience and deep knowledge.
              </p>

              <p>
                <span className="text-blue-400 font-semibold">Installations:</span>{" "}
                We specialize in tailored software system installations. Our experts ensure
                efficiency and effectiveness so clients can start using their systems immediately.
              </p>

              <p>
                <span className="text-blue-400 font-semibold">Software Development:</span>{" "}
                We develop custom applications addressing specific business needs using
                the latest tech to enhance scalability and growth.
              </p>

              <p>
                <span className="text-blue-400 font-semibold">App Building:</span>{" "}
                We build engaging mobile apps across platforms that meet business objectives
                and provide top-notch user experiences.
              </p>

              <p>
                <span className="text-blue-400 font-semibold">ICT - Hardware Services:</span>
                <br />
                <span className="text-gray-200">Networking:</span> Design, implementation, and support for reliable
                and secure connectivity.
                <br />
                <span className="text-gray-200">Smart Home Installation:</span> We automate homes for security,
                energy efficiency, and convenience.
                <br />
                <span className="text-gray-200">Supplies & Contract Execution:</span> We supply ICT hardware/software
                and execute IT contracts efficiently and within budget.
              </p>

              <p>
                <strong className="text-white">Conclusion:</strong>{" "}
                At S.C.S.L, we empower individuals and organizations through innovative tech and training.
                Experience quality, reliability, and results with us!
              </p>

            </article>

          </section>

        </div>
      </div>
    </div>
  );
};

export default About;