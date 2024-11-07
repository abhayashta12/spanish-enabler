// src/components/Contact.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
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
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 mb-6 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-4 mb-6 rounded">
            {errorMessage}
          </div>
        )}
        <form
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div className="relative mb-6">
            <input
              className="w-full p-4 border-b-2 border-gray-300 focus:border-red-600 outline-none transition duration-300"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              required
            />
            <label
              className={`absolute left-0 top-0 px-4 py-4 text-gray-600 pointer-events-none transition-all duration-300 ${
                focused.name || formData.name
                  ? 'text-xs transform -translate-y-3 text-red-600'
                  : 'text-base'
              }`}
            >
              Your Name
            </label>
          </div>
          {/* Email Field */}
          <div className="relative mb-6">
            <input
              className="w-full p-4 border-b-2 border-gray-300 focus:border-red-600 outline-none transition duration-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
            />
            <label
              className={`absolute left-0 top-0 px-4 py-4 text-gray-600 pointer-events-none transition-all duration-300 ${
                focused.email || formData.email
                  ? 'text-xs transform -translate-y-3 text-red-600'
                  : 'text-base'
              }`}
            >
              Your Email
            </label>
          </div>
          {/* Message Field */}
          <div className="relative mb-6">
            <textarea
              className="w-full p-4 border-b-2 border-gray-300 focus:border-red-600 outline-none transition duration-300 resize-none"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              required
            ></textarea>
            <label
              className={`absolute left-0 top-0 px-4 py-4 text-gray-600 pointer-events-none transition-all duration-300 ${
                focused.message || formData.message
                  ? 'text-xs transform -translate-y-3 text-red-600'
                  : 'text-base'
              }`}
            >
              Your Message
            </label>
          </div>
          {/* Submit Button */}
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
