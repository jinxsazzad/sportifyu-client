import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const PopularInstructors = () => {
  return (
    <div>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
        <SwiperSlide><img
                src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png"
                className="max-w-sm"
              /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularInstructors;
