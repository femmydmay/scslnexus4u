"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#050816] text-white space-y-24">
      {/* ===================== SECTION 1 ===================== */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-11/12 mx-auto"
        >
          <div className="backdrop-blur-md bg-[#0a0f2c]/70 border border-blue-500/20 hover:border-blue-500 rounded-2xl p-10 shadow-lg shadow-blue-500/10 transition">
            <section className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                WELCOME TO SAMAY CLASSIC SYNERGY LTD (S.C.S.L)
              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">
                S.C.S.L & NEXUS CLASSIC COMPUTER SCHOOLS LTD are a complete ICT
                solution providers and contractors located in Lagos and Abuja,
                Nigeria.
                <br />
                Services we provide include Training, Software Development, and
                more.
              </p>

              <p className="mt-4 text-blue-300">
                We will give you value and quality for your money.
              </p>

              <p className="mt-2 text-gray-400">
                You will enjoy our site experience...
              </p>
            </section>

            <div className="mt-8 text-center">
              <Link
                href="/business"
                className="inline-flex items-center px-5 py-2 rounded-lg border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===================== SECTION 2 ===================== */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-11/12 mx-auto"
        >
          <div className="bg-[#0a0f2c] border border-blue-500/20 hover:border-blue-500 rounded-2xl p-10 shadow-lg shadow-blue-500/10">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-400 uppercase">
              IT/ICT COURSES IN HIGH DEMAND
            </h2>

            <p className="text-center text-gray-300 mt-6">
              Choose from our high-demand tech courses and secure your future in
              the IT industry and AI Tech.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                `Computer Basics
Microsoft Office
UI/UX Design
Graphics Design
Adobe Suite
Corel Draw
Frontend Web Design
3D Animation`,

                `Fullstack Web Development
Backend Development
Digital Marketing
E-Commerce Web Apps
Mobile Apps
Web Portals
Database Management
AI Applications`,

                `Computer Hardware
Networking
Cyber Security
Data Science
Data Analytics
Multimedia
Accounting Software
AutoCAD`,
              ].map((block, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-blue-500/20 bg-[#050816] hover:border-blue-500 transition"
                >
                  <p className="text-gray-300 whitespace-pre-line text-center leading-7">
                    {block}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===================== SECTION 3 ===================== */}
      <div>
        <motion.div className="w-11/12 mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-10">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/comppic5.jpg",
                title: "IT/ICT PROJECTS",
                desc: "Software, hardware, training and ICT contracting services.",
              },
              {
                img: "/comppic2.jpg",
                title: "SOFTWARE TRAINING",
                desc: "Full stack training in modern programming technologies.",
              },
              {
                img: "/frontendmainpic.jpg",
                title: "WEB & APP DEVELOPMENT",
                desc: "Responsive and scalable web and mobile solutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a0f2c] border border-blue-500/20 hover:border-blue-500 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{item.desc}</p>

                  <Link
                    href="/business"
                    className="inline-block mt-4 text-blue-400 hover:text-blue-300"
                  >
                    Go to business page →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ===================== SECTION 4 ===================== */}
      <div>
        <motion.div className="w-11/12 mx-auto">
          <div className="bg-[#0a0f2c] border border-blue-500/20 hover:border-blue-500 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-blue-400">
              Contract Execution / Project Management
            </h3>

            <p className="text-gray-300 mt-6">
              At S.C.S.L Technologies, we provide highly skilled personnel for
              professional project delivery and execution.
            </p>

            <Link
              href="/business"
              className="inline-block mt-6 text-blue-400 hover:text-blue-300"
            >
              Go to business page →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ===================== SECTION 5 ===================== */}
      <div>
        <motion.div className="w-11/12 mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-10">
            IT/ICT SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/servertech1.jpg",
                title: "NETWORKING",
                desc: "Server rooms, cabling, and enterprise network setups.",
              },
              {
                img: "/techbg33.jpg",
                title: "HARDWARE SUPPLY",
                desc: "Sales, installation, and maintenance of ICT hardware.",
              },
              {
                img: "/cctvguy1.jpg",
                title: "CCTV & SMART HOMES",
                desc: "Security systems and smart automation solutions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0a0f2c] border border-blue-500/20 hover:border-blue-500 rounded-2xl p-6 shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl mb-4"
                />

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">{item.desc}</p>

                <Link
                  href="/business"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300"
                >
                  Go to business page →
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
