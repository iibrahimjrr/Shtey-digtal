import React from 'react';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img1 from "../assets/background1.webp"
import img2 from "../assets/Swiper2.webp"
import img3 from "../assets/slider3.webp"
const Slider = () => {
  const slides = [
    {
      background: img1,
      title: "We Provide <span>Medical</span> Services That You Can <span>Trust!</span>",
      text: "Our mission at Sehty is to provide a healthcare community where everyone can thrive.",
      btn1: { to: "/ChatWithDoctor", text: "Ask Doctor" },
      btn2: { to: "/About", text: "Learn More" },
    },
    {
      background: img2,
      title: "Empowering <span>Health</span> Through <span>Awareness</span>",
      text: "Explore trusted medical content and connect with your health journey.",
      btn1: { to: "/Awareness", text: "Get Started" },
      btn2: { to: "/Contact", text: "Contact Us" },
    },
    {
      background: img3,
      title: "We Provide <span>Medical</span> Services That You Can <span>Trust!</span>",
      text: "This mission contains three essential tenets that Sehty embodies every day.",
      btn1: { to: "/ChatWithDoctor", text: "Talk to Doctor" },
      btn2: { to: "/About", text: "Learn More" },
    }
  ];

  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="single-slider relative w-full h-[75vh] overflow-hidden">
              {/* الخلفية */}
              <img
                src={slide.background}
                alt="Slide background"
                loading="eager"
                fetchPriority="high"
                width={1920}
                height={1080}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* المحتوى */}
              <div className="container relative z-10 h-full flex items-center">
                <div className="row w-full">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
                      <p>{slide.text}</p>
                      <div className="button">
                        <NavLink to={slide.btn1.to} className="btn">{slide.btn1.text}</NavLink>
                        <NavLink to={slide.btn2.to} className="btn primary">{slide.btn2.text}</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
