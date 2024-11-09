// src/components/courses/AdvancedCourse.js

import React from 'react';

const AdvancedCourse = () => (
  <section className="pt-32 pb-12 bg-gradient-to-r from-yellow-50 to-yellow-100">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-900">Advanced Spanish Course</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <img
          src="/images/advanced.jpg"
          alt="Advanced Spanish"
          className="w-full md:w-1/2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
        <div className="md:w-1/2 text-left">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Master the Spanish language with our advanced course. Achieve fluency and become proficient in complex conversations and grammar. Dive deeper into Spanish culture, idiomatic expressions, and refine your accent to speak like a native.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 mb-8">
            <li>Advanced Grammar and Syntax</li>
            <li>Practice with Native Speakers</li>
            <li>Spanish Literature and Cultural Studies</li>
            <li>Conversational Fluency Techniques</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AdvancedCourse;
