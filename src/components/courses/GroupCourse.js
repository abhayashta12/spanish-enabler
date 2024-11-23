// src/components/courses/GroupCourse.js

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';

// Load the Stripe publishable key (replace YOUR_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const GroupCourse = () => {
  const handleEnrollClick = async () => {
    const stripe = await stripePromise;

    try {
      // Call your backend to create a Checkout Session.
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();

      // Redirect to Stripe Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error in checkout process:', error);
    }
  };

  return (
    <section className="pt-32 pb-12 bg-gradient-to-r from-blue-200 via-purple-100 to-pink-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-20 text-gray-900">Group Session</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: 'A1 Level Beginner',
              description: 'Learn the basic vocabulary, grammar, and phrases to get started on your Spanish journey.',
              imgSrc: '/images/a1-level.jpg',
              alt: 'A1 Level Beginner',
            },
            {
              title: 'A2 Level Beginner',
              description: 'Build upon your beginner knowledge to form more detailed phrases and conversation skills.',
              imgSrc: '/images/a2-level.jpg',
              alt: 'A2 Level Beginner',
            },
            {
              title: 'B1 Level Intermediate',
              description: 'Enhance your conversation skills and start understanding more complex texts and phrases.',
              imgSrc: '/images/b1-level.jpg',
              alt: 'B1 Level Intermediate',
            },
            {
              title: 'B2 Level Intermediate',
              description: 'Improve your fluency, understand more difficult texts, and participate in advanced conversations.',
              imgSrc: '/images/b2-level.jpg',
              alt: 'B2 Level Intermediate',
            },
            {
              title: 'Custom Advanced',
              description: 'Achieve near-native proficiency, engage in deep conversations, and fully grasp Spanish culture and language.',
              imgSrc: '/images/c1-level.jpg',
              alt: 'C1 Level Advanced',
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={course.imgSrc}
                alt={course.alt}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-4">{course.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{course.description}</p>
              <button
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Enroll Now
              </button>
            </motion.div>
          ))}``
        </div>
      </div>
    </section>
  );
};

export default GroupCourse;
