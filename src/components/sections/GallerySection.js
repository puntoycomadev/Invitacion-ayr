import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import ScrollDownArrow from '../ScrollDownArrow';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function GallerySection() {
  const swiperRef = useRef(null);

  return (
    <section className="panel base p-0">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
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

      {/* Botones de navegación personalizados */}
      <button
        className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#6B725C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#6B725C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="swiper-pagination-custom absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2 justify-center"></div>
      <ScrollDownArrow />
    </section>
  );
}
