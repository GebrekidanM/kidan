"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-blue-50 to-white p-4 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          GebreKidan M.
        </a>
        
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
        
        <a href="#contact" className="hidden md:block">
           <Button className='cursor-pointer bg-blue-500 text-white'>Hire Me</Button>
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button className='cursor-pointer bg-blue-500 text-white'>Hire Me</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;