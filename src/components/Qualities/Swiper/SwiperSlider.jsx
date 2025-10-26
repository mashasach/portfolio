import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import './swiperSlider.scss';

const SwiperSlider = ({ items }) => {
   return (
      <div className="slider-wrapper">

         <Swiper
            slidesPerView={1}
            spaceBetween={8}

            loop={true}
            breakpoints={{
               320: { slidesPerView: 1 },
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 3 },
            }}
            modules={[Navigation]}
            navigation={{
               nextEl: ".custom-next",
               prevEl: ".custom-prev",
            }}
         >
            {items.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <div className="slider-card">{item.quality}</div>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="custom-prev">
            <svg className="project__arrow" width="20" height="20" fill="currentColor">
               <use href="/sprite.svg#icon-arrow-left" />
            </svg></div>
         <div className="custom-next">
            <svg className="project__arrow" width="20" height="20" fill="currentColor">
               <use href="/sprite.svg#icon-arrow-right" />
            </svg></div>
      </div>
   )
}

export default SwiperSlider