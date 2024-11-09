// src/components/courses/BeginnerCourse.js

import React from 'react';

const BeginnerCourse = () => (
  <section className="pt-32 pb-12 bg-gradient-to-b from-yellow-50 to-white">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-900">Beginner Spanish Course</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <img
          src="/images/beginner.jpg"
          alt="Beginner Spanish"
          className="w-full md:w-1/2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
        <div className="md:w-1/2 text-left">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            This course is designed to introduce you to the basics of the Spanish language. Learn basic phrases, vocabulary, and grammar in a fun and engaging way. You will be able to hold simple conversations, ask questions, and understand basic Spanish sentences.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800 mb-8">
            <li>Basic Vocabulary and Phrases</li>
            <li>Introduction to Spanish Grammar</li>
            <li>Pronunciation Tips and Practice</li>
            <li>Fun Cultural Insights</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default BeginnerCourse;