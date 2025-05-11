import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Clients = () => {
  const clientLogos = [
    'img/client1.webp',
    'img/client2.webp',
    'img/client3.webp',
    'img/client4.webp',
    'img/client5.webp',
    'img/client1.webp',
    'img/client2.webp',
    'img/client3.webp',
    'img/client4.webp',
  ];

  return (
    <div className="clients overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={6}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 2 },
                600: { slidesPerView: 4 },
                1000: { slidesPerView: 6 },
              }}
            >
              {clientLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="single-clients">
                    <img src={logo} alt={`client${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
