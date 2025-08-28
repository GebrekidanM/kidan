import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Column (Your Story) */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              From Engineering Blueprints to Digital Solutions
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My journey into tech began with a foundation in Mechanical Engineering, where I developed a deep passion for structured problem-solving and design. I quickly realized that the same principles used to build physical machines could be applied to create elegant, efficient software solutions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This led me to the world of full-stack development. For me, coding is not just about writing lines of code; it's about understanding a real-world problem and architecting a solution that makes life easier. This is the philosophy I applied when I single-handedly built "Nitsuh Academy," a SaaS platform born from my experience as a teacher to solve the administrative challenges I saw firsthand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I thrive on turning complex requirements into user-friendly applications and am always eager to learn and adapt to new technologies.
            </p>
          </div>

          {/* Right Column (Your Skills) */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Skills</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 p-3 rounded-md">Frontend: React.js, Next.js, Tailwind CSS</li>
              <li className="bg-gray-100 p-3 rounded-md">Backend: Node.js, Express.js</li>
              <li className="bg-gray-100 p-3 rounded-md">Database: MongoDB, Mongoose</li>
              <li className="bg-gray-100 p-3 rounded-md">Tools: Git, GitHub, Vercel, Netlify</li>
              <li className="bg-gray-100 p-3 rounded-md">Design: Figma, Adobe Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;