import React from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
  const {user}= useAuth()
  const allClass = useLoaderData();
  return (
    <div>
      <div className=" mx-auto h-full">
        <div className="grid grid-cols-4 gap-2 p-2">
          {allClass?.map((cls) => (
            <div
              key={cls._id}
              className={`border-4 my-6 ${
                cls.availableSeats === 0 ? "border-red-600" : "border-gray-400"
              }`}
            >
              <div className="card pt-4 rounded-md shadow-xl  bg-white">
                <figure>
                  <div className="avatar">
                    <div className="w-40 h-40">
                      <img src={cls.classPicture} />
                    </div>
                  </div>
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title">
                    {cls.className}
                    <span className="badge badge-secondary">New</span>
                  </h2>
                  <p>
                    Instructor:{cls.instructorName} <br />
                    Available seats: {cls.availableSeats} <br />
                    Price:{cls.classPrice}
                  </p>
                  <div className="card-actions">
                    <div className={`badge badge-secondary btn btn-xs rounded-full ${user.role === "student"? 'bg-white':' disabled'}`}>
                      See classes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
