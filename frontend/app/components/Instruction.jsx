"use client";

export default function InstructorsSection() {
  const instructorCards = [
    "/Courses1.svg",
    "/Courses2.svg",
    "/Courses3.svg",
    "/Courses4.svg",
  ];

  return (
    <section className="bg-[#C0DFFE] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADING ===== */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-[48px] font-manrope font-bold text-[#3A3434] mb-4 -ml-23 -mt-12">
            Popular Core Engineering Instructors
          </h2>
          <p className="text-[#565151] text-[24px] font-openSans text-lg -ml-23">
            Trusted by learners, guided by real-world engineering experts.
          </p>
        </div>

        {/* ================= SVG CARD SECTION ================= */}
        <div className="flex justify-between gap-8 lg:ml-[-148px]">
          {instructorCards.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Instructor card ${index + 1}`}
              className="w-[354px] h-[218px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
