import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function GallerySection() {
  return (
    <section className="panel base p-0">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={800}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom'
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        touchRatio={1}
        threshold={10}
        resistanceRatio={0.85}
        preventInteractionOnTransition={true}
        className="w-full h-screen"
      >
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004152.webp" alt="Foto 1" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004161.webp" alt="Foto 2" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004174.webp" alt="Foto 3" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004188.webp" alt="Foto 4" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004196.webp" alt="Foto 5" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004205.webp" alt="Foto 6" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004218.webp" alt="Foto 7" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004257.webp" alt="Foto 8" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <img src="/_0004352.webp" alt="Foto 9" loading="lazy" className="w-full h-screen object-cover object-top" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination-custom absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2 justify-center"></div>
    </section>
  );
}
