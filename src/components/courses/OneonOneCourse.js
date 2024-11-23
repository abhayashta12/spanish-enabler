// src/components/courses/OneonOneCourse.js

import React from 'react';

const OneonOneCourse = () => {
  // Function to handle payment checkout
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Example of data to be sent, can be more specific depending on the selected course
          courseName: 'A1 Level Beginner',
          price: 5000, // In cents
        }),
      });

      const session = await response.json();

      if (session.id) {
        // Redirect to Stripe Checkout
        window.location.href = session.url;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="pt-32 pb-12 bg-gradient-to-b from-black to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-20 text-gray-900">One On One Course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: A1 Level Beginner */}
          <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 p-8 transform hover:scale-105">
            <img
              src="/images/a1-level.jpg"
              alt="A1 Level Beginner"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold mb-4">A1 Level Beginner</h3>
            <p className="text-lg text-gray-700 mb-6">
              Learn the basic vocabulary, grammar, and phrases to get started on your Spanish journey.
            </p>
            <button
              onClick={handleCheckout} // Added onClick handler
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 p-8 transform hover:scale-105">
            <img
              src="/images/a2-level.jpg"
              alt="A2 Level Beginner"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold mb-4">A2 Level Beginner</h3>
            <p className="text-lg text-gray-700 mb-6">
              Build upon your beginner knowledge to form more detailed phrases and conversation skills.
            </p>
            <button
              onClick={handleCheckout} // Added onClick handler
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 p-8 transform hover:scale-105">
            <img
              src="/images/b1-level.jpg"
              alt="B1 Level Intermediate"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold mb-4">B1 Level Intermediate</h3>
            <p className="text-lg text-gray-700 mb-6">
              Enhance your conversation skills and start understanding more complex texts and phrases.
            </p>
            <button
              onClick={handleCheckout} // Added onClick handler
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 p-8 transform hover:scale-105">
            <img
              src="/images/b2-level.jpg"
              alt="B2 Level Intermediate"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold mb-4">B2 Level Intermediate</h3>
            <p className="text-lg text-gray-700 mb-6">
              Improve your fluency, understand more difficult texts, and participate in advanced conversations.
            </p>
            <button
              onClick={handleCheckout} // Added onClick handler
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 p-8 transform hover:scale-105">
            <img
              src="/images/c1-level.jpg"
              alt="C1 Level Advanced"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-3xl font-bold mb-4">Custom Advanced</h3>
            <p className="text-lg text-gray-700 mb-6">
              Achieve near-native proficiency, engage in deep conversations, and fully grasp Spanish culture and language.
            </p>
            <button
              onClick={handleCheckout} // Added onClick handler
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneonOneCourse;
