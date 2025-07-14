"use client";

import Image from "next/image";
import { techStack } from "../constants/data";

export default function TechStack() {
  return (
    <section className=" text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center group transition transform hover:scale-105"
            >
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain invert"
                />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-pink-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
