// src/components/Testimonials.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'An amazing teacher who made learning fun!',
    name: 'Michael Paredes',
    image: '/images/student-a.jpg', // Replace with actual image paths
  },
  {
    quote: 'I achieved fluency faster than I thought possible.',
    name: 'Sally Swift',
    image: '/images/student-b.jpg',
  },
  {
    quote: 'Highly recommend for anyone serious about learning Spanish.',
    name: 'Bayleigh Adams',
    image: '/images/student-c.jpg',
  },
  // Add more testimonials as needed
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-black">What My Students Say</h2>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0, // Set rotation to 0 for rectangular shape
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false, // Disable shadows for a cleaner look
        }}
        pagination={{ clickable: true }}
        className="max-w-4xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="bg-white border border-gray-700 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-md w-96 h-72">
            <div className="flex flex-col items-start w-full h-full">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-md border-2 border-gray-400 mr-4"
                />
                <h4 className="text-xl font-semibold text-black">{testimonial.name}</h4>
              </div>
              <p className="text-md text-black mb-4">{testimonial.quote}</p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
