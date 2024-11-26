import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OneonOneCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
 

  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  const handleCheckout = async (courseName, price) => {
    try {
      // Sending a request to the backend server to create a Stripe checkout session
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Sending specific course data depending on which course button is clicked
          courseName: courseName,
          price: price, // Price in cents
        }),
      });

      const session = await response.json();

      // Check if the session response has the URL
      if (session.url) {
        // Redirect to Stripe Checkout
        window.location.href = session.url;
      } else {
        console.error('Checkout session creation failed:', session);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl font-serif mb-4 text-[#1a1a1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Master Spanish One-on-One
          </motion.h1>
          <motion.p
            className="text-lg mb-8 text-[#666666]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Personalized lessons tailored to your learning style and goals. Start your journey to fluency today!
          </motion.p>
          <motion.button
            className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-md hover:bg-black transition-colors"
            onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Courses
          </motion.button>
        </div>
      </header>

      <main>
        <section id="courses" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-serif mb-12 text-center text-[#1a1a1a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Choose Your Level
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {['A1 Level Beginner', 'A2 Level Beginner', 'B1 Level Intermediate', 'B2 Level Intermediate', 'Custom Advanced'].map((course, index) => (
                <motion.div
                  key={course}
                  className="bg-white p-8 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">{course}</h3>
                  <p className="text-[#666666] mb-6">Learn the basics of {course}.</p>
                  <p className="text-2xl font-bold mb-6 text-[#1a1a1a]">${(5000 + index * 1000) / 100}.00</p>
                  <button
                    className="w-full bg-[#1a1a1a] text-white py-2.5 rounded-md hover:bg-black transition-colors"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Learn More
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-8 rounded-lg max-w-md w-full relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute right-4 top-4 text-[#1a1a1a] hover:text-gray-700 text-4xl"
              >
                ×
              </button>
              <h3 className="text-2xl font-semibold mb-2">{selectedCourse}</h3>
              <p className="text-[#666666] mb-6">Learn the basics of {selectedCourse}.</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Course Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-[#1a1a1a]">Feature 1</li>
                  <li className="text-[#1a1a1a]">Feature 2</li>
                </ul>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">${(5000) / 100}.00</p>
                <motion.button
                  className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-md hover:bg-black transition-colors"
                  onClick={() => handleCheckout(selectedCourse, 5000)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OneonOneCourse;
