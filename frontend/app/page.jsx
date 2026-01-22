"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-fit custom-gradient">
      <Navbar />
      <main className=" pt-32 md:pt-36 lg:pt-40 pb-16 ">
        {/* HERO SECTION */}
        <section className="relative grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-4 sm:px-6 min-h-[calc(100vh-80px)]">
          {/* LEFT CONTENT */}
          <div
            className="
      flex flex-col gap-4
      md:mt-[-40px]
      items-center md:items-start
      text-center md:text-left
    "
          >
            {/* Badge */}
            <div
              className="
        inline-flex w-fit items-center gap-2
        bg-white custom-badge-shadow
        px-4 py-2 rounded-full mb-6
        -mt-0 md:-mt-40
        ml-0 md:-ml-45
      "
            >
              <span className="text-[14.31px] font-medium badge-text">🚀</span>
              <span className="text-[15px] sm:text-[17.31px] font-medium badge-text">
                India&apos;s #1 EdTech Platform for Core Engineers
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
        manrope heading-text font-bold tracking-[0px] text-[#454040]
        text-[32px] sm:text-[40px] md:text-[65px]
        leading-tight md:leading-[68px]
        ml-0 md:-ml-45
      "
            >
              Master Your
              <br />
              <span className="text-[#007fff] manrope">Engineering Career</span>
            </h1>

            {/* Sub text */}
            <p
              className="
        mt-4 text-gray-600
        text-[14px] sm:text-[18px] md:text-2xl
        leading-relaxed md:leading-10
        max-w-xl md:max-w-xxl
        ml-0 md:-ml-45
      "
            >
              Learn industry-ready core engineering skills with Mastervance.
              Learn through practical courses, expert mentorship, and real-world
              projects.
            </p>

            {/* CTA Button */}
            <button
              className="
        font-manrope mt-8 md:mt-12
        inline-flex items-center justify-center gap-[23px]
        w-full sm:w-[320px] md:w-[360px]
        h-[52px] md:h-[59px]
        px-6 md:pl-10 md:pr-12
        rounded-[24px]
        bg-[#003366] text-white
        text-[16px] md:text-xl
        font-extrabold tracking-wide
        custom-button-shadow hover:bg-[#0041cc]
        ml-0 md:-ml-45
      "
            >
              Start Your Journey Now →
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className="
      relative flex justify-center mt-10 md:mt-0
      hidden md:flex
    "
          >
            {/* main big circle image */}
            <Image
              src="/hero-main.png"
              alt="Engineer Illustration"
              width={300}
              height={300}
              className="rounded-3xl object-contain absolute top-[-400px] left-[0px]"
            />

            <Image
              src="/Frame 251.png"
              alt=""
              width={170}
              height={170}
              className="rounded-full object-contain absolute top-[-350px] right-[50px]"
            />

            <Image
              src="/Frame 132.png"
              alt=""
              width={50}
              height={30}
              className="rounded-full object-contain absolute top-[-270px] -right-[20px]"
            />

            <Image
              src="/Frame 135.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full object-contain absolute top-[-320px] -right-[90px]"
            />

            <Image
              src="/Frame 133.png"
              alt=""
              width={80}
              height={80}
              className="rounded-full object-contain absolute -top-[80px] left-[80px]"
            />

            <Image
              src="/Frame 131.png"
              alt=""
              width={100}
              height={100}
              className="rounded-full object-contain absolute -top-[110px] left-[180px]"
            />

            <Image
              src="/Frame 258.png"
              alt=""
              width={220}
              height={220}
              className="rounded-full object-contain absolute -top-[160px] left-[310px]"
            />

            <Image
              src="/Frame 257.png"
              alt=""
              width={290}
              height={290}
              className="rounded-full object-contain absolute top-[-250px] left-[530px]"
            />
          </div>
        </section>

        {/* HERO SECTION  End*/}

        {/* ABOUT US SECTION */}

        <section className="mt-[70px] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10">
            {/* ================= TOP CONTENT ================= */}
            <div
              className="
        grid
        md:grid-cols-[2fr,1.1fr]
        gap-10
        items-center
        text-center md:text-left
      "
            >
              {/* LEFT TEXT BLOCK */}
              <div className="flex flex-col items-center md:items-start">
                {/* About Us pill */}
                <div
                  className="
            inline-flex items-center
            px-6 sm:px-10 py-1
            rounded-[100px]
            bg-white
            shadow-[0_0_25px_rgba(0,119,255,0.4)]
            mb-6
            mt-0 md:mt-15
            ml-0 md:-ml-45
          "
                >
                  <span className="font-inter text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-[#0077ff]">
                    About Us
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
            font-manrope font-bold
            text-[28px] sm:text-[36px] md:text-[48px]
            leading-tight md:leading-[140%]
            tracking-[0px]
            text-[#3D3737]
            ml-0 md:-ml-45
          "
                >
                  Practical Learning That Builds <br />
                  Your
                  <span className="text-[#007FFF]"> Future Career</span>
                </h2>
              </div>

              {/* RIGHT DESCRIPTION + BUTTON */}
              <div
                className="
          flex flex-col gap-6 sm:gap-[33px]
          w-full
          ml-0 md:ml-[720px]
          mt-6 md:-mt-[310px]
          max-w-full md:w-[645px]
          items-center md:items-start
        "
              >
                <p
                  className="
            font-openSans
            text-[15px] sm:text-[18px] md:text-[22px]
            leading-relaxed md:leading-[27px]
            text-[#565651]
            text-center md:text-left
          "
                >
                  Mastervance is an Edtech platform created to help engineering
                  students gain real, hands-on skills through practical courses
                  and project-based learning.
                </p>

                <button
                  className="
            inline-flex items-center gap-[12px]
            px-8 py-3
            rounded-full
            bg-[#003366]
            text-white
            text-[16px] md:text-[20px]
            font-semibold
            shadow-md
            hover:bg-[#0041cc]
          "
                >
                  Know More →
                </button>
              </div>
            </div>

            {/* ================= BOTTOM CARDS ================= */}
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center md:place-items-stretch">
              {/* CARD 1 */}
              <div
                className="
          group relative
          w-full max-w-[416px] md:w-[416px]
          h-auto md:h-[415px]
          bg-white rounded-[16px]
          border border-[#EDE8E8]
          shadow-md
          p-[22px]
          flex flex-col gap-[24px] md:gap-[40px]
          transition-all duration-500 ease-out
          ml-0 md:ml-[-130px]
          hover:-translate-y-3 hover:scale-[1.03]
          hover:border-transparent
          hover:shadow-[0px_18px_38px_rgba(0,119,255,0.25)]
          overflow-hidden
        "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(0,119,255,0.05)] to-[rgba(0,119,255,0.12)]" />

                <Image
                  src="/engineering 1.png"
                  alt="Career Ready"
                  width={100}
                  height={100}
                />

                <h3 className="font-manrope font-extrabold text-[22px] md:text-[32px] text-[#3A3434] -mt-2">
                  Students for a Career <br /> Ready Future
                </h3>

                <p className="font-openSans text-[15px] md:text-[22px] text-[#706A6A] -mt-5">
                  Every student deserves the right support, hands-on learning,
                  and industry exposure to confidently step into their future
                  career.
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
          group relative
          w-full max-w-[416px] md:w-[416px]
          h-auto md:h-[415px]
          bg-white rounded-[16px]
          border border-[#EDE8E8]
          shadow-md
          p-[22px]
          flex flex-col gap-[24px] md:gap-[40px]
          transition-all duration-500 ease-out
          hover:-translate-y-3 hover:scale-[1.03]
          hover:border-transparent
          hover:shadow-[0px_18px_38px_rgba(0,119,255,0.25)]
          overflow-hidden
        "
              >
                <Image
                  src="/scrum 1.png"
                  alt="Skills"
                  width={100}
                  height={100}
                />

                <h3 className="font-manrope font-extrabold text-[22px] md:text-[32px] text-[#3A3434]">
                  Skills & Opportunities <br /> That Matter
                </h3>

                <p className="font-openSans text-[15px] md:text-[22px] text-[#706A6A]">
                  We believe in empowering students with mentorship, practical
                  skills, and real-world experiences.
                </p>
              </div>

              {/* CARD 3 */}
              <div
                className="
          group relative
          w-full max-w-[416px] md:w-[416px]
          h-auto md:h-[415px]
          bg-white rounded-[16px]
          border border-[#EDE8E8]
          shadow-md
          p-[22px]
          flex flex-col gap-[24px] md:gap-[40px]
          transition-all duration-500 ease-out
          ml-0 md:ml-[130px]
          hover:-translate-y-3 hover:scale-[1.03]
          hover:border-transparent
          hover:shadow-[0px_18px_38px_rgba(0,119,255,0.25)]
          overflow-hidden
        "
              >
                <Image
                  src="/idea 1.png"
                  alt="Building Skills"
                  width={100}
                  height={100}
                />

                <h3 className="font-manrope font-extrabold text-[22px] md:text-[32px] text-[#3A3434]">
                  Building Skills, <br /> Shaping Futures
                </h3>

                <p className="font-openSans text-[15px] md:text-[22px] text-[#706A6A]">
                  Our goal is to give every student access to guidance,
                  skill-building, and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*ABOUT SECTION END */}

        {/*OUR COURSES SECTION */}
        <section className="w-full bg-[#C2DFFF] py-16 sm:py-20 md:py-24 mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* ================= TOP TEXT ================= */}
            <div className="flex flex-col items-center text-center gap-4">
              <div
                className="
          inline-flex items-center
          px-6 sm:px-10 py-1
          rounded-full bg-white
          shadow-[0_0_25px_rgba(0,119,255,0.35)]
          mt-0 md:-mt-15
        "
              >
                <span className="font-inter text-[18px] sm:text-[22px] md:text-[24px] font-bold text-[#0077FF]">
                  Our Courses
                </span>
              </div>

              <h2
                className="
          font-manrope font-bold
          text-[26px] sm:text-[34px] md:text-[48px]
          leading-tight md:leading-[100%]
          text-[#3A3434]
        "
              >
                Specialized Learning Paths for Leading Core Engineering Branches
              </h2>

              <p
                className="
          font-openSans
          text-[15px] sm:text-[18px] md:text-[25px]
          leading-relaxed md:leading-[100%]
          text-[#706A6A]
          max-w-4xl
        "
              >
                Get tailored mentorship, curated resources, and career guidance
                designed specifically for your engineering discipline — helping
                you build the right skills and gain clarity.
              </p>
            </div>

            {/* ================= BRANCH TABS ================= */}
            <div className="mt-8 md:mt-10 flex justify-center">
              <div
                className="
          flex md:items-center
          gap-3 sm:gap-4 md:gap-[40px]
          bg-white px-4 md:px-6 py-3
          rounded-[25px]
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          w-full md:w-[989px]
          overflow-x-auto md:overflow-visible
        "
              >
                {/* Active */}
                <button className="flex items-center gap-2 px-6 md:px-8 py-2 rounded-full bg-[#0077FF] text-white text-[14px] md:text-[16px] font-semibold whitespace-nowrap">
                  <img src="/FO1.svg" alt="" className="w-6 h-6" />
                  Electrical
                </button>

                {/* Inactive */}
                {[
                  { icon: "/FO2.svg", label: "Civil" },
                  { icon: "/FO3.svg", label: "Electronics" },
                  { icon: "/FO4.svg", label: "Mechanical" },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="
              flex items-center gap-2
              px-5 md:px-6 py-2
              rounded-full
              bg-transparent
              text-[#4B4B4B]
              text-[13px] md:text-[15px]
              font-medium
              hover:bg-[#EEF4FF]
              whitespace-nowrap
            "
                  >
                    <img src={item.icon} alt="" className="w-6 h-6" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= COURSE CARDS ================= */}
            <div
              className="
        mt-12
        grid gap-8
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        place-items-center md:place-items-stretch
      "
            >
              {/* CARD 1 */}
              <div
                className="
    group
    bg-white
    rounded-[24px]
    shadow-[0_10px_30px_rgba(0,0,0,0.16)]
    overflow-hidden
    flex flex-col
    border border-transparent
    transition-all duration-300 ease-out

    /* SIZE */
    w-full max-w-[470px] md:w-[470px]
    h-auto md:h-[650px]

    /* POSITION */
    ml-0 md:-ml-60

    /* HOVER */
    hover:-translate-y-3
    hover:shadow-[0_18px_38px_rgba(0,119,255,0.25)]
    hover:border-[#0077FF]
    hover:bg-[#F5FAFF]
  "
              >
                {/* IMAGE */}
                <div
                  className="
      bg-gradient-to-b from-[#03070c] to-[#C7E1FF]
      flex items-center justify-center
      mt-6 md:mt-10
      h-[200px] md:h-[220px]
      -mr-0 md:-mr-7
      transition-transform duration-300
      group-hover:-translate-y-1
    "
                >
                  <Image
                    src="/image1.png"
                    alt="VLSI Designing"
                    width={500}
                    height={470}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className="
      px-6
      pt-5 md:pt-5
      pb-6
      flex flex-col
      gap-4 md:gap-5
    "
                >
                  <h3
                    className="
        font-manrope font-bold
        text-[20px] md:text-[29px]
        leading-tight md:leading-[100%]
        text-[#3A3434]
        mt-2 md:mt-8
        transition-colors duration-300
        group-hover:text-[#0077FF]
      "
                  >
                    VLSI Designing In PG program
                  </h3>

                  <p
                    className="
        font-openSans
        text-[13px] md:text-[14px]
        leading-relaxed md:leading-[150%]
        text-[#706A6A]
      "
                  >
                    Design is the foundation of modern electronics, enabling the
                    creation of powerful microchips that drive computers,
                    smartphones, and countless smart systems.
                  </p>

                  {/* TAGS (UNCHANGED, SCALE NATURALLY) */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      CMOS
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      NMOS
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      Embedded System
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="mt-2 flex flex-col gap-1 text-[14px] text-[#3A3434]">
                    <div className="flex items-center gap-2">
                      <span>⏱</span>
                      <span>4 Weeks duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📘</span>
                      <span>Electronics</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
        mt-auto
        w-full
        inline-flex items-center justify-center
        px-6 py-3
        rounded-full
        bg-[#003366]
        text-white
        text-[15px] md:text-[16px]
        font-semibold
        shadow-md
        transition-all duration-300
        hover:bg-[#0041cc]
        hover:shadow-[0_10px_24px_rgba(0,64,204,0.55)]
      "
                  >
                    Know More
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className="
    group
    bg-white
    rounded-[24px]
    shadow-[0_10px_30px_rgba(0,0,0,0.16)]
    overflow-hidden
    flex flex-col
    border border-transparent
    transition-all duration-300 ease-out

    /* SIZE */
    w-full max-w-[470px] md:w-[470px]
    h-auto md:h-[650px]

    /* POSITION */
    ml-0 md:-ml-20

    /* HOVER */
    hover:-translate-y-3
    hover:shadow-[0_18px_38px_rgba(0,119,255,0.25)]
    hover:border-[#0077FF]
    hover:bg-[#F5FAFF]
  "
              >
                {/* IMAGE */}
                <div
                  className="
      bg-gradient-to-b from-[#E6F2FF] to-[#C7E1FF]
      flex items-center justify-center
      mt-6 md:mt-10
      h-[200px] md:h-[220px]
      -mr-0 md:-mr-7
      transition-transform duration-300
      group-hover:-translate-y-1
    "
                >
                  <Image
                    src="/image 2.png"
                    alt="AUTO-CAD Designing"
                    width={500}
                    height={470}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className="
      px-6
      pt-5 md:pt-5
      pb-6
      flex flex-col
      gap-4 md:gap-4
    "
                >
                  <h3
                    className="
        font-manrope font-bold
        text-[20px] md:text-[29px]
        leading-tight md:leading-[100%]
        text-[#3A3434]
        mt-2 md:mt-8
        transition-colors duration-300
        group-hover:text-[#0077FF]
      "
                  >
                    AUTO-CAD Designing
                  </h3>

                  <p
                    className="
        font-openSans
        text-[13px] md:text-[14px]
        leading-relaxed md:leading-[150%]
        text-[#706A6A]
      "
                  >
                    Learn industry-standard design workflows to create detailed,
                    accurate, and professional CAD drawings used across
                    engineering and design fields.
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      CMOS
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      NMOS
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      Embedded System
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="mt-2 flex flex-col gap-1 text-[14px] text-[#3A3434]">
                    <div className="flex items-center gap-2">
                      <span>⏱</span>
                      <span>4 Weeks duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📘</span>
                      <span>Electronics</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
        mt-auto
        w-full
        inline-flex items-center justify-center
        px-6 py-3
        rounded-full
        bg-[#003366]
        text-white
        text-[15px] md:text-[16px]
        font-semibold
        shadow-md
        transition-all duration-300
        hover:bg-[#0041cc]
        hover:shadow-[0_10px_24px_rgba(0,64,204,0.55)]
      "
                  >
                    Know More
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                className="
    group
    bg-white
    rounded-[28px]
    shadow-[0_10px_30px_rgba(0,0,0,0.16)]
    overflow-hidden
    flex flex-col
    border border-transparent
    transition-all duration-300 ease-out

    /* SIZE */
    w-full max-w-[470px] md:w-[470px]
    h-auto md:h-[650px]

    /* POSITION */
    ml-0 md:ml-[75px]

    /* HOVER */
    hover:-translate-y-3
    hover:shadow-[0_18px_38px_rgba(0,119,255,0.25)]
    hover:border-[#0077FF]
    hover:bg-[#F5FAFF]
  "
              >
                {/* IMAGE */}
                <div
                  className="
      bg-gradient-to-b from-[#E6F2FF] to-[#C7E1FF]
      flex items-center justify-center
      mt-6 md:mt-10
      h-[200px] md:h-[220px]
      -mr-0 md:-mr-7
      transition-transform duration-300
      group-hover:-translate-y-1
    "
                >
                  <Image
                    src="/image 3.png"
                    alt="Interior Architecture"
                    width={500}
                    height={470}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className="
      px-6
      pt-5 md:pt-5
      pb-6
      flex flex-col
      gap-4
    "
                >
                  <h3
                    className="
        font-manrope font-bold
        text-[20px] md:text-[29px]
        leading-tight md:leading-[100%]
        text-[#3A3434]
        mt-2 md:mt-10
        transition-colors duration-300
        group-hover:text-[#0077FF]
      "
                  >
                    Interior Architecture
                  </h3>

                  <p
                    className="
        font-openSans
        text-[13px] md:text-[14px]
        leading-relaxed md:leading-[150%]
        text-[#706A6A]
      "
                  >
                    Explore the fundamentals of interior space planning, visual
                    aesthetics, and functional design tailored for modern
                    environments.
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      CMOS
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      NMOS
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#D0D7E2] text-[12px] font-medium text-[#3A3434]">
                      Embedded System
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="mt-2 flex flex-col gap-1 text-[14px] text-[#3A3434]">
                    <div className="flex items-center gap-2">
                      <span>⏱</span>
                      <span>4 Weeks duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📘</span>
                      <span>Electronics</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
        mt-auto
        w-full
        inline-flex items-center justify-center
        px-6 py-3
        rounded-full
        bg-[#003366]
        text-white
        text-[15px] md:text-[16px]
        font-semibold
        shadow-md
        transition-all duration-300
        hover:bg-[#0041cc]
        hover:shadow-[0_10px_24px_rgba(0,64,204,0.55)]
      "
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* ================= EXPLORE ALL ================= */}
            <div className="mt-12 flex justify-center">
              <button className="px-10 py-3 rounded-full bg-[#003366] text-white text-[16px] md:text-[18px] font-semibold hover:bg-[#0041cc]">
                Explore All →
              </button>
            </div>
          </div>
        </section>

        {/* OUR COURSES SECTION END */}

        {/* PLACEMENT ASSISTANCE START */}
        <div className="pt-20 md:pt-25 pb-16 bg-[#FBFDFF]">
          <div className="max-w-7xl mx-auto px-4">
            {/* ---------- HERO: badge + title + subtitle ---------- */}
            <div className="text-center mb-12">
              <p
                className="
          font-OpenSans
          inline-flex items-center justify-center
          bg-white/60 rounded-[429.38px]
          shadow-sm
          text-[#0077FF]
          text-[16px] sm:text-[18px] md:text-[20px]
          px-6 md:px-[14.31px]
          py-2 md:py-[10.02px]
          w-full sm:w-auto md:w-[456px]
          h-auto md:h-[60px]
          mx-auto
        "
              >
                Why Students Trust Mastervance
              </p>

              <h1 className="mt-6 font-manrope font-extrabold text-[28px] sm:text-[36px] md:text-[56px] leading-[1.3] text-[#2B2B2B]">
                Everything You Need to <br />
                Excel in
                <span className="bg-gradient-to-r from-[#004C99] to-[#007FFF] text-transparent bg-clip-text">
                  &nbsp;Core&nbsp;Engineering
                </span>
              </h1>

              <p className="mt-4 mx-auto max-w-3xl font-openSans text-[14px] sm:text-[16px] md:text-[20px] text-[#565151] leading-[1.6]">
                Get tailored mentorship, curated resources, and career guidance
                designed specifically for your engineering discipline — helping
                you build the right skills and gain clarity.
              </p>
            </div>

            {/* ========== GRID ========== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* LEFT: CARD 1 */}
              <div
                className="
          row-span-2
          bg-[#0F6BFF] text-white rounded-[20px]
          overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          h-auto md:h-115
          flex flex-col
          ml-0 md:-ml-35
        "
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <h3 className="font-manrope font-extrabold text-[24px] md:text-[34px] mb-4">
                    1:1 Expert Mentorship
                  </h3>

                  <p className="font-openSans text-[14px] md:text-[16px] text-white/90 mb-6">
                    Get personalized guidance from industry professionals
                    working at core companies.
                  </p>

                  <div
                    className="
              mt-auto
              rounded-[12px]
              overflow-hidden
              w-full md:w-[535px]
              ml-0 md:-ml-8
            "
                  >
                    <Image
                      src="/pimage1.png"
                      alt="mentorship"
                      width={900}
                      height={520}
                      className="object-cover w-full rounded-bl-[12px] rounded-br-[12px]"
                    />
                  </div>
                </div>
              </div>

              {/* TOP MIDDLE: CARD 2 */}
              <div
                className="
          bg-white rounded-[20px]
          border border-[#E8E8E8]
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          p-6 flex flex-col
          w-full md:w-[470px]
          h-auto md:h-115
        "
              >
                <h3 className="font-manrope font-bold text-[24px] md:text-[32px] text-[#007FFF] mb-3">
                  Branch-Specific Curriculum
                </h3>

                <p className="font-openSans text-[14px] md:text-[16px] text-[#565151] leading-[1.6]">
                  Tailored learning paths for{" "}
                  <span className="text-[#0866C4]">
                    Mechanical, Civil, Electrical, Electronics, and Mechatronics
                  </span>{" "}
                  engineering.
                </p>

                <div className="mt-6 flex justify-center">
                  <Image
                    src="/pimage2.png"
                    alt="curriculum"
                    width={260}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TOP RIGHT: CARD 3 */}
              <div
                className="
          bg-white rounded-[20px]
          border border-[#E8E8E8]
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
          p-6 flex flex-col
          w-full md:w-115
          h-auto md:h-235
          ml-0 md:ml-20
        "
              >
                <h3 className="font-manrope font-bold text-[26px] md:text-[36px] text-[#007FFF] mb-6">
                  Interactive Live Sessions & Workshops
                </h3>

                <p className="font-openSans text-[14px] md:text-[16px] text-[#6A6A6A] leading-[1.8]">
                  Participate in webinars, hackathons, and industry talks to
                  stay ahead of engineering trends.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Certificate programs",
                    "Weekly Expert Sessions",
                    "Networking opportunities",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                inline-flex items-center gap-2
                px-4 py-1
                rounded-[24px]
                border border-[#B388FF]
                bg-white
                text-[#9307CB]
                text-[13px]
              "
                    >
                      ✓✓ {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Image
                    src="/pimage3.png"
                    alt="live sessions"
                    width={550}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* PLACEMENT BANNER */}
              <div className="md:col-span-2">
                <div
                  className="
            w-full md:w-260
            h-auto md:h-85
            rounded-[30px]
            bg-gradient-to-r from-[#0F6BFF] via-[#69B3FF] to-white
            p-6 md:p-26
            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            flex flex-col md:flex-row
            items-center gap-6
            ml-0 md:-ml-[565px]
            mt-6 md:-mt-[470px]
          "
                >
                  <div className="md:flex-1 text-white">
                    <h2 className="font-manrope font-extrabold text-[26px] md:text-[40px] mb-4">
                      Placement Assistance
                    </h2>

                    <p className="font-Inter text-[14px] md:text-[16px] text-white/90 mb-6">
                      Achieve an 85% placement rate with our dedicated support —
                      from personalized job hunting assistance and interview
                      prep to salary negotiation.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "Job referrals",
                        "Mock Interviews",
                        "Salary Negotiation",
                      ].map((item) => (
                        <span
                          key={item}
                          className="bg-white text-[#CBAD07] px-4 py-1 rounded-full text-[13px]"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-[360px] w-full flex justify-center">
                    <Image
                      src="/pimage4.png"
                      alt="placement"
                      width={360}
                      height={220}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PLACEMENT ASSISTANCE END */}

        {/* BOOKING SECTION*/}
        <section
          className="
    w-full
    bg-[#1E90FF]
    py-16 md:py-20
    mt-20
    h-auto md:h-[625px]
  "
        >
          <div
            className="
      max-w-7xl mx-auto
      px-4 sm:px-6 md:px-12
      grid grid-cols-1 md:grid-cols-2
      items-center
      gap-10
      mt-0 md:mt-25
    "
          >
            {/* LEFT SIDE — Orbit Icons */}
            {/* LEFT SIDE — Orbit Icons (DESKTOP ONLY) */}
            <div className="relative hidden md:flex justify-center items-center md:-ml-40">
              {/* Orbit circles */}
              <div className="absolute w-[520px] h-[520px] rounded-full border-[2px] border-white/40"></div>
              <div className="absolute w-[360px] h-[360px] rounded-full border-[2px] border-white/40"></div>
              <div className="absolute w-[200px] h-[200px] rounded-full border-[2px] border-white/40"></div>

              {/* Center hat logo */}
              <div className="w-[110px] h-[110px] bg-black rounded-full flex justify-center items-center shadow-lg z-10">
                <Image
                  src="/image 1.png"
                  width={110}
                  height={110}
                  alt="Mastervance"
                  className="object-contain"
                />
              </div>

              {/* Floating icons */}
              <Image
                src="/Frame 1341.png"
                width={90}
                height={90}
                alt="Chip"
                className="absolute -top-6 -left-4 rotate-[8deg] drop-shadow-xl ml-45 -mt-45"
              />

              <Image
                src="/Frame 1331.png"
                width={90}
                height={90}
                alt="Compass"
                className="absolute top-10 left-[140px] rotate-[5deg] drop-shadow-xl ml-1"
              />

              <Image
                src="/Frame 1311.png"
                width={90}
                height={90}
                alt="Helmet"
                className="absolute top-28 right-3 rotate-[19.6deg] drop-shadow-xl mr-23 -mt-60"
              />

              <Image
                src="/Frame 1351.png"
                width={90}
                height={90}
                alt="Bulb"
                className="absolute bottom-6 right-[110px] rotate-[-16deg] drop-shadow-xl mt-10 mr-10"
              />

              <Image
                src="/Frame 1321.png"
                width={90}
                height={90}
                alt="Wrench"
                className="absolute -bottom-52 left-7 rotate-[19.6deg] drop-shadow-xl ml-38"
              />
            </div>

            {/* RIGHT SIDE — Text */}
            <div className="text-white text-center md:text-left md:pl-10">
              <h2 className="font-manrope font-extrabold text-[26px] sm:text-[32px] md:text-[42px] leading-tight mb-4">
                Ready to Transform Your <br className="hidden sm:block" />{" "}
                Engineering Career?
              </h2>

              <p className="text-white/90 font-openSans text-[14px] sm:text-[16px] md:text-[18px] leading-[150%] max-w-full md:max-w-[450px] mb-8 mx-auto md:mx-0">
                Join thousands of engineering students who've accelerated their
                careers with Mastervance. Start your journey today with a free
                consultation.
              </p>

              {/* CTA */}
              <button className="px-8 py-3 rounded-full bg-[#003366] hover:bg-[#0041cc] text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] shadow-lg">
                Book Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
<section className="bg-[#FBFDFF] px-6 md:px-12 py-20">
  {/* ================= NEWSLETTER ================= */}
  <div className="max-w-6xl mx-auto text-center">
    <div className="flex flex-col items-center gap-8">

      {/* Illustration */}
      <div className="w-full max-w-[680px]">
        <Image
          src="/Frame 374.png"
          alt="Newsletter"
          width={1000}
          height={882}
          className="object-contain mx-auto"
        />
      </div>

      {/* Heading */}
      <h2 className="font-manrope font-extrabold text-[28px] md:text-[48px] text-[#3A3434] leading-tight -mt-0 md:-mt-15">
        Subscribe Our Newsletter
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-center font-openSans text-[16px] md:text-[22px] text-[#565151] leading-[1.6]">
        Stay ahead in your career journey with weekly insights,
        practical tips, and expert advice tailored for engineering
        students. From industry updates and career growth strategies —
        we’ve got you covered.
      </p>

      {/* ================= FORM ================= */}
      <form
        className="w-full flex justify-center mt-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div
          className="
            relative
            w-full
            max-w-full
            md:max-w-3xl
            mr-0 md:mr-40
          "
        >
          {/* Input */}
          <input
            type="email"
            placeholder="Your@email.com"
            className="
              w-full md:w-[953px]
              h-[56px] md:h-[91px]
              rounded-[24px] md:rounded-[32px]
              border border-[#3A3434]
              pl-4 md:pl-[24px]
              pt-[10px] pb-[10px]
              text-[16px] md:text-[28px]
              font-Manrope
              placeholder:text-[#3A3434]
              outline-none bg-white
              focus:ring-2 focus:ring-[#E6F2FF]
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              mt-4 md:mt-0
              w-full md:w-auto
              h-[52px] md:h-[62px]
              px-6
              rounded-full
              bg-gradient-to-r from-[#0077FF] to-[#003366]
              text-white font-semibold
              text-[16px] md:text-[24px]
              shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              md:absolute md:right-[-160px]
              md:top-1/2 md:-translate-y-1/2
            "
          >
            Subscribe Now!
          </button>
        </div>
      </form>
    </div>
  </div>

  {/* ================= FAQ ================= */}
  <div className="max-w-4xl mx-auto mt-16 text-center">
    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#4DA3FF] to-[#0055FF] shadow-[0_0_12px_rgba(0,115,255,0.5)]">
      <p className="bg-white rounded-full px-10 md:px-14 py-1 text-[18px] md:text-[24px] text-[#106FCF]">
        FAQ's
      </p>
    </div>

    <h3 className="mt-6 font-manrope font-extrabold text-[28px] md:text-[48px] text-[#3A3434]">
      Frequently Asked Question
    </h3>

    <p className="mt-3 text-[16px] md:text-[22px] text-[#565151]">
      All You Need to Know Before Enrolling
    </p>

    {/* FAQ Card */}
    <div className="mt-8 w-full">
      <div className="bg-white rounded-[20px] border border-[#EAEFF2] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-4 md:px-10 py-6 md:py-10 overflow-hidden">
        {[
          {
            q: "What core engineering courses are available on this platform?",
            a: "We offer branch-specific curriculum for Mechanical, Civil, Electrical, Electronics and Mechatronics.",
          },
          {
            q: "Are the courses designed for beginners or advanced learners?",
            a: "Both — each course includes beginner-friendly modules and advanced projects.",
          },
          {
            q: "Will I receive a certificate after completing a course?",
            a: "Yes — verified certificates are issued on successful completion.",
          },
        ].map((item, idx) => (
          <details
            key={idx}
            className="group py-5 border-b last:border-b-0"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between text-left">
              <span className="font-Inter font-semibold text-[16px] md:text-[26px] text-[#3A3434] leading-relaxed">
                {item.q}
              </span>
              <span className="text-xl transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>

            <div className="mt-4 text-[14px] md:text-[18px] text-[#6B6464] leading-[1.7]">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="
            h-[52px] md:h-[62px]
            px-8 md:px-10
            rounded-full
            bg-gradient-to-r from-[#0077FF] to-[#003366]
            text-white font-semibold
            text-[16px] md:text-[24px]
            shadow-[0_8px_20px_rgba(0,0,0,0.12)]
          "
        >
          View All FAQ'S
        </button>
      </div>
    </div>
  </div>
</section>


        {/* FAQ SECTION END */}

        <Footer />
      </main>
    </div>
  );
}
