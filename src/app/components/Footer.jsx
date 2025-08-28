import React from 'react';
import { Github, Linkedin } from 'lucide-react'; // Re-using our icons

const Footer = () => {
  // Get the current year automatically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright Notice */}
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>&copy; {currentYear} Gebrekidan M. All Rights Reserved.</p>
          <p className="text-sm text-gray-400">Built with Next.js, Tailwind CSS, and a lot of coffee.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://github.com/GebrekidanM" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <Github />
          </a>
          <a 
            href="https://www.linkedin.com/in/kidangebre-mequanint" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;