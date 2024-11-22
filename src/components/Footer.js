import React from 'react';
import { FaTiktok, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h3 className="text-xl font-bold mb-4">Spanish Enabler</h3>
        <p>Helping you learn Spanish effectively and confidently.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#courses" className="hover:underline">Courses</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.tiktok.com/@thespanishenabler" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl hover:text-yellow-500 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/thespanishenabler/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-yellow-500 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-yellow-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-yellow-500 transition-colors duration-300" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-yellow-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} Spanish Enabler. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;