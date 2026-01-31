import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import hero1 from '../../assets/image1.jpg';
import hero2 from '../../assets/image2.jpg';
import hero3 from '../../assets/image3.jpg';

import './Hero.css';
export default function Hero() {
  return (
    <section className="hero">
      {/* Swiper background */}
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
      >
        {[hero1, hero2, hero3].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Hero Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content ABOVE swiper */}
      <div className="hero-content">
        <h1>Drive the Future with EV Buddy</h1>
        <p>Your Ultimate Electric Vehicle Companion</p>
        <div className="hero-buttons">
          <button className="hero-primary">Get Started</button>
          <button className="hero-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
