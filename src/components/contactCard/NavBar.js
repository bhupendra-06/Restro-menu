import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold">
            <a href="#">MyLogo</a>
          </div>

          {/* Navbar items (for desktop) */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>

          {/* Hamburger menu (for mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 space-y-4 text-center`}
        >
          <a href="#" className="text-white block hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white block hover:text-gray-400">
            About
          </a>
          <a href="#" className="text-white block hover:text-gray-400">
            Services
          </a>
          <a href="#" className="text-white block hover:text-gray-400">
            Contact
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
