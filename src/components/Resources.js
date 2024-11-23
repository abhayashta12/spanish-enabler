// src/components/Resources.js

import React from 'react';

const Resources = () => (
  <section id="resources" className="py-20 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Resources</h2>
      <div className="mb-20">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          src="https://www.loom.com/embed/e8e4306b290243ed916e89011339ead9"
          title="Live Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a 
        href="https://stan.store/TheSpanishEnabler" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        Download Free Resources
      </a>
    </div>
  </section>
);

export default Resources;
