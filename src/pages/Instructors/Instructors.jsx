import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Instructors = () => {
    const instructors = ['alex','alex','alex','alex','alex',]
    const instructorClasses = ['l','l','l','l',]
  return (
    <div className="p-4">
      {instructors.map(instructor => <div className="grid grid-cols-4 bg-primary gap-1 my-6 ">
        <div className=" p-4 border-r-8">
          <div className="card w-auto rounded-md shadow-xl text-black h-full bg-white">
            <figure className="mt-6">
              <div className="avatar border-4 border-orange-600 rounded-full p-2 ">
                <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/FHwb3Hg/Little-cute-minicom-png.png" />
                </div>
              </div>
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title">
                Name Alex
                <span className="badge badge-secondary">5 Years</span>
              </h2>
              <p>Email: alex@gamil.com</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline btn btn-xs rounded-full">
                  Fashion
                </div>
                <div className="badge badge-outline btn-xs btn rounded-full">
                  Products
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 lg:col-span-3 p-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {instructorClasses.map(iClass=><SwiperSlide>
          <div className="card w-60 rounded-md shadow-xl text-black bg-white">
            <figure>
              <div className="avatar">
                <div className="w-40 h-40">
                  <img src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png" />
                </div>
              </div>
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title">
                Name Alex
                <span className="badge badge-secondary">New</span>
              </h2>
              <p>Email: alex@gamil.com</p>
              <div className="card-actions">
                <div className="badge badge-outline btn btn-xs rounded-full">
                  See classes
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>)}
          
        </Swiper>
        </div>
      </div>)}
    </div>
  );
};

export default Instructors;
