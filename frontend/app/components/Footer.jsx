import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#003366] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* LEFT BLOCK */}
          <div className="md:col-span-6">

            {/* LOGO */}
            <div className="flex items-center gap-4 ml-0 md:-ml-69 mt-0 md:-mt-10 justify-center md:justify-start">
              <img
                src="/Group 1.svg"
                alt="Mastervance"
                className="h-[70px] md:h-[105.42px] w-auto md:w-[1420.37px] mr-0 md:mr-30"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="font-Inter mt-6 text-white max-w-xl leading-6 text-[14px] md:text-[17px] ml-0 md:-ml-38 text-center md:text-left">
              Empowers engineering students with practical learning, real
              examples, and hands-on clarity. Our mission is to make core
              engineering education accessible for everyone.
            </p>

            {/* CONTACT TITLE */}
            <h4 className="font-Manrope mt-8 text-[22px] md:text-[28px] font-bold ml-0 md:-ml-38 text-center md:text-left">
              Contact Us
            </h4>

            {/* CONTACT LIST */}
            <ul className="mt-5 space-y-4 text-[16px] md:text-[18px] ml-0 md:-ml-38">
              <li className="flex items-center gap-4 justify-center md:justify-start">
                <img src="/Frame.svg" alt="Mail" className="w-6 h-6 md:w-10 md:h-10" />
                <a href="mailto:hello@mastervance.in" className="hover:underline">
                  hello@mastervance.in
                </a>
              </li>

              <li className="flex items-center gap-4 justify-center md:justify-start">
                <img src="/FF1.svg" alt="Phone" className="w-6 h-6 md:w-10 md:h-10" />
                <span>+91 9110799941</span>
              </li>

              <li className="flex items-center gap-4 justify-center md:justify-start">
                <img src="/FF2.svg" alt="Location" className="w-6 h-6 md:w-10 md:h-10" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT COLUMNS ================= */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-15 mt-0 md:-mt-9 mr-0 md:-mr-19 text-center sm:text-left">

            {/* Company */}
            <div>
              <h5 className="text-[22px] md:text-[29px] font-semibold mb-4">
                Company
              </h5>
              <ul className="space-y-3 text-[16px] md:text-[20px] text-white/90">
                <li>About Us</li>
                <li>Careers</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h5 className="text-[22px] md:text-[29px] font-semibold mb-4">
                Learn
              </h5>
              <ul className="space-y-3 text-[16px] md:text-[20px] text-white/90">
                <li>Mentorship</li>
                <li>Join Community</li>
                <li>Become a Mentor</li>
                <li>Resources</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-[22px] md:text-[29px] font-semibold mb-4">
                Support
              </h5>
              <ul className="space-y-3 text-[16px] md:text-[20px] text-white/90">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <p className="text-white/80 text-[14px] md:text-[24px] text-center md:text-left mt-0 md:-mt-19 ml-0 md:-ml-36">
            © 2025 Mastervance EdTech. All rights reserved. | Privacy Policy | Terms of Service
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 md:gap-6 mt-0 md:-mt-40 mr-0 md:-mr-30">
            {["FR1.svg", "FR2.svg", "FR3.svg", "FR4.svg", "FR5.svg"].map(
              (icon, i) => (
                <img
                  key={i}
                  src={`/${icon}`}
                  alt="Social"
                  className="w-8 h-8 md:w-12 md:h-12 object-contain"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
