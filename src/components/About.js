// src/components/About.js

import React from 'react';
import david from '../assets/david.png';
import eleonora from '../assets/Eleonora.png';
import juan from '../assets/Juan.png';
import ricardo from '../assets/Ricardo.png';
import { motion } from 'framer-motion';

const About = () => (
    <section id="about" className="py-20 mt-20">
      <div className="container mx-auto text-center px-4 md:px-12">
        <motion.h2 
          className="text-4xl font-bold mb-6 select-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Who We Are and Why We Built This.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          >
            <img
              src={david} 
              alt="David Mendoza"
              className="w-48 h-48 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out select-none"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">David Mendoza</p>
            <p className="text-sm text-gray-600 text-center">I'm David Mendoza, a teacher and content creator passionate about languages. Originally from Colombia, I moved to Canada in 2006 and have over 20 years of teaching experience. I speak Spanish, English, and Portuguese fluently, with strong skills in Italian and basic French and German. My mission is to help you speak Spanish confidently and enjoy the process.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
          >
            <img
              src={ricardo} 
              alt="Ricardo Lopez"
              className="w-48 h-48 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out select-none"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">Ricardo Lopez</p>
            <p className="text-sm text-gray-600 text-center">With over six years of experience and a background in Modern Languages and Latin American Studies, I teach Spanish, French, and English in online and in-person settings. I’ve worked in places as diverse as the U.S. and the Colombian Amazon, creating adaptable, goal-focused language courses. My passion for exploring cultures has led me to live in the U.S., France, and the Netherlands, and I bring this global perspective to every class, using the best teaching methodologies to meet each student’s unique needs.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 1 }}
          >
            <img
              src={juan} 
              alt="Juan Perez"
              className="w-48 h-48 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out select-none"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">Juan Perez</p>
            <p className="text-sm text-gray-600 text-center">Philosopher by profession. I have over 7 years of experience as an account executive, copywriter, expert in email marketing, digital strategy creation, marketing communication, and digital content creator, specifically memes.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 1.5 }}
          >
            <img
              src={eleonora} 
              alt="Eleonora Garcia"
              className="w-48 h-48 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out select-none"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">Eleonora Garcia</p>
            <p className="text-sm text-gray-600 text-center">I'm Eleonora Alzate Tijerino, a Colombian language teacher born in Costa Rica. I hold a degree in Modern Languages from Universidad del Valle (Cali, Colombia) and a Master's in Teaching French as a Foreign Language from Blaise Pascal University (France). I speak Spanish, English, French, and Portuguese. With extensive experience teaching Spanish to adults, teens, and children both online and in person, I create a comfortable learning environment that fosters confidence and growth. I value diversity, perseverance, and motivation and love traveling and exploring new cultures.</p>
          </motion.div>
        </div>
      </div>
    </section>
);

export default About;
