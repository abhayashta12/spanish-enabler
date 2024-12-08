import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import chanel from '../assets/chanel.png';
import marko from '../assets/marko.png';

const testimonials = [
  {
    quote: 'There’s lot of variety, activities, and opportunities to chat with people. I actually feel like some of those people are my family. It’s been a really good experience.',
    name: 'Michelle Chew – London, England',
    image: chanel,
  },
  {
    quote: 'What I like about this community is that I can speak, hear, and interact with other people learning Spanish and that’s very helpful way to thrive to achieve a common goal.',
    name: 'Marko Satarain – Albuquerque, USA',
    image: marko,
  },
  {
    quote: 'Highly recommend for anyone serious about learning Spanish.',
    name: 'Bayleigh Adams',
    image: marko,
  },
  {
    quote: 'I was able to move from beginner to intermediate stage with the help of the private tutors, and I’m very grateful for that. It’s helpful for me because it’s very interactive and you understand how I learn.',
    name: 'Chanel Sims – Toronto, Canada',
    image: chanel,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
    <div className="absolute inset-0 bg-opacity-5 bg-gray-100 pattern-dots pattern-size-2 pattern-opacity-5"></div>
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-5xl font-serif font-bold mb-4 text-gray-800">What My Students Say</h2>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Discover how Spanish Enabler has transformed the language learning journey for students worldwide.</p>
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
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-5xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out rounded-2xl w-96 h-auto">
            <div className="flex flex-col items-start w-full h-full">
              <div className="text-4xl text-yellow-500 mb-4">"</div>
              <p className="text-lg text-gray-700 mb-6 font-medium italic">{testimonial.quote}</p>
              <div className="mt-auto flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-yellow-500 mr-4"
                />
                <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;