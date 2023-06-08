import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";

const Instructors = () => {
  const role = "instructor";
  const instructorClasses = ["l", "l", "l", "l"];
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get(`/users/role/${role}`).then((data) => setInstructors(data.data));
  }, [role]);

  return (
    <div className="p-4 bg-primary">
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="grid grid-cols-4 gap-1 my-6 "
        >
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
                  {instructor.name}
                  <span className="badge badge-secondary">Cricket</span>
                </h2>
                <p>{instructor.email}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline btn btn-xs rounded-full">
                    About
                  </div>
                  <div className="badge badge-outline btn-xs btn rounded-full">
                    <Link to={`/instructor-all-class/${instructor.email}`}>See Classes</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
