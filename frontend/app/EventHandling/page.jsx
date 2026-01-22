"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function RegisterPage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="bg-[#F8FBFF] min-h-screen px-10 py-8 mt-25">
        {/* Back */}
        <button
          onClick={() => router.push("/Events")}
          className="text-[#57BFFF] mb-6 font-manrope font-semibold text-[18px] -mt-15 ml-20 cursor-pointer"
        >
          Back
        </button>

        {/* Main Layout */}
        <div className="flex gap-8 items-start">
          {/* Left Content */}
          <div className="flex-1">
            {/* Workshop Banner */}
            <div className="w-[1115PX] h-[493px] bg-[#D4D4D4] rounded-[10px] ml-15" />

            {/* About Section */}
            <div className="mt-10">
              <h2 className="text-[36px] font-bold mb-4 leading-tight font-inter ml-14">
                About the Workshop:
              </h2>
              <p className="text-[#7E7E7E] leading-tight text-[23px] max-w-5xl ml-15">
                Many core engineering students study hard, score well, and still
                struggle to get placed.
                <br /> This workshop explains why this happens and what students
                can do differently to become job-?
                <br />
                ready.
              </p>
              <p className="text-[#7E7E7E] leading-tight text-[23px] max-w-5xl ml-15 mt-10">
                We’ll break down the real gap between college learning and
                industry expectations using simple <br />
                examples and practical demonstrations.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-[36px] font-bold mb-4 leading-tight font-inter ml-14">
                Who Is This Workshop For?
              </h2>

              <ul className="list-disc list-inside text-[#7E7E7E] text-[23px] leading-tight max-w-5xl ml-15 space-y-2">
                <li>Core engineering students (ECE, EEE, Mechanical, Civil)</li>
                <li>Diploma / ITI / B.Tech students</li>
              </ul>
            </div>
            <div className="mt-10">
              <h2 className="text-[36px] font-bold mb-4 leading-tight font-inter ml-14">
                What You Will Learn:
              </h2>

              <ul className="list-disc list-inside text-[#7E7E7E] text-[23px] leading-tight max-w-5xl ml-15 space-y-2">
                <li>Why most engineering students don’t feel job-ready</li>
                <li>What companies actually look for in core engineers</li>
                <li>Common mistakes students make while preparing for jobs</li>
                <li>
                  How practical skills and projects change career outcomes
                </li>
                <li>
                  A clear roadmap to start building real engineering skills
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h2 className="text-[36px] font-bold mb-4 leading-tight font-inter ml-14">
                What Makes This Workshop Different?
              </h2>

              <ul className="list-disc list-inside text-[#7E7E7E] text-[23px] leading-tight max-w-5xl ml-15 space-y-2">
                <li>Focuses on real problems, not motivation talks</li>
                <li> Uses practical examples and live demos </li>
                <li>Clear guidance instead of generic advice</li>
                <li>
                  {" "}
                  Designed by core engineers who understand student struggles
                </li>
              </ul>
            </div>
            <div className="w-[360px] bg-white rounded-[20px] shadow-sm p-8 relative text-center ml-300 -mt-150">
              {/* Mentor Badge */}
              <span className="absolute top-4 left-4 bg-[#1F3B4D] text-white text-sm px-5 py-1 rounded-full">
                Mentor
              </span>

              {/* Avatar */}
              <div className="w-[160px] h-[160px] bg-[#D3D3D3] rounded-full mx-auto mt-6" />

              {/* Name */}
              <h2 className="mt-6 text-[24px] font-bold text-[#2C2F4A]">
                Nahid Hasan
              </h2>

              {/* Role */}
              <p className="text-[#8A8FA8] text-[16px] mt-1">UX/UI Designer</p>

              {/* Quote */}
              <p className="text-[#6B7280] text-[15px] leading-relaxed mt-4 px-4">
                UI is the saddle, the stirrups, & the reins. UX is the feeling
                you get being able to ride the horse.
              </p>

              {/* LinkedIn Button */}
              <button className="mt-6 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-[8px] transition">
                LinkedIn
              </button>

              {/* Divider */}
              <hr className="my-8 border-[#E5E7EB]" />

              {/* Stats */}
              <div className="flex justify-between px-6">
                <div>
                  <p className="text-[18px] font-bold text-[#2C2F4A]">5896</p>
                  <p className="text-sm text-[#9CA3AF]">Post</p>
                </div>
                <div>
                  <p className="text-[18px] font-bold text-[#2C2F4A]">8952</p>
                  <p className="text-sm text-[#9CA3AF]">Followers</p>
                </div>
                <div>
                  <p className="text-[18px] font-bold text-[#2C2F4A]">6545</p>
                  <p className="text-sm text-[#9CA3AF]">Likes</p>
                </div>
              </div>
            </div>

            <hr
              className="
    w-[1499.5px]
    border-t
    border-[1px]
    border-[#0000004D]
    opacity-100
    my-6
    ml-15
    mt-10
  "
            />
            <div className="mt-10">
              <h2 className="text-[36px] font-bold mb-4 leading-tight font-inter ml-14">
                Organizer Contact
              </h2>
              <p className="text-[#7E7E7E] leading-tight text-[23px] max-w-5xl ml-15 mt-10">
                Please go to{" "}
                <span
                  className="text-[#57BFFF] underline cursor-pointer"
                  onClick={() => router.push("http://www.sneakypeeks.com")}
                >
                  www.sneakypeeks.com{" "}
                </span>
                and refer the FAQ section for more detail
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-[24px] font-bold ml-15">
                Share with friends
              </h2>
            </div>
            <div className="w-[252px] h-[48px] ml-15 mt-10">
              <img
                src="/Facebook.svg"
                alt="Mentor 1"
                className="
      absolute
      w-[48px]
      h-[48px]"
              />
              <img
                src="/WhatsApp.svg"
                alt="Mentor 1"
                className="
      absolute
      w-[48px]
      h-[48px]
      ml-18"
              />
              <img
                src="/LinkedIn.svg"
                alt="Mentor 1"
                className="
      absolute
      w-[48px]
      h-[48px]
      ml-36"
              />
              <img
                src="/Twitter.svg"
                alt="Mentor 1"
                className="
      absolute
      w-[48px]
      h-[48px]
      ml-54"
              />
            </div>
          </div>

          {/* Right Card */}
          <div
            className="
    w-[368px]
    h-[493px]
    bg-white
    rounded-[9.56px]
    shadow-[0px_3.82px_7.65px_0px_rgba(0,0,0,0.1)]
    p-6
    top-[165px]
    opacity-100
    mt-0
    -ml-90
    mr-10
  "
          >
            <h3 className="text-[24px] font-bold font-openSans leading-tight mb-4 ">
              Why Core Engineering Students Struggle to Get Jobs?
            </h3>

            <div className="mb-4">
              <p className="font-semibold text-[#000000] text-[23px] font-openSans leading-tight">
                Date & time
              </p>
              <p className="text-[18px] text-[#7E7E7E] font-manrope leading-tight mt-2">
                Saturday, March 18 2023, 9.30PM
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-[#000000] font-openSans leading-tight text-[23px] mb-2">
                Workshop Details:
              </p>
              <ul
                className="
    w-[318px]
    h-[132px]
    text-[17.21px]
    leading-[22px]
    font-inter
    font-regular
    text-[#7E7E7E]
    list-disc
    list-inside
    space-y-1
    opacity-100
  "
              >
                <li>Saturday</li>
                <li>Mode: Online</li>
                <li>Duration: 90 minutes</li>
                <li>Cost: Free</li>
                <li>Platform: Google Meet</li>
                <li>March 18 2023, 9.30PM</li>
              </ul>
            </div>

            <button
              className="
    w-[310.65px]
    h-[59.68px]
    bg-[#1D3343]
    text-white
    rounded-[4.78px]
    pt-[14.34px]
    pb-[14.34px]
    px-[38.23px]
    flex
    items-center
    justify-center
    gap-[9.56px]
    font-semibold
    opacity-100
    transition
    hover:bg-[#162C3A]
    mt-10
  "
            >
              Register Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
