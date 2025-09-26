"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-24 text-white"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <Image
          src="/profile.png"
          alt="Karthik Saladi"
          width={250}
          height={250}
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Text content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I&apos;m <span className="text-blue-300">Karthik Saladi</span>
        </h1>
        <p className="mt-2 text-xl text-gray-300">
          Cloud | DevOps | SRE
        </p>

        <p className="mt-4 text-md text-gray-400">
          Welcome to my portfolio. Scroll down to know me more...
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 text-2xl mt-6">
          <a href="https://github.com/KarthikSaladi047" target="_blank">
            <FaGithub className="hover:text-purple-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-sampath-karthik-saladi-76a42a259/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.instagram.com/mr.karthik_saladi/"
            target="_blank"
          >
            <FaInstagram className="hover:text-pink-400 transition" />
          </a>
          <a href="https://medium.com/@karthiksaladidevops" target="_blank">
            <FaMedium className="hover:text-green-400 transition" />
          </a>
          <a
            href="https://www.facebook.com/karthiknaidu.saisampath/"
            target="_blank"
          >
            <FaFacebook className="hover:text-blue-800 transition" />
          </a>
          <a href="https://x.com/karthiksaladi" target="_blank">
            <FaX className="hover:text-red-400 transition" />
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about">
          <Image
            src="/arrow.png"
            alt="Scroll Down"
            width={60}
            height={60}
            className="opacity-60 hover:opacity-100 invert"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
