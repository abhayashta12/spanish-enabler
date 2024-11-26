import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe publishable key (replace YOUR_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const GroupCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleEnrollClick = async (course) => {
    const stripe = await stripePromise;

    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseName: course.title,
          price: course.price,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();

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

  const courses = [
    {
      title: 'A1 Level Beginner',
      description: 'Learn the basic vocabulary, grammar, and phrases to get started on your Spanish journey.',
      price: 5000,
      features: ['Basic vocabulary', 'Simple grammar structures', 'Everyday phrases', 'Cultural introduction'],
    },
    {
      title: 'A2 Level Beginner',
      description: 'Build upon your beginner knowledge to form more detailed phrases and conversation skills.',
      price: 6000,
      features: ['Expanded vocabulary', 'More complex grammar', 'Basic conversation skills', 'Reading simple texts'],
    },
    {
      title: 'B1 Level Intermediate',
      description: 'Enhance your conversation skills and start understanding more complex texts and phrases.',
      price: 7000,
      features: ['Advanced vocabulary', 'Complex grammar structures', 'Fluent conversations', 'Understanding native speakers'],
    },
    {
      title: 'B2 Level Intermediate',
      description: 'Improve your fluency, understand more difficult texts, and participate in advanced conversations.',
      price: 8000,
      features: ['Professional vocabulary', 'Nuanced grammar usage', 'Debate and discussion skills', 'Cultural deep dives'],
    },
    {
      title: 'Custom Advanced',
      description: 'Achieve near-native proficiency, engage in deep conversations, and fully grasp Spanish culture and language.',
      price: 10000,
      features: ['Specialized vocabulary', 'Native-like fluency', 'Advanced writing skills', 'Cultural mastery'],
    },
  ];

  const faqs = [
    { question: 'How long does each course last?', answer: 'Each course typically lasts for 8 weeks, with two 1-hour group sessions per week.' },
    { question: 'How many students are in each group?', answer: 'Our group courses usually have 4-8 students to ensure everyone gets enough attention and practice time.' },
    { question: 'Can I switch levels during the course?', answer: 'Yes, if you find the course too easy or difficult, we can assess your level and move you to a more suitable group.' },
    { question: 'Are the lessons conducted online or in-person?', answer: 'We offer both online and in-person group options, depending on your preference and location.' },
    { question: 'What materials are provided with the course?', answer: 'All necessary learning materials, including textbooks and online resources, are included in the course fee.' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="py-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-4 text-[#1a1a1a]">
            Master Spanish in a Group
          </h1>
          <p className="text-lg mb-8 text-[#666666]">
            Join our group sessions and learn Spanish with peers. Start your journey to fluency today!
          </p>
          <button
            className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-md hover:bg-black transition-colors"
            onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses
          </button>
        </div>
      </header>

      <main>
        <section id="courses" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center text-[#1a1a1a]">
              Choose Your Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="bg-white p-8 rounded-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">{course.title}</h3>
                  <p className="text-[#666666] mb-6">{course.description}</p>
                  <p className="text-2xl font-bold mb-6 text-[#1a1a1a]">${(course.price / 100).toFixed(2)}</p>
                  <button
                    className="w-full bg-[#1a1a1a] text-white py-2.5 rounded-md hover:bg-black transition-colors"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold text-lg text-[#1a1a1a]"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span>{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && (
                  <p className="mt-2 text-[#666666]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute right-4 top-4 text-[#1a1a1a] hover:text-gray-700 text-5xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-2">{selectedCourse.title}</h3>
            <p className="text-[#666666] mb-6">{selectedCourse.description}</p>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Course Features:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {selectedCourse.features.map((feature, index) => (
                  <li key={index} className="text-[#1a1a1a]">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">${(selectedCourse.price / 100).toFixed(2)}</p>
              <button
                className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-md hover:bg-black transition-colors"
                onClick={() => handleEnrollClick(selectedCourse)}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupCourse;
