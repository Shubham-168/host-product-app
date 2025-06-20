import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden mt-2">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 p-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
