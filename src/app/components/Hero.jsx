import React from 'react';
import { Button } from '@/components/ui/button'; 

const Hero = () => {
  return (
    <section id="home" className="p-20 md:py-32">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Column (Text Content) */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-2xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Problem Solver. MERN Stack Web Developer.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I build modern, user-friendly web applications that turn complex challenges into simple, elegant solutions.
          </p>
          <div className="flex gap-4 items-center justify-center md:flex-row flex-col md:justify-start">
            <a href="#portfolio">
              <Button size="lg" className="font-semibold bg-blue-600 text-white cursor-pointer hover:bg-neutral-300 hover:text-neutral-900 transition-colors duration-700">View My Work</Button>
            </a>
            <a href="#contact">
              <Button size="lg" className="font-semibold text-neutral-900 hover:text-white bg-neutral-300 hover:bg-blue-600 cursor-pointer transition-colors duration-700">Get in Touch</Button>
            </a>
          </div>
        </div>

        {/* Right Column (Image - Placeholder for now) */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/* We will replace this with a professional photo of you */}
          <div className="w-64 h-64 md:w-70 md:h-70 bg-gray-300 rounded-full flex items-center justify-center relative">
            <img 
                src={"/kidan.png"} 
                alt="profile picture of kidan"
                className='w-64 h-84 md:w-70 md:h-100 rounded-b-full z-40 object-cover absolute bottom-0 left-0'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;