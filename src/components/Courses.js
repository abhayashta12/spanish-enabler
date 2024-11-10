// src/components/Courses.js

import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'One on One Session',
    description: 'Start your journey with the basics.',
    image: '/images/oneonone.jpg',
    link: '/courses/OneonOne',
  }, 
  
  {
    title: 'Group Session',
    description: 'Master the language like a native speaker.',
    image: '/images/group.jpg',
    link: '/courses/Group',
  },
];

const Courses = () => (
  <section id="courses" className="py-12 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">Learn with us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <Link to={course.link}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;