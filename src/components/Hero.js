// src/components/Hero.js

import React, { useState, useEffect } from 'react';
import david from '../assets/david.png';
import { Link } from 'react-router-dom';

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
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundColor: "#f5f0e1",
          backgroundImage: `url(${david})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto relative text-center text-white z-10">
          <h1 className="text-6xl font-extrabold mb-8 tracking-wide">
            WORLD'S #1 SPANISH LEARNING COACH
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to="/free-ebook">
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full m-2 transition-all duration-300">
                FREE EBOOK
              </button>
            </Link>
            <Link to="/courses/beginner">
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full m-2 transition-all duration-300">
                BEGINNER COURSE
              </button>
            </Link>
            <Link to="/courses/keynote">
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full m-2 transition-all duration-300">
                KEYNOTE SPEECH COURSE
              </button>
            </Link>
            <Link to="/courses/speech-coaching">
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full m-2 transition-all duration-300">
                SPEECH COACHING
              </button>
            </Link>
            <Link to="/speaking-engagements">
              <button className="border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full m-2 transition-all duration-300">
                SPEAKING ENGAGEMENTS
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
