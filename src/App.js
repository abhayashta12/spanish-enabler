import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
