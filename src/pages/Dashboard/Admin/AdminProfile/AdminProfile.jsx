import React from "react";

const AdminProfile = () => {
  return (
    <div>
      <div className="card w-1/2 mt-40 rounded-md shadow-xl text-black mx-auto bg-white">
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
            <div className="badge badge-secondary btn btn-xs rounded-full">
              Fashion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
