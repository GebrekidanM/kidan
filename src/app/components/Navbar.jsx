import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const ListStyle = "text-gray-600 font-bold hover:text-gray-800";
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          Kidan G.
        </a>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className={ListStyle}>About</a>
          <a href="#portfolio" className={ListStyle}>Portfolio</a>
          <a href="#contact" className={ListStyle}>Contact</a>
        </div>

        {/* A "Hire Me" button for later */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Hire Me
        </button>

        {/* Mobile Menu Button (we'll make this work later) */}
        <div className="md:hidden">
          <button className="text-gray-800">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;