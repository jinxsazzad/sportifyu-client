import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { HomePageTittles } from "../../../../components/Tittles/Tittles";

const StudentProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <HomePageTittles tittle="Your Profile" subTittle="Customize Your Profile !"></HomePageTittles>
      <div className="grid grid-cols-2">
      <div className="card mx-auto rounded-md shadow-xl text-black h-full bg-white">
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
            <span className="badge badge-secondary">2 classes</span>
          </h2>
          <p>{user?.email}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
    </div>
  );
};

export default StudentProfile;
