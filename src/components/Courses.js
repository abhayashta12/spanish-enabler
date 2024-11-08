// src/components/Courses.js

import React from 'react';

const courses = [
  {
    title: 'Beginner Spanish',
    description: 'Start your journey with the basics.',
    image: '/images/beginner.jpg',
  },
  {
    title: 'Intermediate Spanish',
    description: 'Build upon your existing knowledge.',
    image: '/images/intermediate.jpg',
  },
  {
    title: 'Advanced Spanish',
    description: 'Master the language like a native speaker.',
    image: '/images/advanced.jpg',
  },
];

const Courses = () => (
  <section id="courses" className="py-12 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">Courses Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
