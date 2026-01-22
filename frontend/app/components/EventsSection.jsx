"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

export default function EventsSection() {
  const [cardIndex, setCardIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 8); // 8 images total
    }, 3000); // moves every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const cardWidth = 720; // px (matches Figma-like width)
  const gap = 32;

  const totalCards = 4;

  const handleNext = () => {
    if (cardIndex < totalCards - 1) {
      setCardIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-24 bg-[#F9FCFF] ">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
          <h2
            className="
      font-manrope font-bold
      text-[28px] sm:text-[36px] md:text-[48px]
      leading-[120%] md:leading-[100%]
      tracking-[0%]
      text-[#565151]
    "
          >
            Learn from Industry Experts
            <br className="hidden md:block" />
            <span className="text-[#565151] block md:inline">Upcoming </span>
            <span
              className="
        font-manrope font-bold
        text-[28px] sm:text-[36px] md:text-[48px]
        leading-[120%] md:leading-[200%]
        bg-gradient-to-r from-[#007FFF] to-[#09509B]
        bg-clip-text text-transparent
        block md:inline
      "
            >
              Events & Workshops
            </span>
          </h2>

          <p
            className="
      font-openSnas
      text-sm sm:text-base md:text-[23px]
      text-[#565151]
      max-w-5xl
      mx-auto
      mt-4
      leading-relaxed
    "
          >
            Join live sessions, workshops, and hackathons led by industry
            professionals.
            <br className="hidden md:block" />
            Stay ahead with the latest engineering trends and technologies.
          </p>
        </div>

        {/* ================= SEARCH + ARROWS ================= */}
        <div
          className="
    flex flex-col md:flex-row
    md:justify-between md:items-center
    gap-6 md:gap-0
    mb-10
  "
        >
          {/* LEFT BUTTON */}
          <button
            className="
      font-Inter font-semibold
      text-[18px] sm:text-[22px] md:text-[26px]
      w-full sm:w-[260px] md:w-[284px]
      h-[48px] md:h-[54px]
      flex items-center justify-center
      border border-[#BFD8FF]
      text-[#106FCF] bg-white
      ml-0 mt-0
      md:-ml-30 md:-mt-30
      mx-auto md:mx-0
    "
            style={{
              padding: "7px 14.31px",
              borderRadius: "429.38px",
              boxShadow: "0px 0px 8.6px 0px #1C8EFF70",
              gap: "14.31px",
              opacity: 1,
            }}
          >
            Upcoming Event
          </button>

          {/* SEARCH BAR */}
          <div
            className="
      w-full
      max-w-full md:max-w-2xl
      mx-auto
      mt-4 md:mt-10
      ml-0 md:-ml-70
    "
          >
            <div
              className="
        flex items-center
        bg-white
        border border-[#DBE7EE]
        rounded-full
        shadow-sm
        overflow-hidden
        h-[48px] md:h-[52px]
      "
            >
              {/* Left content */}
              <div className="flex items-center flex-1 px-4 md:px-5 gap-3">
                <Search className="text-[#8AA4C8]" size={22} />
                <input
                  type="text"
                  placeholder="Find the event you’re looking for"
                  className="
            w-full font-manrope outline-none
            text-[#0D6EFD]
            placeholder-[#0D6EFD]
            text-sm md:text-[16px]
          "
                />
              </div>

              {/* Divider (hide on very small screens if needed) */}
              <div className="hidden sm:block h-7 w-px bg-[#D6E4FF]" />

              {/* Location */}
              <div className="hidden sm:flex items-center gap-2 px-4 md:px-5">
                <MapPin className="text-[#0D6EFD]" size={22} />
                <span className="text-[#0D6EFD] font-manrope text-sm md:text-[16px] font-medium">
                  Location
                </span>
              </div>

              {/* Filter */}
              <div className="hidden sm:block px-3 md:px-4">
                <SlidersHorizontal className="text-[#8AA4C8]" size={18} />
              </div>

              {/* Search Button */}
              <button
                className="
          bg-[#0D6EFD]
          h-full
          w-[48px] md:w-[56px]
          flex items-center justify-center
          rounded-r-full
        "
              >
                <Search className="text-white" size={22} />
              </button>
            </div>
          </div>

          {/* RIGHT ARROWS */}
          <div
            className="
      flex gap-6
      justify-center
      mt-4 md:mt-0
      mr-0 md:-mr-35
      md:-mt-45
    "
          >
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
            >
              <Image
                src="/Events3.svg"
                alt="Previous"
                width={127}
                height={127}
                className="object-contain"
              />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
            >
              <Image
                src="/Events2.svg"
                alt="Next"
                width={127}
                height={127}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* ================= EVENTS SLIDER ================= */}
        <div className="relative mt-18 -ml-30 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${cardIndex * (720 + 32)}px)`,
            }}
          >
            {/* ================= CARD 1 ================= */}
            <div className="min-w-[1043px] h-[374px] bg-white rounded-2xl shadow-lg mr-8 flex border border-[#E8EAED] ">
              <div className="relative w-[320px] h-[320px] mt-7 ml-18">
                <div className="absolute inset-0 -translate-x-10">
                  <Image
                    src="/Events4.svg"
                    alt="event"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex-1 p-8 ">
                <h3 className="text-[36px] font-semibold text-[#565151] mb-4 mt-10 leading-tight -translate-12">
                  Advance in 3D & Technical Drawing <br />
                  Workshop for Engineers
                </h3>

                <p className="text-[#000000] text-[16px] font-inter w-[590px] h-[38px] -mt-12 -ml-12">
                  Learn advanced CAD techniques and design optimization
                  strategies from industry experts at Tata Motors.
                </p>

                <div className="flex gap-3 mt-10 -ml-12">
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    Engineering Graphics
                  </span>
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    3D Sketching
                  </span>
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    Architecture
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-4 mt-8 -ml-9">
                    {/* Avatar */}
                    <img
                      src="/Events6.svg" // replace with actual image path
                      alt="Rajesh Kumar"
                      className="w-[60px] h-[60px] rounded-full object-cover mt-2"
                    />

                    {/* Text */}
                    <div>
                      <div className="-mt-6 -ml-17">
                        <p className="text-[14px] text-[#003366] font-semibold mb-1">
                          Speaker
                        </p>
                      </div>
                      <h4 className="text-[24px] font-bold text-[#3A3434] leading-tight mt-4 ml-2">
                        Rajesh Kumar
                      </h4>
                      <p className="text-[14px] text-[#565151] font-semibold ml-2">
                        Senior Design Engineer at{" "}
                        <span className="text-[14px] font-semibold text-[#000000]">
                          Tata Motors
                        </span>
                      </p>
                    </div>
                  </div>

                  <button className="w-[180px] h-[55px] text-[20px] bg-[#003366] text-white font-extrabold font-manrope rounded-[24px] px-[10px] py-[16px] flex items-center justify-center gap-[18px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] mt-10">
                    Join Now →
                  </button>
                </div>
              </div>
            </div>
            {/* card1 end */}
            {/* ================= CARD 2 ================= */}
            <div className="min-w-[1043px] h-[374px] bg-white rounded-2xl shadow-lg mr-8 flex border border-[#E8EAED] ">
              <div className="relative w-[320px] h-[320px] mt-7 ml-18">
                <div className="absolute inset-0 -translate-x-10">
                  <Image
                    src="/Events7.svg"
                    alt="event"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex-1 p-8 ">
                <h3 className="text-[36px] font-semibold text-[#565151] mb-4 mt-10 leading-tight -translate-12">
                  Advance in 3D & Technical Drawing <br />
                  Workshop for Engineers
                </h3>

                <p className="text-[#000000] text-[16px] font-inter w-[590px] h-[38px] -mt-12 -ml-12">
                  Learn advanced CAD techniques and design optimization
                  strategies from industry experts at Tata Motors.
                </p>

                <div className="flex gap-3 mt-10 -ml-12">
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    Engineering Graphics
                  </span>
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    3D Sketching
                  </span>
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    Architecture
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-4 mt-8 -ml-9">
                    {/* Avatar */}
                    <img
                      src="/Events6.svg" // replace with actual image path
                      alt="Rajesh Kumar"
                      className="w-[60px] h-[60px] rounded-full object-cover mt-2"
                    />

                    {/* Text */}
                    <div>
                      <div className="-mt-6 -ml-17">
                        <p className="text-[14px] text-[#003366] font-semibold mb-1">
                          Speaker
                        </p>
                      </div>
                      <h4 className="text-[24px] font-bold text-[#3A3434] leading-tight mt-4 ml-2">
                        Rajesh Kumar
                      </h4>
                      <p className="text-[14px] text-[#565151] font-semibold ml-2">
                        Senior Design Engineer at{" "}
                        <span className="text-[14px] font-semibold text-[#000000]">
                          Tata Motors
                        </span>
                      </p>
                    </div>
                  </div>

                  <button className="w-[180px] h-[55px] text-[20px] bg-[#003366] text-white font-extrabold font-manrope rounded-[24px] px-[10px] py-[16px] flex items-center justify-center gap-[18px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] mt-10">
                    Join Now →
                  </button>
                </div>
              </div>
            </div>
            {/* card2 end */}
            {/* ================= CARD 3 ================= */}
            <div className="min-w-[1043px] h-[374px] bg-white rounded-2xl shadow-lg mr-8 flex border border-[#E8EAED] ">
              <div className="relative w-[320px] h-[320px] mt-7 ml-18">
                <div className="absolute inset-0 -translate-x-10">
                  <Image
                    src="/Events4.svg"
                    alt="event"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex-1 p-8 ">
                <h3 className="text-[36px] font-semibold text-[#565151] mb-4 mt-10 leading-tight -translate-12">
                  Advance in 3D & Technical Drawing <br />
                  Workshop for Engineers
                </h3>

                <p className="text-[#000000] text-[16px] font-inter w-[590px] h-[38px] -mt-12 -ml-12">
                  Learn advanced CAD techniques and design optimization
                  strategies from industry experts at Tata Motors.
                </p>

                <div className="flex gap-3 mt-10 -ml-12">
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    Engineering Graphics
                  </span>
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    3D Sketching
                  </span>
                  <span className="px-4 py-2 text-[12px] font-semibold text-[#3A3434] border border-[#D1D5DB] rounded-full bg-white">
                    Architecture
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-4 mt-8 -ml-9">
                    {/* Avatar */}
                    <img
                      src="/Events6.svg" // replace with actual image path
                      alt="Rajesh Kumar"
                      className="w-[60px] h-[60px] rounded-full object-cover mt-2"
                    />

                    {/* Text */}
                    <div>
                      <div className="-mt-6 -ml-17">
                        <p className="text-[14px] text-[#003366] font-semibold mb-1">
                          Speaker
                        </p>
                      </div>
                      <h4 className="text-[24px] font-bold text-[#3A3434] leading-tight mt-4 ml-2">
                        Rajesh Kumar
                      </h4>
                      <p className="text-[14px] text-[#565151] font-semibold ml-2">
                        Senior Design Engineer at{" "}
                        <span className="text-[14px] font-semibold text-[#000000]">
                          Tata Motors
                        </span>
                      </p>
                    </div>
                  </div>

                  <button className="w-[180px] h-[55px] text-[20px] bg-[#003366] text-white font-extrabold font-manrope rounded-[24px] px-[10px] py-[16px] flex items-center justify-center gap-[18px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] mt-10">
                    Join Now →
                  </button>
                </div>
              </div>
            </div>
            {/* card3 end */}
          </div>
        </div>
        {/* blue colour section */}
        <section className="w-full bg-[#F4F9FF] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="w-[1520px] h-[725px] relative overflow-hidden rounded-[28px] bg-[#0A85FF] pt-6 pb-12 px-12 md:px-16 md:pb-16 md:pt-6 -ml-40 ">
              {/* Background Grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 0.5px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "84px 84px",
                }}
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                  <div className="relative inline-block mb-6 -mt-2 -ml-13">
                    <div className="absolute top-[22px] left-[30.22px] w-[345.5px] h-[67px] bg-[#2D2B55] rounded-full" />
                    <div className="absolute top-[22.33px] left-[30.54px] w-[344.85px] h-[66.34px] bg-[#A4C9FC] rounded-[10px]" />
                    <div className="absolute top-[28.19px] left-[36.3px] w-[333.34px] h-[54.62px] bg-[#2D2B55] rounded-[6px]" />
                    <div className="absolute top-[28.52px] left-[36.63px] w-[332.69px] h-[53.95px] bg-[#E39327] rounded-[6px]" />

                    <span
                      className="relative z-10 flex items-center justify-center
                   w-[333px] h-[55px]
                   font-inria text-[24px] font-bold text-white
                   bg-[#E39327] rounded-[6px] mt-7 ml-9"
                    >
                      ENGINEER DAY SPECIAL
                    </span>
                  </div>

                  <p className="text-white font-inter text-[20px] font-semibold mb-3 mt-1">
                    Mastervance present
                  </p>

                  <h1 className="text-white font-instrument text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-tight font-bold mb-6 md:whitespace-nowrap">
                    Innovate with Core Engineering
                    <br /> Workshop & Live Q&A
                  </h1>

                  <p className="text-[#F7ECEC] font-openSans text-[22px] max-w-xl mb-8">
                    Get hands-on experience, real-world insights, and direct
                    mentor interaction to boost your core engineering journey
                  </p>

                  {/* DATE & LOCATION */}
                  <div className="bg-white rounded-xl px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-md  h-[62px] w-[537px]">
                    {/* DATE & TIME */}
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-md border border-[#E5E7EB]">
                        <img
                          src="/Events9.svg" // replace with your image
                          alt="Mentor"
                          className="w-[28px] md:w-[28px] object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[#3A3434] font-inter text-[14px] font-normal">
                          September 22, 2025
                        </p>
                        <p className="text-[#3A3434] font-inter text-[14px] font-normal">
                          10:00 AM ( IST )
                        </p>
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-start gap-3 ml-20">
                      <div className="flex items-center justify-center w-9 h-9 rounded-md border border-[#E5E7EB]">
                        <img
                          src="/Events8.svg" // replace with your image
                          alt="Mentor"
                          className="w-[28px] md:w-[28px] object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[#3A3434] font-inter text-[14px] font-normal">
                          6th block engineer
                        </p>
                        <p className="text-[#3A3434] font-inter text-[14px] font-normal">
                          department, IIT Mumbai
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => router.push("/EventHandling")}
                    className="bg-[#0E4EF1] hover:bg-[#163DCC] text-white px-8 py-1 rounded-[24px] font-semibold text-lg shadow-lg transition h-[71px] w-[281px] mt-10"
                  >
                    <p className="font-manrope text-[24px] font-extrabold">
                      Register Now
                    </p>
                  </button>

                  <p className="italic text-[#E6F2FF] text-[14px] mt-3 font-inter">
                    <strong>Over 8401+ Members already registered* </strong>
                  </p>
                  <img
                    src="/Events14.svg" // replace with your image
                    alt="Mentor"
                    className="absolute top-[-40px] w-[181.61px] h-[78.56px] object-contain mt-170 -ml-15"
                  />
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center h-[600px]">
                  <img
                    src="/Events12.svg" // replace with actual image path
                    alt="Rajesh Kumar"
                    className="w-[155px] h-[162.41px] rounded-full object-cover -rotate-90 ml-40 -mt-20"
                  />

                  <img
                    src="/Events10.svg" // replace with your image
                    alt="Mentor"
                    className="absolute top-[-40px] w-[713px] md:w-[707px] object-contain mt-18"
                  />
                  <img
                    src="/Events11.svg" // replace with actual image path
                    alt="Rajesh Kumar"
                    className="w-[250.82px] h-[241px] rounded-full object-cover -mt-7  ml-102"
                  />
                  <img
                    src="/Events13.svg" // replace with your image
                    alt="Mentor"
                    className="absolute top-[-40px] w-[186.61px] h-[207.05px] object-contain ml-145 mt-135 z-10"
                  />
                  {/* Mentor Card */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-[24px] px-6 py-4 shadow-xl w-[444px] h-[141px] ml-14 -mb-12 z-20">
                    <p className="text-[20px] text-[#1E77D4] font-inter mb-1">
                      Conducted by
                    </p>
                    <h4 className="text-[36px] font-semibold text-[#0A60FF]">
                      Arjun Mehta
                    </h4>
                    <p className="text-[24px] text-[#606060] font-inter">
                      IIT Alumni & Industry Mentor
                    </p>
                    <img
                      src="/Events16.svg" // replace with your image
                      alt="Mentor"
                      className="absolute top-[-40px] w-[77.53px] h-[76.95px] object-contain ml-118 -mt-17"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#F9FCFF] py-20 -mt-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* TOP BADGE */}
            <button className="font-inter text-[26px] mb-6 w-[241px] h-[54px] flex items-center justify-center gap-[14.31px] px-[14.31px] py-[7px] bg-white text-[#106FCF] font-medium rounded-[429.38px] shadow-[0px_0px_8.6px_0px_rgba(28,142,255,0.44)] border border-[#D6E6FF] -ml-37">
              Past Events
            </button>

            {/* HEADING */}
            <h2 className="font-manrope font-bold text-[48px] leading-fit tracking-[0%] text-[#3A3434] -ml-37">
              A Look Back at{" "}
              <span className="bg-[linear-gradient(90deg,#0884FF_0%,#1D3343_100%)] bg-clip-text text-transparent">
                Mastervance’s
              </span>
              <br />
              Workshops & Meetups
            </h2>

            {/* SEARCH + FILTER */}
            <div className="mt-10 flex items-center gap-6">
              {/* Search */}
              <div className="flex items-center bg-white border border-[#DBE7EE] rounded-[16px] shadow-sm overflow-hidden h-[52px] -ml-37 w-[650px]">
                {/* Left content */}
                <div className="flex items-center flex-1 px-5">
                  <Search className="text-[#8AA4C8]" size={26} />
                  <input
                    type="text"
                    placeholder="Find the event you’re looking for"
                    className="font-manrope outline-none text-[#0D6EFD] 
        placeholder-[#0D6EFD] text-[16px] w-full"
                  />
                </div>

                {/* Divider */}
                <div className="h-7 w-px bg-[#D6E4FF]" />

                {/* Search Button */}
                <button className="bg-[#0D6EFD] h-full w-[56px] flex items-center justify-center shrink-0">
                  <Search className="text-white" size={26} />
                </button>
              </div>

              {/* Date Filter */}
              <div className="relative w-[230px] h-[52px] ml-100">
                {/* Calendar Icon */}
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0A60FF] text-lg ">
                  <img
                    src="/Events28.svg" // replace with actual image path
                    alt="Rajesh Kumar"
                    className="w-[35px] h-[35px] rounded-full object-cover -ml-2"
                  />
                </span>

                {/* Date Input */}
                <input
                  type="date"
                  className="w-full h-full pl-12 pr-10 
      border border-[#1E77DF] rounded-full 
      text-[#3A3434] font-manrope text-[15px]
      focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

                {/* Dropdown Arrow */}
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#3A3434] pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            {/* EVENT CARDS */}
            {/* ================= CARDS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
              {/* ================= CARD 1 ================= */}
              <div className="flex bg-white rounded-[16px] shadow-[0px_0px_9.5px_0px_#00000026] overflow-hidden h-[314px] w-[750px] -ml-40 border border-[#E8EAED]">
                {/* Left Image */}
                <div className="relative w-[260px]">
                  <img
                    src="/Events17.svg"
                    alt="Workshop"
                    className="w-[250px] h-[262px] object-cover ml-5 mt-5 rounded-[16px]"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 ">
                  <h3 className="text-[24px] font-Inter font-semibold text-[#565151] leading-snug ml-6">
                    Advance in 3D & Technical Drawing Workshop for Engineers
                  </h3>

                  <p className="mt-2 text-[#000000] text-[12px] ml-6">
                    Learn advanced CAD techniques and design optimization
                    strategies from industry experts at Tata Motors.
                  </p>

                  <div className="flex gap-[10px] mt-4 ml-6">
                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Engineering Graphics
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      3D Sketching
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Architecture
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-start gap-4 mt-8 ml-6">
                      {/* Avatar */}
                      <img
                        src="/Events6.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[40px] h-[40px] rounded-full object-cover mt-2"
                      />

                      {/* Text */}
                      <div>
                        <div className="-mt-6 -ml-17">
                          <p className="text-[14px] text-[#003366] font-semibold mb-1 ml-2">
                            Speaker
                          </p>
                        </div>
                        <h4 className="text-[16px] font-semibold text-[#3A3434] leading-tight mt-3">
                          Rajesh Kumar
                        </h4>
                        <p className="text-[10px] text-[#565151] font-semibold">
                          Senior Design Engineer at{" "}
                          <span className="text-[10px] font-semibold text-[#000000]">
                            Tata Motors
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="font-sm mt-7">
                      <p className="text-[10px] text-[#000000]">
                        Will held on:
                      </p>
                      <img
                        src="/Events18.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[20px] h-[20px] rounded-full object-cover mt-2"
                      />
                      <p className="text-[14px] text-[#3A3434] font-semibold ml-6 -mt-7">
                        September 22, 2025
                      </p>
                      <p className="text-[14px] ml-6">(6 hours)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= CARD 2 ================= */}
              <div className="flex bg-white rounded-[16px] shadow-[0px_0px_9.5px_0px_#00000026] overflow-hidden h-[314px] w-[750px] ml-10 border border-[#E8EAED]">
                {/* Left Image */}
                <div className="relative w-[260px]">
                  <img
                    src="/Events21.svg"
                    alt="Workshop"
                    className="w-[250px] h-[262px] object-cover ml-5 mt-5 rounded-[16px]"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 ">
                  <h3 className="text-[24px] font-Inter font-semibold text-[#565151] leading-snug ml-6">
                    Advance in 3D & Technical Drawing Workshop for Engineers
                  </h3>

                  <p className="mt-2 text-[#000000] text-[12px] ml-6">
                    Learn advanced CAD techniques and design optimization
                    strategies from industry experts at Tata Motors.
                  </p>

                  <div className="flex gap-[10px] mt-4 ml-6">
                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Engineering Graphics
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      3D Sketching
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Architecture
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-start gap-4 mt-8 ml-6">
                      {/* Avatar */}
                      <img
                        src="/Events6.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[40px] h-[40px] rounded-full object-cover mt-2"
                      />

                      {/* Text */}
                      <div>
                        <div className="-mt-6 -ml-17">
                          <p className="text-[14px] text-[#003366] font-semibold mb-1 ml-2">
                            Speaker
                          </p>
                        </div>
                        <h4 className="text-[16px] font-semibold text-[#3A3434] leading-tight mt-3">
                          Rajesh Kumar
                        </h4>
                        <p className="text-[10px] text-[#565151] font-semibold">
                          Senior Design Engineer at{" "}
                          <span className="text-[10px] font-semibold text-[#000000]">
                            Tata Motors
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="font-sm mt-7">
                      <p className="text-[10px] text-[#000000]">
                        Will held on:
                      </p>
                      <img
                        src="/Events18.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[20px] h-[20px] rounded-full object-cover mt-2"
                      />
                      <p className="text-[14px] text-[#3A3434] font-semibold ml-6 -mt-7">
                        September 22, 2025
                      </p>
                      <p className="text-[14px] ml-6">(6 hours)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 3 */}
              <div className="flex bg-white rounded-[16px] shadow-[0px_0px_9.5px_0px_#00000026] overflow-hidden h-[314px] w-[750px] -ml-40 border border-[#E8EAED]">
                {/* Left Image */}
                <div className="relative w-[260px]">
                  <img
                    src="/Events22.svg"
                    alt="Workshop"
                    className="w-[250px] h-[262px] object-cover ml-5 mt-5 rounded-[16px]"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 ">
                  <h3 className="text-[24px] font-Inter font-semibold text-[#565151] leading-snug ml-6">
                    Advance in 3D & Technical Drawing Workshop for Engineers
                  </h3>

                  <p className="mt-2 text-[#000000] text-[12px] ml-6">
                    Learn advanced CAD techniques and design optimization
                    strategies from industry experts at Tata Motors.
                  </p>

                  <div className="flex gap-[10px] mt-4 ml-6">
                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Engineering Graphics
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      3D Sketching
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Architecture
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-start gap-4 mt-8 ml-6">
                      {/* Avatar */}
                      <img
                        src="/Events6.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[40px] h-[40px] rounded-full object-cover mt-2"
                      />

                      {/* Text */}
                      <div>
                        <div className="-mt-6 -ml-17">
                          <p className="text-[14px] text-[#003366] font-semibold mb-1 ml-2">
                            Speaker
                          </p>
                        </div>
                        <h4 className="text-[16px] font-semibold text-[#3A3434] leading-tight mt-3">
                          Rajesh Kumar
                        </h4>
                        <p className="text-[10px] text-[#565151] font-semibold">
                          Senior Design Engineer at{" "}
                          <span className="text-[10px] font-semibold text-[#000000]">
                            Tata Motors
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="font-sm mt-7">
                      <p className="text-[10px] text-[#000000]">
                        Will held on:
                      </p>
                      <img
                        src="/Events18.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[20px] h-[20px] rounded-full object-cover mt-2"
                      />
                      <p className="text-[14px] text-[#3A3434] font-semibold ml-6 -mt-7">
                        September 22, 2025
                      </p>
                      <p className="text-[14px] ml-6">(6 hours)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 4 */}
              <div className="flex bg-white rounded-[16px] shadow-[0px_0px_9.5px_0px_#00000026] overflow-hidden h-[314px] w-[750px] ml-10 border border-[#E8EAED]">
                {/* Left Image */}
                <div className="relative w-[260px]">
                  <img
                    src="/Events23.svg"
                    alt="Workshop"
                    className="w-[250px] h-[262px] object-cover ml-5 mt-5 rounded-[16px]"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 ">
                  <h3 className="text-[24px] font-Inter font-semibold text-[#565151] leading-snug ml-6">
                    Advance in 3D & Technical Drawing Workshop for Engineers
                  </h3>

                  <p className="mt-2 text-[#000000] text-[12px] ml-6">
                    Learn advanced CAD techniques and design optimization
                    strategies from industry experts at Tata Motors.
                  </p>

                  <div className="flex gap-[10px] mt-4 ml-6">
                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Engineering Graphics
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      3D Sketching
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Architecture
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-start gap-4 mt-8 ml-6">
                      {/* Avatar */}
                      <img
                        src="/Events6.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[40px] h-[40px] rounded-full object-cover mt-2"
                      />

                      {/* Text */}
                      <div>
                        <div className="-mt-6 -ml-17">
                          <p className="text-[14px] text-[#003366] font-semibold mb-1 ml-2">
                            Speaker
                          </p>
                        </div>
                        <h4 className="text-[16px] font-semibold text-[#3A3434] leading-tight mt-3">
                          Rajesh Kumar
                        </h4>
                        <p className="text-[10px] text-[#565151] font-semibold">
                          Senior Design Engineer at{" "}
                          <span className="text-[10px] font-semibold text-[#000000]">
                            Tata Motors
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="font-sm mt-7">
                      <p className="text-[10px] text-[#000000]">
                        Will held on:
                      </p>
                      <img
                        src="/Events18.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[20px] h-[20px] rounded-full object-cover mt-2"
                      />
                      <p className="text-[14px] text-[#3A3434] font-semibold ml-6 -mt-7">
                        September 22, 2025
                      </p>
                      <p className="text-[14px] ml-6">(6 hours)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 5 */}
              <div className="flex bg-white rounded-[16px] shadow-[0px_0px_9.5px_0px_#00000026] overflow-hidden h-[314px] w-[750px] -ml-40 border border-[#E8EAED]">
                {/* Left Image */}
                <div className="relative w-[260px]">
                  <img
                    src="/Events20.svg"
                    alt="Workshop"
                    className="w-[250px] h-[262px] object-cover ml-5 mt-5 rounded-[16px]"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 ">
                  <h3 className="text-[24px] font-Inter font-semibold text-[#565151] leading-snug ml-6">
                    Advance in 3D & Technical Drawing Workshop for Engineers
                  </h3>

                  <p className="mt-2 text-[#000000] text-[12px] ml-6">
                    Learn advanced CAD techniques and design optimization
                    strategies from industry experts at Tata Motors.
                  </p>

                  <div className="flex gap-[10px] mt-4 ml-6">
                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Engineering Graphics
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      3D Sketching
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Architecture
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-start gap-4 mt-8 ml-6">
                      {/* Avatar */}
                      <img
                        src="/Events6.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[40px] h-[40px] rounded-full object-cover mt-2"
                      />

                      {/* Text */}
                      <div>
                        <div className="-mt-6 -ml-17">
                          <p className="text-[14px] text-[#003366] font-semibold mb-1 ml-2">
                            Speaker
                          </p>
                        </div>
                        <h4 className="text-[16px] font-semibold text-[#3A3434] leading-tight mt-3">
                          Rajesh Kumar
                        </h4>
                        <p className="text-[10px] text-[#565151] font-semibold">
                          Senior Design Engineer at{" "}
                          <span className="text-[10px] font-semibold text-[#000000]">
                            Tata Motors
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="font-sm mt-7">
                      <p className="text-[10px] text-[#000000]">
                        Will held on:
                      </p>
                      <img
                        src="/Events18.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[20px] h-[20px] rounded-full object-cover mt-2"
                      />
                      <p className="text-[14px] text-[#3A3434] font-semibold ml-6 -mt-7">
                        September 22, 2025
                      </p>
                      <p className="text-[14px] ml-6">(6 hours)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 6 */}
              <div className="flex bg-white rounded-[16px] shadow-[0px_0px_9.5px_0px_#00000026] overflow-hidden h-[314px] w-[750px] ml-10 border border-[#E8EAED]">
                {/* Left Image */}
                <div className="relative w-[260px]">
                  <img
                    src="/Events19.svg"
                    alt="Workshop"
                    className="w-[250px] h-[262px] object-cover ml-5 mt-5 rounded-[16px]"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 ">
                  <h3 className="text-[24px] font-Inter font-semibold text-[#565151] leading-snug ml-6">
                    Advance in 3D & Technical Drawing Workshop for Engineers
                  </h3>

                  <p className="mt-2 text-[#000000] text-[12px] ml-6">
                    Learn advanced CAD techniques and design optimization
                    strategies from industry experts at Tata Motors.
                  </p>

                  <div className="flex gap-[10px] mt-4 ml-6">
                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Engineering Graphics
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      3D Sketching
                    </span>

                    <span
                      className="w-[145px] h-[25px] px-[10px] py-[5px] 
                   bg-white border border-[#C5C3C3] border-[0.5px]
                   rounded-[8px] text-[12px] flex items-center justify-center"
                    >
                      Architecture
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-start gap-4 mt-8 ml-6">
                      {/* Avatar */}
                      <img
                        src="/Events6.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[40px] h-[40px] rounded-full object-cover mt-2"
                      />

                      {/* Text */}
                      <div>
                        <div className="-mt-6 -ml-17">
                          <p className="text-[14px] text-[#003366] font-semibold mb-1 ml-2">
                            Speaker
                          </p>
                        </div>
                        <h4 className="text-[16px] font-semibold text-[#3A3434] leading-tight mt-3">
                          Rajesh Kumar
                        </h4>
                        <p className="text-[10px] text-[#565151] font-semibold">
                          Senior Design Engineer at{" "}
                          <span className="text-[10px] font-semibold text-[#000000]">
                            Tata Motors
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="font-sm mt-7">
                      <p className="text-[10px] text-[#000000]">
                        Will held on:
                      </p>
                      <img
                        src="/Events18.svg" // replace with actual image path
                        alt="Rajesh Kumar"
                        className="w-[20px] h-[20px] rounded-full object-cover mt-2"
                      />
                      <p className="text-[14px] text-[#3A3434] font-semibold ml-6 -mt-7">
                        September 22, 2025
                      </p>
                      <p className="text-[14px] ml-6">(6 hours)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[#FAFDFF]">
          <div className="max-w-[2021px] mx-auto px-6">
            {/* Heading */}
            <h2
              className="w-[635px] h-[132px] font-manrope font-bold 
      text-[48px] leading-[100%] tracking-[0%] text-[#3A3434] 
      mb-10 -ml-35"
            >
              Snapshots Events of <br />
              Inspiration &{" "}
              <span
                className="bg-[linear-gradient(90deg,#0180FF_0%,#0A67C5_100%)] 
      bg-clip-text text-transparent"
              >
                Togetherness
              </span>
            </h2>

            {/* Slider Wrapper */}
            <div className="relative overflow-hidden -ml-70 -mr-60">
              {/* LEFT BLUR */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10
        bg-gradient-to-r from-[#FFFAFA] to-transparent 
        backdrop-blur-60"
              />

              {/* RIGHT BLUR */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10
        bg-gradient-to-l from-[#FFFAFA] to-transparent 
        backdrop-blur-60"
              />

              {/* SLIDER */}
              <div
                className="flex gap-8 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${imageIndex * 420}px)`,
                }}
              >
                <img
                  src="/Events24.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events25.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events26.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events27.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events24.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events25.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events26.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
                <img
                  src="/Events27.svg"
                  className="w-[576px] h-[448px] rounded-[8px] object-cover shrink-0"
                />
              </div>

              {/* Controls */}
              <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={() => setImageIndex(Math.max(imageIndex - 1, 0))}
                  className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
                >
                  ‹
                </button>
                <button
                  onClick={() => setImageIndex(Math.min(imageIndex + 1, 3))}
                  className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FBFDFF] px-6 md:px-12 py-20">
          {/* Newsletter / Illustration */}
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full max-w-[680px]">
                <Image
                  src="/Frame 374.png"
                  alt="Newsletter"
                  width={1000}
                  height={882}
                  className="object-contain mx-auto"
                />
              </div>

              <h2 className="font-manrope font-extrabold text-[36px] md:text-[48px] text-[#3A3434] leading-tight -mt-15">
                Subscribe Our Newsletter
              </h2>

              <p className="max-w-3xl text-center font-openSans text-[22px] text-[#565151] leading-[1.6]">
                Stay ahead in your career journey with weekly insights,
                practical tips, and expert advice tailored for engineering
                students. From industry updates and career growth strategies ―
                we’ve got you covered.
              </p>

              {/* email input + button */}
              <form
                className="w-full flex justify-center mt-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative max-w-3xl w-full mr-40">
                  <input
                    type="email"
                    placeholder="Your@email.com"
                    className="w-[953px] h-[91px] rounded-[32px] border border-[#3A3434] 
             pl-[24px] pt-[10px] pb-[10px] 
             text-[28px] font-Manrope placeholder:text-[#3A3434]
             outline-none bg-white focus:ring-2 focus:ring-[#E6F2FF]"
                  />

                  <button
                    type="submit"
                    className="absolute right-[-160px] text-[24px] top-1/2 -translate-y-1/2 h-[62px]  px-6 rounded-full bg-gradient-to-r from-[#0077FF] to-[#003366] text-white font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                  >
                    Subscribe Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
