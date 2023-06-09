import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
const bgURL = "https://i.ibb.co/gFWf1HB/sports-banner.png";
const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState(null);
  useEffect(() => {
    axios
      .get("/popular-classes/")
      .then((data) => setPopularInstructors(data.data));
  }, []);
  return (
    <div>
      {/* <div>
        <div
          className="relative bg-cover bg-center text-white text-center py-4"
          style={{ backgroundImage: `url(${bgURL})` }}
        >
          <div
            className="absolute inset-0 bg-blur bg-black bg-opacity-60"
            style={{ backdropFilter: "blur(3px)" }}
          ></div>
          <div className="relative">
            <h1 className=" mb-1 text-5xl font-bold text-white">
              [ Checkout Our Coaches ]
            </h1>
            <h2 className="text-lg text-white">
              Most popular Instructor are here ! Explore Now!
            </h2>
          </div>
        </div>
      </div> */}
      <div className=" py-4 text-center">
        <h1 className=" mb-1 text-5xl  font-bold">
          [ Our Experienced Coaches ]
        </h1>
        <p> Most popular and experienced instructor are here ! Get Classes! </p>
      </div>

      <div className="px-10">
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
          {popularInstructors?.map((ins) => (
            <SwiperSlide key={ins._id}>
              <div className=" p-4">
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
                      {"name"}
                      <span className="badge badge-secondary">Popular</span>
                    </h2>
                    <p>{"text"}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline btn btn-xs rounded-full">
                        About
                      </div>
                      <div className="badge badge-outline btn-xs btn rounded-full">
                        <Link to={`/instructor-all-class/${0}`}>
                          See Classes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularInstructors;
