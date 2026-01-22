import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
export default function BecomeMentor() {
  return (
    <>
      <Navbar />
      <section
        className="
          relative 
          top-[90px] -left-[1px]
          w-full max-w-[1728px] h-[620px]
          mx-auto
          border border-white
          bg-[linear-gradient(187.9deg,_#FFFFFF_-53.25%,_#80BFFF_-2.57%,_#007FFF_162.57%)]
          overflow-hidden
          flex items-center
        "
      >
        {/* Floating Avatars */}
        <Image
          src="/Mentors5.svg"
          alt="mentor"
          width={35}
          height={35}
          className="absolute top-20 left-20 rounded-full ml-50"
        />
        <Image
          src="/Mentors1.svg"
          alt="mentor"
          width={81}
          height={81}
          className="absolute top-24 left-20 rounded-full ml-25 mt-3"
        />
        <Image
          src="/Mentors1.svg"
          alt="mentor"
          width={98}
          height={94}
          className="absolute top-40 right-32 rounded-full -mt-15"
        />
        <Image
          src="/Mentors3.svg"
          alt="mentor"
          width={60}
          height={60}
          className="absolute bottom-82 right-55 rounded-full "
        />
        <Image
          src="/Mentors4.svg"
          alt="mentor"
          width={108}
          height={115}
          className="absolute bottom-40 right-65 rounded-full "
        />
        <Image
          src="/Mentors2.svg"
          alt="mentor"
          width={90}
          height={90}
          className="absolute bottom-70 left-32 rounded-full ml-32"
        />
        <Image
          src="/Mentors5.svg"
          alt="mentor"
          width={35}
          height={35}
          className="absolute top-60 left-95 rounded-full"
        />
        <Image
          src="/Mentors5.svg"
          alt="mentor"
          width={35}
          height={35}
          className="absolute top-102 left-135 rounded-full"
        />
        <Image
          src="/Mentors5.svg"
          alt="mentor"
          width={35}
          height={35}
          className="absolute top-94 left-303 rounded-full"
        />
        <Image
          src="/Mentors5.svg"
          alt="mentor"
          width={35}
          height={35}
          className="absolute top-56 left-393 rounded-full"
        />
        <Image
          src="/Mentors5.svg"
          alt="mentor"
          width={35}
          height={35}
          className="absolute top-85 left-20 rounded-full ml-50"
        />
        <Image
          src="/Mentors3.svg"
          alt="mentor"
          width={60}
          height={60}
          className="absolute bottom-45 left-32 rounded-full ml-22"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-[56px] font-manrope font-bold leading-[72px] whitespace-nowrap -ml-15">
            Be the Engineer Who builds{" "}
            <span className="relative inline-block text-[#083A7F]">
              Engineers
              {/* Deep wavy underline */}
              <span className="absolute left-1/2 -translate-x-1/2 top-[78px] -mt-3">
                <svg
                  width="254"
                  height="18"
                  viewBox="0 0 254 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-[0.26deg]"
                >
                  <path
                    d="
            M0 9
            Q 12 0, 24 9
            T 48 9
            T 72 9
            T 96 9
            T 120 9
            T 144 9
            T 168 9
            T 192 9
            T 216 9
            T 240 9
          "
                    stroke="#573697"
                    strokeWidth="2"
                    fill="transparent"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-6 text-[22px] max-w-4xl mx-auto opacity-90 font-openSans">
            Every great engineer starts with the right guidance.
            <br />
            Learn from mentors who’ve mastered the core and can shape your path
            forward.
          </p>

          {/* Browse link */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="text-[24px] h-[62px] px-10 rounded-full 
               bg-gradient-to-r from-[#0077FF] to-[#003366] 
               text-white font-semibold 
               shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              Become a Mentor&nbsp;
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F9FCFF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[46px] font-Inter leading-tight font-bold text-[#565151] mt-23">
              <button
                className="font-Inter font-semibold text-[26px] w-[284px] h-[54px] flex items-center justify-center border border-[#BFD8FF] text-[#106FCF] bg-white leading-tight ml-70 -mt-10"
                style={{
                  padding: "7px 14.31px",
                  borderRadius: "429.38px",
                  boxShadow: "0px 0px 8.6px 0px #1C8EFF70",
                  gap: "14.31px",
                  opacity: 1,
                }}
              >
                Why Become Mentor
              </button>
              Discover How Mentoring Transforms You
              <br />
              works in the real world.
            </h2>

            <p className="mt-6 text-[22px] leading-tight font-openSans text-[#565151]">
              Connect with expert mentors, gain practical insights, and take
              actionable steps toward your engineering career goals.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="relative
    w-[492px] h-[190px]
    rounded-[8px]
    px-[14px] py-[18px]
    bg-[linear-gradient(90deg,_#1E6DD4_0%,_#449AF2_100%)]
    text-white
    flex flex-col
    gap-[24px]
    -ml-32
  "
            >
              {/* Number */}
              <div
                className="
      w-[50px] h-[50px]
      bg-white
      text-[#000000]
      rounded-full
      flex items-center justify-center
      font-bold
      font-manrope
      text-[32px]
      mt-12
      ml-4
    "
              >
                1
              </div>

              {/* Title */}
              <h3 className="text-[26px] font-semibold leading-tight ml-26 -mt-28">
                Access leading <br />
                engineering expertise.
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-tight font-inter opacity-90 ml-26 ">
                From Mechanical to VLSI, gain free
                <br /> guidance from top professionals in the field.
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="relative
    w-[492px] h-[190px]
    rounded-[8px]
    px-[14px] py-[18px]
    bg-[linear-gradient(90deg,_#1E6DD4_0%,_#449AF2_100%)]
    text-white
    flex flex-col
    gap-[24px]
    -ml-8
  "
            >
              {/* Number */}
              <div
                className="
      w-[50px] h-[50px]
      bg-white
      text-[#000000]
      rounded-full
      flex items-center justify-center
      font-bold
      font-manrope
      text-[32px]
      mt-12
      ml-4
    "
              >
                2
              </div>

              {/* Title */}
              <h3 className="text-[26px] font-semibold leading-tight ml-26 -mt-28">
                Tailored mentorship for <br />
                accelerated growth.
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-tight font-inter opacity-90 ml-26 ">
                Book 1:1 sessions to receive actionable advice <br />
                and insights to advance your work efficiently.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="relative
    w-[492px] h-[190px]
    rounded-[8px]
    px-[14px] py-[18px]
    bg-[linear-gradient(90deg,_#1E6DD4_0%,_#449AF2_100%)]
    text-white
    flex flex-col
    gap-[24px]
    ml-17
  "
            >
              {/* Number */}
              <div
                className="
      w-[50px] h-[50px]
      bg-white
      text-[#000000]
      rounded-full
      flex items-center justify-center
      font-bold
      font-manrope
      text-[32px]
      mt-12
      ml-4
    "
              >
                3
              </div>

              {/* Title */}
              <h3 className="text-[26px] font-semibold leading-tight ml-26 -mt-28">
                Achieve your career
                <br /> milestones.
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-tight font-inter opacity-90 ml-26 -mt-3">
                Engage in recurring mentorship sessions to <br />
                strategically work toward long-term <br />
                engineering goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
