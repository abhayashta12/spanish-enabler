// src/pages/IntermediateCourse.js

import React from 'react';

const IntermediateCourse = () => (
  <section className="py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Intermediate Spanish</h2>
      <p className="text-lg leading-relaxed mb-4">
        Build upon your existing knowledge. The intermediate course helps you further develop your vocabulary, understand more complex sentence structures, and communicate in everyday situations with confidence.
      </p>
      <img
        src="/images/intermediate.jpg"
        alt="Intermediate Spanish"
        className="w-1/2 mx-auto rounded-lg shadow-lg mb-6"
      />
    </div>
  </section>
);

export default IntermediateCourse;
