"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* MAIN BAR */}
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-[64px] sm:h-[72px] lg:h-[80px]
          px-4 sm:px-6 lg:px-10 2xl:px-20
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/loggo.jpg"
            alt="Mastervance Logo"
            width={180}
            height={48}
            className="
              object-contain
              w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]
            "
            priority
          />
        </div>

        {/* DESKTOP / TABLET MENU */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-6 lg:gap-8 xl:gap-10
            text-[14px] lg:text-[15px] xl:text-[16px]
            font-semibold
          "
        >
          <Link href="/" className="text-[#003366]">
            Home
          </Link>
          <Link href="/Courses" className="text-gray-700 hover:text-blue-600">
            Courses
          </Link>
          <Link href="/Community" className="text-gray-700 hover:text-blue-600">
            Community
          </Link>
          <Link href="/Events" className="text-gray-700 hover:text-blue-600">
            Events
          </Link>
          <Link href="/Mentors" className="text-gray-700 hover:text-blue-600">
            Mentorship
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Resources
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Forum
          </Link>
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button
            className="
              px-5 lg:px-6
              py-1.5
              rounded-lg
              border border-gray-300
              bg-[#E0EEFC]
              text-gray-700
              text-[13px] lg:text-[14px]
              hover:bg-gray-100
            "
          >
            Login
          </button>

          <button
            className="
              px-5 lg:px-6
              py-2
              rounded-lg
              bg-[#003366]
              text-white
              text-[13px] lg:text-[14px]
              hover:bg-[#0041cc]
            "
          >
            Get Started
          </button>
        </div>

        {/* MOBILE & SMALL TABLET MENU BUTTON */}
        <button
          className="
            md:hidden
            inline-flex items-center justify-center
            w-10 h-10
            rounded-lg
            border border-gray-300
          "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* MOBILE / TABLET MENU PANEL */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-white
            border-t
            shadow-lg
          "
        >
          <div
            className="
              flex flex-col
              px-6 py-6
              gap-5
              text-[16px]
              font-semibold
            "
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/Courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link href="/Community" onClick={() => setMenuOpen(false)}>Community</Link>
            <Link href="/Events" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link href="/Mentors" onClick={() => setMenuOpen(false)}>Mentorship</Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>Resources</Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>Forum</Link>

            {/* MOBILE BUTTONS */}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full px-6 py-2 rounded-lg border border-gray-300 bg-[#E0EEFC]">
                Login
              </button>
              <button className="w-full px-6 py-2 rounded-lg bg-[#003366] text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
