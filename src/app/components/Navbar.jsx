"use client"; // Add this at the very top of the file

import React, { useState } from 'react'; // 1. Import useState
import { Menu, X } from 'lucide-react'; // 2. Import the "X" icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // 3. Add state

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          Kidan G.
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
        
        <a href="#contact" className="hidden md:block">
           <Button>Hire Me</Button> {/* Use Shadcn Button */}
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X /> : <Menu />} {/* 4. Change icon based on state */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <Button>Hire Me</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;