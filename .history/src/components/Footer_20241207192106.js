<<<<<<< HEAD
import React, { useState } from "react";
import { FaTiktok, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
=======
import React, { useState } from 'react';
import { FaTiktok, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState(''); // State to store the email input
  const [message, setMessage] = useState(''); // State to store the success/error message
>>>>>>> fabf0c6878df882c424e1b708dddd33353505ee4

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
=======
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });      

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear the input field on success
      } else {
        setMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('An error occurred. Please try again.');
>>>>>>> fabf0c6878df882c424e1b708dddd33353505ee4
    }
  };

  return (
    <footer className="bg-[#0b0f19] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Spanish Enabler Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">The Spanish Enabler</h3>
          <p className="text-sm text-gray-400">
            Empowering you to learn Spanish effectively and confidently, one step at a time.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.tiktok.com/@thespanishenabler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/thespanishenabler/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="text-gray-400 hover:underline hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:underline hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#courses" className="text-gray-400 hover:underline hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:underline hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Stay updated with our latest courses and tips.
          </p>
<<<<<<< HEAD
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
=======
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
>>>>>>> fabf0c6878df882c424e1b708dddd33353505ee4
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
<<<<<<< HEAD
          {message && <p className="mt-4 text-sm text-yellow-400">{message}</p>}
=======
          {message && (
            <p className={`mt-4 text-sm ${message.includes('Thank') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
>>>>>>> fabf0c6878df882c424e1b708dddd33353505ee4
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-4">
        <div className="text-center text-gray-400 text-sm">
<<<<<<< HEAD
          <p>&copy; {new Date().getFullYear()} Spanish Enabler. All Rights Reserved.</p>
=======
          <p>&copy; {new Date().getFullYear()} The Spanish Enabler. All Rights Reserved.</p>
>>>>>>> fabf0c6878df882c424e1b708dddd33353505ee4
          <p className="space-x-2">
            <a href="#privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
