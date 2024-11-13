// src/components/Hero.js

import React, { useState, useEffect } from 'react';
import david from '../assets/david.png';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);

  useEffect(() => {
    if (!popupDismissed) {
      const handleScroll = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          if (heroBottom <= window.innerHeight / 2) {
            setShowPopup(true);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [popupDismissed]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupDismissed(true);
  };

  const handleSubscribe = () => {
    setShowPopup(false);
    setPopupDismissed(true);
  };

  return (
    <>
      {/* Popup for Newsletter Subscription */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative transform transition-transform duration-300 scale-105">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-4xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Stay Updated!</h3>
            <p className="text-lg text-gray-700 mb-6">Subscribe to our newsletter for the latest updates and special offers directly to your inbox.</p>
            <input
              type="text"
              placeholder="First name"
              className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      )}

      <section
        id="hero"
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundColor: "#f5f0e1", // Changed to a soft beige color for a warm feel
          backgroundImage: `url(${david})`, // Added background image using david
          backgroundBlendMode: 'overlay', // Ensures a better blend of image and color
          backgroundSize: 'cover', // Ensure the image covers the entire area
          backgroundPosition: 'center' // Centers the background image
        }}
      >
        <div className="absolute inset-0 opacity-0"></div>
        <div className="container mx-auto relative text-center text-black" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">Learn Spanish with Spanish Enabler</h1>
          <p className="text-xl mb-8">Personalized lessons to help you become fluent.</p>
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#FFB703" }}
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
