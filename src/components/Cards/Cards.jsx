import { Link } from "react-router-dom";
import { CardBtn } from "../Buttons/Buttons";

export const PopularClassCard = ({ popularCls }) => {
  return (
    <>
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
    </>
  );
};

export const InstructorCard = ({ ins, link }) => {
  return (
    <>
      <div className="card w-auto rounded-md shadow-xl text-black h-full bg-white hover:bg-gray-100 hover:shadow-2xl hover:border-orange-500 border-2 border-gray-300">
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
            {ins.name}
            <span className="badge badge-secondary">Popular</span>
          </h2>
          <p>{ins.email}</p>
          <div className="card-actions justify-center items-center">
            <CardBtn text="See Classes" link={link}></CardBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export const ClassCard = ({ cls, user, handleSelectClass }) => {
  return (
    <>
      <div
        className={`card pt-4 rounded-md shadow-xl hover:shadow-2xl hover:border-orange-500 border-2 border-gray-300 ${
          cls.availableSeats === 0 ? "bg-red-300" : "bg-white"
        }`}
      >
        <figure>
          <div className="avatar">
            <div className="w-48 h-48">
              <img src={cls.classPicture} />
            </div>
          </div>
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">{cls.className}</h2>
          <ul className="list-disc pl-4">
            <li className="py-1">
              <span className="text-gray-800 font-bold">Instructor:</span>{" "}
              {cls.instructorName}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Available seats:</span>{" "}
              {cls.availableSeats}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Price:</span>{" "}
              {cls.classPrice}
            </li>
          </ul>

          <div className="card-actions white">
            <button
              onClick={
                handleSelectClass ? () => handleSelectClass(cls._id) : ""
              }
              className={`btn btn-sm btn-outline btn-full bg-orange-500 hover:bg-black white ${
                user?.role == "student" || cls.availableSeats === 0
                  ? "btn-disabled"
                  : ""
              }`}
            >
              {handleSelectClass ? (
                "Select Class"
              ) : (
                <Link id="white" to={"/classes"}>
                  Select Class
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export const MyClassCard = ({ cls, user, handleSelectClass }) => {
  return (
    <>
      <div
        className={`card pt-4 rounded-md shadow-xl hover:shadow-2xl hover:border-orange-500 border-2 border-gray-300 ${
          cls.availableSeats === 0 ? "bg-red-300" : "bg-white"
        }`}
      >
        <figure>
          <div className="avatar">
            <div className="w-48 h-48">
              <img src={cls.classPicture} />
            </div>
          </div>
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">{cls.className}</h2>
          <ul className="list-disc pl-4">
            <li className="py-1">
              <span className="text-gray-800 font-bold">Instructor:</span>{" "}
              {cls.instructorName}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Available seats:</span>{" "}
              {cls.availableSeats}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Price:</span>{" "}
              {cls.classPrice}
            </li>
          </ul>

          <div className="card-actions justify-center white ">
            <div
              onClick={
                handleSelectClass ? () => handleSelectClass(cls._id) : ""
              }
              className={`btn btn-block btn-sm btn-outline bg-orange-500 hover:bg-black white  ${
                user?.role === "student" || cls.availableSeats === 0 ? "" : ""
              }`}
            >
              {handleSelectClass ? (
                "Pay"
              ) : (
                <Link id="white" to={"/classes"}>
                  Pay
                </Link>
              )}
            </div>
            <div
              onClick={
                handleSelectClass ? () => handleSelectClass(cls._id) : ""
              }
              className={`btn btn-block btn-sm btn-outline bg-orange-500 hover:bg-black white  ${
                user?.role === "student" || cls.availableSeats === 0 ? "" : ""
              }`}
            >
              {handleSelectClass ? (
                "Delete"
              ) : (
                <Link id="white" to={"/classes"}>
                  Delete
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
