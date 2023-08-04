import { Link } from "react-router-dom";
import { CardBtn } from "../Buttons/Buttons";
import { FaUsers } from "react-icons/fa";

export const PopularClassCard = ({ popularCls }) => {
  return (
    <>
      <div className="card shadow-xl rounded-none">
        <figure className="avatar h-52 w-full">
          <img
            src={popularCls.classPicture}
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {popularCls.className}
            <div className="badge badge-secondary p-3">${popularCls.classPrice}/month</div>
          </h2>
          <p className="h-20 px-1 overflow-hidden">{popularCls.classDescription}</p>
          <div className="card-actions justify-between">
            <div className="flex justify-center items-center"> <FaUsers className="me-2"/> {popularCls.enrolledStudent} enrolled </div>
            <div className="">{popularCls.availableSeats} seats</div>
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
              <img src="https://i.ibb.co/ySr9sgP/pngegg-1.png" />
            </div>
          </div>
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">{ins.name}</h2>
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
        className={`card rounded-md shadow-xl hover:shadow-2xl hover:border-orange-500 border-2 border-gray-300 ${
          cls.availableSeats === 0 ? "bg-red-300" : "bg-white"
        }`}
      >
        <div className="avatar">
          <div className="">
            <img src={cls.classPicture} />
          </div>
        </div>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">{cls.className}</h2>
          <ul className="list-disc pl-4">
            <li className="py-1">
              <span className="text-gray-800 font-bold">Instructor:</span>
              {cls.instructorName}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Available seats:</span>
              {cls.availableSeats}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Price:</span>
              {cls.classPrice}
            </li>
          </ul>

          <div className="card-actions white ">
            {handleSelectClass ? (
              <button
                onClick={() => handleSelectClass(cls._id)}
                className={`btn btn-sm btn-outline btn-full bg-orange-500 hover:bg-black white btn-block ${
                  cls.availableSeats === 0 || user?.role === "student"
                    ? "btn-disabled"
                    : ""
                }`}
              >
                Select Class
              </button>
            ) : (
              <>
                <button
                  className={`btn btn-sm btn-outline btn-full bg-orange-500 hover:bg-black white btn-block ${
                    user?.role !== "student" ? "btn-disabled" : ""
                  }`}
                >
                  <Link id="white" to={"/classes"}>
                    Select Class
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const MyClassCard = ({
  cls,
  user,
  handleDeleteClass,
  handlePayment,
}) => {
  return (
    <>
      <div
        className={`card rounded-md shadow-xl hover:shadow-2xl hover:border-orange-500 border-2 border-gray-300 ${
          cls.availableSeats === 0 ? "bg-red-300" : "bg-white"
        }`}
      >
        <figure>
          <div className="avatar">
            <div className="">
              <img src={cls.classPicture} />
            </div>
          </div>
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title">{cls.className}</h2>
          <ul className="list-disc pl-4">
            <li className="py-1">
              <span className="text-gray-800 font-bold">Instructor:</span>
              {cls.instructorName}
            </li>
            <li className="py-1">
              <span className="text-gray-800 font-bold">Price:</span>
              {cls.classPrice}
            </li>
          </ul>

          <div className="card-actions justify-center white w-full ">
            <div
              onClick={
                handlePayment ? () => handlePayment(cls._id, cls.classID) : ""
              }
              className={`btn btn-block btn-sm btn-outline bg-orange-500 hover:bg-black white  ${
                cls.availableSeats === 0 ? "btn-disabled" : ""
              }`}
            >
              {handlePayment ? "Pay" : <Link id="white">Pay</Link>}
            </div>
            <div
              onClick={() => handleDeleteClass(cls._id)}
              className={`btn btn-block btn-sm btn-outline bg-orange-500 hover:bg-black white`}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
