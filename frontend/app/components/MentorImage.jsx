"use client";

import { useRouter } from "next/navigation";
export default function MentorshipHighlights() {
  const router = useRouter();
  return (
    <>
      <section className="w-full bg-[#F6FAFF] py-16">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-10">
          {/* ================= TOP ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT – CONNECT WITH INDUSTRY */}
            <div
              className="
    relative
    w-[751px] h-[346px]
    rounded-[24px]
    border border-[#F7EEEE]
    p-8
    text-white
    shadow-[0px_0px_5.5px_0px_#00000040]
    overflow-hidden
    bg-[linear-gradient(250.91deg,_#FFFFFF_10.34%,_#80BFFF_37.69%,_#007FFF_99.22%)] -ml-20
  "
            >
              <h3 className="w-[383px] h-[98px] font-manrope font-extrabold text-[36px] leading-tight tracking-[0%] text-white">
                Connect with <br /> Industry & Alumni
              </h3>
              {/* Mentor Images */}
              <div className="absolute right-8 top-8 w-[420px] h-[420px]">
                <img
                  src="/Mentors17.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-0
      right-0
      w-[300px]
      h-[300px]
      rounded-full
      object-cover
      z-10
      mt-20"
                />
                <img
                  src="/Mentors19.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-0
      right-45
      w-[87.53px]
      h-[66.78px]
      object-cover
      z-10
      mt-10"
                />
                <img
                  src="/Mentors20.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-40
      right-55
      w-[71.41px]
      h-[51.37px]
      object-cover
      z-10
      mt-10"
                />
                <img
                  src="/Mentors22.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-10
      -right-5
      w-[161.39px]
      h-[240.25px]
      object-cover
      z-10
      mt-10"
                />
                <img
                  src="/Mentors21.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-20
      right-5
      w-[87.53px]
      h-[66.78px]
      object-cover
      z-10
      mt-10"
                />
              </div>

              <p className="w-[383px] h-[57px] mt-4 font-inter font-medium text-[16px] leading-tight tracking-[0%] text-[#EBE2E2] opacity-100">
                Join mentor-led groups, alumni circles, and industry meetups for
                referrals, internships, and collaborative opportunities.
              </p>

              <div className="mt-6 flex flex-wrap gap-[3px]">
                <span
                  className="
      w-[147px] h-[33px]
      flex items-center
      px-[16px] py-[2px]
      rounded-[24px]
      bg-white
      text-[#9307CB]
      text-[12px]
      font-medium
      shadow-[0px_0px_4px_0px_#00000040]
    "
                >
                  ✓ Networking
                </span>

                <span
                  className="
      w-[147px] h-[33px]
      flex items-center
      px-[16px] py-[2px]
      rounded-[24px]
      bg-white
      text-[#9307CB]
      text-[12px]
      font-medium
      shadow-[0px_0px_4px_0px_#00000040] ml-2   "
                >
                  ✓ Peer learning
                </span>

                <span
                  className="
      w-[147px] h-[33px]
      flex items-center
      px-[16px] py-[2px]
      rounded-[24px]
      bg-white
      text-[#9307CB]
      text-[12px]
      font-medium
      shadow-[0px_0px_4px_0px_#00000040] mt-12 -ml-77
    "
                >
                  ✓ Industry exposure
                </span>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-24 -bottom-24 w-[360px] h-[360px] bg-white/30 rounded-full" />
            </div>

            {/* RIGHT – ENGINEERING PROJECTS */}

            <div
              className="
    relative
    w-[739px] h-[346px]
    rounded-[24px]
    bg-white
    border border-white
    p-8
    shadow-[0px_0px_5.5px_1px_#00000040]
  "
            >
              <h3 className="text-[#218FFF] text-[36px] font-bold leading-tight">
                Engineering Projects <br /> That Stand Out
              </h3>

              <p className="mt-4 text-[16px] text-[#565151] leading-tight font-semibold">
                Work on live projects with Core Engineering
                <br /> Concepts on mentors guiding you to build an
                <br /> industry-ready portfolio.
              </p>
              <div className="absolute w-[420px] h-[420px]">
                <img
                  src="/Mentors23.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-0
      -right-60
      w-[269px]
      h-[269px]
      rounded-full
      object-cover
      z-10
      -mt-45"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-[3px]">
                <span
                  className="
      w-[147px] h-[33px]
      flex items-center
      px-[16px] py-[2px]
      rounded-[24px]
      bg-white
      text-[#9307CB]
      text-[12px]
      font-medium
      shadow-[0px_0px_4px_0px_#00000040]
    "
                >
                  ✓ Practical skills
                </span>

                <span
                  className="
      w-[147px] h-[33px]
      flex items-center
      px-[16px] py-[2px]
      rounded-[24px]
      bg-white
      text-[#9307CB]
      text-[12px]
      font-medium
      shadow-[0px_0px_4px_0px_#00000040] ml-2
    "
                >
                  ✓ Case studies
                </span>

                <span
                  className="
      w-[147px] h-[33px]
      flex items-center
      px-[16px] py-[2px]
      rounded-[24px]
      bg-white
      text-[#9307CB]
      text-[12px]
      font-medium
      shadow-[0px_0px_4px_0px_#00000040] mt-12 -ml-77
    "
                >
                  ✓ Portfolio Building
                </span>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div
              className="
    w-[489px]
    h-[476px]
    rounded-[16px]
    p-8
    bg-[linear-gradient(360deg,_#EBF3FC_0%,_#007FFF_100%)]
    shadow-[0px_0px_5.5px_0px_#00000040] -ml-20
  "
            >
              <h3 className="text-[36px] font-extrabold text-[#FFFFFF] leading-tight font-manrope">
                Expert Mentorship at Scale
              </h3>

              <p className="mt-4 text-[16px] text-[#F5FAFF] opacity-90">
                One-on-one and group mentorship from professionals.
              </p>
              <div className="absolute w-[420px] h-[420px]">
                <img
                  src="/Mentors24.svg"
                  alt="Mentor 1"
                  className="
      absolute
      top-0
      right-20
      w-[247px]
      h-[247px]
      object-cover
      z-10
      mt-10"
                />
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
    w-[493px]
    h-[476px]
    rounded-[16px]
    bg-white
    border border-[#EDE3E3]
    p-8
    shadow-[0px_0px_5.5px_0px_#00000040] -ml-8
  "
            >
              <h3 className="text-[36px] font-extrabold text-[#007FFF] leading-tight">
                Personalized Career Roadmaps
              </h3>

              <p className="mt-4 text-[16px] text-[#565151] leading-tight font-semibold">
                Tailored learning and career growth plans for core engineers
                from PSU exams to private sector jobs and higher studies.
              </p>
              <div className="absolute w-[420px] h-[420px]">
                <img
                  src="/Mentors25.svg"
                  alt="Mentor 1"
                  className="
      absolute
      -top-6
      right-20
      w-[247px]
      h-[247px]
      object-cover
      z-10
      mt-10"
                />
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
    w-[493px] h-[476px]
    rounded-[16px]
    p-8
    shadow-[0px_0px_5.5px_0px_#00000040]
    bg-[linear-gradient(360deg,_#EBF3FC_0%,_#007FFF_100%)] ml-5
  "
            >
              <h3 className="font-manrope text-[36px] font-extrabold text-[#FFFFFF] leading-tight">
                From Classroom to
                <br /> Core Industry
              </h3>

              <p className="mt-4 text-[16px] font-bold opacity-90 text-[#F4F9FF]">
                Inspiring journeys of students who secured placements in PSUs,
                core MNCs, and global engineering firms with the help of
                mentorship.
              </p>
              <div className="absolute w-[420px] h-[420px]">
                <img
                  src="/Mentors26.svg"
                  alt="Mentor 1"
                  className="
      absolute
      -top-6
      right-20
      w-[256px]
      h-[256px]
      object-cover
      z-10
      mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="
    absolute
    top-[3661px]
    left-[105px]
    w-[1520px]
    h-[650px]
    rounded-[16px]
   mt-30
    
    opacity-100
    overflow-hidden
  "
        >
          <img
            src="/Mentors27.svg"
            alt="Mentor"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="w-screen bg-[#F8FBFF] py-20 mt-190">
        <div className="max-w-[1600px] mx-auto px-8 flex justify-center">
          <div
            className="
        relative
        w-[3716px]
        h-[583px]
        rounded-[16px]
        bg-white
        border
        border-[#ACD3FB]
        shadow-[0px_0px_3.6px_1.1px_rgba(0,0,0,0.15)]
        opacity-100
        flex
        items-center
        justify-between
        px-16
        py-14
      "
          >
            {/* ================= LEFT CONTENT ================= */}
            <div className="max-w-[660px]">
              <h2 className="text-[44px] leading-[54px] font-extrabold -mt-10">
                <span className="text-[#0281FF] font-manrope font-semibold text-[64px] leading-tight">
                  Become a Mentor
                </span>{" "}
                <span className="text-[#3A3434] font-manrope font-semibold text-[64px] leading-tight">
                  with Mastervance
                </span>
                <br />
                <span className="text-[#2D2A2A]"></span>
              </h2>

              <p className="mt-4 text-[22px] font-openSans text-[#3A3434] leading-relaxed">
                Share your expertise and shape future-ready talent with
                Mastervance mentorship.
              </p>

              {/* Pills */}
              <div className="max-w-[520px] mt-6 flex flex-wrap gap-[6px] -ml-5">
                {[
                  "Build your personal brand",
                  "Give back to society",
                  "Teach to reach new heights",
                  "Mentor & earn",
                ].map((item) => (
                  <span
                    key={item}
                    className="
        w-[237px]
        h-[42px]
        flex
        items-center
        gap-[6px]
        px-[10px]
        py-[3px]
        rounded-[24px]
        bg-white
        text-[#9307CB]
        text-[16px]
        font-medium
        border
        border-[#E6E6E6]
        shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
        opacity-100
        mt-5
        ml-4
      "
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => router.push("/BecomeMentor")}
                className="
    mt-8
    w-[253px]
    h-[59px]
    flex
    items-center
    justify-center
    gap-[28px]
    px-[48px]
    py-[16px]
    rounded-[24px]
    bg-[#003366]
    text-white
    font-semibold
    shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]
    whitespace-nowrap
    transition-all
    duration-300
    hover:scale-[1.03]
  "
              >
                <span className="font-manrope text-[20px] font-extrabold whitespace-nowrap">
                  Become a Mentor
                </span>
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative w-[746.77] h-[465.18]">
              <img
                src="/Mentors28.svg"
                alt="Mentor Illustration"
                className="w-[746.77] h-[465.18] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
