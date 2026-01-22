"use client";
import { useState } from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <div>
      {/* Course cards */}
      <div className="-mt-13 grid gap-8 md:grid-cols-3 ">
        {/* CARD 1 */}
        <div className="group ml-30 bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col h-[650px] w-[470px] border border-transparent transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_18px_38px_rgba(0,119,255,0.25)] hover:border-[#0077FF] hover:bg-[#F5FAFF]">
          <div className="h-[220px] bg-gradient-to-b from-[#E6F2FF] to-[#C7E1FF] flex items-center justify-center -mr-7 mt-10 transition-transform duration-300 group-hover:-translate-y-1">
            <Image
              src="/image1.png"
              alt="VLSI Designing"
              width={500}
              height={470}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
            <h3 className="font-manrope gap-5 font-bold text-[29px] leading-[100%] text-[#3A3434] mt-8 transition-colors duration-300 group-hover:text-[#0077FF]">
              VLSI Designing In PG program
            </h3>

            <p className="font-openSans text-[14px] leading-[150%] text-[#706A6A] transition-opacity duration-300 group-hover:opacity-90">
              Design is the foundation of modern electronics, enabling the
              creation of powerful microchips that drive computers, smartphones,
              and countless smart systems.
            </p>

            {/* Tags */}
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

            {/* Info row */}
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

            {/* Button */}
            <button className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#003366] text-white text-[16px] font-semibold shadow-md transition-all duration-300 hover:bg-[#0041cc] hover:shadow-[0_10px_24px_rgba(0,64,204,0.55)]">
              Know More
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="group ml-15  bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col h-[650px] w-[470px] border border-transparent transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_18px_38px_rgba(0,119,255,0.25)] hover:border-[#0077FF] hover:bg-[#F5FAFF]">
          <div className="h-[220px] bg-gradient-to-b from-[#E6F2FF] to-[#C7E1FF] flex items-center justify-center -mr-7 mt-10 transition-transform duration-300 group-hover:-translate-y-1">
            <Image
              src="/image 2.png"
              alt="AUTO-CAD Designing"
              width={500}
              height={470}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
            <h3 className="font-manrope gap-5 font-bold text-[29px] leading-[100%] text-[#3A3434] mt-8 transition-colors duration-300 group-hover:text-[#0077FF]">
              AUTO-CAD Designing
            </h3>
            <p className="font-openSans text-[14px] leading-[150%] text-[#706A6A] transition-opacity duration-300 group-hover:opacity-90">
              Learn industry-standard design workflows to create detailed,
              accurate, and professional CAD drawings used across engineering
              and design fields.
            </p>

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

            <button className="mt-7 w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#003366] text-white text-[16px] font-semibold shadow-md transition-all duration-300 hover:bg-[#0041cc] hover:shadow-[0_10px_24px_rgba(0,64,204,0.55)]">
              Know More
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="group bg-white rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col w-[470px] h-[650px]  border border-transparent transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_18px_38px_rgba(0,119,255,0.25)] hover:border-[#0077FF] hover:bg-[#F5FAFF]">
          <div className="h-[220px] bg-gradient-to-b from-[#E6F2FF] to-[#C7E1FF] flex items-center justify-center -mr-7 mt-10 transition-transform duration-300 group-hover:-translate-y-1">
            <Image
              src="/image 3.png"
              alt="Interior Architecture"
              width={500}
              height={470}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
            <h3 className="font-manrope gap-5 font-bold text-[29px] leading-[100%] text-[#3A3434] mt-10 transition-colors duration-300 group-hover:text-[#0077FF]">
              Interior Architecture
            </h3>
            <p className="font-openSans text-[14px] leading-[150%] text-[#706A6A] transition-opacity duration-300 group-hover:opacity-90">
              Explore the fundamentals of interior space planning, visual
              aesthetics, and functional design tailored for modern
              environments.
            </p>

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

            <button className="mt-10 w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#003366] text-white text-[16px] font-semibold shadow-md transition-all duration-300 hover:bg-[#0041cc] hover:shadow-[0_10px_24px_rgba(0,64,204,0.55)]">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
