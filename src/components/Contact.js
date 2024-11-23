// src/components/Contact.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFocus = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field) => {
    if (formData[field] === '') {
      setFocused((prevState) => ({ ...prevState, [field]: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
        setFocused({ name: false, email: false, message: false });
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error);
        setErrorMessage('Oops! Something went wrong. Please try again later.');
      });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        {successMessage && (
          <motion.div
            className="bg-green-900 text-green-200 p-4 mb-6 rounded shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {successMessage}
          </motion.div>
        )}
        {errorMessage && (
          <motion.div
            className="bg-red-900 text-red-200 p-4 mb-6 rounded shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {errorMessage}
          </motion.div>
        )}

        <motion.form
          className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-lg shadow-xl"
          onSubmit={handleSubmit}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Name Field */}
          <div className="relative mb-8">
            <input
              className="w-full p-4 border-b-4 border-gray-600 focus:border-red-600 outline-none transition duration-300 rounded-md bg-gray-900 text-white placeholder-gray-400"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              required
            />
            <label
              className={`absolute left-0 top-0 px-4 py-4 text-gray-400 pointer-events-none transition-all duration-300 ${
                focused.name || formData.name ? 'text-xs transform -translate-y-3 text-red-400' : 'text-base'
              }`}
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative mb-8">
            <input
              className="w-full p-4 border-b-4 border-gray-600 focus:border-red-600 outline-none transition duration-300 rounded-md bg-gray-900 text-white placeholder-gray-400"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
            />
            <label
              className={`absolute left-0 top-0 px-4 py-4 text-gray-400 pointer-events-none transition-all duration-300 ${
                focused.email || formData.email ? 'text-xs transform -translate-y-3 text-red-400' : 'text-base'
              }`}
            >
              Your Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative mb-8">
            <textarea
              className="w-full p-4 border-b-4 border-gray-600 focus:border-red-600 outline-none transition duration-300 resize-none rounded-md bg-gray-900 text-white placeholder-gray-400"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              required
            ></textarea>
            <label
              className={`absolute left-0 top-0 px-4 py-4 text-gray-400 pointer-events-none transition-all duration-300 ${
                focused.message || formData.message ? 'text-xs transform -translate-y-3 text-red-400' : 'text-base'
              }`}
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
