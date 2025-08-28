import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, liveUrl, githubUrl, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">

        {/* Fixed height image */}
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content fills remaining space */}
        <div className="p-6 flex flex-col flex-grow">
  <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{description}</p>

  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag) => (
      <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
        {tag}
      </span>
    ))}
  </div>

  <div className="flex space-x-4 mt-auto">
    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
      <Button variant="outline">Live Demo</Button>
    </a>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <Button>GitHub</Button>
    </a>
  </div>
</div>

      </div>

  );
};

export default ProjectCard;
