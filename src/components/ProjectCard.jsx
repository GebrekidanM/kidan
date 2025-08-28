import React from 'react';
import { Button } from './ui/button'; // Using our Shadcn button

const ProjectCard = ({ title, description, imageUrl, liveUrl, githubUrl, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Placeholder for the image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">Screenshot</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
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