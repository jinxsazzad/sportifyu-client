import {
  FaBook,
  FaHouseUser,
  FaRegCheckSquare,
  FaRegSun,
} from "react-icons/fa";

const Features = () => {
  return (
    <>
      <div className="hidden md:block lg:flex justify-center items-center text-justify">
        <div className="bg-[#da922c] p-6 flex  lg:flex-col justify-center items-center gap-3">
          <FaBook className="text-5xl"></FaBook>
          <h4 className="text-2xl font-semibold">Unique Classes</h4>
          <p className="hidden lg:block">
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
        <div className="bg-[#3b9db0] p-6 flex  lg:flex-col justify-center items-center gap-3">
          <FaRegSun className="text-5xl"></FaRegSun>
          <h4 className="text-2xl font-semibold">Full Day Session</h4>
          <p className="hidden lg:block">
            At SportSpark, we offer full-day preschool sessions built on a
            play-based approach for kids & adult.
          </p>
        </div>
        <div className="bg-[#F98F6F] p-6 flex  lg:flex-col justify-center items-center gap-3">
          <FaRegCheckSquare className="text-5xl"></FaRegCheckSquare>
          <h4 className="text-2xl font-semibold">
            Qualified Teachers
          </h4>
          <p className="hidden lg:block">
            Our team consists of experienced and creative teachers who are
            dedicated to your kids’ successful education.
          </p>
        </div>
        <div className="bg-[#9D87C3] p-6 flex  lg:flex-col justify-center items-center gap-3">
          <FaHouseUser className="text-5xl"></FaHouseUser>
          <h4 className=" text-2xl font-semibold">
            Quality Environment
          </h4>
          <p className="hidden lg:block">
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
