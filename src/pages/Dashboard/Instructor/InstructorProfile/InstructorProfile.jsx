import React from "react";
import useAuth from "../../../../hooks/useAuth";

const InstructorProfile = () => {
    const {user}= useAuth()
  return (
    <div>
      <div className="card mt-20  w-1/3 mx-auto rounded-md shadow-xl text-black h-full bg-white">
        <figure className="mt-6">
          <div className="avatar border-4 border-orange-600 rounded-full p-2 ">
            <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/FHwb3Hg/Little-cute-minicom-png.png" />
            </div>
          </div>
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">
            {user?.displayName}
            <span className="badge badge-secondary">5 class</span>
          </h2>
          <p>{user?.email}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline btn btn-xs rounded-full">
              Your Classes
            </div>
            <div className="badge badge-outline btn-xs btn rounded-full">
              Your Earn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
