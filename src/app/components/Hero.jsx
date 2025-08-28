"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  const buttons = [
    {
      label: "View My Work",
      href: "#portfolio",
      className:
        "font-semibold bg-blue-600 text-white cursor-pointer hover:bg-neutral-300 hover:text-neutral-900 transition-colors duration-700",
    },
    {
      label: "Get in Touch",
      href: "#contact",
      className:
        "font-semibold text-neutral-900 hover:text-white bg-neutral-300 hover:bg-blue-600 cursor-pointer transition-colors duration-700",
    },
  ];

  return (
    <section
      id="home"
      className="p-20 md:py-32 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Column */}
        <div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-2xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Problem Solver. MERN Stack Web Developer.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I build modern, user-friendly web applications that turn complex
            challenges into simple, elegant solutions.
          </p>
          <div className="flex gap-4 items-center justify-center md:flex-row flex-col md:justify-start">
            {buttons.map((btn, index) => (
              <a key={index} href={btn.href} aria-label={btn.label}>
                <Button size="lg" className={btn.className}>
                  {btn.label}
                </Button>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          data-aos="fade-left"
        >
          <div
              className="w-64 h-64 md:w-72 md:h-72 bg-gray-300 rounded-full flex items-center justify-center relative group
                        shadow-lg hover:shadow-2xl transition-shadow duration-500
                        transform hover:scale-105 hover:-rotate-1"
              data-aos="fade-left"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-colors duration-500"></div>

              {/* Profile image */}
              <img
                src="/kidan.png"
                alt="Gebrekidan - MERN Stack Developer"
                className="w-64 h-84 md:w-72 md:h-100 rounded-b-full z-40 object-cover absolute bottom-0 left-0
                          transform group-hover:scale-110 group-hover:translate-y-[-4px] transition-transform duration-700 ease-out"
              />

              {/* Floating background accent */}
              <div className="absolute -z-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
