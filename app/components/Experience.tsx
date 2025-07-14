"use client";

import { Timeline } from "@mantine/core";
import Image from "next/image";
import { experiences } from "../constants/data";

export default function Experience() {
  return (
    <section className=" text-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <Timeline
          active={experiences.length}
          bulletSize={66}
          lineWidth={4}
          color="white"
        >
          {experiences.map((exp, index) => (
            <Timeline.Item
              key={index}
              bullet={
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={45}
                  height={45}
                  className="rounded-full object-contain"
                />
              }
              title={
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p>{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                </div>
              }
            >
              <ul className="list-disc ml-4 mt-2 text-sm text-gray-300 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
