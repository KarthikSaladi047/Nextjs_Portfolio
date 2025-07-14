"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constants/data";

export default function Projects() {
  return (
    <>
      <section className=" text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">{proj.title}</h2>
                  <p className="text-sm text-gray-400">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 text-xs mt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-purple-600/20 text-purple-300 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4 text-lg">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
