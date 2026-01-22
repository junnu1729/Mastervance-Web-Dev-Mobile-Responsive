import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CommunityPage() {
  return (
    <div>
      <Navbar />

      <section>
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-22 md:py-20 rounded-b-2xl overflow-hidden -ml-15 -mt-7.5">
          <div className="relative rounded-lg overflow-hidden pt-14 pb-14 pl-10 pr-10">
            {/* Gradient Background */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(270.91deg, #FFFFFF 10.34%, #80BFFF 37.69%, #007FFF 99.22%)",
                            }}
                        />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              {/* LEFT CONTENT */}
              <div className="md:col-span-7 lg:col-span-6 px-4 md:px-8 py-8 ">
                <div className="inline-block bg-white text-[#106FCF] rounded-full px-14 py-1 font-medium text-[20px] shadow-sm mb-6 ml-12 mt-14 ">
                  Community
                </div>

                <h1
                  className="text-white text-[56px] md:text-[56px] lg:text-[64px] leading-tight 
                           font-manrope font-bold mb-6 ml-12 whitespace-nowrap"
                >
                  Advance in Core Engineering with
                  <br />
                  Industry Connections
                </h1>

                <p className="text-[#FAFDFF] text-base md:text-[22px] mb-8 ml-14 max-w-4xl">
                  Join a global community of learners and professionals, gaining practical skills and real-world insights to
                  <span className="block">
                    build your engineering career.
                  </span>
                </p>


                <a
                  href="/courses"
                  className="inline-block px-6 md:px-8 py-3 md:py-3 rounded-xl bg-[#003366] hover:bg-[#0041cc] text-white font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition ml-14"
                >
                  Join Comminity
                </a>
              </div>

              {/* RIGHT ILLUSTRATION */}
              <div className="md:col-span-5 lg:col-span-6 px-4 md:px-8 py-8 flex justify-end">
                <div className="w-[300px] md:w-[420px] lg:w-[520px] relative">
                  <Image
                    src="/Community1.svg"
                    alt="Illustration"
                    width={316}
                    height={316}
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

      <section className="bg-[#F9FCFF] py-20">
        <div className="max-w-7xl mx-auto px-6 ">

          {/* =========================
            SECTION 1 : TOP HEADING
        ========================== */}
          <div className="text-center mb-20">
            <h2 className="text-[48px] font-manrope font-bold text-[#3A3434] mb-4 -mt-28">
              Join Our Whatsapp Community
            </h2>
            <p className="text-[24px] font-opensans text-[#565151] max-w-4xl mx-auto">
              Real-time discussions, study groups, and instant help from peers and mentors.
            </p>
          </div>

          {/* =========================
            SECTION 2 : LEFT TITLE BLOCK
        ========================== */}
          <div className="mb-16 max-w-3xl">
            <h3 className="text-[48px] font-manrope font-bold text-[#3A3434] leading-tight -ml-30">
              Built by engineering minds, for the <br />
              <span className="bg-gradient-to-r from-[#007FFF] to-[#09509B] text-transparent bg-clip-text">
                engineering community
              </span>

            </h3>
          </div>

          {/* =========================
            SECTION 3 : FEATURE CARDS
        ========================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div
              className="w-[315px]  h-[318px]  bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-8 shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)] -ml-30"
            >
              <img
                src="/community2.svg"
                alt="Fast help"
                className="top-[41px] left-[140px] w-[140px] h-[140px] ml-12 -mt-1"
              />

              <h4
                className="w-[238px] h-[72px] font-manrope font-extrabold text-[26px] leading-[100%] tracking-[0%] text-[#3A3434] mb-2"
              >
                Fast help from peers & mentors
              </h4>


              <p className="text-[14px] font-manrope text-[#787575] ">
                Get quick answers when you need them.
              </p>
            </div>


            {/* CARD 2 */}
            <div
              className="w-[315px]  h-[318px]  bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-8 shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)] -ml-10"
            >
              <img
                src="/community3.svg"
                alt="Fast help"
                className="top-[41px] left-[140px] w-[140px] h-[140px] ml-12 -mt-1"
              />

              <h4
                className="w-[238px] h-[72px] font-manrope font-extrabold text-[23px] leading-[100%] tracking-[0%] text-[#3A3434] mb-2"
              >
                Branch-specific discussion channels
              </h4>


              <p className="text-[14px] font-manrope text-[#787575] ">
                Talk and share with your own department group.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="w-[315px]  h-[318px]  bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-8 shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)] ml-6"
            >
              <img
                src="/community4.svg"
                alt="Fast help"
                className="top-[41px] left-[140px] w-[150px] h-[150px] ml-12 -mt-4"
              />

              <h4
                className="w-[238px] h-[72px] font-manrope font-extrabold text-[26px] leading-[100%] tracking-[0%] text-[#3A3434] mb-2"
              >
                Job opportunities & referrals
              </h4>


              <p className="text-[14px] font-manrope text-[#787575] ">
                Find job updates shared by others.
              </p>
            </div>

            {/* CARD 4 */}
            <div
              className="w-[315px]  h-[318px]  bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-8 shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)] ml-25"
            >
              <img
                src="/community5.svg"
                alt="Fast help"
                className="top-[41px] left-[140px] w-[140px] h-[140px] ml-12 -mt-1"
              />

              <h4
                className="w-[238px] h-[72px] font-manrope font-extrabold text-[26px] leading-[100%] tracking-[0%] text-[#3A3434] mb-2"
              >
                Support around the clock
              </h4>


              <p className="text-[14px] font-manrope text-[#787575] ">
                Help is always here, day or night.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#F9FCFF] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* =========================
            SECTION 1 : HEADING
        ========================== */}
          <div className="text-center mb-20">
            <h2 className="text-[48px] font-manrope font-extrabold text-[#3A3434] mb-4 -mt-15">
              Community Guidelines
            </h2>
            <p className="text-[22px] text-[#565151] font-openSans max-w-3xl mx-auto">
              Help us maintain a supportive and inclusive environment for all engineering students.
            </p>
          </div>

          {/* =========================
            SECTION 2 : GUIDELINE CARDS
        ========================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <div
              className="w-[668px] h-[210px] bg-white rounded-[16px] border border-[#F0E6E6] pt-[20px] pb-[20px] pl-[32px] pr-[32px] shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)] -ml-20"
            >
              <div className="flex items-start gap-[20px]">
                <img
                  src="/Community6.svg"
                  alt="Respect"
                  className="w-[60px] h-[60px]"
                />

                <div>
                  <h4 className="text-[36px] font-Inter font-semibold text-[#3A3434] mb-2">
                    Be Respectful
                  </h4>

                  <p className="font-openSans font-normal text-[22px] leading-[115%] tracking-[0%] text-[#3A3434] -ml-20 mt-5">
                    Treat all members with respect, regardless of college, background, or experience level.
                    We're all here to learn and grow together.
                  </p>

                </div>
              </div>

            </div>


            {/* CARD 2 */}
            <div
              className="w-[668px] h-[210px] bg-white rounded-[16px] border border-[#F0E6E6] pt-[20px] pb-[20px] pl-[32px] pr-[32px] shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)] "
            >
              <div className="flex items-start gap-[20px]">
                <img
                  src="/Community7.svg"
                  alt="Respect"
                  className="w-[60px] h-[60px]"
                />

                <div>
                  <h4 className="text-[36px] font-Inter font-semibold text-[#3A3434] mb-2">
                    Share Knowledge
                  </h4>

                  <p className="font-openSans font-normal text-[22px] leading-[115%] tracking-[0%] text-[#3A3434] -ml-20 mt-5">
                    Help others by sharing knowledge, resources, and experiences.Your insights could be exactly what someone needs.
                  </p>

                </div>
              </div>

            </div>

            {/* CARD 3 */}
            <div
              className="w-[668px] h-[210px] bg-white rounded-[16px] border border-[#F0E6E6] pt-[20px] pb-[20px] pl-[32px] pr-[32px] shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)] -ml-20"
            >
              <div className="flex items-start gap-[20px]">
                <img
                  src="/Community8.svg"
                  alt="Respect"
                  className="w-[60px] h-[60px]"
                />

                <div>
                  <h4 className="text-[36px] font-Inter font-semibold text-[#3A3434] mb-2">
                    No Spam
                  </h4>

                  <p className="font-openSans font-normal text-[22px] leading-[115%] tracking-[0%] text-[#3A3434] -ml-20 mt-5">
                    Avoid promotional content, spam, or irrelevant posts. Keep the community focused on valuable discussions and safe a community.
                  </p>

                </div>
              </div>

            </div>

            {/* CARD 4 */}
            <div
              className="w-[668px] h-[210px] bg-white rounded-[16px] border border-[#F0E6E6] pt-[20px] pb-[20px] pl-[32px] pr-[32px] shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)] "
            >
              <div className="flex items-start gap-[20px]">
                <img
                  src="/Community9.svg"
                  alt="Respect"
                  className="w-[60px] h-[60px]"
                />

                <div>
                  <h4 className="text-[36px] font-Inter font-semibold text-[#3A3434] mb-2">
                    Be Respectful
                  </h4>

                  <p className="font-openSans font-normal text-[22px] leading-[115%] tracking-[0%] text-[#3A3434] -ml-20 mt-5">
                    Keep discussions relevant to engineering, career development, and education. Use appropriate channels for specific topics.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9FCFF]">
        <div className="max-w-[1520px] h-[513px] mx-auto px-6">

          {/* =============================
            MAIN CTA CONTAINER
        ============================== */}
          <div className="bg-[#3192F7] rounded-[26px] px-14 py-16 flex flex-col lg:flex-row items-center gap-12 ">

            {/* =============================
              LEFT CONTENT SECTION
          ============================== */}
            <div className="flex-1 text-white">

              {/* Heading */}
              <h2 className="font-openSans font-bold text-[56px] leading-[110%] mb-6">
                Join the Space Where <br />
                Engineers Talk, Learn & 
                Succeed
              </h2>

              {/* Description */}
              <p className="font-openSans text-[23px] leading-[140%] text-[#EAE4E4] max-w-xl mb-10">
                Our community brings together core engineers to<br />
                share knowledge, projects, and opportunities.
              </p>

              {/* CTA Button */}
              <button className="bg-[#0E4FA3] hover:bg-[#0b3f82] font-manrope transition text-white font-extrabold text-[24px] px-8 py-4 rounded-full">
                Join The Community
              </button>
            </div>

            {/* =============================
              RIGHT ILLUSTRATION SECTION
          ============================== */}
            <div className="flex-1 flex justify-center">
              <img
                src="/community10.svg"
                alt="Engineering Community Illustration"
                className="max-w-[520px] w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
