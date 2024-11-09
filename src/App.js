// src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BeginnerCourse from './components/courses/BeginnerCourse';
import IntermediateCourse from './components/courses/IntermediateCourse';
import AdvancedCourse from './components/courses/AdvancedCourse';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Courses />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Course Detail Routes */}
        <Route path="/courses/beginner" element={<BeginnerCourse />} />
        <Route path="/courses/intermediate" element={<IntermediateCourse />} />
        <Route path="/courses/advanced" element={<AdvancedCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
