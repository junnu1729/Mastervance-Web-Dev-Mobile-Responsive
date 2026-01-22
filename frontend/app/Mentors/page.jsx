"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";
import MentorsSection from "../components/Mentor";
import MentorshipHighlights from "../components/MentorImage";

export default function Mentor() {
  return (
    <div>
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
          className="absolute bottom-70 left-32 rounded-full ml-42"
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
            Strong Foundations Need Strong{" "}
            <span className="relative inline-block text-[#083A7F]">
              Mentors
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

          {/* Search Box */}
          <div className="w-full flex justify-center mt-10">
            <div
              className="
      flex items-center
      w-[703px] h-[60px]
      bg-white
      border border-[#DBE7EE]
      rounded-[16px]
      px-[18px]
      shadow-[0px_0px_0.7px_0px_#00000040]
    "
            >
              {/* Search Icon */}
              <div className="flex items-center pr-3 ">
                <Search size={20} className="text-[#9CA3AF]" />
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Find the you’re Career Mentor"
                className="
        flex-1
        h-full
        text-[16px]
        font-manrope
        font-semibold
        text-[#007DFF]
        placeholder:text-[#007DFF]
        outline-none
      "
              />

              {/* Search Button */}
              <button
                className="
    w-[197px] h-[60px]
    px-[48px] py-[25px]
    text-white
    text-[20px]
    font-semibold
    rounded-[20px]
    bg-[linear-gradient(90deg,_#007FFF_0%,_#054789_100%)]
    flex items-center justify-center
    -mr-10
  "
              >
                Search
              </button>
            </div>
          </div>

          {/* Browse link */}
          <div className="mt-8">
            <a
              href="#"
              className="
      inline-flex items-center gap-2
      text-white
      font-medium
      text-[24px]
      underline underline-offset-8
      hover:gap-3
      transition-all
    "
            >
              Browse All Mentors
              <ChevronRight size={28} className="-ml-3 mt-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F9FCFF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[48px] font-manrope leading-[56px] font-bold text-[#565151] mt-23">
              Shape your future with guidance that
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
      <MentorsSection />
      {/* Features Section */}
      <section className="w-full bg-[#F9FCFF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div
              className="
    relative
    flex items-center justify-center gap-[8px]
    w-[540px] h-[62px]
    bg-white
    border border-[#EAE4E4]
    rounded-[16px]
    pt-[9px] pb-[9px] pl-[2px] pr-[2px]
    text-[#1E6DD4]
    text-[26px]
    leading-[14.31px]
    font-semibold
    text-center
    font-inter
  "
            >
              <span className="relative inline-block">Why Mastervance</span>

              <span className="relative inline-block">
                Mentorship Stands Out
                {/* Wavy guide */}
                <svg
                  className="absolute left-2/3 -bottom-[17px] -translate-x-1/2 rotate-[0.26deg]"
                  width="480"
                  height="12"
                  viewBox="0 0 380 12"
                  fill="none"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center font-manrope text-[48px] leading-tight font-bold text-[#3A3434]">
            Mentorship That Builds Future- <br /> Ready Engineers
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-center text-[22px] font-openSans text-[#565151] max-w-3xl mx-auto">
            Get tailored mentorship, curated resources, and career guidance
            designed specifically for your engineering discipline — helping you
            build the right skills, gain clarity
          </p>

          {/* Cards */}
        </div>
        <MentorshipHighlights />
      </section>
      
      {/* FAQ Section */}
      <section className="w-full bg-[#F9FCFF] py-24 -mt-50">
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#4DA3FF] to-[#0055FF] shadow-[0_0_12px_rgba(0,115,255,0.5)]">
            <p className="bg-white rounded-full px-14 py-1 text-[24px] text-[#106FCF]">
              FAQ's
            </p>
          </div>

          <h3 className="mt-6 font-manrope font-extrabold text-[48px] text-[#3A3434]">
            Frequently Asked Question
          </h3>

          <p className="mt-3 text-[22px] text-[#565151]">
            All You Need to Know Before Enrolling
          </p>

          {/* Accordion card (uses <details> so no React state required) */}
          {/* FAQ Accordion (replace your current block with this) */}
          <div className="mt-8 w-full max-w-6xl mx-auto">
            <div className="bg-white rounded-[20px] border border-[#EAEFF2] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-10 py-10 overflow-hidden">
              {/* each FAQ item */}
              {[
                {
                  q: "What core engineering courses are available on this platform?",
                  a: "We offer branch-specific curriculum for Mechanical, Civil, Electrical, Electronics and Mechatronics, plus industry-aligned electives.",
                },
                {
                  q: "Are the courses designed for beginners or advanced learners?",
                  a: "Both — each course shows prerequisite level and learning path; many include beginner-friendly modules then advanced projects.",
                },
                {
                  q: "Will I receive a certificate after completing a course?",
                  a: "Yes — verified certificates are issued on successful completion of eligible programs.",
                },
                {
                  q: "Who are the instructors?",
                  a: "Our instructors are industry experts and senior engineers from core companies and academia.",
                },
                {
                  q: "How do these courses help in career growth?",
                  a: "Courses include real projects, mock interviews, placement assistance and mentor reviews to help you get job-ready.",
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="group px-8 py-6 border-b last:border-b-0"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E9FF] focus-visible:rounded">
                    <span className="font-Inter text-[26px] font-semibold md:text-[24px] text-[#3A3434] leading-10">
                      {item.q}
                    </span>

                    {/* Chevron SVG (rotates when open via CSS below) */}
                    <svg
                      className="w-6 h-6 text-[#3A3434] transition-transform duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>

                  <div className="mt-4 text-[16px] md:text-[18px] text-[#6B6464] leading-[1.7] faq-content">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* Local styles to rotate chevron and animate collapse */}
            <style jsx>{`
              /* rotate chevron when details is open */
              details[open] svg {
                transform: rotate(180deg);
              }

              /* animate the content: start hidden with max-height 0, expand when open */
              .faq-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 260ms ease;
              }
              details[open] .faq-content {
                /* enough max-height to show typical answers; increase if you have long content */
                max-height: 240px;
              }

              /* optional: slightly increase summary padding on focus for keyboard users */
              summary:focus {
                outline: none;
              }
            `}</style>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="text-[24px] h-[62px] px-10 rounded-full 
               bg-gradient-to-r from-[#0077FF] to-[#003366] 
               text-white font-semibold 
               shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              View All FAQ'S
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
