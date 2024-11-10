import React from 'react';
import david from '../assets/david.png';
import { motion } from 'framer-motion';

const About = () => (
    <section id="about" className="py-20 mt-20">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 select-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Who We Are and Why We Built This.
        </motion.h2>
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        >
          <img
            src={david} 
            alt="David Mendoza"
            className="w-1/2 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out select-none"
          />
        </motion.div>
        <motion.p 
          className="text-lg leading-relaxed select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        >
          Hola! I'm David Mendoza, a teacher with a big love for languages. I'm from Colombia but moved to Canada in 2006. I've been teaching for over 20 years, starting in Colombia where I taught English. Now, I teach at George Brown College in Toronto. My classes include Professional Communications, Career Transitions, and Digital Skills.
        </motion.p>
      </div>
    </section>
);

export default About;
