// src/components/Hero.js

import React from 'react';
import david from '../assets/david.png';

const Hero = () => (
  <section
    className="relative h-screen bg-cover bg-center flex items-center"
    style={{
      backgroundColor: "#f5f0e1", // Changed to a soft beige color for a warm feel
      backgroundImage: `url(${david})`, // Added background image using david
      backgroundBlendMode: 'overlay', // Ensures a better blend of image and color
      backgroundSize: 'cover', // Ensure the image covers the entire area
      backgroundPosition: 'center' // Centers the background image
    }}
  >
    <div className="absolute inset-0  opacity-0"></div>
    <div className="container mx-auto relative text-center text-black"
    data-aos="fade-up">
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
);

export default Hero;
