import React, { useState, useEffect } from 'react';
import logo from '../assets/spanish.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolling ? 'bg-black/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}
  >
      <nav className="container mx-auto flex justify-between items-center p-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src={logo}
            alt="Logo"
            className="w-12 h-12 mr-2"
          />
        </div>
        {/* Navigation Links */}
        <ul className={`md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#courses" className="hover:text-yellow-300">Courses</a></li>
          <li><a href="#testimonials" className="hover:text-yellow-300">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Icon for the mobile menu */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
