import { useState } from "react";

export default function MentorsSection() {
  const mentors = [
    {
      name: "Shubam Sharma",
      role: "Lead Civil Engineer at L&T Construction",
      branch: "Civil",
      sessions: "200 Session",
      reviews: "(124 reviews)",
      availability: "Mon - Fri",
      image: "/Mentors9.svg",
    },
    {
      name: "Nicolas Jenn",
      role: "Lead VLSI Designer at TATA Construction",
      branch: "Electronics",
      sessions: "200 Session",
      reviews: "(124 reviews)",
      availability: "Mon - Fri",
      image: "/Mentors13.svg",
    },
    {
      name: "Jackson William",
      role: "Mechanical Manager at Asoka Leyland Construction",
      branch: "Mechanical",
      sessions: "140 Session",
      reviews: "(124 reviews)",
      availability: "Mon - Fri",
      image: "/Mentors12.svg",
    },
    {
      name: "Arjun Patel",
      role: "Software Architect at Infosys",
      branch: "CSE",
      sessions: "180 Session",
      reviews: "(98 reviews)",
      availability: "Mon - Fri",
      image: "/Mentors9.svg",
    },
    {
      name: "Jackson William",
      role: "Mechanical Manager at Asoka Leyland Construction",
      branch: "Mechanical",
      sessions: "140 Session",
      reviews: "(124 reviews)",
      availability: "Mon - Fri",
      image: "/Mentors12.svg",
    },
    {
      name: "Arjun Patel",
      role: "Software Architect at Infosys",
      branch: "CSE",
      sessions: "180 Session",
      reviews: "(98 reviews)",
      availability: "Mon - Fri",
      image: "/Mentors9.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (currentIndex < mentors.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-[#F8FBFF] py-16">
      <div className="w-full max-w-[1600px] mx-auto px-6">
        <h2 className="text-[48px] font-bold font-manrope text-[#3A3434] -mt-10 ">
          Expert{" "}
          <span
            className="
    font-[Manrope]
    font-bold
    text-[48px]
    leading-[100%]
    bg-gradient-to-r
    from-[#007FFF]
    to-[#0C4784]
    bg-clip-text
    text-transparent
  "
          >
            Mentors{" "}
          </span>
          Spotlight
        </h2>
        <p className="font-openSans text-[24px] text-[#565151] ">
          Meet the mentors who are shaping future engineers with their guidance.
        </p>
        <div className="flex gap-[30px]  mt-8">
          {/* Filter By Branch */}
          <button
            className="
      flex items-center
      w-[269px] h-[52px]
      gap-[30px]
      px-[14px] py-[10px]
      bg-white
      border border-[#F2E6E6]
      rounded-[8px]
      text-[#1A1A1A]
      opacity-100
    "
          >
            {/* Icon */}
            <img
              src="/Mentors8.svg" // replace with actual image path
              alt="Rajesh Kumar"
              className="w-[24px] h-[24px] rounded-full object-cover"
            />

            <span className="text-[20px] font-manrope font-medium text-[#3A3434] whitespace-nowrap">
              Filter By Branch
            </span>

            {/* Dropdown Arrow */}
            <img
              src="/Mentors6.svg" // replace with actual image path
              alt="Rajesh Kumar"
              className="w-[32px] h-[32px] rounded-full object-cover -ml-3"
            />
          </button>

          {/* Sort By Rating */}
          <button
            className="
      flex items-center
      w-[269px] h-[52px]
      gap-[30px]
      px-[14px] py-[10px]
      bg-white
      border border-[#F2E6E6]
      rounded-[8px]
      text-[#1A1A1A]
      opacity-100
    "
          >
            {/* Star Icon */}
            <img
              src="/Mentors7.svg" // replace with actual image path
              alt="Rajesh Kumar"
              className="w-[24px] h-[24px] rounded-full object-cover"
            />

            <span className="text-[20px] font-medium font-manrope text-[#3A3434] whitespace-nowrap -ml-1">
              Sort By Rating
            </span>

            {/* Dropdown Arrow */}
            <img
              src="/Mentors6.svg" // replace with actual image path
              alt="Rajesh Kumar"
              className="w-[32px] h-[32px] rounded-full object-cover -ml-3"
            />
          </button>
                    <button
            onClick={handlePrev}
          >
            <img
              src="/Mentors15.svg" // replace with actual image path
              alt="Rajesh Kumar"
              className="w-[56px] h-[57px]  object-cover ml-190"
            />
          </button>

          <button
            onClick={handleNext}
          >
            <img
              src="/Mentors14.svg" // replace with actual image path
              alt="Rajesh Kumar"
              className="w-[56px] h-[57px]  object-cove mt-10r"
            />
          </button>
        </div>

        {/* Slider */}
        <div className="relative mt-12 overflow-hidden ">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (466 + 57)}px)`, // 466 + 21 gap
              gap: "57px",
            }}
          >
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="
      min-w-[466px] max-w-[466px]
      h-[641px]
      bg-white
      rounded-[16px]
      p-[14px]
      shadow-[0px_0px_4px_0px_#00000040]
      overflow-hidden
      flex flex-col
    "
              >
                {/* Image */}
                <div className="relative rounded-[12px] overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-[438px] h-[353px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-[28px] text-[#3A3434] font-manrope font-bold">
                        {mentor.name}
                      </h3>
                      <span
                        className="inline-flex items-center justify-center w-[121px] h-[33px] px-[10px]
    bg-[#0884FF]
    text-white
    text-[16px]
    font-semibold
    rounded-[24px]
    whitespace-nowrap
  "
                      >
                        {mentor.branch}
                      </span>
                    </div>
                    <div className="relative mt-4">
                      {/* Icon */}
                      <img
                        src="/Mentors11.svg"
                        alt="icon"
                        className="absolute left-0 top-2 w-[32px] h-[32px]"
                      />

                      {/* Text (fixed position) */}
                      <p className="font-inter font-medium text-[22px] leading-[100%] tracking-[0%] text-[#3A3434] pl-10">
                        {mentor.role.split(" at ")[0]}{" "}
                        <span className="text-[#A9A5A5] font-semibold">at</span>{" "}
                        {mentor.role.split(" at ")[1]}
                      </p>
                    </div>

                    <div className="relative mt-4">
                      <img
                        src="/Mentors10.svg"
                        alt="icon"
                        className="absolute left-0 top-0 w-[32px] h-[32px]"
                      />

                      <div className="flex gap-4 pl-10 text-[18px] font-semibold text-[#3A3434] mt-1">
                        <span className="font-inter text-[18px] text-[#3A3434]">
                          {mentor.sessions}
                        </span>
                        <span className="font-inter text-[18px] text-[#565151]">
                          {mentor.reviews}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 ">
                    
                    <div className="border border-[#DFE2E6] rounded-[16px] px-8 py-1 font-inter font-bold text-[16px]">
                      <span className="font-Manrope text-[12px] font-medium text-[#565151] -ml-1">Availabilty Time</span><br/>
                     {mentor.availability}

                    </div>

                    <button className="bg-[#003366] rounded-[16px] text-white px-8 py-4 font-inter font-semibold">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
