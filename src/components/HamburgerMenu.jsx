import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" > <li>Home</li> </Link>
            <Link to="/about" > <li>About</li> </Link>
            <Link to="/contact" > <li>Contact</li> </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
