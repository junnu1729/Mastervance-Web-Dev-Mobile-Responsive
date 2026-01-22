import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsSection from "../components/EventsSection";

export default function EventsPage() {
  return (
    <div>
      <Navbar />

      <section>
        <div
          className="
          max-w-[1728px]
          max-h-[680px]
          mx-auto
          px-4 sm:px-6 md:px-12
          py-12 md:py-22
          rounded-b-2xl
          overflow-hidden
          md:-ml-15 md:-mt-7.5
        "
        >
          <div className="relative rounded-lg overflow-hidden pt-10 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 pl-4 sm:pl-6 md:pl-10 pr-4 sm:pr-6 md:pr-10">
            {/* Gradient Background */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background: "linear-gradient(0deg, #FFFFFF 0%, #007FFF 100%)",
              }}
            />
            <div
              className="hidden md:block absolute inset-0"
              style={{
                background:
                  "linear-gradient(270.91deg, #FFFFFF 10.34%, #80BFFF 37.69%, #007FFF 99.22%)",
              }}
            />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              {/* LEFT CONTENT */}
              <div className="md:col-span-7 lg:col-span-6 px-2 sm:px-4 md:px-8 py-6 sm:py-8">
                <div
                  className="
                  inline-block
                  bg-white
                  text-[#106FCF]
                  rounded-full
                  px-6 sm:px-10 md:px-14
                  py-1
                  font-medium
                  text-sm sm:text-base md:text-[20px]
                  shadow-sm
                  mt-6 md:mt-14
                  ml-2 sm:ml-4 md:ml-12
                "
                >
                  Events
                </div>

                <h1
                  className="
                  text-white
                  text-[28px] sm:text-[36px] md:text-[56px] lg:text-[64px]
                  leading-tight
                  font-manrope
                  font-bold
                  mt-4
                  ml-2 sm:ml-4 md:ml-12
                  whitespace-normal md:whitespace-nowrap
                "
                >
                  Level Up with Mastervance Workships,
                  <br />
                  Meetups & Fun Learning
                </h1>

                <p
                  className="
                  text-[#FAFDFF]
                  text-sm sm:text-base md:text-[22px]
                  mt-4
                  max-w-xl
                  ml-2 sm:ml-4 md:ml-14
                  whitespace-normal md:whitespace-nowrap
                "
                >
                  Learn, build, and grow through core engineering events
                  designed for future-ready engineers.
                </p>

                <a
                  href="/courses"
                  className="
                    inline-block
                    px-6 md:px-8
                    py-3
                    rounded-xl
                    bg-[#003366]
                    hover:bg-[#0041cc]
                    text-white
                    font-semibold
                    shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                    transition
                    mt-6
                    ml-2 sm:ml-4 md:ml-14
                  "
                >
                  Lets Grow Together
                </a>
              </div>

              {/* RIGHT ILLUSTRATION */}
              <div className="md:col-span-5 lg:col-span-6 px-2 sm:px-4 md:px-8 py-6 sm:py-8 flex justify-center md:justify-end">
                <Image
                  src="/Events1.svg"
                  alt="Illustration"
                  width={360}
                  height={360}
                  className="
                    w-[360px] sm:w-[300px] md:w-[420px] lg:w-[360px]
                    -mr-15 md:ml-60
                    mt-18 md:mt-5
                    object-contain
                  "
                  priority
                />
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

      <EventsSection />
      <Footer />
    </div>
  );
}
