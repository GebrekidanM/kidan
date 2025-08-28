"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { category: 'Frontend', items: 'React.js, Next.js, Tailwind CSS' },
  { category: 'Backend', items: 'Node.js, Express.js' },
  { category: 'Database', items: 'MongoDB, Mongoose' },
  { category: 'Tools', items: 'Git, GitHub, Vercel, Netlify' },
  { category: 'Design', items: 'Figma, Adobe Photoshop' },
];

const SkillItem = ({ category, items }) => (
  <li
    className="bg-gray-100 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <strong>{category}:</strong> {items}
  </li>
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-down"
        >
          About Me
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          
          {/* Left Column - Bio */}
          <article
            className="md:w-2/3 space-y-4 text-gray-600 leading-relaxed"
            data-aos="fade-right"
          >
            <header>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                From Engineering Blueprints to Digital Solutions
              </h3>
            </header>
            <p>
              My journey into tech began with a foundation in Mechanical Engineering, 
              where I developed a deep passion for structured problem-solving and design. 
              I quickly realized that the same principles used to build physical machines 
              could be applied to create elegant, efficient software solutions.
            </p>
            <p>
              This led me to the world of full-stack development. For me, coding is not 
              just about writing lines of code; it's about understanding a real-world 
              problem and architecting a solution that makes life easier. This is the 
              philosophy I applied when I single-handedly built 
              <span className="font-semibold"> "Nitsuh Academy"</span>, a SaaS platform 
              born from my experience as a teacher to solve the administrative challenges 
              I saw firsthand.
            </p>
            <p>
              I thrive on turning complex requirements into user-friendly applications 
              and am always eager to learn and adapt to new technologies.
            </p>
          </article>

          {/* Right Column - Skills */}
          <aside className="md:w-1/3" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Skills</h3>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </ul>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default About;
