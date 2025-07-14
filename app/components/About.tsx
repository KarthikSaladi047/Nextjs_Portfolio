"use client";

import { ServiceCard } from "./ServiceCard";
import { services, summaryText } from "../constants/data";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 text-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          About Me
        </h2>

        <div className="mt-8 text-gray-200 leading-7">
          {summaryText.map((para, i) => (
            <p key={i} className={"mt-4"}>
              {para}
            </p>
          ))}
        </div>

        {/* Services */}
        <div className="mt-10 flex justify-center flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
