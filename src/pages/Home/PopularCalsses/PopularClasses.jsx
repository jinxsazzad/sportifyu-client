import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import backgroundImage from "../../../assets/Images/sports-banner.png";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";
const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState(null);
  useEffect(() => {
    axios.get("/popular-classes/").then((data) => setPopularClasses(data.data));
  }, []);
  const bgURL = 'https://i.ibb.co/gFWf1HB/sports-banner.png'
  return (
    <div>
      {/* <div
        className="relative bg-cover bg-center text-white text-center py-4"
        style={{ backgroundImage: `url(${bgURL})` }}
      >
        <div
          className="absolute inset-0 bg-blur bg-black bg-opacity-60"
          style={{ backdropFilter: "blur(3px)" }}
        ></div>
        <div className="relative">
          <h1 className=" mb-1 text-5xl font-bold text-white">[ Popular Sport's Classes ]</h1>
          <h2 className="text-lg text-white">Most popular classes are here ! Enrol Now!</h2>
        </div>
      </div> */}
      <div className=" py-4 text-center">
        <h1 className=" mb-1 text-5xl  font-bold">
          [ Popular Sport's Classes ]
        </h1>
        <p> Most popular classes are here ! Enrol Now! </p>
      </div>

      <div className="grid grid-cols-3 gap-2 py-1 px-10">
        {popularClasses?.map((cls) => (
          <div key={cls._id} className="card shadow-xl bg-white">
            <figure className="inline-block">
              <img
                className="h-56 w-56 transition-transform transform hover:scale-150"
                src={cls.classPicture}
                alt=""
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">
                {cls.className}
                <div className="badge badge-secondary">Popular</div>
              </h2>
              <h5>Instructor: {cls?.instructorName}</h5>
              <p>{cls.classDescription}</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">Select Now</div>
                <div className="badge badge-outline">Enrol Now</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
