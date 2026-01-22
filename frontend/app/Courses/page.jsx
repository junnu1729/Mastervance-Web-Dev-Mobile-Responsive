import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import DoubleCards from "../components/doubleCards";
import InstructorsSection from "../components/Instruction";


export default function CoursesHero() {
  return (
    <div className="w-full">
      <Navbar />

      <section>
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-22 md:py-20 rounded-b-2xl overflow-hidden -ml-15 -mt-7.5">
          <div className="relative rounded-lg overflow-hidden pt-14 pb-14 pl-10 pr-10">
            {/* Gradient Background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #0077FF 0%, #3EA0FF 45%, #80BFFF 76%, #FFFFFF 100%)",
              }}
            />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              {/* LEFT CONTENT */}
              <div className="md:col-span-7 lg:col-span-6 px-4 md:px-8 py-8 ">
                <div className="inline-block bg-white text-[#106FCF] rounded-full px-14 py-1 font-medium text-[20px] shadow-sm mb-6 ml-12 mt-14 ">
                  Our Courses
                </div>

                <h1
                  className="text-white text-[36px] md:text-[56px] lg:text-[64px] leading-tight 
               font-manrope font-extrabold mb-6 ml-12 whitespace-nowrap"
                >
                  Learn Industry-Ready
                  <br />
                  Core Engineering Skills
                </h1>

                <p
                  className="text-[#FAFDFF] text-base md:text-[22px] max-w-4xl mb-8 ml-14 hyphens-none"
                  style={{
                    WebkitHyphens: "none",
                    MozHyphens: "none",
                    hyphens: "none",
                  }}
                >
                  Build strong fundamentals and practical skills through clear,
                  structured, and application focused engineering courses.
                </p>

                <a
                  href="/courses"
                  className="inline-block px-6 md:px-8 py-3 md:py-3 rounded-xl bg-[#003366] hover:bg-[#0041cc] text-white font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition ml-14"
                >
                  Explore Courses
                </a>
              </div>

              {/* RIGHT ILLUSTRATION */}
              <div className="md:col-span-5 lg:col-span-6 px-4 md:px-8 py-8 flex justify-end">
                <div className="w-[300px] md:w-[420px] lg:w-[520px] relative">
                  <Image
                    src="/image 1.svg"
                    alt="Illustration"
                    width={371}
                    height={371}
                    className="object-contain ml-43 mt-5"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Soft Fade Overlay */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 lg:w-40"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 95%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* TRENDING COURSES SECTION */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ml-10 -mt-16">
          {/* HEADING */}
          <h2 className="text-[34px] md:text-[48px] font-manrope font-extrabold text-[#3A3434] ">
            Trending Courses to &nbsp;
            <span className="bg-gradient-to-r from-[#007FFF] to-[#09509B] text-transparent bg-clip-text">
              Get You Started
            </span>
          </h2>

          {/* SUB TEXT */}
          <p className="mt-2 text-[24px] font-Open Sans text-[#000000] max-w-3xl">
            Start with beginner-friendly courses designed to give you hands-on
            clarity and real engineering understanding.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-6 max-w-3xl">
            <div className="relative">
              {/* Search Icon */}
              <span className="absolute inset-y-0 left-4 flex items-center text-[#3A3434] pointer-events-none">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="20"
                    y1="20"
                    x2="16.65"
                    y2="16.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              {/* Input */}
              <input
                type="text"
                placeholder="Search for any topic in core engineering..."
                className="w-full h-[56px] rounded-[12px] border border-[#3A3434] pl-14 pr-4 text-[16px] placeholder:text-[3A3434] outline-none focus:ring-2 focus:ring-[#E6F2FF]"
              />
            </div>
          </div>
        </div>
      </section>

      <Cards />
      {/* CORE JOURNEY SECTION */}
      <section className="py-20 bg-[#F7FAFF] mt-15 -ml-60">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <h2 className="text-[34px] md:text-[48px] font-manrope font-extrabold text-[#3A3434] ">
            Start Your Core Industry Journey ! &nbsp;
          </h2>
          <DoubleCards />
        </div>
      </section>
      <InstructorsSection />
      <Footer />
    </div>
  );
}
