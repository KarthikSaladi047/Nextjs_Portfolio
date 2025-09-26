"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Left - Logo */}
        <div className="text-xl font-bold text-white">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" width={22} height={22} alt="Logo" />
            <span>Karthik Saladi</span>
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#tech">Tech</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <a
            href="https://raw.githubusercontent.com/karthiksaladi047/karthiksaladi047/main/Karthik_Saladi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-sm text-white hover:opacity-80 transition"
          >
            <Image
              src="/download.png"
              width={20}
              height={20}
              alt="Download CV"
            />
            CV
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 flex flex-col gap-4 text-white font-medium">
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#work" onClick={() => setIsOpen(false)}>
            Work
          </Link>
          <Link href="#tech" onClick={() => setIsOpen(false)}>
            Tech
          </Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a
            href="https://raw.githubusercontent.com/karthiksaladi047/karthiksaladi047/main/Karthik_Saladi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-sm text-white hover:opacity-80 transition"
          >
            <Image
              src="/download.png"
              width={20}
              height={20}
              alt="Download CV"
            />
            CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
