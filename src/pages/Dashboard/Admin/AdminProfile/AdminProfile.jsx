import React from "react";
import { HomePageTittles } from "../../../../components/Tittles/Tittles";
import useAuth from "../../../../hooks/useAuth";
import { CardBtn } from "../../../../components/Buttons/Buttons";

const AdminProfile = () => {
  const {user}=useAuth()
  return (
    <div>
      <HomePageTittles tittle="Your Profile" subTittle="Profile Update system will be coming soon !" />
      <div className="card w-1/2 rounded-md shadow-xl text-black mx-auto bg-white">
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
            <span className="badge badge-secondary">10 Class</span>
          </h2>
          <p>{user?.email}</p>
          <div className="card-actions justify-end">
            <CardBtn text="Update Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
