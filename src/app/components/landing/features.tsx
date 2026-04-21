"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Monitor, Code2, GraduationCap, CreditCard } from "lucide-react";

export function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-sm tracking-widest uppercase text-blue-400 font-semibold">
            About Us
          </h2>

          <p className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            SAMAY CLASSIC SYNERGY LTD (S.C.S.L) & NEXUS CLASSIC COMPUTER SCHOOLS LTD.
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            SCSL is an IT and ICT firm that is Nigerian based and Indigenous. We engage in 
            International Projects and partner with Nexus Computer Schools.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-14">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "We Offer a wide array of IT/ICT Services",
                description:
                  "Software, hardware, automation, general supplies, and contract execution.",
                icon: Monitor,
              },
              {
                title: "We are your plug for everything software",
                description:
                  "Websites, applications, portals, and full-stack solutions tailored to your needs.",
                icon: Code2,
              },
              {
                title: "Computer Training and Software Development",
                description:
                  "From beginner to advanced level training with practical and engaging methods.",
                icon: GraduationCap,
              },
              {
                title: "Our Pricing is customised and affordable",
                description:
                  "Flexible pricing designed to suit both individuals and organizations.",
                icon: CreditCard,
              },
            ].map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative p-6 rounded-2xl bg-[#0a0f2c] border border-blue-500/20 hover:border-blue-500 transition duration-300 shadow-lg"
              >
                
                {/* ICON */}
                <div className="flex items-center justify-center h-12 w-12 rounded-xl border border-blue-500 text-blue-400 bg-[#050816] group-hover:bg-blue-500 group-hover:text-white transition">
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* TITLE */}
                <dt className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </dt>

                {/* DESCRIPTION */}
                <dd className="mt-2 text-gray-400 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </dd>

                {/* HOVER LINE EFFECT */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}