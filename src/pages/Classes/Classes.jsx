import React from "react";
import { useLoaderData } from "react-router-dom";

const Classes = () => {
  const allClass = useLoaderData()
  console.log(allClass)
    const bg = false
  return (
    <div>
      <div className=" mx-auto h-full">
      <div className="grid grid-cols-3">
        {allClass?.map(cls=><div key={cls._id} className={`border-4 indicator my-6 ${cls.availableSeats === 0?'border-black':'border-red-400'}`}>
          <span className="indicator-item indicator-center badge badge-secondary w-20 h-6">{cls.price}$</span>
          <div className="card pt-4 w-full rounded-md shadow-xl  bg-white">
            <figure>
              <div className="avatar">
                <div className="w-40 h-40">
                  <img src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png" />
                </div>
              </div>
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title">
                {cls.className}
                <span className="badge badge-secondary">New</span>
              </h2>
              <p>{cls.instructorName} <br />
              Available seats: {cls.availableSeats}
              </p>
              <div className="card-actions">
                <div className="badge badge-secondary btn btn-xs rounded-full">
                  See classes
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
      </div>
    </div>
  );
};

export default Classes;
