// src/components/Hero.js

import React from 'react';

const Hero = () => (
  <section
    className="relative h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: "url('/images/hero.jpg')" }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto relative text-center text-white"
    data-aos="fade-up">
      <h1 className="text-5xl font-bold mb-4">Learn Spanish with Spanish Enabler</h1>
      <p className="text-xl mb-8">Personalized lessons to help you become fluent.</p>
      <a
        href="#contact"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded"
      >
        Get Started
      </a>
    </div>
  </section>
);

export default Hero;
