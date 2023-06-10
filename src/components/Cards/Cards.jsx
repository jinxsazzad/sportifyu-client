import { Link } from "react-router-dom";
import { CardBtn } from "../Buttons/Buttons";

export const PopularClassCard = ({ popularCls }) => {
  return (
    <div
      key={popularCls._id}
      className="card shadow-xl bg-primary rounded-md hover:shadow-none"
    >
      <figure className="inline-block border-b-2 border-white">
        <img
          className="h-56 w-56 transition-transform transform hover:scale-150 p-2 "
          src={popularCls.classPicture}
          alt=""
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">
          {popularCls.className}
          <div className="badge badge-ghost ms-2 ">Popular</div>
        </h2>
        <h5 className=" text-lg font-semibold">
          Instructor: {popularCls?.instructorName}
        </h5>
        <p className=" text-sm">{popularCls.classDescription}</p>
        <div className="card-actions justify-center">
          <CardBtn text="Select Now" />
          <CardBtn text="Select Now" />
        </div>
      </div>
    </div>
  );
};
//todo:btn link will be dynamic
export const InstructorCard = ({ ins }) => {
  return (
    <div className=" p-4">
      <div className="card w-auto rounded-md shadow-xl text-black h-full bg-white">
        <figure className="mt-6">
          <div className="avatar border-4 border-orange-600 rounded-full p-2 ">
            {/* instructor img */}
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
          <div className="card-actions justify-center items-center">
            <CardBtn text="About"></CardBtn>
            <CardBtn
              text="See Classes"
              link={`/instructor-all-class/${0}`}
            ></CardBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
