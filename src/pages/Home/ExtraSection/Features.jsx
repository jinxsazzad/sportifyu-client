import React from "react";
import { FaBook, FaHouseUser, FaPeopleArrows, FaRegCheckSquare, FaRegSun } from "react-icons/fa";

const Features = () => {
  return (
    <>
      {/* <div className=" py-4 text-center">
        <h1 className=" mb-1 text-5xl  font-bold">
          [ Why Should You Choose Us ]
        </h1>
        <p> This is our key features, which make us unique! </p>
      </div> */}
      <div className="flex justify-between items-center gap-1">
        <div className="bg-[#60CD96] p-6">
          <FaBook className="text-5xl"></FaBook>
          <h4 className="text-2xl mt-2 mb-4">Unique Classes</h4>
          <p>
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
        <div className="bg-[#69D2E7] p-6">
          <FaRegSun className="text-5xl"></FaRegSun>
          <h4 className="text-2xl mt-2 mb-4">Full Day Session</h4>
          <p>
          At SportSpark, we offer full-day preschool sessions built on a play-based approach for kids & adult.
          </p>
        </div>
        <div className="bg-[#F98F6F] p-6">
          <FaRegCheckSquare className="text-5xl"></FaRegCheckSquare>
          <h4 className="text-2xl mt-2 mb-4">Qualified Teachers</h4>
          <p>
          Our team consists of experienced and creative teachers who are dedicated to your kids’ successful education.
          </p>
        </div>
        <div className="bg-[#9D87C3] p-6">
          <FaHouseUser className="text-5xl"></FaHouseUser>
          <h4 className=" text-2xl mt-2 mb-4">Quality Environment</h4>
          <p>
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
